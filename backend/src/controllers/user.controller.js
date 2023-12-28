// Importing services
import { updateProfile } from "../services/user.service.js";



export const updateProfileController = async (req, res, next) => {
	try {
		const { name, email, picture, password } = req.body;

		const updatedUserData = await updateProfile(req.user.userId, {
			name: name,
			email: email,
			picture: picture,
			password: password
		});

		res.json({
			message: "Profile updated successfully.",
			user: {
				_id: updatedUserData._id,
				name: updatedUserData.name,
				email: updatedUserData.email,
				picture: updatedUserData.picture,
			}
		});

	} catch (error) {
		next(error)
	}
}