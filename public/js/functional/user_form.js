"use strict";

var ShowBlock = Backbone.View.extend({

    subscriptions: {
        "show_form": "render_form_person"
    }, 

    clickName: function() {
        this.$el.find("#inputFormContacts").addClass("hiden");
        this.$el.find("#inputFormPersonal").addClass("hiden");
        this.$el.find("#inputFormName").removeClass("hiden");
    },

    clickContacts: function() {
        this.$el.find("#inputFormName").addClass("hiden");
        this.$el.find("#inputFormPersonal").addClass("hiden");
        this.$el.find("#inputFormContacts").removeClass("hiden");
    },

    clickPersonal: function() {
        this.$el.find("#inputFormName").addClass("hiden");
        this.$el.find("#inputFormContacts").addClass("hiden");
        this.$el.find("#inputFormPersonal").removeClass("hiden");
    },

    inputToPerson: function() {
        var key_person = ["first_name", "last_name", "skype", "email", "phone", "age", "sex"],
            key;

        _.each(key_person, function(element, key){
            this.model.set(element, this.$el.find("#" + element).val());
        }, this);

        // $.each(key_person, function(key, element){
        //     this.model.set(element, $("#" + element).val());
        // },bind(this));
    },

    templates: {
        "person_form": _.template( $("#form_person").html() ),
        "preview": _.template( $("#list").html() )      
    },

    render_preview: function() {        
        this.$el.find("#preview_information").addClass("hiden");
        this.$el.find("#board").addClass("hiden");
        this.$el.find("#view").removeClass("hiden");

        this.inputToPerson();

        this.$el.find("#list_view").html(this.templates["preview"](this.model.toJSON()));
    },
    
    render_form_person: function(model) {
        this.model = model;
        $("#my_form").html(this.templates["person_form"](this.model.toJSON()));
    },

    editForm: function() {
        this.$el.find("#preview_information").removeClass("hiden");
        this.$el.find("#board").removeClass("hiden");
        this.$el.find("#view").addClass("hiden");
    },

    set_iformation: function() {
        this.inputToPerson();

        this.model.save();

        $("#my_form").addClass("hiden");
        $("#group").removeClass("hiden");
    },

    events: {
        "click #tab_name": "clickName",
        "click #tab_contact": "clickContacts",
        "click #tab_personal": "clickPersonal",
        "click #preview_information": "render_preview",
        "click #edit": "editForm",
        "click #save": "set_iformation"
    }
});