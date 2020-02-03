// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require('stripe')('sk_test_iiHQmeCkDq8QxO5RUBRYnP3v');

(async () => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'aud',
  });
})();