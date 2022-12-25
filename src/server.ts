require('dotenv').config();
const app = require('./v1/app')

const port = process.env.PORT || 3000;




app.listen(port, () => {console.log('listening on port 3000')});
