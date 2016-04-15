console.log('background.js init start');




		
var key = true;

chrome.storage.sync.get("key", function(val) {
 console.log('get key from storage : ' + val.key);
 if(val != null && val.key != null && val.key != 'undefined'){
	 key = val.key;
	 console.log('set key : ' + key);
 }
 
});








chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
	console.log('background.js onMessage'); 
	if(request.type == "keySwitch"){
		console.log('set to ' + request.key); 
		key = request.key;
		chrome.storage.sync.set({"key":key});
	}else if(request.type == "queryKey"){
		console.log('background.js return ' + key); 
		 return sendResponse({key: key});  
	}
	
});

console.log('background.js init finish');



