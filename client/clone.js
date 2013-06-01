Posts = new Meteor.Collection("posts");

if (Meteor.isClient) {
  Template.history.posts = function () {
    return Posts.find();
  }

  Template.submit.events({
    
    'click button' : function (e) {
      if (e.type === "click") {
        addToHistory();
      }
    },
    
    'keypress #posttext' : function (e) {
      if (e.which === 13) {
        addToHistory();
      }
    }

  });

};

addToHistory = function() {
  var textbox = $('#posttext');
  Posts.insert({'contents': textbox.val()});
  textbox.val('');
  textbox.focus();
};