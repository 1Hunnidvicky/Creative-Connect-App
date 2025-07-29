import React, { useState } from 'react';
import { LoginScreen } from './LoginScreen';
import { SignupScreen } from './SignupScreen';

interface AuthScreenProps {
  onAuthenticated: () => void;
}

export const AuthScreen: React.FC<AuthScreenProps> = ({ onAuthenticated }) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitchToSignup = () => setIsLogin(false);
  const handleSwitchToLogin = () => setIsLogin(true);

  if (isLogin) {
    return (
      <LoginScreen
        onLogin={onAuthenticated}
        onSwitchToSignup={handleSwitchToSignup}
      />
    );
  }

  return (
    <SignupScreen
      onSignup={onAuthenticated}
      onSwitchToLogin={handleSwitchToLogin}
    />
  );
};