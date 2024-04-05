import { Request, Response } from "express";
import { UserModel, UserDocument } from "../modules/user.model";

export const getUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const users: UserDocument[] = await UserModel.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getUserById = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { id } = req.params;
        const user: UserDocument | null = await UserModel.findById(id);
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const userModel: UserDocument = await UserModel.create(req.body);
        res.status(200).json(userModel);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateUser = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { id } = req.params;
        const userUpdate: UserDocument | null = await UserModel.findByIdAndUpdate(
            id,
            req.body
        );
        if (!userUpdate) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        const updatedUser: UserDocument | null = await UserModel.findById(id);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteUser = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { id } = req.params;
        const deletedUser: UserDocument | null = await UserModel.findByIdAndDelete(
            id
        );
        if (!deletedUser) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        res.status(200).json({ message: "User deleted successfully!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
