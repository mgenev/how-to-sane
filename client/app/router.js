import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
  this.route("s", {
      path: "s"
  }, function() {

      this.route("posts", function() {
          this.route("post", {
              path: ":post_id"
          });

          this.route("create", {
              path: "create"
          });
      });

      this.route("templates", function() {
          this.route("template", {
              path: ":template_id"
          });

          this.route("create", {
              path: "create"
          });
      });

      this.route("media", function() {
          this.route("upload", {
              path: "upload"
          });

          this.route("albums", function() {
              this.route("album", {
                  path: ":album_id"
              });

              this.route("create", {
                  path: "create"
              });
          });
      });

      this.route("photos", function() {
          this.route("photo", {
              path: ":photo_id"
          });

          this.route("create", {
              path: "create"
          });
      });

      this.route("users", function() {
          this.route("user", {
              path: ":user_id"
          });

          this.route("create", {
              path: "create"
          });
      });

      this.route("feed", function() {
          this.route("status", {
              path: "status"
          });
      });

      this.route("vendors", function() {
          this.route("vendor", {
              path: ":vendor_id"
          });

          this.route("create", {
              path: "create"
          });
      });

      this.route("homepages", function() {
          this.route("homepage", {
              path: ":homepage_id"
          });

          this.route("create", {
              path: "create"
          });
      });


      this.route("events", function() {
          this.route("event", {
              path: ":event_id"
          });

          this.route("create", {
              path: "create"
          });
      });

      this.route('page-manager', function() {
        this.route('new');

        this.route('edit', {
          path: '/edit/:page_id'
        });
      });
    });


  this.route("login");
  this.route("register");

  this.resource('pages', { path: 'pages/*slug' }, function() {});

});

export default Router;
