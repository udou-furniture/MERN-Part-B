const app = require('../app'); // Link to your server file
const request = require('supertest');
const mongoose = require('mongoose');
require('dotenv').config();

beforeAll(() => {
  const dbConfig = { useNewUrlParser: true, useUnifiedTopology: true };
  mongoose.connect(process.env.TEST_DB_URL, dbConfig, err => {
    if (err) {
      console.log(err);
    }
  });
});

afterAll(() => {
  mongoose.disconnect();
});

// const request = supertest(app)
// test('Testing to see if Jest works', () => {
//   expect(1).toBe(2)
// })

describe('Test customer-routes', () => {
  test('logins with already existing test email', async () => {
    const res = await request(app)
      .post('/api/customer/register')
      .send({
        email: 'h2@gmail.com',
        password: 'password1'
      });

    expect(res.status).toBe(500);
    console.log(res.text); // this returns the access token.
  });

  it('requests without the token ', async done => {
    const res = await request(app)
    .get('api/customer/check-token');

    expect(res.status).toBe(404);

    // ...
    done();
  });

});

// it('logins with no pasword or emails', async done => {
//   const res = await request.post( '/login' );
//         expect( res.status ).toBe( 403 );

// })

// it("doesn't gets the token ", async done => {

//   let token = req.headers['x-access-token'] || req.headers['authorisation']

//   const res = await request.get('/check-token')

//   if (!token)
//   {
//   expect(res.status).toBe(403)
//   }

//   // ...
//   done()
// })
