let chai = require("chai");
const chaiHttp = require("chai-http");
let server = require("../server");

// assertion type
chai.should();

// chai lib init
chai.use(chaiHttp);

// unit testing using mocha
const mongoose = require("mongoose");
const config = require("../config/config");
// login auth test
describe("POST /auth/login", () => {
    it("It should RETURN a token", (done) => {
        chai.request(server)
            .post("/auth/login")
            .set("Content-Type", "application/json")
            .send({ username: "test", password: "password" })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("json");
                res.body.should.have.property("token");
            done();
            }).catch((err) => done(err));
    });
});

