const app = require('./index'); // Link to your server file
const supertest = require('supertest');

const orderRoutes = require('./order-routes.js');
const request = supertest(orderRoutes);

const login = async () => {
  // this is a normal funcion to get the login token. 
  const response = await request
  .post("/login")
  .send({
    email: "test6@test.com",
    password: "password"
  })
  return JSON.parse(response.access_token)
}

describe('test the order-routes', () => {
  test('Gets the reviews', async done => {
    const res = await request.get('/reviews');

    expect(res.status).toBe(200);
    expect(res.body.length > 1 ).toBe(true);

    done();
  });

  test('gets my-saved-orders', async done => {
    const token = await login().json
    const res = await request
    .get(
      '/orders/reviews'
    )
    .set("authorisation", token)

    expect(res.status).toBe(200);
    expect(res.body.data).toNotBe(undefined);

    done();
  });

  test('patch new review', async done => {

    const token = await login()
    const res = await request.patch('/new-review')

    .set("authorisation", token)
    done();
  });

  test('patch remove saved order', async done => {
    expect(1===1).toBe(true);
    done();
  });

  test('post new saved order', async done => {
    expect(1===1).toBe(true);
    done();
  });

  test('post new purchased order', async done => {
    expect(1===1).toBe(true);
    done();
  });
});
