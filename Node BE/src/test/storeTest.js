let chai = require("chai");
const chaiHttp = require("chai-http");
let server = require("../server");

// chai lib init
chai.use(chaiHttp);

// assertion type
chai.should();

// unit testing using mocha
describe("GET /store/product/:id", () => {

    it("It should RETURN specified product by id", (done) => {
        const prodID = "60a12cc8d4d0d23e74a73643";
        chai.request(server)
            .get("/store/product/" + prodID)
            .set("Content-Type", "application/json")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property("_id");
                res.body.should.have.property("name");
                res.body.should.have.property("category");
                res.body.should.have.property("description");
                console.log(res.body);
            done();
        });
    });

})

describe("GET /store/product/", () => {

    it("It should RETURN product list", (done) => {
        chai.request(server)
            .get("/store/product/")
            .set("Content-Type", "application/json")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("array")
               // console.log(res.body);
            done();
        });
    });
    
})