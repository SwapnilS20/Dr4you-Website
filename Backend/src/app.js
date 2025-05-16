import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";

import headerRouter from "./routes/header.routes.js";

// Emulate CommonJS __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json({ limit: "100kb" }));
app.use(express.urlencoded({ extended: true, limit: "100kb" }));
app.use(express.static(path.join(__dirname, "../public")));
app.use(cookieParser());
app.set("trust proxy", 1);

app.use("/api/header", headerRouter);
export default app;
