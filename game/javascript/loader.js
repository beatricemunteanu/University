	
 class Loader{
    constructor()
    {
      this.Imagini= new Object();
      this.Sunete= new Object();
      this.Mesaje= new Object();
      this.Nivel= new Object();
      this.Cursor= new Object();
      

    }


    loadResurse(fisier_xml){
      var id=this;
      $.ajax({
				url: fisier_xml,
				type:"GET",
				dataType: "xml",
				success: function(xml)
					{
					var $xml = $(xml);
					var $imagini = $xml.find( "imagine" );
					$imagini.each(function(i){
					
						var img= $("<img></img>");
          
						img.data("aparitie",$(this).attr("aparitie"));
						img.css("width",parseInt($(this).attr("w")));
						img.css("height",parseInt($(this).attr("h")));
						img.attr("src",$(this).text());
				    id.Imagini[$(this).attr("id")]=img;
						});


					 var $sunete=$xml.find("sunet");
			        $sunete.each(function(i){
				        var audio=$("<audio> </audio>");
				        audio.attr("src",$(this).text());
				        id.Sunete[$(this).attr("id")]=audio;
				        
				        });

				    },
                   	error: function(err){
					alert(err);
			    }
			 });

            }

    loadMessages(fisier_xml,lang){
      var id=this;
    	$.ajax({
				url: fisier_xml,
				type:"GET",
				dataType: "xml",
				success: function(xml)
				{
					var $xml = $(xml);
          var $mesaje=$xml.find("mesaje");
          $mesaje.each(function(i){
                    console.log(lang); 
          if($(this).attr("lang")==lang)
          {
            	var $mesaj=$(this).children()
              $mesaj.each(function(i){
              var msg=$("<p></p>");
              msg.innerHTML=$(this).text();
              id.Mesaje[$(this).attr("id")]=msg;
              console.log(msg);
            	});

           }       	
                    	
           });
         },
          error: function(err){
					alert(err);
			    }

	    });
    }

   loadSetari(fisier_xml,level)
   {
   	    var id=this;
        $.ajax({
				url: fisier_xml,
				type:"GET",
				dataType: "xml",
				success: function(xml)
				{
					var $xml = $(xml);
          var $nivele=$xml.find(level);
          var $niveleC=$nivele.children();
          $niveleC.each(function(i){
          id.Nivel[$(this).prop("tagName")]=$(this).text();
         });
                     
                       
                    	
           var $cursor=$xml.find("cursor");
           var $cursorC=$cursor.children();
           $cursorC.each(function(i){
                      
            id.Cursor[$(this).prop("tagName")]=$(this).text();
          });
          },
        	error: function(err){
					alert(err);
			    }

	    });
   }


    

    getImage(id_xml){
         
           if(this.Imagini[id_xml].data("aparitie")=="multipla")
           {
           	var img=$("<img> </img>")
           	img.css("width",parseInt(this.Imagini[id_xml].css("width")));
			      img.css("height",parseInt(this.Imagini[id_xml].css("height")));
			      img.attr("src",this.Imagini[id_xml].attr("src"));
			     
            return img;
           }
           
           else
           
            return this.Imagini[id_xml];
            
          };

    getSound(id_xml){
          return this.Sunete[id_xml];
    };
    
    getMessage(id_xml)
    {
    	return this.Mesaje[id_xml];
    }

    getLevel(prop)
    {
    	return this.Nivel[prop];
    }

    getCursor(prop){
      return this.Cursor[prop];
    }

    init(lang,level){
         this.loadResurse("xml/resurse.xml");
         this.loadMessages("xml/mesaje.xml",lang);
         this.loadSetari("xml/setari.xml",level);
       
    }
}




