let cubicFeet       = document.getElementById("cubicFeet");
let cubicMeters     = document.getElementById("cubicMeters");
let cubicInches     = document.getElementById("cubicInches");
let cubicCm         = document.getElementById("cubicCm");
let cubicYards       = document.getElementById("cubicYards");
let cubicKilometers = document.getElementById("cubicKilometers");
let cubicMiles      = document.getElementById("cubicMiles");


function cubicFeetToOther(val){
   cubicMeters.value = val*0.0283168466;
   cubicInches.value = val*1728;
   cubicCm.value = val*28316.8466;
   cubicYards.value = val/27;
   cubicKilometers.value = val*0.0000000000283168466;
   cubicMiles.value = val/147197952000;
}

function cubicMetersToOther(val){
   cubicFeet.value = val/0.0283168466;
   cubicInches.value = val/0.000016387064;
   cubicCm.value = val*1000000;
   cubicYards.value = val/0.764554858;
   cubicKilometers.value = val/1000000000;
   cubicMiles.value = val/4168181825.44058;
}
function cubicInchesToOther(val){
   cubicFeet.value = val/1728;
   cubicMeters.value = val*0.000016387064;
   cubicCm.value = val*16.387064;
   cubicYards.value = val/46656;
   cubicKilometers.value = val*0.000000000000016387064;
   cubicMiles.value = val/254358061000000;
}
function cubicCmToOther(val){
   cubicFeet.value = val/28316.8466;
   cubicMeters.value = val/1000000;
   cubicInches.value = val/16.387064;
   cubicYards.value = val/764554.858;
   cubicKilometers.value = val/1000000000000000;
   cubicMiles.value = val/4168181830000000
}
function cubicYardsToOther(val){
   cubicFeet.value = val*27;
   cubicInches.value = val*46656;
   cubicCm.value = val*0.764554858;
   cubicMeters.value = val*764554.858;
   cubicKilometers.value = val*0.000000000764554858;
   cubicMiles.value = val/5451776000;
}
function cubicKilometersToOther(val){
   cubicFeet.value = val/0.0000000000282168466;
   cubicInches.value = val/0.000000000000016387064;
   cubicMeters.value = val*1000000000;
   cubicCm.value = val*1000000000000000;
   cubicYards.value = val/0.00000000076455858;
   cubicMiles.value = val/4.16818183;
}
function cubicMilesToOther(val){
   cubicFeet.value = val*147197952000;
   cubicInches.value = val*254358061000000;
   cubicCm.value = val*4168181830000000;
   cubicYards.value = val*5451766000;
   cubicKilometers.value = val*4.16818183;
   cubicMeters.value = val*4168181825.44058;
}

function convertToOthers(convertFrom,value){
switch(convertFrom){
   case "cubicFeet"       : cubicFeetToOther (parseFloat(value));break;
   case "cubicMeters"     : cubicMetersToOther (parseFloat(value));break;
   case "cubicInches"     : cubicInchesToOther (parseFloat(value));break;
   case "cubicCm"         : cubicCmToOther (parseFloat(value));break;
   case "cubicYards"      : cubicYardsToOther (parseFloat(value));break;
   case "cubicKilometers" : cubicKilometersToOther (parseFloat(value));break;
   case "cubicMiles"      : cubicMilesToOther (parseFloat(value));break;
   }

}