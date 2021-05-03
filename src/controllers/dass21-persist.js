const config = require("../config/config");
const DASS21_DEF = require("../models/dass21");

exports.persistDASS = (req, res) => {
    let dass21 = DASS21_DEF
    dass21.save((err, dass21_sheet) => {
    if (err) {
        return res.status(400).json({ msg: err });
    } 
    return res.status(200).json(dass21);
    });
}