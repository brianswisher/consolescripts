# RapidPrototyping
## [console script][consolescripts] for rapid prototyping in the browser.
### Copyright 2011, [Brian Swisher][profile], [brianswisher.com][site] - [MIT Licensed][license]

* All properties are optional
* You can escape js, css, htm, & template strings to resolve line breaks, white spaces, & nested quotes.
* Script doesn't pass JSLint entirely due the Function constructor in the micro-templating script.

**@param {String} js** - javascript code for a newly inserted script node; will be unescaped

**@param {String} css** - selectors for a newly inserted style node; will be unescaped

**@param {Object} dom** - properties for inserting markup

> **@param {String} tag** - tag used to wrap new markup; default is div.

> **@param {String} target** - node used for placement of new markup; default is document.body.

> **@param {String} position** - after | before | replace | append ; default is append.

> **@param {String} htm** - specify markup without using a template; will be unescaped; is overwritten by a template.

**@param {Object} data** - json data used by template

> **@param {String} id** - reserved property to specify an id for the template; default is auto generated.

> **@param {String} template** - reserved property for template code; will be unescaped

**@return {Array}** array of added nodes

[site]: http://brianswisher.com  "brianswisher.com"
[profile]: http://www.linkedin.com/in/swish  "LinkedIn Profile"
[license]: http://www.opensource.org/licenses/mit-license.php  "MIT License"
[consolescripts]: http://brianswisher.com/consolescripts "ConsoleScripts"