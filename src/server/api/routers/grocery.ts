import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { createGrocerySchema } from "@/pages/groceries";

export const groceryRouter = createTRPCRouter({
  createGrocery: protectedProcedure
    .input(createGrocerySchema)
    .mutation(({ ctx, input }) => {
      return ctx.prisma.grocery.create({
        data: {
          name: input.name,
        },
      });
    }),
});
