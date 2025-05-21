import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import cors from "cors";
import welcomeBannerSectionRouter from "./routes/welcomeBannerSection.routes.js";
import headerRouter from "./routes/header.routes.js";
import heroSectionRouter from "./routes/heroSection.routes.js";
import { errorHandler } from "./middlewares/errorHandling.middlewares.js";


// Emulate CommonJS __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))

app.use(express.json({ limit: "100kb" }));
app.use(express.urlencoded({ extended: true, limit: "100kb" }));
app.use(express.static(path.join(__dirname, "../public")));
app.use(cookieParser());
app.set("trust proxy", 1);

app.use("/api/header", headerRouter);
app.use("/api/heroSection", heroSectionRouter);
app.use("/api/welcomeBanner", welcomeBannerSectionRouter);

app.use(errorHandler);
export default app;
