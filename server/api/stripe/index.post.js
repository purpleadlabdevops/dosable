import stripe from './auth';

export default defineEventHandler(async event => {
  const body = await readBody(event)
  let customerID, paymentID, changeID
  return stripe.customers.create({
    email: body.billing.email,
    name: body.billing.firstName+' '+body.billing.lastName,
    phone: '+1'+body.billing.phone,
    address: {
      city: body.billing.city,
      country: 'US',
      line1: body.billing.adress,
      line2: body.billing.apartment,
      postal_code: body.billing.zip,
      state: body.billing.state,
    },
    shipping: {
      address: {
        city: body.shipping.city,
        country: 'US',
        line1: body.shipping.adress,
        line2: body.shipping.apartment,
        postal_code: body.shipping.zip,
        state: body.shipping.state,
      },
      name: body.shipping.firstName+' '+body.shipping.lastName,
      phone: '+1'+body.shipping.phone,
    }
  })
  .then(customer => {
    customerID = customer.id
    return stripe.paymentMethods.create({
      type: 'card',
      card: {
        number: body.payment.cardNumber,
        exp_month: Number(body.payment.cardMonth),
        exp_year: body.payment.cardYear,
        cvc: body.payment.cardSecurityCode,
      }
    })
  })
  .then(payment => {
    paymentID = payment.id
    return stripe.paymentIntents.create({
      customer: customerID,
      amount: (body.amount * 100).toFixed(),
      currency: 'usd',
      payment_method_types: ["card"],
      description: JSON.stringify(body.products)
    })
  })
  .then(changed => {
    return stripe.paymentIntents.confirm(changed.id, {
      payment_method: paymentID
    })
  })
  .then(result => {
    if(result.status === 'succeeded'){
      return {
        status: result.status,
        msg: 'Thank you! Your order was charged, we will contact you shortly.',
        data: result
      }
    } else {
      return {
        status: result.status,
        msg: 'Oops, Something went wrong please reload page and try again.',
        data: result
      }
    }
  })
  .catch(err => {
    console.log('catch');
    console.dir(err);
    return {
      status: 'error',
      msg: 'Error! Something went wrong please try again later.',
      data: err
    }
  })


})