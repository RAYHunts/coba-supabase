// make me reset password page that check toket from url with supasbase and nextui

import { Button, Card, Input, Spacer } from '@nextui-org/react';
import { validateToken } from './actions';

const ResetPasswordPage = () => {
  const token = new URLSearchParams(window.location.search).get('token') as string;
  const isAllowed = validateToken(token);
  return (
    <Card className="p-4">
      <form className="flex w-full flex-col items-center gap-4">
        <h1>NextUI Reset Password</h1>
        <Spacer y={1} />
        <Input isClearable fullWidth color="primary" size="lg" placeholder="New Password" />
        <Spacer y={1} />
        <Input isClearable fullWidth color="primary" size="lg" placeholder="Confirm Password" />
        <Spacer y={1} />
        <Button type="submit" className="w-full" color="primary">
          Reset Password
        </Button>
      </form>
    </Card>
  );
};

export default ResetPasswordPage;
