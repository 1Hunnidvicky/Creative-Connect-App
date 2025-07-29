// Note: This is a mock Firebase configuration for development
// In production, you would need to:
// 1. Set up a Firebase project
// 2. Add google-services.json for Android
// 3. Add GoogleService-Info.plist for iOS
// 4. Install Firebase packages properly

// Mock Firebase services for development
export const auth = {
  createUserWithEmailAndPassword: async (email: string, _password: string) => {
    console.log('Mock: Creating user with email:', email);
    return {
      user: {
        uid: 'mock-user-id',
        email,
        updateProfile: async (profile: any) => {
          console.log('Mock: Updating profile:', profile);
        },
      },
    };
  },
  signInWithEmailAndPassword: async (email: string, _password: string) => {
    console.log('Mock: Signing in with email:', email);
    return {
      user: {
        uid: 'mock-user-id',
        email,
      },
    };
  },
  signOut: async () => {
    console.log('Mock: Signing out');
  },
  currentUser: null,
  onAuthStateChanged: (_callback: (user: any) => void) => {
    console.log('Mock: Setting up auth state listener');
    // Return a mock unsubscribe function
    return () => {
      console.log('Mock: Unsubscribing from auth state');
    };
  },
};

export const firestore = () => ({
  collection: (collectionName: string) => ({
    doc: (docId: string) => ({
      set: async (data: any) => {
        console.log(`Mock: Writing to ${collectionName}/${docId}:`, data);
      },
      get: async () => {
        console.log(`Mock: Reading from ${collectionName}/${docId}`);
        return {
          exists: true,
          data: () => ({
            id: docId,
            email: 'test@example.com',
            displayName: 'Test User',
            skills: [],
            portfolioLinks: [],
            creativeFields: [],
            createdAt: new Date(),
            updatedAt: new Date(),
          }),
        };
      },
      update: async (data: any) => {
        console.log(`Mock: Updating ${collectionName}/${docId}:`, data);
      },
    }),
  }),
});

export const storage = () => ({
  ref: (path: string) => ({
    putFile: async (filePath: string) => {
      console.log(`Mock: Uploading file to ${path} from ${filePath}`);
      return { downloadURL: 'https://mock-storage-url.com/file' };
    },
  }),
});

const firebase = {
  apps: { length: 0 },
  initializeApp: (config: any) => {
    console.log('Mock: Initializing Firebase with config:', config);
  },
};

export default firebase;