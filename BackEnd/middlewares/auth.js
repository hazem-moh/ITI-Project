const User = require("../Models/User.model");
const jwt = require("jsonwebtoken");

const isAuth = () => {
  return async (req, res, next) => {
    try {
      console.log("auth middleware");
      const { authorization } = req.headers;
      console.log(req.headers);
      let refreshed = 0;
      if (!authorization) {
        return next(new Error("Please login first", { cause: 400 }));
      }

      if (!authorization.startsWith("E-commerce")) {
        return next(new Error("invalid token prefix", { cause: 400 }));
      }

      const splitedToken = authorization.split(" ")[1];

      try {
        const decodedData = jwt.verify(
          splitedToken,
          `${process.env.JWT_SECRET}`
        );

        const findUser = await User.findById(
          decodedData.userId,
          "email username userId token"
        );
        console.log(findUser);

        if (!findUser) {
          return next(new Error("Please SignUp", { cause: 400 }));
        }
        req.authUser = findUser;
        next();
        console.log("here");
      } catch (error) {
        // token  => search in db
        if (error == "TokenExpiredError: jwt expired") {
          // refresh token
          const user = await User.findOne({ token: splitedToken });
          if (!user) {
            return next(new Error("Wrong token", { cause: 400 }));
          }
          // generate new token
          const userToken = jwt.sign(
            {
              email: user.email,
              firstname: user.firstname,
              username: user.username,
              userId: user._id,
            },
            process.env.SIGN_IN_TOKEN_SECRET,
            { expiresIn: "2h" }
          );

          if (!userToken) {
            return next(
              new Error("token generation fail, payload canot be empty", {
                cause: 400,
              })
            );
          }
          user.token = userToken;
          req.authUser = user;
          await user.save();
          refreshed = 1;
          res.cookie("userToken", userToken, {
            maxAge: 1000 * 60 * 60 * 48,
            path: "/",
            sameSite: "Lax",
          });
          console.log("here");
        }
        console.log("there", refreshed);
        if (refreshed === 1) {
          console.log("passed");
          next();
        } else return next(new Error("invalid token", { cause: 500 }));
      }
    } catch (error) {
      console.log(error);
      next(new Error("catch error in auth", { cause: 500 }));
    }
  };
};
module.exports = isAuth;
