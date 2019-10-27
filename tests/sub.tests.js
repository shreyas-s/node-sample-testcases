const subModule = require('./../sub');
var expect = require('expect');
it('Should sub 2 no.s ',() =>{
var res = subModule.sub(2,3);
expect(res).toBe(-1)
});

it('Should sub 2 no.s - Negative case ',() =>{
    var res = subModule.sub(2,4);
    expect(res).not.toBe(-1); 
    });
    
