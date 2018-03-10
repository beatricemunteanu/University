
joc=(function(){
    var NR_MILISECUNDE_UPDATE=300;
    var DEBUG_MODE=true;
    var MENU_HEIGHT=100;
    var SKY_WIDTH=100;
    var SKY_HEIGHT=35;
    var GROUND_WIDTH=100;
    var GROUND_HEIGHT=65;
    var CONTAINER_CASE_WIDTH=60;
    var CONTAINER_PROFETII_H=60;
    var CONTAINER_PROFETII_W=20;
    var CONTAINER_PROFETII_L=70;
    var NR_MILISECUNDE_ADD_PROFETIE=2000;
    var PROFETIE_WIDTH=100;
    var PROFETIE_HEIGHT=20;
    var NR_MILISECUNDE_HOUSE=10000;
    var NR_MILISECUNDE_GROUND=1000;
    var NR_MILISECUNDE_LIGHTNING=500;
    var NR_MILISECUNDE_DIV_DISAPPEAR=500;
    var NR_MILISECUNDE_UP_SEC=1000;
    var NR_MILISECUNDE_UP_MIN=61000;
    var MSG_DISAPPEARS=100;
    //...
    return {
            getNrMilisUpdate:function()
            {
                return NR_MILISECUNDE_UPDATE;
            },
            getDebugMode:function()
            {
                return DEBUG_MODE;
            },
            
            getMenuHeight:function()
            {
                return MENU_HEIGHT;
            },
            getSkyWidth:function()
            {
                return SKY_WIDTH;
            },
            
            getSkyHeight:function()
            {
                return SKY_HEIGHT;
            },
             getGroundWidth:function()
            {
                return GROUND_WIDTH;
            },
            
            getGroundHeight:function()
            {
                return GROUND_HEIGHT;
            },
            getContainerCaseWidth:function()
            {
                return CONTAINER_CASE_WIDTH;
            },
             getContainerProfetiiH:function()
            {
                return CONTAINER_PROFETII_H;
            },
            getContainerProfetiiW:function()
            {
                return CONTAINER_PROFETII_W;
            },
            getContainerProfetiiL:function()
            {
                return CONTAINER_PROFETII_L;
            },
             getProfetiiUpdate:function()
            {
                return NR_MILISECUNDE_ADD_PROFETIE;
            },
            getProfetieWidth:function()
            {
                return PROFETIE_WIDTH;
            },
            getProfetieHeight:function()
            {
                return PROFETIE_HEIGHT;
            },
            getHouseAppears:function()
            {
                return NR_MILISECUNDE_HOUSE;
            },
            getGroundBack:function()
            {
                return NR_MILISECUNDE_GROUND;
            },
            getLightning:function()
            {
               return NR_MILISECUNDE_LIGHTNING;
            },
            getDivDisappear:function()
            {
                return NR_MILISECUNDE_DIV_DISAPPEAR;
            },
            getNrMilisUpdateSec:function()
            {
                return NR_MILISECUNDE_UP_SEC;
            },
            getNrMilisUpdateMin:function()
            {
                return NR_MILISECUNDE_UP_MIN;
            },
            getMsgDisappears:function()
            {
                return MSG_DISAPPEARS;
            }
       

            //...
        }
    })();