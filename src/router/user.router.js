const router = require("express").Router();
const bcjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../Schema/User.Schema");
const { body, validationResult } = require('express-validator');

router.get("/login", async (req, res) => {
    res.render("Signup&Login/login")
})

router.get("/signup", async (req, res) => {
    res.render("Signup&Login/signup")
})


router.post("/register", body('email').isEmail().withMessage('Enter the valid email required'),async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ va: true,errors: errors.array() });
  }

  const finduser = await User.findOne({ email: req.body.email });

  if (finduser) return res.send({ error : true,message: "This email is already use" });
  const salt = await bcjs.genSalt(10);
  const hashpassword = await bcjs.hash(req.body.password, salt);
  const user = new User({
    ...req.body,
    password: hashpassword,
  });
  const relsut = await user.save();
  const { password, ...data } = await relsut.toJSON();
  res.send(data);
});


router.post("/login", body('email').isEmail().withMessage('Enter the valid email required') ,async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ va: true,errors: errors.array() });
  }

  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(404).send({ error : true, message: "User not found" });
  }
  const userFond = await bcjs.compare(req.body.password, user.password);
  if (!userFond) {
    return res.status(404).send({error : true, message: "Invaild password" });
  }
  const token = jwt.sign({ _id: user.id }, "secret");
  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });
  res.send({ error : false, message: "success" });
});



router.get("/cooke", async (req, res) => {
  try {
    const cookie = req.cookies["jwt"];
    const clamis = jwt.verify(cookie, "secret");
    if (!clamis) {
      return res.status(404).send({ error : true, message: "unauthicated" });
    }
    const user = await User.findOne({ _id: clamis._id });
    const relsut = await user.save();
    const { password, ...data } = await relsut.toJSON();
    res.send(data);
  } catch (err) {
    return res.status(404).send({ error : true, message: "unauthicated" });
  }
});

router.get("/logout", async (req, res) => {
  res.cookie("jwt", "", { maxAge: 0 });
  return res.status(404).send({ error : true, message: "unauthicated" });
});

module.exports = router;
