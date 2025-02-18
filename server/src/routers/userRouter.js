const express = require('express');
const { getAllUsers, getUserById, deleteUserById, processRegisters, activateUserAccount, updateUserById, handleBanUserById, handleUnBanUserById, handleUpdatePassword, handleForgetPassword, handleResetPassword } = require('../controllers/userController');
const { upload } = require('../middlewares/uploadFile');
const { runValidation } = require('../validators');
const { validateUserRegistrations, validateUserPasswordUpdate, validateUserForgetPassword, validateUserResetPassword } = require('../validators/auth');
const { isLoggedIn, isLoggedOut, isAdmin } = require('../middlewares/auth');



const userRouter = express.Router();


// upload.array('image', 1)

//api/users 
userRouter.post(
    '/process-register',
    upload.single('image'),
    isLoggedOut,
    validateUserRegistrations,
    runValidation,
    processRegisters,
);
userRouter.post('/activate', isLoggedOut, activateUserAccount);

userRouter.get("/", isLoggedIn, isAdmin, getAllUsers); //Accessable for only Admin
userRouter.get("/:id", isLoggedIn, getUserById);
userRouter.delete("/:id", isLoggedIn, deleteUserById);
userRouter.put("/:id", upload.single("image"), isLoggedIn, updateUserById);

//user bann & unbann
userRouter.put("/bann-user/:id", isLoggedIn, isAdmin, handleBanUserById);
userRouter.put("/unban-user/:id", isLoggedIn, isAdmin, handleUnBanUserById);

//user password update
userRouter.put(
    "/update-password/:id",
    isLoggedIn,
    validateUserPasswordUpdate,
    runValidation,
    handleUpdatePassword,
);
// forget password
userRouter.post(
    "/forget-password",
    validateUserForgetPassword,
    runValidation,
    handleForgetPassword,
);
//reset password
userRouter.put(
    "/reset-password",
    validateUserResetPassword,
    runValidation,
    handleResetPassword,
);



module.exports = userRouter;