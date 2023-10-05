const express = require('express')
const app = express()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const cors = require('cors')
app.use(cors())

// respond with "hello world" when a GET request is made to the homepage
app.get('/', async function (req, res) {
    const allUsers = await prisma.user.findMany({
        include: {
            posts: true,
            profile: true,
        },
    })

    res.json({
        data: allUsers
    })
})

app.listen(3000)