import { Flex, Group, Text } from "@mantine/core";
import { LoginButton } from "./LoginButton";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav>
      <Flex
        p="md"
        justify="space-between"
        align="center"
        sx={{
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Group>
          <Link href="/">Home</Link>
          <Link href="/groceries">Groceries</Link>
        </Group>
        <Group>
          {session && <Text>{session.user.email}</Text>}
          <LoginButton />
        </Group>
      </Flex>
    </nav>
  );
}
