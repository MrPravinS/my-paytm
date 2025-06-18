import { jwt_secret } from "../config.js";
import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(403).json({ meaage: "Missing or malform Bearer" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, jwt_secret);
    req.userID = decoded.userID;
    next();
  } catch (error) {
    res.status(403).json({
      message: "Invalid TOken or expired",
    });
  }
};

export default authMiddleware;
