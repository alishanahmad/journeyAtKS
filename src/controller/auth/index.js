import userModel from "../../model/user/index.js";
import TokenmentModel from "../../model/auth/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import tokenModel from "../../model/auth/index.js";
const SECRET_KEY="ASDF"
const userController = {
  signup: async (req, res) => {
    try {
      const payload = req.body;
    //   console.log(`This is name============> ${payload.name}`)
    //   console.log(`This is name============> ${payload.email}`)
    //   console.log(`This is name============> ${payload.password}`)
      const existUser = await userModel.findOne({ 
        where:{
            email:payload.email
        }
       });
        if(existUser){
            res.status(400).json({message:"user already exists."})
        }
       
      const hashPassword = await bcrypt.hash(payload.password, 10);
      const user = new userModel({
        name: payload.name,
        email: payload.email,
        password: hashPassword,
      });

      
    //   await user.addUser(payload.user);
      res.json({
        message: "user added successfully"
      });
      const token=jwt.sign({emial:user.email,id:user._id},SECRET_KEY);
      await tokenModel.create({
        Token: token
      });
      
      await user.save();
    } 
    catch (error) {
        console.log(`This Is error signup=========> ${error}`);
      res.status(404).json({ message: "Internal Server Error." });
    }
  },
  signin: async (req, res) => {
    try {
      const payload= req.body;
      
      const existUser = await userModel.findOne({ 
        where:{
            email:payload.email
        }
       });
       console.log()
       const matchPassword=bcrypt.compare(payload.password, existUser.password);
       if(!matchPassword){
        console.log("Credentials are invalid.");
       }

      const token=jwt.sign({emial:existUser.email,id:existUser._id},SECRET_KEY,{expiresIn: '36000m'});
      res.status(200).json({
        user:existUser,
        token:token
      })
      // await tokenModel.create({
      //   token: token
      // })
    }
    catch{
      console.log(`This Is error at signin=========> ${error}`);
      res.status(404).json({ message: "Internal Server Error." });
    }
  }
  

};

export default userController;
