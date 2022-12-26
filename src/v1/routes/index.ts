import {Router} from "express";
const router = Router();
const foodRouter = require("./food.router");
const userRouter = require("./user.router");
const orderRouter = require("./order.router");


router.use("/api/foods", foodRouter);
router.use("/api/users", userRouter);
router.use("/api/orders", orderRouter);

module.exports = router;

