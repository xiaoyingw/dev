
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var todo = require('./routes/todo');
var http = require('http');
var path = require('path');

var app = express();

// Mongodb
var Mongoose = require('mongoose');
var MongolabURI = 'mongodb://admin:a@ds049558.mongolab.com:49558/playground';
var db = Mongoose.createConnection(MongolabURI);

var TodoSchema = require('./models/Todo.js').TodoSchema;
var Todo = db.model('todos', TodoSchema);

var BlogSchema = require('./models/Blog.js').BlogSchema;
var Blog = db.model('blog', BlogSchema); 

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/partials/:name', routes.partials);
app.get('/users', user.list);

app.get('/todo', todo.get(Todo));
app.put('/todo/:id', todo.update(Todo));
app.post('/todo', todo.create(Todo));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
