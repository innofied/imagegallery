/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
define([
  'underscore', 
  'backbone', 
  'imagemodel'
  ], function(_, Backbone, ImageModel){

	var ImageCollection = Backbone.Collection.extend({

    // Reference to this collection's model.
    model: ImageModel

   
  });
  return new ImageCollection();
});

