import express, { application } from "express";
 import {dev} from '../config/server'
import { connectDB } from "../config/dbconfig";

const app = express();
const PORT: number = dev.app.port;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(PORT, () => {
  console.log(`server is running in http://localhost:${PORT}`);
  
});
connectDB();
app.get("/");
