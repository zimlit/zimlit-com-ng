const express = require('express');
const app = express();

app.use((req, res, next) => {
  if (reg.get('Host') == 'zimlit-com-ng.herokuapp.com') {
    return res.redirect(301, 'www.zimlit.com');
  }
  return next();
})
app.use(express.static('./dist/zimlit-com-ng'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/zimlit-com-ng/'}
);
});

app.listen(process.env.PORT || 8080);
