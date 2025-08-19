const express=require("express");
const router = express.Router();
const User=require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController=require("../controllers/user.js");
 //signup route
router.route("/signup")
  .get( userController.renderSignupForm)
  .post( wrapAsync(userController.signup));

 //login route
  router.route("/login")
  .get( userController.renderLoginForm)
  .post( saveRedirectUrl, passport.authenticate("local", { failureRedirect: '/login', failureFlash: true }), userController.login)
  
   //logout route
  router.route("/logout")
    .get( userController.logOut);
module.exports=router;