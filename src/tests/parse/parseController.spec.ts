import { BaseTest } from '../BaseTest';

describe('/POST Test Node Test Application parse logic', () => {

    const test = new BaseTest();
    
    const requestBody = {
        data: 'JOHN000REGINA0000123456789'
    };

    it('it should fail v1/parse', (done) => {
        test.chai.request(test.server)
            .post(`/api/v1/parse`)
            .send({})
            .end((err, res) => {
                res.status.should.equal(200);
                res.body.Message.should.equal("V1 Parsing failed.");
                done();
            });
    });
    
    it('it should fail v2/parse', (done) => {
        test.chai.request(test.server)
            .post(`/api/v2/parse`)
            .send({})
            .end((err, res) => {
                res.status.should.equal(200);
                res.body.Message.should.equal("V2 Parsing failed.");
                done();
            });
    });

    it('it should call v1/parse', (done) => {
        test.chai.request(test.server)
            .post(`/api/v1/parse`)
            .send(requestBody)
            .end((err, res) => {
                res.status.should.equal(200);
                res.body.should.be.a('object');
                res.body.should.have.property('statusCode');
                res.body.should.have.property('data');
                res.body.statusCode.should.equal(200);
                res.body.data.firstName.should.equal("JOHN000");
                res.body.data.lastName.should.equal("REGINA0000");
                res.body.data.clientId.should.equal("123456789");
                done();
            });
    });

    it('it should call v2/parse', (done) => {
        test.chai.request(test.server)
            .post(`/api/v2/parse`)
            .send(requestBody)
            .end((err, res) => {
                res.status.should.equal(200);
                res.body.should.be.a('object');
                res.body.should.have.property('statusCode');
                res.body.should.have.property('data');
                res.body.statusCode.should.equal(200);
                res.body.data.firstName.should.equal("JOHN");
                res.body.data.lastName.should.equal("REGINA");
                res.body.data.clientId.should.equal("123-456789");
                done();
            });
    });
});
