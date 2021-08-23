import pkg from 'mongoose';
const { model, Schema } = pkg;

const Task = new Schema({
    userId: String,
    description: String,
    start: String,
    end: String
}, {
    collection: 'Task',
    autoCreate: true
});

export default model('Task', Task);