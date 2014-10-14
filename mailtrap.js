require('simplesmtp').createSimpleServer({SMTPBanner:"My Server"}, function(req){
    req.pipe(process.stdout);
    req.accept();
}).listen(25);
