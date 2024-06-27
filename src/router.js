import express from "express"
import {addUser, getUsers} from "./controller.js"

export const router = express.Router()

router.route("/").post(addUser).get(getUsers)