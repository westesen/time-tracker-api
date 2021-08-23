import User from "../models/User.js";

const test = (req, res) => {
    const kim = new User({ name: 'kim' });
    res.json({ user: kim });
};

export {
    test
};