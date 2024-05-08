import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.routes";

const app = express();
const PORT = 7000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/register", userRoutes);

mongoose.connect("mongodb+srv://solangeduhimbazeihirwe:solange@backenddb.azugwzl.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDb")
  .then(() => {
    console.log("Connected to MongoDB!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Connection to MongoDB failed:", error);
  });
