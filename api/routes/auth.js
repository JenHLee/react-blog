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
    console.log("login-backend");
    console.log("req username:" + req.body.username);
    console.log("req password:" + req.body.password);
    try {
        //try to find username in Mongo DB (findOne means username is only one)
        console.log("try");
        const user = await User.findOne({username: req.body.username});
        console.log("found");
        //!user && res.status(400).json("Wrong user!");
        //if there is no user inside our DB, show 400 error code with Wrong Credentials! message.
        if (!user) {
            return res.status(400).json("Wrong user!");
        }

        const validated = await bcrypt.compare(req.body.password, user.password);
        if (!validated ){
            return res.status(400).json("Wrong Password!");
        }
        //!validated && res.status(400).json("Wrong password!");
        //validate is not working -> return -> try console.log line by line

        const {password, ...others} = user._doc;
        return res.status(200).json(others);
        console.log("200");
    }catch(err){
        console.log("error is inside catch");
        //res.status(500).json(err);
        console.log("error message:" + err);
        //res.json(err); 
        
    }
});

module.exports = router;