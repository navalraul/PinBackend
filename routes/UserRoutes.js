import express from "express";
import {  changeAddress, changeEmail, changeNumber, changePanCardNum, register } from "../controllers/userController.js";
import {  checkPin, checksForRegister } from "../middlewares/authMiddlewares.js";



var router = express.Router();


router.post('/register',checksForRegister,register);
router.post('/changeNumber',checkPin,changeNumber);
router.post('/changeEmail',checkPin,changeEmail);
router.post('/changeAddress',checkPin,changeAddress);
router.post('/changePanCardNum',checkPin,changePanCardNum);



export default router;