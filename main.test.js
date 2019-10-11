QUnit.module('MAIN MODULE', {})  // group all these tests together

QUnit.test('Time to pass', assert => {
    
    assert.equal(samespeed(10,5),"5", "Perfect result")
    assert.equal(oppspeed(10,5),"15", "Perfect result")
    assert.equal(samespeed(60,6),"54", "Perfect result")
    assert.equal(oppspeed(60,6),"66", "Perfect result")
    assert.equal(samespeed(-10,5),"Speed can't be negative", "Incorrect result")
})



