const express = require('express');
const router = express.Router()
const {check} = require('express-validator');
const {signout, signup, signin, isSignedIn} = require('../controllers/auth')


router.get('/signout',signout);

router.post('/signup',[
    check("name","name should be atleast 3 characters").isLength({min:3}),
    check("email","Email address required").isEmail(),
    check("password","Password should be atleast 3 character long").isLength({min:3}),
],signup);

router.post('/signin',[
    check("email","Email address required").isEmail(),
    check("password","Password is required").isLength({min:1}),
],signin);

router.get('/test', isSignedIn, (req,res)=>{
    res.send("protected route")
})

module.exports = router