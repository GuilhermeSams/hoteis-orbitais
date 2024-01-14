import { prisma } from '../../db'

async function seed() {
    await prisma.travelAvailable.create({
        data: {
            id: 1,
            departureDate: '01/01/2024',
            arrivalDate: '05/02/2024',
            departureTime: '15:20',
            arrivalTime: '20:40',
            departureCity: 'CABO CANAVERAL - FLÓRIDA',
            arrivalHotel: 'Hotel Carl Sagan - Orbita Geoestacionária',
            pricePerSeat: 2000,
            pricePerStay: 250,
            star: 5,
            rocketName: 'Starship',
            capacity: 12,
        },
    }),

    await prisma.reviewService.create({
        data: {
            id: 1,
            star: 5,
            title: 'Nunca vou esquecer isso!',
            description:
                'Tive a incrível chance de ficar neste hotel espacial recentemente, uma experiência verdadeiramente fora deste mundo! Desde o momento que entrei até a partida, fui cativado por todos os aspectos desta estadia celestial.',
            profileURL:
                'https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yWUtra3B0VzlJZHVLZ3FxMG5lQmNlSVd5TnYifQ',
            name: 'Guilherme',
            occupation: 'Programador',
        },
    })

    // // Adicionar mais coisas aqui:
    //
    // await prisma.post.create({
    //   data: {
    //     userId: user.id,
    //     body: "Opa. Testando",
    //     title: "Tito",
    //   },
    // });
}

seed()
    .then(() => {
        console.log('Seed concluída com sucesso!')
    })
    .catch(() => {
        throw new Error()
    })
