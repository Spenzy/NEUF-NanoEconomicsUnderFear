let chai = require("chai");
const chaiHttp = require("chai-http");
let server = require("../server");

// chai lib init
chai.use(chaiHttp);

// assertion type
chai.should();

// unit testing using mocha

// login auth test
describe("POST /auth/login", () => {
    it("It should RETURN a token AND grant ACCESS to user", (done) => {
        chai.request(server)
            .post("/auth/login")
            .set("Content-Type", "application/json")
            .send({ username: "test", password: "password" })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property("token");
                var token = res.body.token;
                console.log('token: '+token)
                chai.request(server)
                    .get("/auth/me")
                    .set("Content-Type", "application/json")
                    // we set the auth header with our token
                    .set('Authorization', 'BEARER ' + token)
                    .end(function(error, resp) {
                        resp.should.have.status(200);
                        resp.body.should.have.property('msg').eq('Logged in as test.');
                        console.log(resp.body);
                        done();
                    });
            })
    });

    it("It should RETURN error on unknown user", (done) => {
        chai.request(server)
            .post("/auth/login")
            .set("Content-Type", "application/json")
            .send({ username: "unknowntestuser", password: "password" })
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.have.property("msg").eq("User not found");
            done();
            })
    });

    it("It should RETURN error on wrong password", (done) => {
        chai.request(server)
            .post("/auth/login")
            .set("Content-Type", "application/json")
            .send({ username: "test", password: "anotherpassword" })
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.have.property("msg").eq("mismatched email and password");
            done();
            })
    });

    it("It should RETURN error on missing information", (done) => {
        chai.request(server)
            .post("/auth/login")
            .set("Content-Type", "application/json")
            .send({ username: "test" })
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.have.property("msg").eq("missing required information");
            done();
            })
    });
});