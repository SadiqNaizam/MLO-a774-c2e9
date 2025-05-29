import React from 'react';
import LoginCard from '../components/Auth/LoginCard';

/**
 * LoginPage serves as the main entry point for the login screen.
 * It utilizes a centered layout to display the LoginCard component.
 */
const LoginPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <LoginCard />
    </div>
  );
};

export default LoginPage;
