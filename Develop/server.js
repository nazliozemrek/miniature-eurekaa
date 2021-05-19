const express = require('express');

const app = express();
const PORT =process.env.PORT || 3001;

const dbJSON = require('./db/db.json')


app.use(express.static(__dirname + '/public'));
app.use(express.static('./'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

require('./routes/apiRoutes/apiRoutes')(app);
require('./routes/htmlRoutes/htmlRoutes')(app);


app.listen(PORT, () => {
    console.log(`API server now on port 3001!`);
  });