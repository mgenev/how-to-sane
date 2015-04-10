# Dynamic Pages in a Sane Stack App
 
## What exactly are we aiming to do here?
 
 * we want to have a CMS like experience for authoring 'pages' within our app.
 * we will support markdown and plain HTML content
 * we will allow full CRUD functionality for pages
 * we will add the necessary routing to support dynamic pages 
 * we will dynamically add the pages to our app header
 
 
## Steps to achieve
 
 * create the pages modeling
 * create the routes needed for our CRUD operations
 * give life to our crud functionality
 * add the markdown-to-html helper
 * create our dynamic page layout template(s)
 * add the dynamic pages to the nav menu
 
 
## The implementation
### getting down to business

1) create the modeling required for dynamic pages
 
 For this we will use the `sane generate` command to create the models on both the sails backend and in the ember frontend.
 
 `sane generate resource pages name:string title:string slug:string navLabel:string layout:string content1:string content2:string order:string`
 
 Running this command results in this output
 
 ```
 jame-dev:jame-how-to-sane jame$ sane generate resource pages name:string title:string slug:string navLabel:string layout:string content1:string content2:string order:number
 info: Created a new model ("Pages") at api/models/Pages.js!
 info: Created a new controller ("pages") at api/controllers/PagesController.js!
 version: 0.2.2
 0.2.3
 
 installing
   create app/models/page.js
 installing
   create tests/unit/models/page-test.js
 installing
   create app/routes/pages.js
   create app/templates/pages.hbs
 installing
   create tests/unit/routes/pages-test.js
 jame-dev:jame-how-to-sane jame$
 ```
 
 As we can see this has created a model and controller in our backend sails API as well as a model, model test, a pages route, a pages template, and a pages route test.
 
 If we investigate the details of what was created in the backend, we'll notice that we created a "pages" model and controller while our existing models and controllers are singular.  So for consistancies sake, we'll rename both of these files to also be singular.
 
 
 
 
 [jm note] do we need to manually fix the sails model and controller??
 
2) create the ember routes for our CRUD operations so we can edit our page content

 * cd into the client folder `cd client`
 * create a base route 'page-manager' `ember generate route page-manager`
 * create the index route where we will display a grid of pages `ember generate route page-manager/index`
 * create the new route where we will create new page instances `ember generate route page-manager/new`
 * create the edit route where we will edit a single page instance `ember generate route page-manager/edit --path=:page_id`
 
3) next we will create some templates we'll need along the way
 
 * to share a form between the edit and new routes, we'll create a partial to house our page edit form `ember generate template page-manager/edit-page`
 * next we need a layout form that will serve as the base structure for our dynamic pages `ember generate template page-manager/layouts/standard`
  
4) now that we have things stubbed out, lets go in and add some real logic to make this all work.

 * add a link to the page-manager on the main nav menu
 * add page grid to /page-manager/index
 * add link in page grid to /page-manager/edit/:page_id
 * add content to edit-form and add form to edit template
 * add CRUD actions to routes



5) now that we can edit our pages, lets incorporate them into the site itself.

 * create/update the application controller adding each page into the nav menu (in a drop down?)
 


 
 
 
 




 