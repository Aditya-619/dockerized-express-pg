import { 
    createUserService, 
    deleteUserService, 
    getAllUserService, 
    getUserByIdService
} from "../models/userModel.js";

const handleResponse = async (res, status, message, data=null) => {
    res.status(status).json({
        status,
        message,
        data
    });
}

export const createUser = async (req, res, next) => {
    const { name, email } = req.body;
    try {
        const newUser = await createUserService(name, email);
        handleResponse(res, 201, "success", newUser);
    } catch (err) {
        next(err);
    }
}

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await getAllUserService();
        handleResponse(res, 200, "success", users);
    } catch (error) {
        next(err);
    }
}

export const getUserById = async (req, res, next) => {
    try {
        const user = await getUserByIdService(req.params.id);
        if(!user) {
            return handleResponse(res, 404, "user not found");
        }
        handleResponse(res, 200, "success", user);
    } catch (error) {
        next(err);
    }
}

export const updateUser = async (req, res, next) => {
    const { name, email } = req.body;
    try {
        const updatedUser = await getAllUserService(req.params.id, name, email);
        if(!users) {
            return handleResponse(res, 404, "user not found");
        }
        handleResponse(res, 200, "success", updatedUser);
    } catch (error) {
        next(err);
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const deletedUser = await deleteUserService(req.params.id);
        if(!users) {
            return handleResponse(res, 404, "user not found");
        }
        handleResponse(res, 200, "success", deletedUser);
    } catch (error) {
        next(err);
    }
}