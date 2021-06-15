let chai = require("chai");
const chaiHttp = require("chai-http");
let server = require("../server");

// chai lib init
chai.use(chaiHttp);

// assertion type
chai.should();

// unit testing using mocha
describe("GET /session/retrieve/:id", () => {

    it("It should RETURN specified session by id", (done) => {
        const taskID = "60c641e1fa716840d81e7c4e";
        chai.request(server)
            .get("/session/retrieve/" + taskID)
            .set("Content-Type", "application/json")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property("_id");
                res.body.should.have.property("userID");
                res.body.should.have.property("DASS21_SCORES");
                res.body.should.have.property("sessionDetails");
                // console.log(res.body);
            done();
        });
    });

    it("It should RETURN session not found", (done) => {
        const taskID = "random task id";
        chai.request(server)
            .get("/session/retrieve/" + taskID)
            .set("Content-Type", "application/json")
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.have.property("msg");
                res.body.should.have.property("error");
            done();
        });
    });
    
})