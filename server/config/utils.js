import jwt from "jsonwebtoken";

export const GenerateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    sameSite: "strict",
    httpOnly: true,
    secure: process.env.NODE_ENV !== "developement",
  });
  return token;
};
