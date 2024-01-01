import request from 'supertest';
import app from '../server'; // Assuming your Express app is exported from 'app'
import db from '../database';
beforeAll(async () => {
  await db.connect();
});

afterAll(async () => {
  await db.disconnect()
});

describe('addNote', () => {
  test('should add a new note', async () => {

    const note = { user: 'lepe', content: 'prööt' };
    const response = await request(app)
      .post('/')
      .send(note);

    expect(response.status).toBe(200);
    expect(response.body.data).toBeDefined();
  });

  test('should return 400 if note is empty', async () => {
    const response = await request(app)
      .post('/')
      .send({});

    expect(response.status).toBe(400);
    expect(response.body.error.message).toBe('Note is empty');
  });
});
