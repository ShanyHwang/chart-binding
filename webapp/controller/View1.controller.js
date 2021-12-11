sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/viz/ui5/data/FlattenedDataset",
    "sap/viz/ui5/controls/common/feeds/FeedItem"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, Filter, FlattenedDataset, FeedItem ) {
		"use strict";

		return Controller.extend("iitp.zfinal2402.controller.View1", {
			onInit: function () {

			},
            onPress: function(){
                let oCombo = this.getView().byId("idCombo");
                let oFilter = new Filter("Syear", "EQ", oCombo.getSelectedKey());
                
                let oTable = this.byId("idTable");
                let oBinding = oTable.getBinding("items");
                oBinding.filter(oFilter);
            },
            onSelectProduct: function(oEvent){
                let oKey = oEvent.getParameters().listItem.getBindingContextPath();
                alert(oKey)
                let oFilter = new Filter("Carrid", "EQ", oKey);
                let oChart = this.byId("idPiechart");
                // let oBinding = oChart.getBinding("data");
                let oBinding = oChart.getDataset('/ES_CHARTSet').getBinding('data');
                oBinding.filter(oFilter);
            }
		});
	});
