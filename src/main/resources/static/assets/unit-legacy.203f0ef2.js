System.register([],(function(e){"use strict";return{execute:function(){e("t",{s:"秒",m:"分",h:"时",d:"天",w:"周",M:"月",y:"年",forever:"永久"}),e("a",[{label:"秒",value:"s"},{label:"分",value:"m"},{label:"时",value:"h"},{label:"天",value:"d"},{label:"周",value:"w"},{label:"月",value:"M"},{label:"年",value:"y"},{label:"永久",value:"forever"}]),e("g",(function(e){switch(e){case"s":case"m":return 59;case"h":return 23;case"d":return 31;case"w":return 52;case"M":return 12;case"y":return 100;case"forever":return 99999999;default:return 0}})),e("b",(function(e){if(!e)return 0;if(!e.value)return 0;if(!e.unit)return 0;if("forever"===e.unit)return-1;var r=parseInt(e.value);switch(e.unit){case"s":return r;case"m":return 60*r;case"h":return 60*r*60;case"d":return 60*r*60*24;case"w":return 60*r*60*24*7;case"M":return 60*r*60*24*30;case"y":return 60*r*60*24*365;default:return 0}}))}}}));