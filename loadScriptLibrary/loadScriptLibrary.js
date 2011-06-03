/*global document */
(function(){
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
}(
    /**
     * loadScriptLibrary - A script to load external javascript libraries.
     * Copyright 2011, Brian Swisher, brianswisher.com - MIT Licensed
     *  - loaded libraries won't be available immediately. Use a setTimeout to use them.
     *  - you can pass multiple libraries separated by commas.     
     * @param {Array<String>} arguments - one or more paths to script libraries
     * @return {Array<node>} - array of script libraries attached
     */
    "http://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js"
));