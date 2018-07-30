
const request = require('supertest');
const app = require('../server/server.js');


describe('Test hosts information by id', () => {
  test('Test if the properties are properly selected', () =>
    request(app).get('/hosts/86').then((response) => {
      expect(JSON.parse(response.text)[0].id).not.toBeNull();
      expect(JSON.parse(response.text)[0].response_rate).toBeLessThan(1);
      expect(JSON.parse(response.text)[0].references_count).toBeGreaterThan(-1);
    })
  );
});

describe('Test review information by listing id', ()=> {
  test('Test if the properties are properly selected', () =>
  request(app).get('/reviews/56').then((response)=> {
    expect(response.text).toBe("0")
;  })
  )
});

describe('Test hosts information by id', () => {
  test('Test if the properties are properly selected', () =>
    request(app).get('/neighborhood/56').then((response) => {
      expect(JSON.parse(response.text)[0].features).toBe("snowboarding");
    })
  );
});
