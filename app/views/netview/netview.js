var frameModule = require("ui/frame");
var fetchModule = require("fetch");
var page_glob;

function onNavigatingTo(args) {
    var page = args.object;    
}

function pageLoaded(args){
    var page = args.object;    
    page.bindingContext = {};
    page_glob = page;
}

exports.onNavigatingTo = onNavigatingTo;
exports.pageLoaded = pageLoaded;


exports.httpRequest = function(){
    fetchModule.fetch("http://validate.jsontest.com/?json=%7B%22key%22:%22value%22%7D")
    .then(function(response){       
        myResponse = JSON.stringify(response);    
        page_glob.getViewById("logLabel").text = myResponse;
        console.log(myResponse);

        
    },
    function(error){
        myResponse = JSON.stringify(response);
        console.log(myResponse);
    })
}

exports.prevPage = function(){
    frameModule.topmost().navigate("views/first-view");
};