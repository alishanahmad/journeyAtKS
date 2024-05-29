import jwt from "jsonwebtoken";

const authenticateMiddleware = (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "UnAuthorized" });
  }
  token = token.replace("Bearer ", "");
  try {
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
