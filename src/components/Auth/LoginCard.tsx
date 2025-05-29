import React from 'react';
import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import AuthForm, { LoginFormValues } from './Form';
import AlternativeLink from './AlternativeLink';

interface LoginCardProps {
  className?: string;
}

const LoginCard: React.FC<LoginCardProps> = ({ className }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleLoginSubmit = (values: LoginFormValues) => {
    setIsLoading(true);
    console.log('Login form submitted:', values);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // In a real app, you would navigate or show a toast message
      console.log("Simulated login successful for user:", values.username);
    }, 1500);
  };

  return (
    <Card className={cn('w-full max-w-sm bg-card text-card-foreground shadow-md rounded-md', className)}>
      <CardHeader className="p-6">
        <CardTitle className="text-3xl font-bold text-center text-card-foreground">
          Log in
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0 flex flex-col gap-4">
        <AuthForm onSubmit={handleLoginSubmit} isLoading={isLoading} />
        <AlternativeLink text="or," linkText="sign up" href="#" />
      </CardContent>
    </Card>
  );
};

export default LoginCard;
