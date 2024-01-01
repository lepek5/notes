import request from 'supertest';
import app from '../server'; // Assuming your Express app is exported from 'app'
import db from '../database';
beforeAll(async () => {
  await db.connect();
});

afterAll(async () => {
  await db.disconnect()
});
describe('getNoteById', () => {
  test('should get a note by ID', async () => {
    // Assuming you have a note ID for testing
    const noteId = '659148c040b231c8e0970cbb';
    const response = await request(app)
      .get(`/${noteId}`);
    expect(response.status).toBe(200);
    expect(response.body.data).toBeDefined();
  });
  test('should return 404 if note not found', async () => {
    const nonExistentId = '65909c16715346388ce6acf5';
    const response = await request(app)
      .get(`/${nonExistentId}`);
    expect(response.status).toBe(404);
    expect(response.body.error.message).toBe('Note not found');
  });
  test('should return 400 if object Id is false', async () => {
    const falseId = 'false_object_id';
    const response = await request(app)
      .get(`/${falseId}`);
    expect(response.status).toBe(400);
    expect(response.body.error.message).toBe('Invalid ObjectId');
  });
});
