import { login, signup } from './actions';

export default function LoginPage() {
  return (
    <form>
      <div className="flex flex-col bg-indigo-500">
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required className="text-indigo-950" />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required className="text-indigo-950" />
        <div className="flex gap-4">
          <button formAction={login} className="bg-lime-600 px-2 py-1 hover:bg-lime-700">
            Log in
          </button>
          <button formAction={signup} className="bg-lime-600 px-2 py-1 hover:bg-lime-700">
            Sign up
          </button>
        </div>
      </div>
    </form>
  );
}
