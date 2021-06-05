var Session = require("../models/session");
const config = require("../config/config");

exports.saveSession = async (req, res) => {
  if (!req.body.userID || !req.body.DASS21_SCORES || !req.body.sessionDetails) {
      return res
        .status(400)
        .json({ msg: "you are missing required information" });
    }
  let newSession = Session(req.body);
  await newSession.save(async (err, session) => {
    if (err) {
      return res.status(400).json({ msg: err });
    } 
    
    return res.status(200).json(session);
  });
}