var app = require('./src/app');
var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Listening on PORT: ${PORT}`);
});