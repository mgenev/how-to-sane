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

 As we can see this has created a model and controller in our backend sails API as well as a model, model test, a pages route, a pages template, and a pages route test in the ember frontend.

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
 ```javascript
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

 * add model hook to /page-manager

 Here we need to tell the page manager we want to work with our pages by adding this to
 `client/app/pods/s/page-manager/route.js`
 ```javascript
   export default Ember.Route.extend({
     model: function() {
       return this.store.find('page');
     }
   });
 ```

 * add page grid to /s/page-manager/index
 * add link in page grid to /s/page-manager/edit/:page_id

 lets start by adding some bootstrap goodness to our `/s/page-manager` template with a link to create new pages
 add this to `client/app/pods/s/page-manager/template.hbs`
  ```html
  <div class="container">
      <div class="row">
          <h1>dynamic page manager</h1>
          {{#link-to 's.page-manager.new' class="btn btn-info"}}Create New Page{{/link-to}}
      </div>
      <div class="row">
          {{outlet}}
      </div>
  </div>
  ```

 next lets add the basic grid to the `/s/page-manager/index` template
 `client/app/pods/s/page-manager/index/template.hbs`
 ```javascript
 <div class="col-xs-12">
     <h1>dynamic page manager index</h1>
 </div>
 <div class="col-xs-12">
     <table class="table table-bordered">
         <thead>
             <th>Name</th>
             <th>Title</th>
             <th>Slug (portion of the url)</th>
             <th>Navigation Label</th>
             <th>Layout Template</th>
             <th>Order</th>
             <th>Actions</th>
         </thead>
         <tbody>
             {{#each model as |page|}}
                 <tr>
                     <td>{{page.name}}</td>
                     <td>{{page.title}}</td>
                     <td>{{page.slug}}</td>
                     <td>{{page.navLabel}}</td>
                     <td>{{page.layout}}</td>
                     <td>{{page.order}}</td>
                     <td>{{#link-to 's.page-manager.edit' page classNames="btn btn-info"}}edit{{/link-to}}</td>
                 </tr>
             {{/each}}
         </tbody>
     </table>
 </div>
 {{outlet}}
 ```

 * update event hooks in `/s/page-manager/new`
   * we'll be editing `client/app/pods/s/page-manager/new/route.js`
   * lets add the model hook to create the new page model we will edit
   ```javascript
   model: function() {
     return this.store.createRecord('page');
   }
   ```
   * we also need to add an action to save our edits when we're complete
    ```javascript
    actions: {
      update: function(model) {
        var _this = this;
        model.save();
        this.transitionTo('s.page-manager');
      }
    }
    ```


 * add content to edit-form and add form to edit template
 Update `client/app/pods/s/page-manager/edit-page/template.hbs` with the following:
 ```html
 <form class="form-horizontal">
     <div class="form-group">
         <label for="" class="col-sm-2 control-label">Title</label>
         <div class="col-sm-10">
             {{input value=title class="form-control" placeholder="Title"}}
         </div>
     </div>
     <div class="form-group">
         <label for="" class="col-sm-2 control-label">Name</label>
         <div class="col-sm-10">
             {{input value=name class="form-control" placeholder="a friendly name for this page"}}
         </div>
     </div>
     <div class="form-group">
         <label for="" class="col-sm-2 control-label">slug (last portion of url)</label>
         <div class="col-sm-10">
             {{input value=slug class="form-control" placeholder="url-for-this-page"}}
         </div>
     </div>
     <div class="form-group">
         <label for="" class="col-sm-2 control-label">Navigation Label</label>
         <div class="col-sm-10">
             {{input value=navLabel class="form-control" placeholder="Short and sweet"}}
         </div>
     </div>
     <div class="form-group">
         <label for="" class="col-sm-2 control-label">order</label>
         <div class="col-sm-10">
             {{textarea value=order class="form-control" placeholder="a number"}}
         </div>
     </div>
     <div class="form-group">
         <label for="" class="col-sm-2 control-label">Layout</label>
         <div class="col-sm-10">
             {{input value=layout class="form-control" placeholder="standard"}}
         </div>
     </div>
     <div class="form-group">
         <label for="" class="col-sm-2 control-label">excerpt</label>
         <div class="col-sm-10">
             {{textarea value=excerpt class="form-control" placeholder="a cute little summary for the page (get your markdown on)"}}
         </div>
     </div>
     <div class="form-group">
         <label for="" class="col-sm-2 control-label">body</label>
         <div class="col-sm-10">
             {{textarea value=body class="form-control" placeholder="this is where the meat of things goes. (get your markdown on here too)" cols="80" rows="6"}}
         </div>
     </div>
     <div class="form-group">
         <label for="" class="col-sm-2 control-label">body preview</label>
         <div class="col-sm-10">
             <div>{{markdown-to-html markdown=body}}</div>
         </div>
     </div>
     <button class="btn btn-default" {{action 'update' model}}>Done Editing</button>
 </form>
 ```
 * now let's add our `edit-page` partial to `client/app/pods/s/page-manager/new/template.hbs` by adding this:
  ```handlebars
  {{partial 's/page-manager/edit-page'}}
  {{outlet}}
  ```


 * lets add a default value to the layout field to help users get the right value entered since this will be used directly to pull and render the view.

 Update `client/app/models/page.js` to add this default value so our model now looks like this:
 ```javascript
 export default DS.Model.extend({
   name: DS.attr('string'),
   title: DS.attr('string'),
   slug: DS.attr('string'),
   navLabel: DS.attr('string'),
   layout: DS.attr('string', { defaultValue: 'standard'}),
   content1: DS.attr('string'),
   content2: DS.attr('string'),
   order: DS.attr('number')
 });
 ```

 So from here, we should be able to run the site again (or if it is still running it has been reloading itself as you save your work)
 and use our `/s/page-manager/new` logic to create a new page and then view that page on the `/s/page-manager` route.

  * now lets get editing working.
    * we'll add the `edit-page` partial to the edit route here `client/app/pods/s/page-manager/edit/template.hbs`
    ```handlebars
    {{partial 's/page-manager/edit-page'}}
    {{outlet}}
    ```


    * we'll also update the edit route to support this logic as well.
  ```javascript
  export default Ember.Route.extend({
    model: function(params) {
      return this.store.find('page', params.page_id);
    },
    actions: {
      update: function (model) {
        var self = this;
        model.save().then(
          function(savedModel) {
            console.log('page ' + savedModel.get('name') + ' saved successfully');
            self.transitionTo('s.page-manager');
          },
          function(reason) {
            console.log('error saving page, reason: ' + reason);
            self.transitionTo('s.page-manager');
          }
        );
      }
    }
  });
  ```

 * now that we can create and edit pages, lets ensure that our page grid respects the order field we've added.
   * update `client/app/pods/s/page-manager/route.js` with the following to order the pages returned for our grid
   ```javascript
   export default Ember.Route.extend({
     model: function() {
       return this.store.find('page' , {sort: 'order asc'});
     }
   });
   ```

 * logically next we should add the ability to cancel edits and delete pages.

   * first, a little housekeeping is in order, lets refactor our action hooks as we've created some duplicate code that can be consolidated becuase ember will bubble events up the route hierarchy.
     * so lets move our update action hook from the edit and new routes up to the page-manager route

   Here's the updated `client/app/pods/s/page-manager/route.js`

   ```javascript
   import Ember from 'ember';

   export default Ember.Route.extend({
     model: function() {
       return this.store.find('page', {sort: 'order asc'});
     },
     actions: {
       update: function (model) {
         var self = this;
         return model.save().then(
           function(savedModel) {
             console.log('page ' + savedModel.get('name') + ' saved successfully');
             self.transitionTo('s.page-manager');
           },
           function(reason) {
             console.log('error saving page, reason: ' + reason);
             self.transitionTo('s.page-manager');
           }
         );
       }
     }
   });
   ```

   * now lets add the action hooks `delete` and `cancel` to `client/app/pods/s/page-manager/route.js` so that it looks like this:

   ```javascript
   import Ember from 'ember';

   export default Ember.Route.extend({
     model: function() {
       return this.store.find('page', {sort: 'order asc'});
     },
     actions: {
       cancel: function() {
         this.transitionTo('s.page-manager');
       },
       update: function (model) {
         var self = this;
         return model.save().then(
           function(savedModel) {
             console.log('page ' + savedModel.get('name') + ' saved successfully');
             self.transitionTo('s.page-manager');
           },
           function(reason) {
             console.log('error saving page, reason: ' + reason);
             self.transitionTo('s.page-manager');
           }
         );
       },
       delete: function(model) {
         var self = this;
         return model.destroyRecord().then(
           function() {
             self.transitionTo('s.page-manager');
           },
           function(reason) {
             console.log('error deleting page, reason was: ' + reason);
             self.transitionTo('s.page-manager');
           }
         );
       }
     }
   });
   ```

   and to make use of our new action hooks, lets update our `edit-page` template by modifying our buttons at the botton of the form like so:

   ```html
   <button class="btn btn-default" {{action 'update' model}}>Update Page</button>
   <button class="btn btn-default" {{action 'cancel' model}}>Cancel</button>
   <button class="btn btn-default" {{action 'delete' model}}>Delete Page</button>
   ```

   Lets also add a delete button to the page-manager grid also by editing the actions column in our grid here.
   editing: `client/app/pods/s/page-manager/index/template.hbs`
   ```html
   <td>
       {{#link-to 's.page-manager.edit' page classNames="btn btn-info"}}edit{{/link-to}}&nbsp;
       <button class="btn btn-info" {{action 'delete' page}}>delete</button>
   </td>
   ```

5) now that we can edit our pages, lets incorporate them into the site itself.

 * create/update the application controller adding each page into the nav menu (in a drop down?)

## **put this somewhere above**
because we have our api generally secured in sails, we need to add a policy in sails to allow the page route to respond to get requests but not allow unauthenticated requests to do any page editing when no user is logged in.
edit `server\config\policies.js` to include the following right below `'*': "hasToken",`

```javascript
PageController: {
    "find": true,
},
```
