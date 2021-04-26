const express = require("express");
const orderList= require("./controller/orderList")
const orderQueue= require("./controller/orderQueue")
const orderListHistory= require("./controller/orderListHistory")
const clientHistory= require("./controller/clientHistory")
const employerList = require("./controller/employerList");
const finance = require("./controller/finance");
const groupMessage = require("./controller/GroupMessage")
const router = express.Router()

router.get("/orderList",orderList)
router.get("/employerList",employerList)
router.get("/financeStatus",finance)
router.get("/orderListHistory",orderListHistory);
router.get("/orderQueue",orderQueue);
router.get("/clientHistory",clientHistory);
router.get("/groupChat",groupMessage);

module.exports = router; 