import supertest from 'supertest'
import { app } from '../../app'

const api = supertest(app)

test('ping', async () => {
  await api
    .get('/api/ping')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})
