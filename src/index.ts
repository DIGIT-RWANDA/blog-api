import  { PrismaClient }  from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.user.create({
        data: {
            name: 'Aimable Niyogakiza',
            email: 'aimable@example.com'
        }
    })

    await prisma.post.create({
        data: {
            title: 'GraphQl Prisma',
            slug: 'graphql-api-with-prisma',
            content: 'First Article',
            author: {
                connect: {
                    email: 'aimable@example.com'
                }
            }
        }
    })

    const post = await prisma.post.findOne({
        where: {
            slug: 'graphql-api-with-prisma'
        },
        include: {
            author: true
        }
    })

    console.log(post)
}

main().finally(() => prisma.disconnect())

