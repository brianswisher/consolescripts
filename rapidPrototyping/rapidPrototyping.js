/*global document, unescape, tmpl */
(function(d) {
    var head, id, node, scriptElement, styleElement, target, tag, htm, position, templateName, nodes;
    id = "_" + new Date().getTime();
    head = document.getElementsByTagName("head")[0];
    (function(){ // Simple JavaScript Templating, John Resig - http://ejohn.org/ - MIT Licensed
        var cache = {};
        this.tmpl = function tmpl(str, data){
            var fn = !/\W/.test(str) ? cache[str] = cache[str] || tmpl(document.getElementById(str).innerHTML) :             
            new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+str.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');");     
            return data ? fn( data ) : fn;
        };
    }());
    function getScriptElement(jsCode,data) {
        scriptElement = document.createElement("script");
        scriptElement.type = (data) ? "text/html": "text/javascript";
        scriptElement.id = (data) ? "tmpl" + id: "js" + id;
        if (data && data.id) {
            scriptElement.id = data.id;
        }
        scriptElement.appendChild(document.createTextNode(jsCode));
        return scriptElement;
    }
    function getStyleElement(cssCode) {
        styleElement = document.createElement("style");
        styleElement.type = "text/css";
        styleElement.id = "css" + id;
        if (styleElement.styleSheet) {
            styleElement.styleSheet.cssText = cssCode;
        } else {
            styleElement.appendChild(document.createTextNode(cssCode));
        }
        return styleElement;
    }
    function appendToHead(node) {
        if (node.id && document.getElementById(node.id)) {
            head.removeChild(document.getElementById(node.id));
        }
        head.appendChild(node);
    }
    nodes = [];
    if (d.css) {
        node = getStyleElement(unescape(d.css));
        appendToHead(node);
        nodes.push(node);
    }
    if (d.js) {
        node = getScriptElement(unescape(d.js));
        appendToHead(node);
        nodes.push(node);
    }
    if (d.data) {        
        if (d.data.template) {
            node = getScriptElement(unescape(" " + d.data.template + " "),d.data);
            appendToHead(node);
            nodes.push(node);
        }        
        templateName = d.data.id || "tmpl" + id;
        if (document.getElementById(templateName)) {
            htm = tmpl(templateName, d.data);
        }
    }
    if (htm || d.dom) {
        target = document.body;
        if ( d.dom && d.dom.target ) {
            target = d.dom.target;
        }
        tag = "div";
        if ( d.dom && d.dom.tag ) {
            tag = d.dom.tag;
        }
        if ( !htm ) {            
            if ( d.dom && d.dom.htm ) {
                htm = unescape(d.dom.htm);
            } else {
                htm = unescape(d.dom);
            }            
        }
        position = (d.dom && d.dom.position) ? d.dom.position : "append";
        node = document.createElement(tag);        
        node.innerHTML = htm;        
        switch (position) {
            case "after":
                target.parentNode.insertBefore(node,target.nextSibling);
                break;
            case "before":
                target.parentNode.insertBefore(node,target);
                break;    
            case "replace":
                target.parentNode.insertBefore(node,target);
                target.parentNode.removeChild(target);
                break;
            default:
                target.appendChild(node);
                break;
        }        
        nodes.push(node);
    }
    return nodes;
}({
    /**
     * RapidPrototyping - console script for rapid prototyping in the browser.
     * Copyright 2011, Brian Swisher, brianswisher.com - MIT Licensed
     *  - All properties are optional
     *  - You can escape js, css, htm, & template strings to resolve line breaks, white spaces, & nested quotes.
     *  - Script doesn't pass JSLint entirely due the Function constructor in the micro-templating script.
     *  @param {String} js: javascript code for a newly inserted script node; will be unescaped
     *  @param {String} css: selectors for a newly inserted style node; will be unescaped
     *  @param {Object} dom: properties for inserting markup
     *      @param {String} tag: tag used to wrap new markup; default is div.
     *      @param {String} target: node used for placement of new markup; default is document.body.
     *      @param {String} position: after | before | replace | append ; default is append.
     *      @param {String} htm: specify markup without using a template; will be unescaped; is overwritten by a template.
     *  @param {Object} data: json data used by template
     *      @param {String} id: reserved property to specify an id for the template; default is auto generated.
     *      @param {String} template: reserved property for template code; will be unescaped
     *  @return {Array<node>} an array of nodes added
     */
    js: "var m ='hello world';try{console.log(m)}catch(e){alert(m)}",
    css: "body{background-color:#ededed}",
    dom: {tag:"ul",target:document.body,position:"append",htm:"<p>remove template for this content</p>"},
    data: {
        id: "exampleTemplate",
        template: "<% for (var i=0; i<list.length; i++ ){ %> <li><%=list[i]%></li> <% } %>",
        list: ["hello","world"]
    }
}));