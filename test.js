var assert = require('assert');
var ex = require('./esame');
describe('testiamo il compito', function() {

	it('testiamo getList',function(){
		ex.reset();
		assert.equal(ex.getList().length,0);
    })

	 it("testiamo l'aggiunta di utenti e la funzione di eliminazione",function(){
        ex.reset();
        ex.addToDo("spolverare", "corridoio",true,"mamma");
        assert.equal(ex.getList().length, 1);
        assert.equal(ex.getList()[0].id, 0);
        ex.addToDo("lavare", "corridoio",false,"papà");
        assert.equal(ex.getList().length, 2);
        assert.equal(ex.getList()[1].id, 1);
        ex.deleteById(0);
        ex.addToDo("spolverare", "cucina",true,"mamma");
        assert.equal(ex.getList().length, 2);
        assert.equal(ex.getList()[1].id, 2);

    } )

	 it('testiamo il findListByAssigned',function(){
		ex.reset();
        ex.addToDo("spolverare", "corridoio",true,"mamma");
        ex.addToDo("lavare", "corridoio",false,"papà");
        ex.addToDo("spolverare", "cucina",true,"mamma");
        var element={ 
        	name: "spolverare",
        	description: "cucina",
        	completed: "true",
        	assignedTo: "mamma",
        	id:2
    	}

        assert.deepEqual(ex.findListByAssigned(2), element);

		
	}
it('testiamo il changeBool',function(){
		ex.reset();
		ex.addToDo("spolverare", "corridoio",true,"mamma");
        ex.addToDo("lavare", "corridoio",false,"papà");
        ex.getList();
        assert.equal(ex.getList()[0].completed, true);
        assert.equal(ex.getList()[1].completed, false);
        ex.changeBool();
        assert.equal(ex.getList()[0].completed, false);
        assert.equal(ex.getList()[1].completed, true);
	}

it('testiamo il findCompleted',function(){
		ex.reset();
		ex.addToDo("spolverare", "corridoio",true,"mamma");
        ex.addToDo("lavare", "corridoio",false,"papà");
        assert.equal(ex.findCompleted()[0].completed, true);
    }

}