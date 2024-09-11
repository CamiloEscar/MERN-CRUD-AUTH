//que hace este archivo


import app from './app.js'
import { connectDB } from './db.js'

connectDB()
app.listen(4000)
console.log('conectacto al puerto', 4000)
console.log(`http://localhost:${4000}`)
