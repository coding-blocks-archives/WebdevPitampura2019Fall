const { calcAmt } = require('../calcAmt')
const { expect } = require('chai')

describe('test promo in DL', () => {

  it('should be 118 for 200 and HAPPY50', () => {
    let bill = calcAmt(200, 'DL', 'HAPPY50')

    expect(bill.discount).to.equal(100)
    expect(bill.total).to.equal(118)

  })

})
