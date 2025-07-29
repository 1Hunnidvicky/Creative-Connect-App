# CreativeConnect App

A cross-platform mobile application that fosters collaboration and networking among creatives (artists, writers, musicians, designers, filmmakers). The app connects creatives for meetups, idea-sharing, collaboration on projects, and skill-building opportunities.

## 🚀 Features

### MVP Features Implemented

1. **User Authentication & Profiles**
   - User registration and login
   - Detailed profiles with skills, portfolio links, and interests
   - Profile editing functionality

2. **Creative Meetups**
   - Browse and search meetups with filters
   - Virtual and in-person meetup support
   - Location and creative field filtering

3. **Idea-Sharing Hub**
   - Post creative ideas for community feedback
   - Upvote/downvote system for idea validation
   - Category-based browsing
   - Comment system for discussions

4. **Opportunities Board**
   - Post and search for gigs, contests, mentorship opportunities
   - Filter by opportunity type (gigs, contests, mentorship, collaboration, jobs)
   - Budget and deadline information
   - Skill requirement matching

5. **User Profile Management**
   - Edit bio, skills, and location
   - Portfolio link management
   - Creative field selection

## 🛠 Technology Stack

- **Frontend**: React Native 0.80.2 with TypeScript
- **Navigation**: React Navigation 6.x with bottom tabs and stack navigation
- **Backend**: Firebase (Authentication, Firestore, Storage)
- **State Management**: React Hooks (useState, useEffect)
- **Styling**: React Native StyleSheet with responsive design

## 📱 Project Structure

```
src/
├── components/          # Reusable UI components
├── screens/            # Screen components
│   ├── AuthScreen.tsx      # Authentication wrapper
│   ├── LoginScreen.tsx     # Login form
│   ├── SignupScreen.tsx    # Registration form
│   ├── HomeScreen.tsx      # Dashboard/home
│   ├── MeetupsScreen.tsx   # Meetups listing and search
│   ├── IdeasScreen.tsx     # Ideas hub with voting
│   ├── OpportunitiesScreen.tsx  # Job/gig board
│   └── ProfileScreen.tsx   # User profile management
├── navigation/         # Navigation setup
│   ├── RootNavigator.tsx   # Main navigation structure
│   └── MainTabNavigator.tsx # Bottom tab navigation
├── services/          # API and service layer
│   ├── firebase.ts         # Firebase configuration
│   └── AuthService.ts      # Authentication service
├── types/             # TypeScript type definitions
│   └── index.ts           # App-wide type definitions
└── utils/             # Helper functions and utilities
```

## 🚀 Getting Started

### Prerequisites

- Node.js (18 or higher)
- npm or yarn
- React Native development environment
- Android Studio (for Android development)
- Xcode (for iOS development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/1Hunnidvicky/Creative-Connect-App.git
cd Creative-Connect-App
```

2. Install dependencies:
```bash
npm install
```

3. For iOS, install CocoaPods dependencies:
```bash
cd ios && pod install && cd ..
```

### Running the App

1. Start the Metro server:
```bash
npm start
```

2. Run on Android:
```bash
npm run android
```

3. Run on iOS:
```bash
npm run ios
```

### Development Scripts

- `npm start` - Start the Metro server
- `npm run android` - Run on Android emulator/device
- `npm run ios` - Run on iOS simulator/device
- `npm run lint` - Run ESLint
- `npm test` - Run Jest tests

## 🔧 Configuration

### Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication, Firestore, and Storage
3. Add your Android app and download `google-services.json` to `android/app/`
4. Add your iOS app and download `GoogleService-Info.plist` to `ios/`
5. Replace the mock Firebase configuration in `src/services/firebase.ts`

### Development vs Production

The app currently uses mock Firebase services for development. To use real Firebase:

1. Install Firebase packages:
```bash
npm install @react-native-firebase/app @react-native-firebase/auth @react-native-firebase/firestore @react-native-firebase/storage
```

2. Follow the Firebase setup guide for React Native
3. Replace the mock services in `src/services/firebase.ts` with real Firebase imports

## 🧪 Testing

The app includes basic unit tests using Jest and React Test Renderer. Tests are located in the `__tests__/` directory.

Run tests:
```bash
npm test
```

## 📈 Future Enhancements

- Real-time messaging system
- Group creation and management
- Advanced filtering and search
- Push notifications
- Calendar integration
- Media sharing capabilities
- Advanced profile customization
- Location-based recommendations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React Native community for excellent documentation
- Firebase for backend services
- React Navigation for navigation solutions