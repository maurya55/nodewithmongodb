const User = require('./userModel');



module.exports = {


    checkName: async function (req, res) {

        try {

            await User.create({
                name: req.body.name,
                email: req.body.email
            })

            return res.status(200).json({
                message: "store successfully125"
            })
        }
        catch (err) {
            return res.status(500).json({
                message: err.message
            })
        }


    }
}
