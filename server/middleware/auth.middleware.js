import jwt from "jsonwebtoken";
import User from "../model/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ message: "Unauthorised user" });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);

    if (!decode) {
      return res.status(401).json({ message: "Unauthorised user" });
    }

    const user = await User.findById(decode.userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.log(error);
  }
};

export default protectRoute;