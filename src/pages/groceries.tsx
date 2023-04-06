import Navbar from "@/components/Navbar";
import { Box, Button, TextInput } from "@mantine/core";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string(),
});

type FormValues = z.infer<typeof schema>;

export default function Groceries() {
  const { register, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  function onSubmit(data: FormValues) {
    console.log(data);
  }

  return (
    <>
      <Navbar />
      <main>
        <Box p="md">
          <h1>Groceries</h1>
          <h2>Add item</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput {...register("name")} />
            <Button mt="md" type="submit">
              Add
            </Button>
          </form>
        </Box>
      </main>
    </>
  );
}
