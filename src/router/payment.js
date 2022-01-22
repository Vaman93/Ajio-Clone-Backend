const router = require("express").Router();
const User = require("../Schema/User.Schema");

router.get("/address", (req, res) => {
  res.render("mybag/address1");
});

router.get("/userpayment", async (req, res) => {
  try {
    res.render("mybag/payment");
  } catch (err) {
    console.log(err);
  }
});

router.get("/deletbillandcheckout/:id", async (req, res) => {
  try {
     await User.updateOne({ _id: req.params.id } , { $set : {"bill" : [] , "CheckOut" : []}}, {new : true});

      res.send({ error : false, message : "Succes"})

  } catch (err) {
    console.log(err);
  }
});

router.get("/payment/bill/:id", async (req, res) => {
  try {
    const bill = await User.findOne(
      { _id: req.params.id },
      { name: 0, _id: 0, email: 0, password: 0, CheckOut: 0, Closte: 0 }
    );

    res.send(bill);
  } catch (err) {
    console.log(err);
  }
});

router.get(
  "/user/payment/bill/add/:id/:originalprice/:bagdiscount/:totalamount",
  async (req, res) => {
    try {
      const bill = await User.updateOne(
        { _id: req.params.id },
        {
          $push: {
            bill: {
              $each: [
                req.params.originalprice,
                req.params.bagdiscount,
                req.params.totalamount,
              ],
            },
          },
        },
        { new: true }
      );

      res.send({ error: false, message: "Success" });
    } catch (err) {
      console.log(err);
    }
  }
);

module.exports = router;
