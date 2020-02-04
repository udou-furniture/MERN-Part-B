
const app = require('../server') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)

// test('Testing to see if Jest works', () => {
//   expect(1).toBe(2)
// })
describe("testing customer endpoints")
it('requests without the token ', async done => {
  
 
  const res = await request.get('/check-token')
  
  expect(res.status).toBe(404)
 

  // ...
  done()
})

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

