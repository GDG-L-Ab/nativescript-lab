var frameModule = require("ui/frame");

function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext  ={ 
        myItems: [
        {"name":"name", "website" : "http://mywebsite.my"},
        {"name":"other", "website" : "http://other.mywebsite.my"}
    
        ]}
}
exports.onNavigatingTo = onNavigatingTo;

exports.tapBackAction = function (){
    frameModule.topmost().navigate("views/first-view");
}

