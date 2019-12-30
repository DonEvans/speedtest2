//Detects device and browser and sets hidden fields

var field1 = document.querySelector("#computer_userAgentString");
field1.value = navigator.userAgent;
var field3 = document.querySelector("#computer_category");
field3.value = detectDevice(navigator.userAgent);
var field4 = document.querySelector("#computer_browser");
field4.value = detectBrowser(navigator.userAgent);

  function detectBrowser(userAgent){
    //Regexs to detect various browsers
    let firefox = /\sFirefox/;
    let chrome = /\sChrome/;  //Check not Edge
    let safari = /\sSafari/;  //Check not Edge, Chrome
    let msie = /MSIE\s/;
    let opera1 = /OPR/;
    let opera2 = /Opera/;
    let edge = /\sEdg/;    //May return positive for Chrome and Safari
    let samsung_internet = /\sSamsungBrowser/; //Also positive for chrome and safari
    let uc_browser = /\sUCBrowser/;
    if (userAgent.match(uc_browser)) {
      return "UC Browser";
    } else if (userAgent.match(samsung_internet)) {
      return "Samsung Internet";
    } else if (userAgent.match(edge)) {
      return "Microsoft Edge";
    } else if ( userAgent.match(opera1) || userAgent.match(opera2) ){
      return "Opera";
    } else if (userAgent.match(msie)) {
      return "Internet Explorer";
    } else if (userAgent.match(chrome)) {
      return "Chrome";
    } else if (userAgent.match(safari)) {
      return "Safari";
    } else if (userAgent.match(firefox)){
      return "Firefox";
    } else {
      return "Unidentified Browser";
    }
  }

  function detectDevice(userAgent){
    //Regexes to detect various devices
    let winPhone = /Windows\sPhone/;  //mobile
    let iPhone = /iPhone/;    //mobile
    let android = /Android/;   //mobile
    let mac = /Macintosh; Intel Mac OS X/;    //Desktop
    let pc = /Windows\sNT/ ;                  //Desktop
    let linux = /Linux x86_64/;               //Desktop

    if ( userAgent.match(winPhone) || userAgent.match(iPhone) || userAgent.match(android) ){
      return "Mobile";
      } else if ( userAgent.match(mac) || userAgent.match(pc) || userAgent.match(linux) ){
        return "Desktop";
      } else {
        return "Other";
    }
    
  }