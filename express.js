var express = require('express');
var app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin',null);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

// app.get("/a",function(req,res){
//     res.send("hi");
// })

app.get('/:number',function(req,res){
    var num = parseInt(req.params['number']);
    
    function fibonacci(n){
        var f0 = 0;
        var f1 = 1;
        var fn = 1;
        for(var i=2; i<=n; i++){
            fn = (f0 + f1)%10000007;
            f0 = f1;
            f1 = fn;
        }
        if (num == 0){return 0}
        else if(num == 10){return 1}
        return fn;
    }
    res.send("result: "+ fibonacci(num));
})
app.listen(4100);