var insert = document.getElementById("insert");
var otherDays = document.getElementById("otherDays");
var array = [];
var input = document.getElementById("text");
var randomText =[
"تذكر يا عزيزي ان الحياة تحتاج للعمل الشاق وللتخطيط",
"لا تفكر بالماضي ولا بالمستقبل عيش في الزمن الحالي فقط",
"عزيزي الحياة ابسط مما تتخيل,استمتع بها",
"الفوز ليس من يصل اولا الفوز الحقيقي هو عدم الاستسلام",
"لا تنسى انا الحياة مجرد قصة قصيرة ستنتهي اعمل لأجل الاخرة اكثر من الدنيا"
];
var num =0 ; 
// time function
var valuees ="";


var hourL = document.getElementById("hourLabel");
var hourM = document.getElementById("hourMenu");
var minL = document.getElementById("minLabel");
var minM = document.getElementById("minMenu");
var amPmL = document.getElementById("amPmLabel");
var amPmM = document.getElementById("amPmMenu");

// 
                        if (localStorage.getItem("list")==null){
                                   array = [];
                        }else {
                                array = JSON.parse(localStorage.getItem("list"));
                        }
desplay() ;


(function run(){

        hourMenu(hourM);
        minMenu();
        amPm();
        var x =Math.random();
       var y=document.getElementById("randomText");
       console.log(Math.floor((x*4)));
       y.innerHTML=randomText[Math.floor((x*4))];

}());
insert.onclick = function() {
        setTodayValue();
        desplay();
        clearTime();
      }


function hourMenu(hourM){
        var st = "";
        for(var i =1 ; i<=12 ; i++){
        st+=`
                <li><button onclick="hourLabel(${i})">${i}</button></li>
         
        `;

        }
        hourM.innerHTML = st;
}


function minMenu(){
        var st = "";
        for(var i =1 ; i<=60 ; i++){
        st+=`
                <li><button onclick="minLabel(${i})">${i}</button></li>
         
        `;

        }
        minM.innerHTML = st;
}
function amPm(){
        var st = "";
        st=`
                <li><button onclick="amPmLabel('am')">am</button></li>
                <li><button onclick="amPmLabel('pm')">pm</button></li>
         
        `;
        amPmM.innerHTML=st;
}

function clearTime(){
        amPmLabel.innerHTML="am";
        hourL.innerHTML="00";
        minL.innerHTML="00";
}

function amPmLabel(name){
     amPmL.innerHTML=name;
}
function hourLabel(index){
        hourL.innerHTML=index;
}
function minLabel(index){
        minL.innerHTML=index;
}






function setTodayValue() {
       
        var todayList = {
                value : String(input.value).toLowerCase(),
                hour :hourL.innerHTML,
                min :minL.innerHTML,
                amPm :amPmL.innerHTML
        };
                if(check(todayList.value) || todayList.value ==""){
                        alert("try agin")
                                clear();
                }else {
                        array.push(todayList);
                        localStorage.setItem("list",JSON.stringify(array));
                }
    

}
function check(inputV) {
        
        for( var i = 0 ; i<array.length; i++){
                        if(array[i].value == inputV){
                                return true;
                                break;
                        }

        }
                return false;


}
function clear() {
        input.value = "";
}
function desplay() {
    var todayList = document.getElementById("todayList");
    var st = "";
    
        for (var i = 0 ; i<array.length ; i++){
            st+= `
            <li ><button id="delete" onclick="deleteV(${i})"></button>
            ${array[i].value}
            <label>${array[i].hour}:${array[i].min} ${array[i].amPm}</label>
            <button id="edit${i}" class="edit" onclick="edit(${i})">edit</button></li>        
        
        `;

        }

        todayList.innerHTML=st;
        clear();


}


function deleteV(index) {
        array.splice(index,1);
        desplay();
        localStorage.setItem("list",JSON.stringify(array));
}


function edit(index){
 var edit = document.getElementById("edit"+index);
        
                if (num == 0){
                        num++;
                        var str =`<input type="text" id="editIn">`;
                        array[index].value = str;
                        desplay();
                        console.log("test");
                        
                }else {
                       
                        num--;
                        editAdd(index);
                        desplay();
                        console.log("tes2323t");
                }



}
function editAdd(index){
        var getValue = document.getElementById("editIn");
        valuees =getValue.value.toLowerCase();
        console.log(valuees);
        array[index].value = valuees;
        localStorage.setItem("list",JSON.stringify(array));
     

}
   

