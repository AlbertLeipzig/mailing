import { User } from "./model.js";

export const addUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.json(201).json(user);
  } catch (e) {
    next(e);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(200).json(users);
  } catch (e) {
    next(e);
  }
};

/* export const updateUserPassword = async (req, res, next) => {
  try {
    //const user = await User....;
    res.json(201).json(user);
  } catch (e) {
    next(e);
  }
}; */
