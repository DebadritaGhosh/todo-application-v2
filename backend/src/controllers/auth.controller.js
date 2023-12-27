// Importing services
import { createUser } from "../services/auth.service.js";
import {generateToken} from "../services/token.service.js";

// Register controller
export const registerController = async (req, res, next) => {
    try {
        // console.log("REQUEST BODY ===========> ",req);
        console.log('Requested URL: ======================> ',req.originalUrl);
        const { name, email, picture, password } = req.body;
        const newUser = await createUser({ name, email, picture, password });
        const access_token = await generateToken({ userId: newUser._id }, "1d", process.env.ACCESS_TOKEN_SECRET);
        const refresh_token = await generateToken({ userId: newUser._id }, "30d", process.env.REFRESH_TOKEN_SECRET);
        res.cookie('refreshtoken', refresh_token, {
            httpOnly: true,
            path: "/api/v1/auth/refreshtoken",
            maxAge: 30 * 24 * 60 * 60 * 1000,
        });

        console.table({access_token, refresh_token});

        res.json({
            message: "registration success.",
            user: {
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                picture: newUser.picture,
                access_token: access_token
            }
        });
    } catch (error) {
        next(error);
    }
}

// Login controller
export const loginController = async () => {
    console.log("Login Controller");
}


export const forgetPasswordController = async () => {
    console.log("Forget Password Controller");
}

