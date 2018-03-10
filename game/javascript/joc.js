	loader=new Loader();
container=document.createElement("div");
var numeUtilizator;
var timpJoc;
var afisHS;
var ground;
var sky;
var nivel;
var containerCase;
var containerProfetii;
var profetii=["fulger","vulcan","inundatie"];
var nrProfetiiContainer=0;
var ok=0;
var casuteExistente;
var viata;
var mesajGresit;
var mesajPierdut;
var mesajCastig;
var afisari;
var secunde;
var minute;
var bestScore;
var startJoc=1;
var scor=0;
var stop=0;
var timeOut=0;
var sunetFulger;
var sunetVulcan;
function int_rand(a,b){
	return Math.floor(Math.random()*(b-a)+a);
}
window.onload=function() {
	
  //meniu setari
	var div=document.createElement("div");
	div.style.height=joc.getMenuHeight()+"%";
	div.style.background="#EBF7E3";
	document.body.appendChild(div);
    
    //date
    var p=document.createElement("p");
    var date=new Date();
    p.style.textAlign="right";
    date=date.toString();
    date=date.substring(0,15);
    p.innerHTML=date;
    
    //input text
    var containerInp=document.createElement("div");
    containerInp.className="styleInp";
    containerInp.appendChild(p);
    var p=document.createElement("p");
    p.innerHTML="Nume utilizator:";
    var input_text=document.createElement("input");
    input_text.type="text";
    input_text.placeholder="Numele dvs";
    containerInp.appendChild(p);
    containerInp.appendChild(input_text);
    div.appendChild(containerInp);

    //input range
    var containerInp=document.createElement("div");
    containerInp.className="styleInp";
    var p=document.createElement("p");
    p.innerHTML="Timp de joc(minute):";
    var input_range=document.createElement("input");
    input_range.type="range";
    input_range.min="1";
    input_range.max="10";
    input_range.defaultValue="3";
    var val=document.createElement("p");
    input_range.oninput=function()
    {
    	val.innerHTML=this.value;
    }
    val.style.display="inline-block";
    containerInp.appendChild(p);
    containerInp.appendChild(input_range);
    containerInp.appendChild(val);
    div.appendChild(containerInp);
    

    //input radio
    var containerInp=document.createElement("div");
    containerInp.className="styleInp";
    var p=document.createElement("p");
    p.innerHTML="Nivel de joc:";
    containerInp.appendChild(p);
    var nivel=["incepator","mediu","avansat"];
   for(var i=0;i<3;i++)
   {
    var input_radio=document.createElement("input");
    input_radio.type="radio";
    input_radio.name="nivel";
    input_radio.id=nivel[i];
    var label=document.createElement("label");
    label.innerHTML=nivel[i];
    label.for=nivel[i];
    containerInp.appendChild(input_radio);
    containerInp.appendChild(label);
   }
   div.appendChild(containerInp);

   //select simplu
   var containerInp=document.createElement("div");
   containerInp.className="styleInp";
   var p=document.createElement("p");
   p.innerHTML="Limba:";
   var select=document.createElement("select");
   var option=document.createElement("option");
   option.innerHTML="ro";
   select.appendChild(option);
   var option=document.createElement("option");
   option.innerHTML="en";
   select.appendChild(option);
   containerInp.appendChild(p);
   containerInp.appendChild(select);
   div.appendChild(containerInp);

  //input checkbox
   var containerInp=document.createElement("div");
   containerInp.className="styleInp"; 
   var input=document.createElement("div");
   var input_check=document.createElement("input");
   input_check.type="checkbox";
   input_check.id="check";
   var label=document.createElement("label");
   label.innerHTML="Afisare cel mai bun scor:";
   label.for="check";
   input.appendChild(label);
   input.appendChild(input_check);
   containerInp.appendChild(input);
   div.appendChild(containerInp);

   //select multiplu
   var containerInp=document.createElement("div");
   containerInp.setAttribute("class","styleInp"); 
   var p=document.createElement("p");
   p.innerHTML="Alege profetiile care te inspaimanta cel mai tare:";

   var select2=document.createElement("select");
   select2.multiple=true;
   select2.style.marginRight="30px";
   select2.style.verticalAlign="top";
   for(var i=0;i<3;i++)
   {
     var option=document.createElement("option");
     option.innerHTML=profetii[i];
     select2.appendChild(option);
   }
   containerInp.appendChild(p);
   containerInp.appendChild(select2);
   div.appendChild(containerInp);
 
   //text area
   var textarea=document.createElement("textarea");
   textarea.setAttribute("rows","5");
   textarea.setAttribute("cols","35");
   containerInp.appendChild(textarea);
   div.appendChild(containerInp);   

   var buton=document.createElement("button");
   buton.innerHTML="start game";
   containerInp.appendChild(buton);
   div.appendChild(containerInp);
   
   buton.onmouseover=function()
   {
    buton.style.background="#4CAF50";
    buton.style.color="white";
   }

   buton.onmouseout=function()
   {
    buton.style.background="white";
    buton.style.color="black";
   }

   buton.onclick=function()
   {
       
       //preluare date input 
       numeUtilizator=input_text.value;
       var patt1 = /[^A-Za-z0-9._]/g; 
       var result = numeUtilizator.match(patt1);
       if(result==null)
         startJoc=1;
        else
          {
          alert("Nu ati introdus numele sau numele introdus contine caractere nepermise");
          startJoc=0;
        }

       timpJoc=input_range.value;
       var nvl;
       var inpRadio=document.querySelectorAll("input[type=radio]");
       
       if(select.options[0].selected==true)
       	   limba="ro";
       else
       	   limba="eng";

       checked=0;
       for(var i=0;i<3;i++)
       {
          if(inpRadio[i].checked==true)
             {
                 nvl=inpRadio[i].nextElementSibling.innerHTML;         
     	           loader.init(limba,nvl);
                 checked=1;
 
                }
        }

       if(checked==0)
        if(confirm("Nu ati ales nivelul de joc. Apasati 'ok' daca doriti sa continuati cu nivelul de incepator"))
           {    
               nvl=inpRadio[0].nextElementSibling.innerHTML;         
               loader.init(limba,nvl);
               startJoc=1;
          }
        else startJoc=0;
        
       if(input_check.checked==true)
       	afisHS=1;
       else
       	afisHS=0;
       
       var patt1 = /[^A-Za-z ]/g; 
       var textArea=textarea.value;
       var result = textArea.match(patt1);
       if(result!=null)
          alert("text invalid");

 
  if(startJoc)
  {  
    document.body.innerHTML="";
    document.body.style.backgroundColor="white";
    document.body.style.padding="0";
    
    sky=document.createElement("div");
    sky.style.height=joc.getSkyHeight()+"%";
    sky.style.width=joc.getSkyWidth()+"%";
    sky.style.background="linear-gradient(blue, lightblue)";
    document.body.appendChild(sky);
    
    ground=document.createElement("div");
    ground.style.height=joc.getGroundHeight()+"%";
    ground.style.width=joc.getGroundWidth()+"%";
    ground.style.background="linear-gradient(to bottom right, #284d00, green)";
    document.body.appendChild(ground);
    

    var apel;
    apel=0;
    
    containerCase=document.createElement("div");
    containerCase.style.height=joc.getGroundWidth()+"%";
    containerCase.style.width=joc.getContainerCaseWidth()+"%";
    containerCase.style.boxSizing="border-box";
    containerCase.style.paddingLeft="10%";
    ground.appendChild(containerCase);
    var v;
   	$( document ).ajaxComplete(function(){

       //preiau din loader Imagni, mesaje etc
       nr_case=loader.getLevel("nr_case");
       if(apel==0)
        {  
        for(var i=0; i<nr_case;i++)
      	   {
      	    var img=loader.getImage("casa");
            containerCase.appendChild(img[0]);
            apel=1;
            }
         viata=loader.getLevel("viata");
         mesajGresit=loader.getMessage("fail");
         mesajPierdut=loader.getMessage("pierdut");
         mesajCastig=loader.getMessage("castig");
         mesajTimp=loader.getMessage("timp");
         cursorWidth=loader.getCursor("width");
         cursorHeight=loader.getCursor("height");
         noLightnings=loader.getLevel("fulgere");
         updateProfetie=loader.getLevel("timp_ap_profetie");
         sunetFulger=loader.getSound("fulger");
         
        }
     
    });
   	$( document ).ajaxStop(function(){
    var casute=document.getElementsByTagName("IMG");
    for(var i=0;i<casute.length;i++)
       {
       	casute[i].className="casute";
       	casute[i].id=i.toString();
       }
    });
     
     containerProfetii=document.createElement("div");
     containerProfetii.style.height=joc.getContainerProfetiiH()+"%";
     containerProfetii.style.width=joc.getContainerProfetiiW()+"%";
     containerProfetii.style.position="absolute";
     containerProfetii.style.left=joc.getContainerProfetiiL()+"%";
     containerProfetii.style.zIndex="3";
     containerProfetii.style.backgroundColor="rgb(200,200,200)";
     containerProfetii.style.top="10%";
     document.body.appendChild(containerProfetii);
     
     addProfetii();
     
     //afisare scor, timp
     afisari=document.createElement("div");
     afisari.style.width="200px";
     afisari.style.top="20px";
     afisari.style.zIndex="7";
     afisari.style.position="absolute";
     afisari.style.left="5%";
     afisari.style.fontSize="20px";
     document.body.appendChild(afisari);
   

     var updateJoc=setInterval(function()
          {
            if(!stop)
            {
             //daca inca se joaca
             afisari.innerHTML="Viata:"+viata+" Scor:"+scor;
             scor++;
            
            casuteExistente=document.getElementsByClassName("casute");
            if(casuteExistente.length==0 && viata !=0)   //-------->nu mai sunt casute: A castigat
            {
              addMesaj(mesajCastig,0);
              scor--;
              var txt=document.createTextNode("Scor:" + scor);
              m=document.getElementById("mesaj");
              m.insertBefore(txt,m.children[0]);
              stop=1;
            }
            if(viata==0 || containerProfetii.children.length==9)        //------>daca nu mai are viata sau containerul de profetii s-a umplut
            {
              addMesaj(mesajPierdut,0);
              
              scor=(scor-1)*casuteExistente.length;
              var txt=document.createTextNode("Scor:" + scor);
              m=document.getElementById("mesaj");
              m.appendChild(txt);
              br=document.createElement("br");
              m.insertBefore(br,m.childNodes[1]);
              
              stop=1;

            }
            if(timeOut)           //-------> daca s-a scurs timpul de joc: A pierdut
            {
              addMesaj(mesajTimp,0);
              scor=(scor-1)*casuteExistente.length;
              var txt=document.createTextNode("Scor:" + scor);
              m=document.getElementById("mesaj");
              m.appendChild(txt);
              br=document.createElement("br");
              m.insertBefore(br,m.childNodes[1]);
              
              stop=1;
              
            }
        
          
            }
          }           
      ,joc.getNrMilisUpdate());

     
     //local storage
     var l=document.createElement("p");
     l.id="localS";
     l.innerHTML="Best Score:"+ localStorage.getItem("bestScore");
     document.body.appendChild(l);
     var updateStorage=setInterval(function(){
            if(stop)
           {
            if (bestScore=localStorage.getItem("bestScore"))
                if(bestScore==0)
                   bestScore=scor.toString();
                else
                  bestScore=(Math.min(parseInt(bestScore),scor)).toString(); 
            else
               bestScore=0; // getItem() a returnat null, deci e prima oara cand am incarcat pagina, sau prima oara dupa ce a fost sters campul "nr" din localStorage, asa ca setez variabila la 0
        
           localStorage.setItem("bestScore",bestScore);

            l.innerHTML="Best Score:"+ localStorage.getItem("bestScore");
           }
         },joc.getNrMilisUpdate());

    
     //afisare timp de joc
     var time=document.createElement("div");
     time.style.width="200px";
     time.style.top="10%";
     time.style.zIndex="7";
     time.style.position="absolute";
     time.style.left="5%";
     time.style.fontSize="20px";
     document.body.appendChild(time);
     minute=0;
     secunde=0;
     var updateSec=setInterval(function()
     {
       if(minute != timpJoc)
      {
        if(!timeOut && !stop)
        {
         if(secunde==60)
         	secunde=0;
         time.innerHTML=minute+":"+secunde;
         secunde++;
       }
     }
      else
          timeOut=1;

     },joc.getNrMilisUpdateSec());
     var updateMin=setInterval(function(){
        if(!stop && !timeOut)
          minute++;
     },joc.getNrMilisUpdateMin());


     var mouseP=0;
     var mouseDown=0;
     var fist_coord_x;
     var fist_coord_y;
     
     containerCase.onmouseenter=function()
     {
        mouseP=1; //-----> poate face dreptungiul rosu cu ajutorul cursorului doar daca cursorul este pe pamant
     }
      containerCase.onmouseleave=function()
     {
        mouseP=0;
     }
     
     div_coord=document.createElement("div");
     div_coord.style.border="1px solid black";
     div_coord.style.backgroundColor="rgba(255, 0, 0, 0.5)";
     document.body.appendChild(div_coord);


     var last_coord_X;
     var last_coord_Y;

     window.onmousedown=function(e)
     {
     	if(mouseP==1 && !stop)     //-----> poate face dreptungiul rosu cu ajutorul cursorului doar daca cursorul este pe pamant
                                //        si jocul inca nu s-a terminat
        {
         div_coord.style.left=e.pageX+"px";
		     div_coord.style.top=e.pageY+"px";
		     div_coord.style.position="absolute";

		  first_coord_x=e.pageX;
		  first_coord_y=e.pageY;
          mouseDown=1;
		}
    }

    

   $( document ).ajaxStop(function(){

     window.onmouseup=function(e)
     {
        mouseDown=0;
           
        var divWidth=window.getComputedStyle(div_coord, null).getPropertyValue("width");
        var divHeight=window.getComputedStyle(div_coord, null).getPropertyValue("height");

        var divWidth=divWidth.replace( /[^\d.]/g, '' );
        var divHeight=divHeight.replace( /[^\d.]/g, '' );

        div_coord.style.width=Math.min(divWidth,cursorWidth)+"px";
	      div_coord.style.height=Math.min(divHeight,cursorHeight)+"px";

	    var divDisappear=setTimeout(function(){
		     	div_coord.style.width="0px";
		     	div_coord.style.height="0px";
		     },joc.getDivDisappear());

        var idR=[];
        if(containerProfetii.firstChild.innerHTML=="fulger")  //daca prima profetie e "fulger" se elimina 3 casute
        { 
          //animatia fulgerelor 
          var aux=noLightnings;     
          var lightnings=setInterval(function(){
          	if(aux!=0 && !stop)
          	{
          		drawLightning();
              sunetFulger[0].play();
                aux--;

            }},joc.getLightning());
          if(aux==0)
          	{
          		var noMore=clearInterval(lightnings);
          	}   

          var coordDIV=div_coord.getBoundingClientRect();
          casuteExistente=document.getElementsByClassName("casute");   
         var  nrCasuteDispar=0;
          if(casuteExistente.length>0)
          {
            //dispar doar n casute care sunt in coliziune cu dreptunghiul

          	for(var i=0;i<casuteExistente.length;i++)
          	{
               
          	 var coord_casa=casuteExistente[i].getBoundingClientRect();
          	if(test_coliziune(window.scrollY+coordDIV.top,window.scrollX+coordDIV.left,coordDIV.height,coordDIV.width,
		       	window.scrollY+coord_casa.top,window.scrollX+coord_casa.left,coord_casa.height,coord_casa.width))
		     	{
			   	if(nrCasuteDispar<3)
			     {
			     	casuteExistente[i].style.visibility="hidden";
				    idR[nrCasuteDispar]=casuteExistente[i].id;
				    nrCasuteDispar++;
            console.log(idR);
				    }
			    }
		     }

         for(i=0;i<nrCasuteDispar;i++)
         {
            house=document.getElementById(idR[i]);
            house.className="removed";
         }
        }
     
          //casele reapar
         var houseApears=setTimeout(function()  
	       { 
	         
           if(!stop)
            for(var i=0; i<nrCasuteDispar;i++)
	         {
	         	house=document.getElementById(idR[i]);
	         	house.style.visibility="visible";
	          house.className="casute";
	          }
	       },joc.getHouseAppears());


          containerProfetii.removeChild(containerProfetii.firstChild);   //se sterge profetia fulger
          nrProfetiiContainer--;
          

	    }  
		                 
       } 
	 });

   
   window.onmousemove=function(e)
     {
        
         if(mouseDown)
         {  
	    
	         	div_coord.style.width=e.pageX-first_coord_x+"px";
	         	div_coord.style.height=e.pageY-first_coord_y+"px";
          
	     }
        
     }
   	         

  window.onkeypress=function(e){;
      var cod_tasta=e.charCode?e.charCode:e.keyCode;

     if(!stop)
      if(cod_tasta==105)    //daca se apara tasta i
        { 
         if(containerProfetii.firstChild.innerHTML=="inundatie")
         {
         	  containerProfetii.removeChild(containerProfetii.firstChild);
            nrProfetiiContainer--;
            removeHouse("blue"); //dispare o casa aleator, pamantul se face albastru
          }

          else
          {
              if(viata>1)
              	{
              		addMesaj(mesajGresit,1);
              	}
              if(viata!=0)
                viata--;

              	
          }
        }
       else if(cod_tasta==118)   //daca se apasa tasta v
       {
       	if(containerProfetii.firstChild.innerHTML=="vulcan")
         {
         	containerProfetii.removeChild(containerProfetii.firstChild);
            nrProfetiiContainer--;
            removeHouse("red"); //dispare o casa aleator pamantul se face rosu
            
          }

          else
          {
              if(viata>1)
              	{
              		addMesaj(mesajGresit,1);
              	}
              if(viata!=0)
                viata--;
            
              	
          }

       }

       else
       { 
          if(viata>1)
          {
           addMesaj(mesajGresit,1);  //la apasarea unei taste gresite, apare un mesaj si se scade din viata
         }
         if(viata!=0)
                viata--;

       }
     }

    }

  }
     
     //adauga mesaje: Ai murit, ai catigat etc
    function addMesaj(mesaj,disappear)
    {   
      
      mesaj[0].id="mesaj";
    	mesaj[0].innerHTML=mesaj.innerHTML;
    	document.body.appendChild(mesaj[0]);

    	var MessageDisapears=setTimeout(function(){
           if(disappear)
           { 
            console.log(disappear);
            var m=document.getElementById("mesaj");
            document.body.removeChild(m);
          }
    	},joc.getMsgDisappears());
    }

    //functia care adauga profetii
    function addProfetii()
    { 
       $( document ).ajaxStop(function(){	
    	var adaugareProfetii=setInterval(function()
    		{    
    		 if(nrProfetiiContainer<9 &&!stop)
    		 {

    		  var p=document.createElement("p");
              p.innerHTML=profetii[int_rand(0,3)];
              p.style.width=joc.getProfetieWidth()+"%";
              p.style.textAlign="center";
              p.style.background="linear-gradient(to bottom, #B5B5B5 0%, #AEC89D 100%)"//rgba(200,200,200,0.5)";
              p.style.color="black";
              p.style.boxSizing="border-box";
              p.style.paddingBottom="3px";
              p.style.paddingTop="3px";
              p.style.fontFamily="calibri";
              containerProfetii.appendChild(p);
              
              nrProfetiiContainer++;
              }

    		 }, updateProfetie);
    });
     
    }

   function test_coliziune(top1,left1,h1,w1,top2,left2,h2,w2){
        if(left1< left2+ w2 &&
        left1+ w1> left2 &&
        top1 < top2 + h2 &&
        top1 + h1 > top2) 
            return true;
  }
    
    //se "elimina" cate o casa random 
    function removeHouse(culoare)
    {
       ground.style.background=culoare;

       var back=setTimeout(function(){
                   ground.style.background="green";
                 }
                  ,joc.getGroundBack());
       casuteExistente=document.getElementsByClassName("casute");
       var indHouseRemoved=int_rand(0, casuteExistente.length);
       casuteExistente[indHouseRemoved].style.visibility="hidden";
       var idRemovedHouse=casuteExistente[indHouseRemoved].id;
       casuteExistente[indHouseRemoved].className="removed";
       
       var houseApears=setTimeout(function()
       { 
        if(!stop)
        { var house=document.getElementById(idRemovedHouse);
         house.style.visibility="visible";
         house.className="casute";
       }
       },joc.getHouseAppears());
        
    }


    //desenarea fulgerelor
    function drawLightning() {
  
      var canvas = document.createElement("canvas");
      canvas.className="fulger";
      canvas.style.width="100px";
      canvas.style.height="100px";
      canvas.style.position="absolute";
      canvas.style.left="45%";
      canvas.style.zIndex="5";
      canvas.style.top="0px";
      if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

	    // primul triunghi
	    ctx.beginPath();
	    ctx.moveTo(50, 100);
	    ctx.lineTo(105, 0);
	    ctx.lineTo(20, 105);
	    ctx.fill();

	    // al doilea triunghi
	    ctx.beginPath();
	    ctx.moveTo(50, 150);
	    ctx.lineTo(50, 70);
	    ctx.lineTo(100, 50);
	    ctx.closePath();
	    ctx.fill();
 		 }
       document.body.appendChild(canvas);
	}


}

