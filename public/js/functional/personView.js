var PersonView = Backbone.View.extend({
  
    tagName: "tr",

    initialize: function() {
        this.model.on("change", this.render, this);
        this.model.on("destroy", this.remove, this);
    },

    template: _.template( $("#list_group").html() ),

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    },

    events: {
        "click .edit": "editPerson",
        "click .delete": "destroy"
    },

    destroy: function() {
        this.model.destroy();
    },

    remove: function() {
        this.$el.remove();
    },

    editPerson: function() {        
        $("#my_form").removeClass("hiden");
        $("#group").addClass("hiden");

        Backbone.Mediator.pub("show_form", this.model);     
    }
});