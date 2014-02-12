    var PeopleCollection = Backbone.Collection.extend({
        url: "people",

        model: UserModel,

        initialize: function() { 
            this.fetch();
        }
    })