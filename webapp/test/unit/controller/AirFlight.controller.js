/*global QUnit*/

sap.ui.define([
	"fioribootcamp/airflightsystem/controller/AirFlight.controller"
], function (Controller) {
	"use strict";

	QUnit.module("AirFlight Controller");

	QUnit.test("I should test the AirFlight controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
