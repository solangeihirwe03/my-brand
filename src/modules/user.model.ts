import mongoose, { Schema, Document, Model } from "mongoose";

interface UserDocument extends Document {
    email: string;
    password: string;
}

// Define interface for User model
interface UserModelInterface extends Model<UserDocument> { }

// Define User schema
const userSchema: Schema<UserDocument> = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Define User model
const UserModel: UserModelInterface = mongoose.model<
    UserDocument,
    UserModelInterface
>("UserModel", userSchema);

export { UserModel, UserDocument, UserModelInterface };
