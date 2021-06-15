let chai = require("chai");
const chaiHttp = require("chai-http");
let server = require("../server");

// chai lib init
chai.use(chaiHttp);

// assertion type
chai.should();

// unit testing using mocha
describe("GET /dass/21", () => {

    it("It should RETURN DASS21 questionnaire", (done) => {
        chai.request(server)
            .get("/dass/21")
            .set("Content-Type", "application/json")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                console.log('DASS questionnaire successfully retrieved');
            done();
        });
    });
})