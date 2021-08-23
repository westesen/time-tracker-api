import pkg from 'mongoose';
const { model, Schema } = pkg;

const User = new Schema({
    name: String
}, {
    collection: 'User',
    autoCreate: true
});

export default model('User', User);