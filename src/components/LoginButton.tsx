import { useSession, signOut, signIn } from "next-auth/react";

export function LoginButton() {
  const { data: sessionData } = useSession();

  return (
    <button onClick={sessionData ? () => void signOut() : () => void signIn()}>
      {sessionData ? "Sign out" : "Sign in"}
    </button>
  );
}
