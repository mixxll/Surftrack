var passLat = 0;
var passLong = 0;
let getXMLFile = function (path, callback){
    let request = new XMLHttpRequest();
    request.open("GET", path);
    request.setRequestHeader("Content-Type","text/xml");
    request.onreadystatechange = function(){
        if (request.readyState === 4 && request.status === 200){
            callback(request.responseXML);
        }
    };
    request.send();
};

getXMLFile("https://api.thingspeak.com/channels/789627/feeds.xml", function(xml){
    var channel = Array.from(xml.getElementsByTagName("feeds"));
    var feed = Array.from(xml.getElementsByTagName("feed"));
    var arrayX = Array.from(xml.getElementsByTagName("field1"));
    var arrayY = Array.from(xml.getElementsByTagName("field2"));
    var arrayZ = Array.from(xml.getElementsByTagName("field3"));
    var arrayLat = Array.from(xml.getElementsByTagName("field4"));
    var arrayLng = Array.from(xml.getElementsByTagName("field5"));
    var arrayTimeStamp = Array.from(xml.getElementsByTagName("created-at"));

    var lastLat = arrayLat[arrayLat.length - 1].innerHTML;
    lastLat = lastLat;
    console.log(lastLat/100);

    var lastLng = arrayLng[arrayLng.length - 1].innerHTML;
    lastLng = lastLng;
    console.log(lastLng/100);
    // //get raw Longitidue
    // rawLong = arrayLong[feed.length].innerHTML;
    // splitLong = rawLong.split('.');
    // //transfer to numbers
    // bigLong = parseInt(splitLong[0]);
    // parseSmallLong = parseInt(splitLong[1]);
    // //check how long the longitude string is as the second of the array has to be 0. later on the 
    // lengthSmallLong = splitLong[1].length;
    // smallLong = parseSmallLong/(Math.pow(10, lengthSmallLong));

    // //check if longitude is bigger or sammaler then 0
    // if(bigLong >= 0){
    //     long = bigLong + smallLong;
    // } else{
    //     long = bigLong - smallLong;
    // }
    // //get raw Longitidue
    // rawLat = arrayLat[feed.length].innerHTML;
    // splitLat = rawLat.split('.');
    // //transfer to numbers
    // bigLat = parseInt(splitLat[0]);
    // parseSmallLat = parseInt(splitLat[1]);
    // //check how long the longitude string is as the second of the array has to be 0. later on the 
    // lengthSmallLat = splitLat[1].length;
    // smallLat = parseSmallLat/(Math.pow(10, lengthSmallLat));
    
    // //check if latitude is bigger or sammaler then 0
    // if(bigLat >= 0){
    //     lat = bigLat + smallLat;
    // } else{
    //     lat = bigLat - smallLat;
    // }

    // // timeStamp includes dates wich are first and the time of the date
    // rawTimeStamp = arrayTimeStamp[feed.length].innerHTML;
    // //splitting them into date and time
    // var timeStamp = rawTimeStamp.split('T');

    // //get date as it is the first of the array
    // var rawDate = timeStamp[0];

    // //get time
    // //remove the Z at the end of the string as there is no need for it
    // var timeStr = timeStamp[1];
    // timeStr = timeStr.slice(0, -1);

    // // split the time into hours, mintes and seconds
    // var timeSplit = timeStr.split(':');

    // //get hours as numbers
    // rawHours = timeSplit[0];
    // hours = parseInt(rawHours);

    // //get minutes as numbers
    // rawMinutes = timeSplit[1];
    // minutes = parseInt(rawMinutes);

    // //get seconds as numbers
    // rawSeconds = timeSplit[2];
    // seconds = parseInt(rawSeconds);

    // if(hours >= 12){
    //     hours -= 12;
    // } else{
    //     hours += 12;
    // }
    // // document.getElementById('dataContainerLocation').innerHTML = 'date: ' + rawDate + '<br />time: ' + hours + ":"+  minutes +":"+  seconds +'<br/>longitude: ' + long + '<br />latitude: ' + lat;
    // passLat = lat;
    // passLong = long;  
})
