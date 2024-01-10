//import { z } from 'zod'
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'

/*
const travelAvailableSchema = z.object({
    id: z.string(),
    departureDate: z.string().min(10).max(10),
    arrivalDate: z.string().min(10).max(10),
    derpartureTime: z.string().min(5).max(5),
    arrivalTime: z.string().min(5).max(5),
    derpartureCity: z.string().min(3).max(50),
    arrivalHotel: z.string().min(3).max(60),
    pricePerSeat: z.number(),
    pricePerStay: z.number(),
    star: z.number().min(1).max(5),
    rocketName: z.string().min(3).max(40),
    capacity: z.string().min(4).max(20),
})
*/
export const travelavailableIndexRouter = createTRPCRouter({
    getAll: publicProcedure.query(async ({ ctx }) => {
        return ctx.prisma.travelAvailable.findMany()
    }),
})
