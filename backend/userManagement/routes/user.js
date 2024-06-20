import express from "express";
import UserController from "../controller/userController.js";

const router = express.Router();

// POST /api/signup
router.post("/signup", UserController.signup);

// POST /api/user/ogin
router.post("/login", UserController.login);

// post api/createProfile
router.post("/createProfile", UserController.createProfile);

// GET http://localhost:3000/user/profile/667440a581ef78d709491877
router.get("/profile/:userid", UserController.getProfile);


// PUT /api/pofile
router.put("/profile/:userid", UserController.updateProfile);

// POST /api/t
router.post("/logout", UserController.logout);

export default router;
