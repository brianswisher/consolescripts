/* loadScriptLibrary - A script to load external javascript libraries.
	*Note, loaded libraries won't be available immediately. Use a setTimeout to use them.
 * Copyright 2011, Brian Swisher, brianswisher.com
 * @param arguments {Array<String>}
 * @return {Array<node>} array of script libraries attached
 */
/*global document */
(function(){ //load js libraries
     var i, src, scriptNode, max = arguments.length, scriptNodes = [];
     for (i = 0; i < max; i++) {
		if (arguments.hasOwnProperty(i)) {
			src = arguments[i];
			scriptNode = document.createElement('script');
			scriptNode.src = src;
			document.head.appendChild(scriptNode);
			scriptNodes.push(scriptNode);
		}
     }
     return scriptNodes;
}("http://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js"));