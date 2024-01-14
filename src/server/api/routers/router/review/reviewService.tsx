import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'

export const reviewServiceIndexRouter = createTRPCRouter({
    getAll: publicProcedure.query(async ({ ctx }) => {
        return ctx.prisma.reviewService.findMany()
    }),
})
