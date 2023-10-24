import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const sayHi = createTRPCRouter({
  hello: publicProcedure
    .query(() => {
      return {
        greeting: `Hello there!`,
      };
    }),

 
 
});
