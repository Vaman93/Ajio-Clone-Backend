const router = require("express").Router();
const bcjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../Schema/User.Schema");

router.get("/login", async (req, res) => {
    res.render("Signup&Login/login")
})

router.get("/signup", async (req, res) => {
    res.render("Signup&Login/signup")
})


router.post("/register", async (req, res) => {
  const finduser = await User.findOne({ email: req.body.email });
  if (finduser) return res.send({ message: "This email is already use" });
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


router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }
  const userFond = await bcjs.compare(req.body.password, user.password);
  if (!userFond) {
    return res.status(404).send({ message: "invaild password" });
  }
  const token = jwt.sign({ _id: user.id }, "secret");
  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });
  res.send({ message: "success" });
});



router.get("/cooke", async (req, res) => {
  try {
    const cookie = req.cookies["jwt"];
    const clamis = jwt.verify(cookie, "secret");
    if (!clamis) {
      return res.status(404).send({ message: "unauthicated" });
    }
    const user = await User.findOne({ _id: clamis._id });
    const relsut = await user.save();
    const { password, ...data } = await relsut.toJSON();
    res.send(data);
  } catch (err) {
    return res.status(404).send({ message: "unauthicated" });
  }
});

router.get("/logout", async (req, res) => {
  res.cookie("jwt", "", { maxAge: 0 });
  return res.status(404).send({ message: "unauthicated" });
});

module.exports = router;
