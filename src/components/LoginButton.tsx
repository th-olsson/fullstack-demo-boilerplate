import { useSession, signOut, signIn } from "next-auth/react";

export function LoginButton() {
  const { data: session } = useSession();

  return (
    <button onClick={session ? () => signOut() : () => signIn()}>
      {session ? "Sign out" : "Sign in"}
    </button>
  );
}
