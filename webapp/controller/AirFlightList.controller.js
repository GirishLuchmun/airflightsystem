sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("fiori.bootcamp.airflightsystem.controller.AirFlightList", {
        onInit: function () {
            this.getView().bindElement("/AirlineSet");
        },

        onBeforeRebindTable: function(oEvent) {
			var mBindingParams = oEvent.getParameter("bindingParams"),
				aSelectedItems = this._oCustomMultiComboBox.getSelectedItems();

			aSelectedItems.forEach(function(oSelectedItem) {
				mBindingParams.filters.push(
					new Filter(
						"CompanyCode",
						FilterOperator.EQ,
						oSelectedItem.getText()
					)
				);
			});
		}
    });
});
