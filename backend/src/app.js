// Import libraries
import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";
import createHttpError from "http-errors";
import mongoSanitize from "express-mongo-sanitize";

// Importing routes
import routes from "./routes/index.js";


// Initializing app
const app = express();

// Morgan
app.use(morgan());

// Mongo sanitize
app.use(mongoSanitize());

// Compression gzip
app.use(compression());

// Cookie parser
app.use(cookieParser());

// Cors
app.use(cors());

// Helmet
app.use(helmet());

// Using routes
app.use("/api/v1",routes);

// Error handling
app.use(async (req,res,next) => {
 next(createHttpError.NotFound("This route does not exist."));
});

app.use(async (err,req,res,next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status : err.status || 500,
            message : err.message
        }
    });
});


export default app;