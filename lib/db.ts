import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'projet-mbds',
  password: 'admin',
  port: 5432,
});
pool.query('SELECT NOW()', (err, res) => {
  if (err) console.error('Erreur de connexion à PostgreSQL:', err);
  else console.log('Connexion PostgreSQL réussie:', res.rows[0].now);
});

export default pool;

