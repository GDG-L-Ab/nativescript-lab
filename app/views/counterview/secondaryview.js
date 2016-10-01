var applicationSettingsModule = require ("application-settings");
var frameModule = require ("ui/frame");

var myCount;
var myCounter;

function onNavigatingTo(args) {
    var page = args.object;
}

function pageLoaded(args){
    var page = args.object;    
    myCounter = page.getViewById("myCounter");
    myCounter.text = myCount = applicationSettingsModule.getNumber("count",42);
}

exports.onNavigatingTo = onNavigatingTo;
exports.pageLoaded = pageLoaded;


exports.decrease = function(){
     myCount--;
    applicationSettingsModule.setNumber("count",myCount);
     myCounter.text =myCount;
};

exports.reset = function(){
    myCount =42;
    applicationSettingsModule.setNumber("count",myCount);
    myCounter.text = myCount;
};


exports.prevPage = function(){
    frameModule.topmost().navigate("views/first-view");
};
