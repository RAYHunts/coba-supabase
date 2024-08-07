'use client';
import { Button } from '@nextui-org/button';
import { Card } from '@nextui-org/card';
import { Input } from '@nextui-org/input';
import { Spacer } from '@nextui-org/react';
import { useState } from 'react';
import { requestPasswordReset } from './actions';

const ForgotPasswordPage = () => {
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.currentTarget);
    const error = await requestPasswordReset(formData);
    setError(error);
  };

  return (
    <Card className="p-4">
      <form className="flex w-full flex-col items-center gap-4" onSubmit={handleSubmit}>
        <h1>NextUI Forgot Password</h1>
        <Spacer y={1} />
        <Input isClearable fullWidth color="primary" size="lg" placeholder="Email" name="email" />
        {error && <p className="text-red-500">{error}</p>}
        <Spacer y={1} />
        <Button type="submit" className="w-full" color="primary">
          Send reset link
        </Button>
      </form>
    </Card>
  );
};

export default ForgotPasswordPage;
