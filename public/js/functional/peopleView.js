var PeopleView = Backbone.View.extend({
    tagName: 'td',

    initialize: function() {
        this.collection = new PeopleCollection();
        //this.collection.on("add", this.render_one, this);
        //this.render();// - mast work! :)
        this.on("sync", this.render(), this);
    },

    template: _.template($("#table_person").html()),
 
    render: function() {
        this.$el.html(this.template());
        this.collection.each(this.render_one, this);
 
        return this;
    },

    render_one: function(person) {
        var personView;

        personView = new PersonView({model: person});
        this.$el.find("table").append(personView.render().el);
    },

    events: {
        "click .button_new_person": "add_person_model"
    },

    add_person_model: function() {
        var new_model = new UserModel();

        $("#my_form").removeClass("hiden");
        $("#group").addClass("hiden");

        Backbone.Mediator.pub("show_form", new_model);

        this.collection.add(new_model);
    }
});