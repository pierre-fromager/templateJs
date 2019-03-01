# templateJs  

## Description  
templateJs is a dumb front templating lib based on the good old html template tag.  

## WhatIsIt  

This let you build components based on templates.  
Template demos samples can be found in src/template folder.  
Core lib can be found in src/js/Template.js.  
Components can be found in src/js/components folder.  
This is a dry prototyped (100 lines of code), poor but fast.  
Components are instanciated in the index page.  

## Usage  

In order to make it easier I made a component, in fact two one extending the first.  
This let you imbricate templates (as russian dolls) into a single container before mounting it to the DOM document.  

```javascript
new widgetCommentsComponent('#widgetCmp').load().then(widget => {
        widget.render().then(widget => {
            widget.mount(); // mounting to #widgetCmp into document
            /* DO STUFF HERE (Ex: use a router component) */
        }).catch(err => console.error(err))
    }).catch(err => console.error(err));
```  
In this form it makes it easy to think about middlewares, plugins and whatever.  

## Whoami  

Get more on [Linkedin](https://www.linkedin.com/in/pierre-fromager-197b4b6/ "My profile").  

## Why  

I'm using as daily front libs (React, Angular, View ) and such techs based on dom shadowing.  
Sometimes apprehend,asimilate such technologies can take time.  
On that points I wondered if maybe I could help to make the learning curve shorter.  
So I deciced to publish this use case.  
For fresh people coming to js, some concepts can be murky regarding asynchronicity .  
For them have a look at Promises usage.  

## Facility  
A server is available listening on default tcp port 3333, to make it run type :  

```bash
npm run server
```

You can change settings in the server/config.js file.  
Once server started, you can figure out from shell what kind of resource is loaded by colors.  
On this point change colors settings in the server folder in colors and mimes js files.  

## Dependencies  

Node and npm required for the demo server but no external dependency is required to run Template.js.  

## Regards  

To my cats & my mum.