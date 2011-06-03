/*global document */
(function(className){
	var i, nodes, node, next, siblings = [], returnValue;
	if (document.getElementsByClassName) {
		nodes = document.getElementsByClassName(className);
		for (i in nodes){
			if (nodes.hasOwnProperty(i)) {
				node = nodes[i];
				if (node.nextSibling) {
					next = node.nextSibling;
					siblings.push(next.parentNode.removeChild(next));
				}
			}
		}
		returnValue = siblings;
	} else {
		returnValue = -1;
	}
	return returnValue;
}(
    /** 
     * removeNextSiblingAfterClassName - A script to remove the next sibling node after a given className.
     * Copyright 2011, Brian Swisher, brianswisher.com - MIT Licensed
     * @param {String} className
     * @return {Array<node>} - removed nodes || {Int} -1 if incompatible
     */
    "CLASS_NAME"
));