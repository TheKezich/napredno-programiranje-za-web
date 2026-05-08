import express from 'express'
import { dbConnection } from '../index.js'
import { appConstants } from '../config/appConstants.js'


export const router = express.Router()

router.get("/", (req, res) => {
  res.render("orders", { pageName: "Orders" });
});

