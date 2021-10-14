const chai = require('chai');
const chaiHttp = require('chai-http');
var expect  = require('chai').expect;
chai.use(chaiHttp);
let fakeServer = "https://app.fakejson.com/q";
var token = 'ni-ff1-mgX5CnAva98NiTw';

describe('API', () => {

	describe('POST /', () => {
        let payload = {
            token: token
        };

        it('should return code 200', (done) => {
            chai.request(fakeServer)
            .post("/")
            .send(payload)
            .end((err, res) => {
            expect(err).to.be.null
            expect(res).to.have.status(200)
            done()
        })
        })
	})
})