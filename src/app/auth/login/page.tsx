'use client';
import { Button } from '@nextui-org/button';
import { Card } from '@nextui-org/card';
import { Input } from '@nextui-org/input';
import { Checkbox, Link, Spacer } from '@nextui-org/react';
import { useState } from 'react';
import { HiEye, HiEyeSlash } from 'react-icons/hi2';
import { login } from './actions';

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.currentTarget);
    const error = await login(formData);
    setError(error);
  };

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <Card className="p-4">
      <form className="flex w-full flex-col items-center gap-4" onSubmit={handleSubmit}>
        <h1>NextUI Login</h1>
        <Spacer y={1} />
        <Input isClearable fullWidth color="primary" size="lg" placeholder="Email" />
        <Spacer y={1} />
        <Input
          fullWidth
          color="primary"
          size="lg"
          placeholder="Password"
          type={isVisible ? 'text' : 'password'}
          endContent={
            <button onClick={toggleVisibility}>{isVisible ? <HiEyeSlash /> : <HiEye />}</button>
          }
        />
        {error && <p className="text-red-500">{error}</p>}
        <Spacer y={1} />
        <div className="flex w-full justify-between">
          <Checkbox>
            <span>Remember me</span>
          </Checkbox>
          <Link href="/auth/forgot-password">Forgot password?</Link>
        </div>
        <Button type="submit" className="w-full" color="primary">
          Sign in
        </Button>
      </form>
    </Card>
  );
}
