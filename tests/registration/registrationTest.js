const chai = require('chai');
const chaiHttp = require('chai-http');
const axios = require('axios');
var expect  = require('chai').expect;
chai.use(chaiHttp);
let fakeServer = "https://app.fakejson.com/q";
var token = 'ni-ff1-mgX5CnAva98NiTw';

describe('API', () => {

	describe('POST /register', () => {
        let payload = {
            token: token,
            parameters: {
                "code": 200
            },
            data: { 
                "user": {
                    "first_name": "nameFirst",
                    "last_name": "nameLast",
                    "email": "internetEmail",
                    "nickname": "personNickname",
                    "password": "personPassword",
                    "avatar": "personAvatar"
                }
            }
        };

        it('should return code 200 for successfull registration', (done) => {
            
            chai.request(fakeServer)
            .post("/")
            .send(payload)
            .end((err, res) => {
            expect(err).to.be.null
            expect(res).to.have.status(200)
            expect(res.body).to.be.a('object')
            done()
        })
        })
	})
})