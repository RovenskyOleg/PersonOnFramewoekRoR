$(function() {
    // Модель одного человека 
    var UserModel = Backbone.Model.extend({
        defaults: {
            first_name: "Dima",
            sex: "M"
        }
    });

    // список людей
    var PeopleCollection = Backbone.Collection.extend({
        model: UserModel,

        initialize: function() { 
            this.add( new UserModel({
                first_name: "Misha",
                sex: "M"
            }));

            this.add( new UserModel({
                first_name: "Andrey",
                sex: "M"
            }));

            this.add( new UserModel({
                first_name: "Alexsey",
                sex: "M"
            }));

            this.add( new UserModel({
                first_name: "Dasha",
                sex: "S"
            }));

            this.add( new UserModel({
                first_name: "Ura",
                sex: "M"
            }));

            this.add( new UserModel({
                first_name: "Oleg",
                sex: "M"
            }));

            this.add( new UserModel({
                first_name: "Oleg",
                sex: "M"
            }));
        }
    });

    // Вид списка людей
    var PeopleView = Backbone.View.extend({
        tagName: 'td',
     
        render: function() {
            this.collection.each(this.render_one, this);
     
            return this;
        },

        render_one: function(person) {
            var personView = new PersonView({model: person});
            this.$el.append(personView.render().el);
        }

    });

    // Вид одного человека
    var PersonView = Backbone.View.extend({
  
        tagName: "tr",

        template: _.template( $("#list").html() ),

        render: function() {
            this.$el.html( this.template( this.model.toJSON() ) );

            return this;
        },

        events: {
            "click #preview": "render"
        }
    });

    var peopleCollection = new PeopleCollection();

    var peopleView = new PeopleView({collection: peopleCollection});

    $("#view").append(peopleView.render().el);
    //$("#view").html(peopleView.el);
}); 

// Экземпляры колекции
    // var people = [
    //     {
    //         name: "Misha",
    //         sex: "M"
    //     },
    //     {
    //         name: "Andrey",
    //         sex: "M"
    //     },
    //     {
    //         name: "Alexsey",
    //         sex: "M"
    //     },
    //     {
    //         name: "Dasha",
    //         sex: "S"
    //     },
    //     {
    //         name: "Ura",
    //         sex: "M"
    //     },
    //     {
    //         name: "Oleg",
    //         sex: "M"
    //     },
    //     {
    //         name: "Oleg",
    //         sex: "M"
    //     }
    // ];
