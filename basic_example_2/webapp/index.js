const url = 'https://cors-anywhere.herokuapp.com/https://services.odata.org/V2/OData/OData.svc';
const model = new sap.ui.model.odata.v2.ODataModel(url);

sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";

	XMLView.create({viewName: "Quickstart.App"}).then(function (oView) {
        oView.placeAt("content");
    });

});