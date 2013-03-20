/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
define(['jquery','underscore','backbone'], 
    function($, _, Backbone){

        var ThumbView = Backbone.View.extend({
            el: $('body'), // el attaches to existing element
    
            events: {
            //'keydown input#inputtextbox': 'addItem'
            },
    
            initialize: function(){
                _.bindAll(this, 'getImage','render'); // every function that uses 'this' as the current object should be in here
                this.getImage();
            },
            
            getImage : function(){
                $.ajax({
                    dataType: 'jsonp',
                    url: 'http://api.flickr.com/services/rest/?method=flickr.interestingness.getList&format=json&api_key=f31fb5026b883de1cef583b4e7a9a183&jsoncallback=?',
                    success: function(data){
                        if(data.stat==='ok'){
                            for(var i=1; i<2;i++){
                                var val=data.photos.photo[i];
                                var url='http://farm'+val.farm+'.staticflickr.com/'+val.server+'/'+val.id+'_'+val.secret+'_s.jpg';
                                console.log(url);
                                $(this.el).append('<img src="'+url+'" class="thumb"/>');
                                //this.render(data.photos.photo[i]);
                            }
                        }
        
                    }
                }); 
            },
    
            render: function(val){
                $(this.el).append('<img src="http://farm'+val.farm+'.staticflickr.com/'+val.server+'/'+val.id+'_'+val.secret+'_s.jpg" class="thumb"/>');
            }
        });
        return ThumbView;
    });

