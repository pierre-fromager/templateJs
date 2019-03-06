![TemplateJsLogo](src/img/logo.png)

# ![#f03c15](https://placehold.it/15/f03c15/000000?text=+) `templateJs`

## Description  
templateJs is a dumb front templating lib based on the good old html template tag.  

## WhatIsIt  

Template let you load asynchronous html code and inject variable.  
Core lib can be found in src/js/Template.js.  
This is dry (100 lines of code) and fast.  

## WhatFor  

Main word is 'Reuse'.  
Introducing component, you can compose with many templates.  
Once done, you can extends the components class regarding behaviour or whatever.  
Components can be found in src/js/components folder and are instanciated in the index page.  

## Usage  

In order to make it easier I made a component, in fact two one extending the first.  
This let you imbricate templates (as russian dolls) into a single container before mounting it to the DOM document.  

```javascript
new widgetCommentsComponent('#widgetCmp').load().then(widget => {
        widget.render().then(widget => {
            widget.mount(); // mounting to #widgetCmp into DOM document
            /* DO STUFF HERE (Ex: use a router component) */
        }).catch(err => console.error(err))
    }).catch(err => console.error(err));
```  
In this form it makes it easy to think about middlewares, plugins and whatever.  

## Facility  
A server is available listening on default tcp port 3333, to make it run type :  

```bash
npm run server
```

You can change settings in the server/config.js file.  
Once server started, you can figure out from shell what kind of resource is loaded by colors.  
On this point change colors settings in the server folder in colors and mimes js files.  

## Tests  

All libs and components are tested with jasmine.  
Tests can be found in the root test folder and can be played online through UI.  

## Dependencies  

Node and npm required for the demo server but no external dependency is required to run Template.js.  

## Readings  

* [Learn the differences between Shadow DOM and Virtual DOM](https://vuejsfeed.com/blog/learn-the-differences-between-shadow-dom-and-virtual-dom).
* [Building a Simple Virtual DOM from Scratch](https://dev.to/ycmjason/building-a-simple-virtual-dom-from-scratch-3d05).


## Whoami  

Get more on [Linkedin](https://www.linkedin.com/in/pierre-fromager-197b4b6/ "My profile").  

## Regards  

To my cats & my mum.