var frameModule = require("ui/frame");


var myImage;
function onNavigatingTo(args) {
    var page = args.object;
}

function pageLoaded(args){
    var page = args.object;    
    page.bindingContext = {};

}

exports.onNavigatingTo = onNavigatingTo;
exports.pageLoaded = pageLoaded;

exports.tapListAction = function(v){
    console.log(v);
    frameModule.topmost().navigate("views/listview/listview");
}

exports.tapNetAction = function(){
    frameModule.topmost().navigate("views/netview/netview");
}

exports.tapCameraAction = function(){
    frameModule.topmost().navigate("views/cameraview/cameraview");
}


