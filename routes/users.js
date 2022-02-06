import express from "express";
import { signin, signup} from "../controllers/user.js"; // In node codes add .js in react no need to add .js

const router = express.Router();

router.post('/signin',signin);
router.post('/signup',signup);


export default router;