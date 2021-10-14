const chai = require('chai');
const chaiHttp = require('chai-http');
var expect  = require('chai').expect;
chai.use(chaiHttp);
let fakeServer = "https://app.fakejson.com/q";
var token = 'ni-ff1-mgX5CnAva98NiTw';

describe('API', () => {

    before(() => {

	})

	describe('POST /', () => {
        let payload = {
            token: token,
            searchParameter: "home products",
            data: {
                productName: "productName",
                productPrice: 10,
                productSize: "productSize",
                currency: "currencyName",
                brand: "companyName",
                _repeat: 10
            }
        };

        it('should return the list with the products that meet the search parameter', (done) => {
            
            chai.request(fakeServer)
            .post("/")
            .send(payload)
            .end((err, res) => {
            expect(err).to.be.null
            expect(res).to.have.status(200)

            expect(res.body).to.be.an('array');
            expect(res.body.length).to.equal(10);
            done()
        })
        })
	})
})