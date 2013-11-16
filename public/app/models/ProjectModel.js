define([
  'underscore',
  'backbone'
], function(_, Backbone) {

    var ProjectModel = Backbone.Model.extend({

            //instance methods
            defaults: {
                id: null,
                name: null
            },

            idAttribute: 'id',

            initialize: function(options) {

            }

        },{
            //static methods
        }
    );

  return ProjectModel;

});