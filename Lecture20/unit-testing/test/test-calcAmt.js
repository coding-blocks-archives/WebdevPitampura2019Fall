const { calcAmt } = require('../calcAmt')
const { expect } = require('chai')

describe('test promo in DL', () => {

  it('should be 118 for 200 and HAPPY50', () => {
    let bill = calcAmt(200, 'DL', 'HAPPY50')

    expect(bill.discount).to.equal(100)
    expect(bill.total).to.equal(118)
    expect(bill.SGST).to.equal(9)

  })

})

describe('test promo outside DL', () => {

  it('should be 118 for 200 and HAPPY50', () => {
    let bill = calcAmt(200, 'AP', 'HAPPY50')

    expect(bill.discount).to.equal(100)
    expect(bill.total).to.equal(118)
    expect(bill.IGST).to.equal(18)

  })

})

describe('test invalid price', () => {

  it('should throw error for invalid price', () => {

    expect(() => {
      calcAmt('asd', 'AP', 'HAPPY50')
    }).to.throw('Invalid Price Format')


  })

})
