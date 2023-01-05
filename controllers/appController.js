const signup = (req, res) => {
    res.status(201).json("Signup successfully...")
}

const getbill = (req, res) => {
    res.status(201).json("getbill successfully...")
}

module.exports = {
    signup,
    getbill
}