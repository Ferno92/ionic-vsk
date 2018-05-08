var express = require('express'),
app = express();
app.use(express.static('www'));
app.get('*',function(req,res,next){
    if(req.headers['x-forwarded-proto']!='https')
      res.redirect('https://mypreferreddomain.com'+req.url)
    else
      next() /* Continue to other routes if we're not redirecting */
  });
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});