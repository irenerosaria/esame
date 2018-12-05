var list=[];
var COUNTER=0;

//Aggiungere un ToDo
exports.addToDo=function (param1,param2,param3,param4) {
    var people=["mamma","papà","zia","zio","nonna","nonno"];
    var element={ 
        name: param1,
        description: param2,
        completed: param3,
        assignedTo: param4,
        id:COUNTER++
    }
	if(people.indexOf(param4)>-1){
     list.push(element);   
    }
    
}

//Creare e resettare una lista di ToDo

exports.getList=function(){
    return list;
}
exports.reset = function() {
    list = [];
    COUNTER = 0;
    return list;
}





//Leggere la lista dei toDo in base ad uno specifico utente

exports.findListByAssigned = function(assigned) { 
	var Twe=[];
    for(var i of list) {
        if(i.assignedTo === assigned) {
            Twe.push(i);
        }
    }
    return Twe;
}

//Eliminare un ToDo
exports.deleteById=function(id){
	for (var i = 0; i <list.length; i++) {
		if(list[i].id===id){
			list.splice(i,1);
		}
	}

}


//Cambiare lo stato di completed da false a true e viceversa

exports.changeBool = function(id,param) { 
	for (var i = 0; i <list.length; i++) {
        if(list[i].id===id){
            list[i].completed=param;
                
        }
    }
    
}

//Leggere la lista dei Todo in base al fatto che siano completati o meno, indipendentemente dall'utente

exports.findCompleted=function(){
    var Twe=[];
    for(var i of list){
        if(i.completed===true){
            Twe.push(i);
        }
   }
   return Twe; 
}


this.addToDo("spolverare", "corridoio",true,"mamma");
this.addToDo("spolverare", "corridoio",true,"papà");
this.addToDo("spolverare", "corridoio",true,"caio");
console.log(this.getList());
this.changeBool(0,false);
this.changeBool(1,false);
console.log(this.getList());
console.log(this.findListByAssigned("mamma"));