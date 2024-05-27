const express = require("express");
const registerUser = require("../controller/registerUser");
const checkEmail = require("../controller/checkEmail");
const checkPassword = require("../controller/checkPassword");
const userDetails = require("../controller/userDetails");
const logout = require("../controller/logout");
const updateUserDetails = require("../controller/updateUserDetails");
const searchUser = require("../controller/searchUser");

const router = express.Router();

//create user API
router.post("/register", registerUser);
//check user email
router.post("/email", checkEmail);
//check user Pasword
router.post("/password", checkPassword);
//login User Details
router.get("/user-details", userDetails);
//logout user
router.get("/logout", logout);
//update user Details
router.post("/update-user", updateUserDetails);
//search user
router.post("/search-user", searchUser);

module.exports = router;
