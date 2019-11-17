
const OUR_STATE = "DL"

const VALID_PROMOS = [
  {code: "OMG30", discount: 30},
  {code: "HAPPY50", discount: 50}
]

function calcAmt(price, state, promo) {

  if (typeof price !== 'number') {
    throw new Error('Invalid Price Format')
  }

  const bill = {amount: price}

  VALID_PROMOS.forEach(p => {
    if (p.code == promo) {
      bill.discount = (p.discount / 100) * bill.amount
    }
  })

  bill.subtotal = (bill.amount - (bill.discount || 0))

  if (OUR_STATE == state) {
    let tax = (9 / 100) * bill.subtotal
    tax = (parseInt(tax * 100)) / 100

    bill.CGST = bill.SGST = tax

  } else {
    let tax = (18 / 100) * bill.subtotal
    tax = (parseInt(tax * 100)) / 100

    bill.IGST = tax
  }

  bill.total = bill.subtotal +
                (bill.CGST || 0) +
                (bill.SGST || 0) +
                (bill.IGST || 0)

  return bill
}

module.exports = { calcAmt }
