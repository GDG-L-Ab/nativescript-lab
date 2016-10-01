var frameModule = require("ui/frame");
var cameraModule = require("camera");

var myImage;
function onNavigatingTo(args) {
    var page = args.object;
}

function pageLoaded(args){
    var page = args.object;    
    myImage = page.getViewById("myImage");
    myImage.src ="https://placehold.it/300x300";
    page.bindingContext = {};

}

exports.onNavigatingTo = onNavigatingTo;
exports.pageLoaded = pageLoaded;

exports.tapAction = function(){
    cameraModule.takePicture().then(
        function (picture){
            myImage.imageSource = picture;
})
}

exports.prevPage = function(){
    frameModule.topmost().navigate("views/first-view");
};
