var Session = require("../models/session");
const config = require("../config/conf");


// this functions saves sessions sent by the client-side
exports.saveSession = async (req, res) => {
  if (!req.body.userID || !req.body.DASS21_SCORES || !req.body.sessionDetails) {
      return res
        .status(400)
        .json({ msg: "you are missing required information" });
    }
  let newSession = Session(req.body);
  console.log(newSession);
  console.log(req.body);
  await newSession.save(async (err, session) => {
    if (err) {
      return res.status(400).json({ msg: err });
    } 
    return res.status(200).json(session);
  });
}

// retrieves sessions by id
exports.getSession = async (req, res) => {
  try {
    const foundSession = await Session.findById(req.params.id);
    return res.status(200).send(foundSession);
  } catch (err) {
    return res.status(400).send({msg: "an error has occured", error: err});
  }
}

// retrieves all sessions from db
exports.getAllSessions =  async (req, res) => {
  try {
    const allSessions = await Session.find();
    res.send(allSessions);
  } catch (error) {
    res.status(400).send(error);
  }
}