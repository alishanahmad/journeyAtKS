import jwt from "jsonwebtoken";
import tokenModel from "../model/auth";

const authenticateMiddleware = async(req, res, next) => {
  let token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "UnAuthorized" });
  }
  token = token.replace("Bearer ", "");
  try {
    await tokenModel.findOne({
      where:{
        token:token
      }
    })
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