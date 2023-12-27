// Importing services
import {generateToken} from "../services/token.service.js";
import { createUser,signUser } from "../services/auth.service.js";

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
                access_token: access_token,
                todos : newUser.todos
            }
        });
    } catch (error) {
        next(error);
    }
}

// Login controller
export const loginController = async (req, res, next) => {
    try {
		const { email, password } = req.body;
		const user = await signUser({email, password});
		console.log(user);

		const access_token = await generateToken({ userId: user._id }, "1d", process.env.ACCESS_TOKEN_SECRET);
		const refresh_token = await generateToken({ userId: user._id }, "30d", process.env.REFRESH_TOKEN_SECRET);

		res.cookie('refreshtoken', refresh_token, {
			httpOnly: true,
			path: "/api/v1/auth/refreshtoken",
			maxAge: 30 * 24 * 60 * 60 * 1000,
		});


		res.json({
			message: "login success.",
			user: {
				_id: user._id,
				name: user.name,
				email: user.email,
				picture: user.picture,
				access_token: access_token,
                todos : user.todos
			}
		});

	} catch (error) {
		next(error);
	}
}


export const forgetPasswordController = async () => {
    console.log("Forget Password Controller");
}

