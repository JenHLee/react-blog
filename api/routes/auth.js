const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');

//REGISTER
router.post("/register", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        //can send username, pw, etc everthing inside of req
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
            //password: req.body.password, <-original version of password that has no bcrpyt
        });

        const user = await newUser.save();
        res.status(200).json(user);
        //when req is working
    } catch (err) {
        res.status(500).json(err);
        //when req is not working
    }
});
//create -> post, exi st user -> put, delete user -> delete, not change anything -> get

//LOGIN
router.post("/login", async(req, res) => {
    try {
        //try to find username in Mongo DB (findOne means username is only one)
        const user = await User.findOne({username: req.body.username});
        !user && res.status(400).json("Wrong Credentials!");
        //if there is no user inside our DB, show 400 error code with Wrong Credentials! message.

        const validated = await bcrypt.compare(req.body.password, user.password);
        !validated && res.status(400).json("Wrong Credentials!");

        const {password, ...others} = user._doc;
        res.status(200).json(others);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;