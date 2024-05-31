import jwt from "jsonwebtoken";
import tokenModel from "../model/auth/index.js";

const authenticateMiddleware = async(req, res, next) => {
  let token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "UnAuthorized" });
  }
  token = token.replace("Bearer ", "");
  try {
    await tokenModel.findOne({
      where:{
        Token:token,
      }
    })
    if (!token){
      res.status(404).json({
        message: "Token not found",
        message:"unathurized."
      })
    }
    // token=token.replace("Bearer","");

    const decoded = jwt.verify(token, "ASDF");
    console.log("---------------------------------------------------------------------------");
    console.log(decoded, "req.body");
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "UnAuthorized" });
  }
};

export default authenticateMiddleware;
