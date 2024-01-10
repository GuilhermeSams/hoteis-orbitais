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
