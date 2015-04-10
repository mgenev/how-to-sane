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
 
 If we investigate the details of what was created in the backend, we'll notice that we created a "pages" model and controller while our existing models and controllers are singular.  So for consistencies sake, we'll rename both of these files to also be singular.
 
 
2) Next we will create the ember routes for our CRUD operations so we can edit our page content

 * cd into the client folder `cd client`
 * create a base route 'page-manager' `ember generate route s/page-manager --pod=true`
   * note the `--pods` argument we are supplying.  This alters the behavior of the ember-cli to generate our resources using the "pod" file structure vs the default.  
   This organizes our resulting files by feature vs by function which is the default behavior.  For more information, take a look at [http://www.ember-cli.com/#using-pods](http://www.ember-cli.com/#using-pods)
   * also to note is that we created our page-manager route within the 's' route.  The 's' route is a secure route within the how-to-sane project and becuase we only want logged in users to be able to manage the pages on our site we want to leverage the existing 
   functionality that secures everything within the secure route to enforce that the user is logged in.
   
   ```
   jame-dev:client jame$ ember generate route s/page-manager --pod=true
   installing
     create app/pods/s/page-manager/route.js
     create app/pods/s/page-manager/template.hbs
   installing
     create tests/unit/pods/s/page-manager/route-test.js
   jame-dev:client jame$
   ```
   
 * create the index route where we will display a grid of pages `ember generate route s/page-manager/index --pod=true`
 
 ```
 jame-dev:client jame$ ember generate route s/page-manager/index --pod=true
 installing
   create app/pods/s/page-manager/index/route.js
   create app/pods/s/page-manager/index/template.hbs
 installing
   create tests/unit/pods/s/page-manager/index/route-test.js
 jame-dev:client jame$
 ```
 
 * create the new route where we will create new page instances `ember generate route s/page-manager/new --pod=true`
 
 ```
 jame-dev:client jame$ ember generate route s/page-manager/new --pod=true
 installing
   create app/pods/s/page-manager/new/route.js
   create app/pods/s/page-manager/new/template.hbs
 installing
   create tests/unit/pods/s/page-manager/new/route-test.js
 jame-dev:client jame$
 ```
 
 * create the edit route where we will edit a single page instance `ember generate route s/page-manager/edit --path=/edit/:page_id --pod=true`
 
 ```
 jame-dev:client jame$ ember generate route s/page-manager/edit --path=/edit/:page_id --pod=true
 installing
   create app/pods/s/page-manager/edit/route.js
   create app/pods/s/page-manager/edit/template.hbs
 installing
   create tests/unit/pods/s/page-manager/edit/route-test.js
 jame-dev:client jame$
 ```
 
3) next we will create some templates we'll need along the way
 
 * to share a form between the edit and new routes, we'll create a partial to house our page edit form `ember generate template /s/page-manager/edit-page --pod=true`
 
 ```
 jame-dev:client jame$ ember generate template /s/page-manager/edit-page --pod=true
 installing
   create app/pods/s/page-manager/edit-page/template.hbs
 ```
 
 * next we need a layout form that will serve as the base structure for our dynamic pages `ember generate template /s/page-manager/layouts/standard --pod=true`
 
 ```
 jame-dev:client jame$ ember generate template /s/page-manager/layouts/standard --pod=true
 installing
   create app/pods/s/page-manager/layouts/standard/template.hbs
 jame-dev:client jame$ 
 ```
  
4) now that we have things stubbed out, lets go in and add some real logic to make this all work.

 * add a link to the page-manager on the main nav menu
   * for this we'll edit the header-nav component that is responsible for the sites nav menu
 
 Update `client/app/pods/components/header-nav/component.js` with the following in the menu property
 ```
    }, {
       'title': 'Page Manager',     //creates the root menu item
       'link': 's.page-manager',
       'submenu': [{                //creates the submenu items
         'title': 'List Pages',
         'link': 's.page-manager.index'
       }, {
         'title': 'Create New Page',
         'link': 's.page-manager.new'
       }]
 ```
 
 Now go ahead and `cd ..` back to the root of the project and run `sane up` so we can check our work and see the new menu item by visiting `http://localhost:4200`
 (you may have to register a user account and login before you will be displayed the updated menu)
 
 * add page grid to /page-manager/index
 * add link in page grid to /page-manager/edit/:page_id
 * add content to edit-form and add form to edit template
 * add CRUD actions to routes



5) now that we can edit our pages, lets incorporate them into the site itself.

 * create/update the application controller adding each page into the nav menu (in a drop down?)
 


 
 
 
 




 