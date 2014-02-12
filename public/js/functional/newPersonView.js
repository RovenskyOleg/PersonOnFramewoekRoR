var NewPersonView = Backbone.View.extend({
    el: $("#new_person_form"),

    events: {
        "click .new_person": "add_person"
    },

    add_person: function() {
        var person;

        console.log("Hi");
        $("#form").removeClass("hiden");

        person = new ShowBlock({el: $("#content"), model: new UserModel()});
        this.collection.add(person);
    }

})