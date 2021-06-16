const setApp = require('./src/index');

setApp
  .then((app) => {
    const port = normalizaPort(process.env.PORT || '3000');

    function normalizaPort(val) {
      const port = parseInt(val, 10);
      if (isNaN(port)) {
        return val;
      }

      if (port >= 0) {
        return port;
      }

      return false;
    }
    app.listen(port, () => console.info('app running on port 3000'))
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });