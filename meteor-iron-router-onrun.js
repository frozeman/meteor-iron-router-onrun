Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {

    this.route("route1", {
        path: "/",
        onRun: function(){
          console.log('Should run 1');
        },
        onBeforeAction: function(){
          console.log('Calls on onBeforeAction');
          this.next();
        }
    });
    this.route("route2", {
        path: "/route2",
        onRun: function(){
          console.log('Should run 2');
        }
    });
});
