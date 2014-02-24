// Copyright 2013 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

(function() {


var root;
chrome.devtools.inspectedWindow.eval("location", function(location){
	root = location.protocol + '//' + location.host;
	makeIframe(root+'/itdc/system/debugInfo/0')
	i = 0;
});

chrome.devtools.network.onRequestFinished.addListener(function(request) {
	for(k in request.request.headers) {
		if(request.request.headers[k]['name'] == 'X-Requested-With' && request.request.headers[k]['value'] == 'XMLHttpRequest') {
			makeIframe(root+'/itdc/system/debugInfo/0');
		}
	}
});

chrome.devtools.network.onNavigated.addListener(function(url) {
	makeIframe(root+'/itdc/system/debugInfo/0');
});


function makeIframe(url)
{
	document.body.innerHTML = '';
	iframe = document.createElement('iframe');

	iframe.setAttribute('src',url);
	iframe.setAttribute('width','100%');
	iframe.setAttribute('height','100%');
	document.body.appendChild(iframe);
}

/*chrome.devtools.inspectedWindow.reload(function(){
	alert('here');
})*/


/*
chrome.devtools.inspectedWindow.eval(
  "jQuery.fn.jquery",
   function(result, isException) {
     if (isException)
       console.log("the page is not using jQuery");
     else

   }
);

chrome.tabs.query(tab_id, function (tab) {

    alert(tab);
});*/

// This function is converted to a string and becomes the preprocessor
  /*url = url ? url : '(eval)';

  url += listenerName ? '_' + listenerName : '';
  var prefix = 'window.__preprocessed = window.__preprocessed || [];\n';
  prefix += 'window.__preprocessed.push(\'' + url +'\');\n';
  var postfix = '\n//# sourceURL=' + url + '.js\n';
  return prefix + source + postfix;*/

/*
function extractPreprocessedFiles(onExtracted) {
  var expr = 'window.__preprocessed';
  function onEval(files, isException) {
    if (isException)
      throw new Error('Eval failed for ' + expr, isException.value);
    onExtracted(files);
  }
  chrome.devtools.inspectedWindow.eval(expr, onEval);
}

function reloadWithPreprocessor(injectedScript) {
  var options = {
    ignoreCache: true,
    userAgent: undefined,
    injectedScript: '(' + injectedScript  + ')()',
    preprocessingScript: '(' + preprocessor + ')'
  };
  chrome.devtools.inspectedWindow.reload(options);
}

function demoPreprocessor() {
  function onLoaded() {
  	extractPreprocessedFiles(updateUI);
  }
  var loadMonitor = new InspectedWindow.LoadMonitor(onLoaded);
  reloadWithPreprocessor(loadMonitor.injectedScript);
}

function listen() {

	 var loadMonitor = new InspectedWindow.LoadMonitor(onLoaded);

  var reloadButton = document.querySelector('.reload-button');
  reloadButton.addEventListener('click', demoPreprocessor);
}

window.addEventListener('load', listen);

function createRow(url) {
  var li = document.createElement('li');
  li.textContent = url;
  return li;
}

function updateUI(preprocessedFiles) {
  var rowContainer = document.querySelector('.js-preprocessed-urls');
  rowContainer.innerHTML = '';
  preprocessedFiles.forEach(function(url) {
    rowContainer.appendChild(createRow(url));
  });
}*/

})();

