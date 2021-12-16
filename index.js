const express =  require('express');
const app = express();
const path = require('path');


app.set('port', 3000);
app.set('views',path.join(__dirname, 'views'));
app.engine('html',require('ejs').renderFile)
app.set('view engine','ejs');


//routes
app.use(require('./routes'))



app.use(express.static(path.join(__dirname,'views')));

app.listen(app.get('port'), () =>{
	console.log('App corriendo en el puerto'+ app.get('port'))
})