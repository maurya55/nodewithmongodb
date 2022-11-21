const User = require('./userModel');



module.exports = {


    checkName: async function (req, res) {

        try {

            await User.create({
                name: "wap",
                email: "wap@gmail.com"
            })

            return res.status(200).json({
                message: "getApi"
            })
        }
        catch (err) {
            return res.status(500).json({
                message: err.message
            })
        }


    }
}
