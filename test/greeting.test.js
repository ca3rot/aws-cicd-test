const expect = require('chai').expect;

const { hello } = require('../routes/greeting');

let req = {
    body: {},
};

let res = {
    sendCalledWith: '',
    send: function(arg) { 
        this.sendCalledWith = arg;
    }
};

describe('Greetings Route', function() {
    describe('Hello() function', function() {
        it('Should respond in Korean as default', function() {
            let newReq = req;
            newReq.body.name = '나라';
            
            hello(newReq, res);
            expect(res.sendCalledWith).to.equal('안녕, 나라');
        });

        it('Should error on invalid language', function() {
            let newReq = req;
            newReq.body.name = 'Nara';
            newReq.body.language = 'bad-input';
            
            hello(newReq, res);
            expect(res.sendCalledWith).to.equal('Error: Invalid Language');
        });

        it('Should return greeting for english', function() {
            let newReq = req;
            newReq.body.name = 'Nara';

            newReq.body.language = 'en';
            hello(newReq, res);
            expect(res.sendCalledWith).to.equal('Hello, Nara');
        });
    })
});
