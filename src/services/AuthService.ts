import { auth, firestore } from './firebase';
import { User } from '../types';

export class AuthService {
  static async signUp(email: string, password: string, displayName: string): Promise<User> {
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      
      // Update the user profile
      await userCredential.user.updateProfile({
        displayName,
      });

      // Create user document in Firestore
      const userData: Partial<User> = {
        id: userCredential.user.uid,
        email,
        displayName,
        skills: [],
        portfolioLinks: [],
        creativeFields: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      await firestore()
        .collection('users')
        .doc(userCredential.user.uid)
        .set(userData);

      return userData as User;
    } catch (error) {
      console.error('Sign up error:', error);
      throw error;
    }
  }

  static async signIn(email: string, password: string): Promise<User> {
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      
      // Get user data from Firestore
      const userDoc = await firestore()
        .collection('users')
        .doc(userCredential.user.uid)
        .get();

      if (userDoc.exists) {
        return userDoc.data() as User;
      } else {
        throw new Error('User data not found');
      }
    } catch (error) {
      console.error('Sign in error:', error);
      throw error;
    }
  }

  static async signOut(): Promise<void> {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Sign out error:', error);
      throw error;
    }
  }

  static async getCurrentUser(): Promise<User | null> {
    try {
      const currentUser = auth.currentUser;
      if (!currentUser) return null;

      const userDoc = await firestore()
        .collection('users')
        .doc(currentUser.uid)
        .get();

      if (userDoc.exists) {
        return userDoc.data() as User;
      }
      return null;
    } catch (error) {
      console.error('Get current user error:', error);
      return null;
    }
  }

  static async updateUserProfile(userId: string, updates: Partial<User>): Promise<void> {
    try {
      await firestore()
        .collection('users')
        .doc(userId)
        .update({
          ...updates,
          updatedAt: new Date(),
        });
    } catch (error) {
      console.error('Update profile error:', error);
      throw error;
    }
  }

  static onAuthStateChanged(callback: (user: User | null) => void): () => void {
    return auth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        const user = await this.getCurrentUser();
        callback(user);
      } else {
        callback(null);
      }
    });
  }
}