/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"fioribootcamp/airflightsystem/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
