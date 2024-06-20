import signupModels from "../models/signup.js";
import profileModels from "../models/profile.js";
import mongoose from "mongoose";
const UserController = {
  async signup(req, res) {
    const data = req.body;
    const dataCont = {
      username: data.username,
      email: data.email,
      password: data.password,
    };
    try {
      const userData = await signupModels.create(dataCont);
      console.log(userData);
      res
        .send({
          id: userData.id,
          username: userData.username,
          email: userData.email,
        })
        .status(200);
    } catch (err) {
      console.log(err + " while sending data from cont to models");
    }
  },

  async login(req, res) {
    // Implement login logic
    const userdata = req.body;
    const userCont = {
      email: userdata.email,
      password: userdata.password,
    };
    const user = await signupModels
      .findOne({ email: userCont.email, password: userCont.password })
      .then((data) => {
        if (data == null) {
          res.send({ msg: "user could not found" });
        } else {
          res.send({
            msg: "welcome again",
            username: data.username,
            email: data.email,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  async createProfile(req, res) {
    const data = req.body;
    const headid = req.headers["id"];
    const dataCont = {
      _id: headid,
      fullName: data.fullName,
      D_O_B: new Date(req.body.dob),
      phoneNumber: data.phoneNumber,
    };
    try {
      const userData = await profileModels.create(dataCont);
      console.log(userData);
      res
        .send({
          id: userData.id,
          fullName: userData.fullName,
          phoneNumber: userData.PhoneNumber,
          DOB: userData.D_O_B,
        })
        .status(200);
    } catch (err) {
      console.log(err + " while sending data from cont to models");
    }
  },
  async getProfile(req, res) {
    const userid = req.params.userid;
    try {
      const userProfile= await profileModels.findById(userid)
      if (userProfile === null) {
        res.send({ msg: "userProfile could not found" });
      } else {
        res.send(userProfile);
      }
    } catch (err) {
      console.log("error while fetching the user profile " + err);
        res.send({
          msg: "internal server error while fetching your profile data",
        });
    }
      
  },

  async updateProfile(req, res) {
    // Implement update profile logic
  },

  async logout(req, res) {
    // Implement logout logic
  },
};

export default UserController;
