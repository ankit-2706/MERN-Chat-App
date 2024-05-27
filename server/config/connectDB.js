const mongoose = require('mongoose');

const connectDB = async () => {
    try { 
        await mongoose.connect(process.env.MONGODB_URI)

        const connection = mongoose.connection
        connection.on('connected', () => {
            console.log('MongoDB connected')   
        })

        connection.on('error', (error) => {
            console.log("Something is wrong in MongoDB",error)
        })


    } catch (error) {
        console.log( "Something is wrong" , error );
    }
}

module.exports = connectDB;