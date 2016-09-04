var SMTPServer = require('smtp-server').SMTPServer;
const fs = require('fs');

var server = new SMTPServer({
    secure: true,
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.crt'),
    authMethods: ['PLAIN', 'LOGIN'],
    onAuth: function(auth, session, callback){
        if(auth.username !== 'foo@bar.com' || auth.password !== 'foopass'){
            return callback(new Error('Invalid username or password'));
        }
        callback(null, {user: 123}); // where 123 is the user id or similar property
    },
    onData: function(stream, session, callback){
        stream.pipe(process.stdout); // print message to console
        stream.on('end', callback);
    }
});

server.listen(435);
