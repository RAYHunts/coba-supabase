'use client';
import { Button, Card, Input, Spacer } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { HiEye, HiEyeSlash } from 'react-icons/hi2';
import { resetPassword, validateCode } from './actions';

const ResetPasswordPage = () => {
  const params = useSearchParams();
  const code = params.get('code') as string;
  validateCode(code);

  const [isVisibile, setIsVisible] = useState<[boolean, boolean]>([false, false]);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Clear the error message
    setError(null);

    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;
    // Add your logic here
    if (password !== confirmPassword) {
      // Show an error message
      setError('Passwords do not match');
    } else {
      // Reset password
      return resetPassword(password);
    }
  };

  return (
    <Card className="p-4">
      <form className="flex w-full flex-col items-center gap-4" onSubmit={onSubmit}>
        <h1 className="text-2xl font-bold">NextUI Reset Password</h1>
        <Spacer y={1} />
        <Input
          fullWidth
          color="primary"
          size="lg"
          placeholder="New Password"
          type={isVisibile[0] ? 'text' : 'password'}
          name="password"
          endContent={
            <button
              type="button"
              onClick={() => setIsVisible([!isVisibile[0], isVisibile[1]])}
              className="text-gray-500"
            >
              {isVisibile[0] ? <HiEye className="h-6 w-6" /> : <HiEyeSlash className="h-6 w-6" />}
            </button>
          }
        />
        <Spacer y={1} />
        <Input
          fullWidth
          color="primary"
          size="lg"
          placeholder="Confirm Password"
          type={isVisibile[1] ? 'text' : 'password'}
          endContent={
            <button
              type="button"
              onClick={() => setIsVisible([isVisibile[0], !isVisibile[1]])}
              className="text-gray-500"
            >
              {isVisibile[1] ? <HiEye className="h-6 w-6" /> : <HiEyeSlash className="h-6 w-6" />}
            </button>
          }
          name="confirmPassword"
        />

        <Spacer y={1} />
        {error && <p className="text-red-500">{error}</p>}
        <Spacer y={1} />
        <Button type="submit" className="w-full" color="primary">
          Reset Password
        </Button>
      </form>
    </Card>
  );
};

export default ResetPasswordPage;
