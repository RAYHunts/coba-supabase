'use client';
import { UserLogin, UserLoginType } from '@/libs/schema';
import { Button } from '@nextui-org/button';
import { Card } from '@nextui-org/card';
import { Input } from '@nextui-org/input';
import { Checkbox, Link, Spacer } from '@nextui-org/react';
import { useState } from 'react';
import { HiEye, HiEyeSlash } from 'react-icons/hi2';

export default function LoginPage() {
  const [formErrors, setFormErrors] = useState<UserLoginType | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };

    const result = UserLogin.safeParse(data);

    if (!result.success) {
      setFormErrors({ ...formErrors, email: result.error.email.message });

      return;
    }

    // Call your login function here
    // await login(data);
  };

  return (
    <Card className="p-4">
      <form className="flex w-full flex-col items-center gap-4" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold">NextUI Login</h1>
        <Spacer y={1} />
        <Input
          isClearable
          fullWidth
          color="primary"
          size="lg"
          placeholder="Email"
          name="email"
          errorMessage={formErrors?.email}
        />
        <Spacer y={1} />
        <Input
          fullWidth
          color="primary"
          size="lg"
          placeholder="Password"
          name="password"
          errorMessage={<span className="text-red-500">{formErrors?.password}</span>}
          type={isVisible ? 'text' : 'password'}
          endContent={
            <button type="button" onClick={toggleVisibility}>
              {isVisible ? <HiEyeSlash /> : <HiEye />}
            </button>
          }
        />
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
