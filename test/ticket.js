var expect    = require("chai").expect;
var path 	  = require("path");
var models    = require(path.join(__dirname, "../app/models"));

describe("Ticket", function() { 
    describe("create", function() {
        it("with empty values in fields", function() {
            var ticket = models.ticket.build();
            expect(ticket).to.not.be.null;
            expect(ticket.dataValues).to.have.any.keys("id", "avaliable");
        });
        it("with values for required fields", function () {
            var params = {
                title: "Awesome Tcicket",
                desc: "Teste ticket",
                avaliable: true
            }
            
            var ticket = models.ticket.build(params);
            
            expect(ticket).to.be.a('object');
            
            expect(ticket.dataValues).to.have.all.keys(['id', 'title', 'desc', 'avaliable']);
        });
        it("with full values", function () {
            var params = {
                title: "Awesome Tcicket",
                desc: "Teste ticket",
                avaliable: true,
                bought: 5000
            }
            
            var ticket = models.ticket.build(params);

            expect(ticket).to.be.a('object');
            expect(ticket.dataValues).to.have.all.keys(['id', 'title', 'desc', 'avaliable', 'bought']);
        });
    });
});