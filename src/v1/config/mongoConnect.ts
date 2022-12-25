const mongoose = require('mongoose');
const URI = process.env.MONGO_URI;

mongoose.set('strictQuery', false);
//connect mongoose
mongoose
  .connect(URI)
  .then(() => console.log('Connected mongoose success!...'))
  .catch(() => console.log('Connected mongoose failed!...'));
// get mongodb-shell friendly output (ISODate)
mongoose.set('debug', { shell: true });

module.exports = mongoose;
