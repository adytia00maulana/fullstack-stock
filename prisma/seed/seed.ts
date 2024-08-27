import { PrismaClient } from '@prisma/client'
import {links} from './data/links';
import {colors} from './data/colors';
import {sizes} from './data/sizes';
const prisma = new PrismaClient()

async function main() {
    await prisma.user.create({
        data: {
            email: `testemail@gmail.com`,
            role: 'ADMIN',
        },
    })

    await prisma.link.createMany({
        data: links,
    })

    await prisma.color.createMany({
        data: colors,
    })

    await prisma.size.createMany({
        data: sizes,
    })
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })