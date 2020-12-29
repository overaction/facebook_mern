const mongoose = require('mongoose');

const {ObjectId} = mongoose.Schema.Types;
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        default: 'https://res.cloudinary.com/kmc/image/upload/v1607613018/%EA%B8%B0%EB%B3%B8%EA%B0%92_kqhybh.png'
    }
});

mongoose.model("User",userSchema);