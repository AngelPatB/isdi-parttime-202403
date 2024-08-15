import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import {
    registerUserHandler,
    authenticateUserHandler,
    getUserNameHandler,
    errorHandler,
    getAllRecipesHandler,
    createRecipeHandler,
    toggleLikeRecipeHandler,
    editUsernameHandler,
    deleteRecipeHandler
} from './handlers/index.js'

const { MONGODB_URL, PORT } = process.env

const jsonBodyParser = express.json({ strict: true, type: 'application/json' })

mongoose.connect(MONGODB_URL)
    .then(() => {
        const api = express()

        api.use(cors())

        api.get('/', (_, res) => res.send('Hello, RecipeBox'))

        api.post('/users', jsonBodyParser, registerUserHandler)

        api.post('/users/auth', jsonBodyParser, authenticateUserHandler)

        api.get('/users/:targetUserId', getUserNameHandler)

        api.patch('/profile/:userId/editUsername', jsonBodyParser, editUsernameHandler)

        api.post('/recipes', jsonBodyParser, createRecipeHandler)

        api.get('/recipes', getAllRecipesHandler)

        api.delete('/recipes/:recipeId', deleteRecipeHandler)

        api.delete('/recipes/:recipeId/likes', toggleLikeRecipeHandler)

        api.use(errorHandler)

        api.listen(PORT, () => console.log(`API running on PORT ${PORT}`))

    })
    .catch(error => console.error(error))