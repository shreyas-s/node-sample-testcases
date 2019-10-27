const sumModule = require('./../sum');
var expect = require('expect');
it('Should sum 2 no.s ',() =>{
var res = sumModule.sum(2,3);
expect(res).toBe(5)
});

it('Should sum 2 no.s - Negative case ',() =>{
    var res = sumModule.sum(2,3);
    expect(res).not.toBe(6);
    });
    
