import { Hono } from 'hono';
import { bearerAuth } from 'hono/bearer-auth'
import Database from 'bun:sqlite';

const app = new Hono();
const database = new Database('d.db');

app.use('/api/*', bearerAuth({ token: 'ougadagoudou' }));

database.query(`
    CREATE TABLE IF NOT EXISTS users (
        ID INT AUTO_INCREMENT PRIMARY KEY,
        userId BIGINT NOT NULL
    );
`).run();

app.get('/api/users/', (c) => {
    const users = database
        .query('SELECT * FROM users')
        .all();

    return c.json(JSON.stringify(users));
});

app.get('/api/users/:userId', (c) => {
    const { userId } = c.req.param();
    const query = database.query('SELECT * FROM users WHERE userId = ?');
    const user = query.get(userId);

    if(!user) return c.json({ message: 'Not found' }, 404);

    return c.json(user, 200);
});


app.delete('/api/users/:userId', (c) => {
    const { userId } = c.req.param();
    const query = database.query('DELETE FROM users WHERE userId = ?');
    const result = query.run(userId);

    const { message, code } = result.changes > 0 
        ? { message: 'Success', code: 200 } 
        : { message: 'User not found', code: 404 }; 

    return c.json({ message }, code as 200 | 404);
});


app.post('/api/users/', async (c) => {
    const { token, userId } = await c.req.parseBody();
})

export default app;
 