# social-commerce

Contoh sederhana aplikasi Node JS

## Kebutuhan Sistem
- Node JS 8.8.1+
- MySql

## Cara Setup di Local
- Buat database bernama `social-commerce` di MySQL
- Import file `social-commerce.sql` ke database tersebut
- Pada file `./src/database.js` ubah kode ini sesuai user dan password MySQL di local
```javascript
var sequelize = new Sequelize('social-commerce', 'your_user', 'your_password', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

```
- Install dependencies `npm install`
- Jalankan aplikasi `npm run dev`
- Coba kunjungi `http://localhost:3000`