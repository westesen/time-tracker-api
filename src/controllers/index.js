import Task from "../models/Task.js";
import User from '../models/User.js';

const createUser = async(req, res) => {
    let user = await User.findOne({ name: req.body.name }).exec();

    if (!user) {
        user = new User({ name: req.body.name });
        await user.save();
    }

    return res.json(user);
};

const createTask = (req, res) => {
    const { userId, description, start, end } = req.body;
    const task = new Task({
        userId,
        description,
        start,
        end
    });

    task.save();

    res.json({ status: 'ok' });
};

const readTasks = (req, res) => {
    const query = {
        userId: req.params.userId
    };

    if (req.query.term) {
        query.description = new RegExp(req.query.term);
    }

    Task.find(query, null, { sort: { '_id': -1 } }, (err, tasks) => {
        return res.json(tasks);
    });
};

export {
    createUser,
    createTask,
    readTasks
};