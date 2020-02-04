const app = require('../server') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)
describe("test the order-routes", () =>
{
  test('Gets the reviews', async done => 
  {
  
  
  const res = await request.get('/orders/reviews');
  
  expect(res.status).toBe(200);
  expect(res.body.data).toNotBe(undefined);
  

 
  done();
});
});


