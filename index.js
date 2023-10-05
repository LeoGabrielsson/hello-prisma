

async function main() {
    // ... you will write your Prisma Client queries here
    // await prisma.user.create({
    //     data: {
    //         name: 'Alice',
    //         email: 'alice@prisma.io',
    //         posts: {
    //             create: { title: 'Hello World' },
    //         },
    //         profile: {
    //             create: { bio: 'I like turtles' },
    //         },
    //     },
    // })
    const post = await prisma.post.update({
        where: { id: 1 },
        data: { content: 'Gmaming' },
    })
    console.log(post)



    console.dir(allUsers, { depth: null })
    // console.dir(allPosts)
}



main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })