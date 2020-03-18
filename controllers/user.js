const User = require("../models/user");

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({
      message: "Fetched users",
      users: users
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.postUser = async (req, res, next) => {
  try {
    console.log(req.body);
    

    const user = new User({
      name: req.body.name,
      age: req.body.age,
      occupation: req.body.occupation
    });

    await user.save(); // Save in db

    res.status(201).json({
      message: "User created",
      user: user
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  const userId = req.params.menuId;
  try {
    const user = await User.findById(userId);
    if (!user) {
      const error = new Error("Couldn't find the user");
      error.statusCode = 404;
      throw error;
    }
    await Menu.findByIdAndRemove(menuId);
    res.status(200).json({ message: "User removed" });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
