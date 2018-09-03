(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-notifications></app-notifications>\n<div class=\"container-fluid\">\n    <div class=\"row header\">\n            <app-header></app-header>\n    </div>\n    <div class=\"row content\">\n        <router-outlet></router-outlet>\n    </div>\n    <div class=\"row footer\">\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        // this.af.authState.subscribe(auth => {
        //   console.log(auth)
        //   if (!auth) {
        //     this.router.navigateByUrl('/login');
        //   }
        // })
        // console.log(this.af.auth.currentUser)
        this.router = router;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _services_permissions_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/permissions.services */ "./src/app/services/permissions.services.ts");
/* harmony import */ var _services_itemsTypes_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/itemsTypes.services */ "./src/app/services/itemsTypes.services.ts");
/* harmony import */ var _services_main_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/main.services */ "./src/app/services/main.services.ts");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_auth_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth.services */ "./src/app/services/auth.services.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_growl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/growl */ "./node_modules/primeng/growl.js");
/* harmony import */ var primeng_growl__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_growl__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/messages.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_messages__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/message.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_message__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony import */ var _components_adduser_adduser_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/adduser/adduser.component */ "./src/app/components/adduser/adduser.component.ts");
/* harmony import */ var _components_users_types_users_types_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/users-types/users-types.component */ "./src/app/components/users-types/users-types.component.ts");
/* harmony import */ var _components_types_types_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/types/types.component */ "./src/app/components/types/types.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_add_users_type_add_users_type_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/add-users-type/add-users-type.component */ "./src/app/components/add-users-type/add-users-type.component.ts");
/* harmony import */ var _components_items_items_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/items/items.component */ "./src/app/components/items/items.component.ts");
/* harmony import */ var _components_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/add-item/add-item.component */ "./src/app/components/add-item/add-item.component.ts");
/* harmony import */ var _components_add_items_type_add_items_type_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/add-items-type/add-items-type.component */ "./src/app/components/add-items-type/add-items-type.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/notifications/notifications.component */ "./src/app/components/notifications/notifications.component.ts");
/* harmony import */ var _services_notifications_services__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/notifications.services */ "./src/app/services/notifications.services.ts");
/* harmony import */ var _components_update_invoice_update_invoice_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/update-invoice/update-invoice.component */ "./src/app/components/update-invoice/update-invoice.component.ts");
/* harmony import */ var _services_invoices_services__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/invoices.services */ "./src/app/services/invoices.services.ts");
/* harmony import */ var _components_invoices_invoices_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/invoices/invoices.component */ "./src/app/components/invoices/invoices.component.ts");
/* harmony import */ var _services_home_services__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./services/home.services */ "./src/app/services/home.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"],
                _components_types_types_component__WEBPACK_IMPORTED_MODULE_21__["TypesComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
                _components_users_users_component__WEBPACK_IMPORTED_MODULE_18__["UsersComponent"],
                _components_adduser_adduser_component__WEBPACK_IMPORTED_MODULE_19__["AdduserComponent"],
                _components_users_types_users_types_component__WEBPACK_IMPORTED_MODULE_20__["UsersTypesComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_23__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_24__["FooterComponent"],
                _components_add_users_type_add_users_type_component__WEBPACK_IMPORTED_MODULE_25__["AddUsersTypeComponent"],
                _components_items_items_component__WEBPACK_IMPORTED_MODULE_26__["ItemsComponent"],
                _components_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_27__["AddItemComponent"],
                _components_add_items_type_add_items_type_component__WEBPACK_IMPORTED_MODULE_28__["AddItemsTypeComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_29__["HomeComponent"],
                _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_30__["NotificationsComponent"],
                _components_update_invoice_update_invoice_component__WEBPACK_IMPORTED_MODULE_32__["UpdateInvoiceComponent"],
                _components_invoices_invoices_component__WEBPACK_IMPORTED_MODULE_34__["InvoicesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot([
                    { path: "", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_29__["HomeComponent"], canActivate: [_services_auth_services__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
                    { path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"] },
                    { path: "users", component: _components_users_users_component__WEBPACK_IMPORTED_MODULE_18__["UsersComponent"], canActivate: [_services_auth_services__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
                    { path: "addUser", component: _components_adduser_adduser_component__WEBPACK_IMPORTED_MODULE_19__["AdduserComponent"], canActivate: [_services_auth_services__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
                    { path: "updateUser/:id", component: _components_adduser_adduser_component__WEBPACK_IMPORTED_MODULE_19__["AdduserComponent"], canActivate: [_services_auth_services__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
                    { path: "usersTypes", component: _components_users_types_users_types_component__WEBPACK_IMPORTED_MODULE_20__["UsersTypesComponent"], canActivate: [_services_auth_services__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
                    { path: "addUserType", component: _components_add_users_type_add_users_type_component__WEBPACK_IMPORTED_MODULE_25__["AddUsersTypeComponent"], canActivate: [_services_auth_services__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
                    { path: "updateUserType/:id", component: _components_add_users_type_add_users_type_component__WEBPACK_IMPORTED_MODULE_25__["AddUsersTypeComponent"], canActivate: [_services_auth_services__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
                    { path: "items", component: _components_items_items_component__WEBPACK_IMPORTED_MODULE_26__["ItemsComponent"], canActivate: [_services_auth_services__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
                    { path: "addItem", component: _components_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_27__["AddItemComponent"], canActivate: [_services_auth_services__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
                    { path: "updateItem/:id", component: _components_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_27__["AddItemComponent"], canActivate: [_services_auth_services__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
                    { path: "itemsTypes", component: _components_types_types_component__WEBPACK_IMPORTED_MODULE_21__["TypesComponent"], canActivate: [_services_auth_services__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
                    { path: "addItemsType", component: _components_add_items_type_add_items_type_component__WEBPACK_IMPORTED_MODULE_28__["AddItemsTypeComponent"], canActivate: [_services_auth_services__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
                    { path: "updateItemsType/:id", component: _components_add_items_type_add_items_type_component__WEBPACK_IMPORTED_MODULE_28__["AddItemsTypeComponent"], canActivate: [_services_auth_services__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
                    { path: "addInvoice", component: _components_update_invoice_update_invoice_component__WEBPACK_IMPORTED_MODULE_32__["UpdateInvoiceComponent"], canActivate: [_services_auth_services__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
                    { path: "updateInvoice/:id", component: _components_update_invoice_update_invoice_component__WEBPACK_IMPORTED_MODULE_32__["UpdateInvoiceComponent"], canActivate: [_services_auth_services__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
                    { path: "invoices", component: _components_invoices_invoices_component__WEBPACK_IMPORTED_MODULE_34__["InvoicesComponent"], canActivate: [_services_auth_services__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] }
                ]),
                _angular_http__WEBPACK_IMPORTED_MODULE_9__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                primeng_growl__WEBPACK_IMPORTED_MODULE_11__["GrowlModule"],
                primeng_messages__WEBPACK_IMPORTED_MODULE_12__["MessagesModule"],
                primeng_message__WEBPACK_IMPORTED_MODULE_13__["MessageModule"]
            ],
            providers: [
                _services_auth_services__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"],
                primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
                _services_notifications_services__WEBPACK_IMPORTED_MODULE_31__["NotificationsServices"],
                _services_main_services__WEBPACK_IMPORTED_MODULE_2__["MainServices"],
                _services_itemsTypes_services__WEBPACK_IMPORTED_MODULE_1__["ItemsTypesServices"],
                _services_invoices_services__WEBPACK_IMPORTED_MODULE_33__["InvoicesServices"],
                _services_permissions_services__WEBPACK_IMPORTED_MODULE_0__["PermissionsServices"],
                _services_home_services__WEBPACK_IMPORTED_MODULE_35__["HomeServices"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-item/add-item.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/add-item/add-item.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/add-item/add-item.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/add-item/add-item.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\">\r\n  <div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\" *ngIf=\"state == 'Edit' && item\">Edit Item</div>\r\n    <div class=\"panel-heading\" *ngIf=\"state == 'Add'\">Add Item</div>\r\n    <div class=\"panel-body\">\r\n      <div class=\"row\">\r\n\r\n\r\n        <div class=\"col-xs-12\" *ngIf=\"state == 'Edit' && item\">\r\n          <form>\r\n            <div class=\"form-group\">\r\n              <label for=\"item_name\">Item Name</label>\r\n              <input autocomplete=\"no\" name=\"item_name\" type=\"text\" class=\"form-control\" id=\"item_name\" [(ngModel)]=\"item.item_name\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"item_description\">Item Description</label>\r\n              <textarea name=\"item_description\" class=\"form-control\" id=\"item_description\" [(ngModel)]=\"item.item_description\" cols=\"30\"\r\n                rows=\"10\"></textarea>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"item_type\">Item Type</label>\r\n              <select name=\"item_type\" class=\"form-control\" id=\"item_type\" [(ngModel)]=\"item.item_type\">\r\n                <option *ngFor=\"let type of types\" value=\"{{type.ptype_id}}\">{{type.ptype_name}}</option>\r\n              </select>\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-default\" (click)=\"editItem(item)\">Edit</button>\r\n          </form>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-xs-12\" *ngIf=\"state == 'Add'\">\r\n          <form>\r\n            <div class=\"form-group\">\r\n              <label for=\"item_name\">Item Name</label>\r\n              <input autocomplete=\"no\" name=\"item_name\" type=\"text\" class=\"form-control\" id=\"item_name\" [(ngModel)]=\"item.item_name\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"item_description\">Item Description</label>\r\n              <textarea name=\"item_description\" class=\"form-control\" id=\"item_description\" [(ngModel)]=\"item.item_description\" cols=\"30\"\r\n                rows=\"10\"></textarea>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"item_type\">Item Type</label>\r\n              <select name=\"item_type\" class=\"form-control\" id=\"item_type\" [(ngModel)]=\"item.item_type\">\r\n                <option value=\"\">-- Please Select --</option>\r\n                <option *ngFor=\"let type of types\" value=\"{{type.ptype_id}}\">{{type.ptype_name}}</option>\r\n              </select>\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-default\" (click)=\"addItem(item)\">Add</button>\r\n          </form>\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/add-item/add-item.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-item/add-item.component.ts ***!
  \***********************************************************/
/*! exports provided: AddItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemComponent", function() { return AddItemComponent; });
/* harmony import */ var _services_itemsTypes_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/itemsTypes.services */ "./src/app/services/itemsTypes.services.ts");
/* harmony import */ var _services_notifications_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/notifications.services */ "./src/app/services/notifications.services.ts");
/* harmony import */ var _services_main_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/main.services */ "./src/app/services/main.services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddItemComponent = /** @class */ (function () {
    function AddItemComponent(route, main, mess, itemsTypes) {
        var _this = this;
        this.route = route;
        this.main = main;
        this.mess = mess;
        this.itemsTypes = itemsTypes;
        this.msgs = [];
        this.route.params.subscribe(function (param) {
            _this.id = param.id;
            _this.getTypes();
            if (_this.id !== undefined) {
                _this.state = "Edit";
                _this.getItemData();
            }
            else {
                _this.state = "Add";
                _this.item = {
                    item_name: "",
                    item_description: "",
                    item_type: ""
                };
            }
        });
    }
    AddItemComponent.prototype.getItemData = function () {
        var _this = this;
        this.main.getRequest('items/' + this.id).subscribe(function (data) {
            _this.item = data[0];
            console.log(_this.item);
        });
    };
    AddItemComponent.prototype.editItem = function (item) {
        var _this = this;
        this.main.PutRequest('items/' + item.item_id, item).subscribe(function (res) {
            console.log(res);
            _this.mess.showMessage("Success", "Edit item Done", "success");
        });
    };
    AddItemComponent.prototype.addItem = function (item) {
        var _this = this;
        Number(item.item_type);
        console.log(item);
        this.main.PostRequest('items', item).subscribe(function (res) {
            console.log(res);
            _this.item = {
                item_name: "",
                item_description: "",
                item_type: ""
            };
            _this.mess.showMessage("Success", "Add item Done", "success");
        });
    };
    AddItemComponent.prototype.getTypes = function () {
        var _this = this;
        this.itemsTypes.getAll().subscribe(function (data) {
            _this.types = data;
            console.log(_this.types);
        });
    };
    AddItemComponent.prototype.ngOnInit = function () {
    };
    AddItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-add-item',
            template: __webpack_require__(/*! ./add-item.component.html */ "./src/app/components/add-item/add-item.component.html"),
            styles: [__webpack_require__(/*! ./add-item.component.css */ "./src/app/components/add-item/add-item.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_main_services__WEBPACK_IMPORTED_MODULE_2__["MainServices"],
            _services_notifications_services__WEBPACK_IMPORTED_MODULE_1__["NotificationsServices"],
            _services_itemsTypes_services__WEBPACK_IMPORTED_MODULE_0__["ItemsTypesServices"]])
    ], AddItemComponent);
    return AddItemComponent;
}());



/***/ }),

/***/ "./src/app/components/add-items-type/add-items-type.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/add-items-type/add-items-type.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/add-items-type/add-items-type.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/add-items-type/add-items-type.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\">\n\n\n\n  <div class=\"panel panel-primary\" *ngIf=\"state == 'Edit' && type\">\n    <div class=\"panel-heading\" *ngIf=\"state == 'Edit' && type\">Edit Item Type</div>\n    <div class=\"panel-body\">\n      <div class=\"row\">\n\n        <div class=\"col-xs-12\">\n\n          <div class=\"form-group\">\n            <label for=\"ptype_name\">Item Name</label>\n            <input autocomplete=\"no\" name=\"ptype_name\" type=\"text\" class=\"form-control\" id=\"ptype_name\" [(ngModel)]=\"type.ptype_name\">\n          </div>\n\n          <button type=\"submit\" *ngIf=\"state == 'Edit' && type\" class=\"btn btn-default\" (click)=\"editItemType(type)\">Edit</button>\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n\n\n  <div class=\"panel panel-primary\" *ngIf=\"state == 'Add'\">\n    <div class=\"panel-heading\" *ngIf=\"state == 'Add'\">Add Item Type</div>\n    <div class=\"panel-body\">\n      <div class=\"row\">\n\n        <div class=\"col-xs-12\">\n\n          <div class=\"form-group\">\n            <label for=\"ptype_name\">Item Name</label>\n            <input autocomplete=\"no\" name=\"ptype_name\" type=\"text\" class=\"form-control\" id=\"ptype_name\" [(ngModel)]=\"type.ptype_name\">\n          </div>\n\n          <button type=\"submit\" *ngIf=\"state == 'Add'\" class=\"btn btn-default\" (click)=\"addItemType(type)\">Add</button>\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/add-items-type/add-items-type.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/add-items-type/add-items-type.component.ts ***!
  \***********************************************************************/
/*! exports provided: AddItemsTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemsTypeComponent", function() { return AddItemsTypeComponent; });
/* harmony import */ var _services_notifications_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/notifications.services */ "./src/app/services/notifications.services.ts");
/* harmony import */ var _services_main_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/main.services */ "./src/app/services/main.services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddItemsTypeComponent = /** @class */ (function () {
    function AddItemsTypeComponent(route, main, mess) {
        var _this = this;
        this.route = route;
        this.main = main;
        this.mess = mess;
        this.msgs = [];
        this.route.params.subscribe(function (param) {
            _this.id = param.id;
            if (_this.id !== undefined) {
                _this.state = "Edit";
                _this.getItemTypeData();
            }
            else {
                _this.state = "Add";
                _this.type = {
                    ptype_name: ""
                };
            }
        });
    }
    AddItemsTypeComponent.prototype.getItemTypeData = function () {
        var _this = this;
        this.main.getRequest('prodtypes/' + this.id).subscribe(function (data) {
            _this.type = data[0];
        });
    };
    AddItemsTypeComponent.prototype.editItemType = function (itemType) {
        var _this = this;
        if (itemType.ptype_name !== "") {
            this.main.PutRequest('prodtypes/' + itemType.ptype_id, itemType).subscribe(function (res) {
                _this.mess.showMessage("Success", "Edit item Done", "success");
            });
        }
        else {
            this.mess.showMessage("Failed", "Type name can't ne empty", "error");
        }
    };
    AddItemsTypeComponent.prototype.addItemType = function (itemType) {
        var _this = this;
        if (itemType.ptype_name !== "") {
            this.main.PostRequest('prodtypes', itemType).subscribe(function (res) {
                _this.type = {
                    ptype_name: ""
                };
                _this.mess.showMessage("Success", "Add item Type Done", "success");
            });
        }
        else {
            this.mess.showMessage("Failed", "Type name can't ne empty", "error");
        }
    };
    AddItemsTypeComponent.prototype.ngOnInit = function () {
    };
    AddItemsTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-items-type',
            template: __webpack_require__(/*! ./add-items-type.component.html */ "./src/app/components/add-items-type/add-items-type.component.html"),
            styles: [__webpack_require__(/*! ./add-items-type.component.css */ "./src/app/components/add-items-type/add-items-type.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_main_services__WEBPACK_IMPORTED_MODULE_1__["MainServices"],
            _services_notifications_services__WEBPACK_IMPORTED_MODULE_0__["NotificationsServices"]])
    ], AddItemsTypeComponent);
    return AddItemsTypeComponent;
}());



/***/ }),

/***/ "./src/app/components/add-users-type/add-users-type.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/add-users-type/add-users-type.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/add-users-type/add-users-type.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/add-users-type/add-users-type.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\">\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\" *ngIf=\"state == 'Edit' && type\">Edit Users Type</div>\n    <div class=\"panel-heading\" *ngIf=\"state == 'Add'\">Add Users Type</div>\n    <div class=\"panel-body\">\n      <div class=\"row\">\n\n\n        <div class=\"col-xs-12\" *ngIf=\"state == 'Edit' && type\">\n          <form>\n            <div class=\"form-group\">\n              <label for=\"utype_id\">User Type ID</label>\n              <input autocomplete=\"no\" name=\"utype_id\" type=\"number\" class=\"form-control\" id=\"utype_id\" [(ngModel)]=\"type.utype_id\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"utype_name\">User Type Name</label>\n              <input autocomplete=\"no\" name=\"utype_name\" type=\"text\" class=\"form-control\" id=\"utype_name\" [(ngModel)]=\"type.utype_name\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-default\" (click)=\"editUserType(type)\">Edit</button>\n          </form>\n        </div>\n\n\n        <div class=\"col-xs-12\" *ngIf=\"state == 'Add'\">\n          <form>\n            <div class=\"form-group\">\n              <label for=\"utype_id\">User Type ID</label>\n              <input autocomplete=\"no\" name=\"utype_id\" type=\"number\" class=\"form-control\" id=\"utype_id\" [(ngModel)]=\"type.utype_id\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"utype_name\">User Type Name</label>\n              <input autocomplete=\"no\" name=\"utype_name\" type=\"text\" class=\"form-control\" [(ngModel)]=\"type.utype_name\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-default\" (click)=\"addUserType(type)\">Add</button>\n          </form>\n        </div>\n\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/add-users-type/add-users-type.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/add-users-type/add-users-type.component.ts ***!
  \***********************************************************************/
/*! exports provided: AddUsersTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUsersTypeComponent", function() { return AddUsersTypeComponent; });
/* harmony import */ var _services_notifications_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/notifications.services */ "./src/app/services/notifications.services.ts");
/* harmony import */ var _services_main_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/main.services */ "./src/app/services/main.services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddUsersTypeComponent = /** @class */ (function () {
    function AddUsersTypeComponent(route, main, mess) {
        var _this = this;
        this.route = route;
        this.main = main;
        this.mess = mess;
        this.route.params.subscribe(function (param) {
            _this.id = param.id;
            if (_this.id !== undefined) {
                _this.state = "Edit";
                _this.getTypeData(_this.id);
            }
            else {
                _this.state = "Add";
                _this.type = {
                    utype_name: "",
                    utype_id: ""
                };
            }
        });
    }
    AddUsersTypeComponent.prototype.getTypeData = function (id) {
        var _this = this;
        this.main.getRequest('userstypes/' + id).subscribe(function (data) {
            _this.type = data[0];
        });
    };
    AddUsersTypeComponent.prototype.editUserType = function (type) {
        var _this = this;
        this.main.PutRequest('userstypes/' + type._id, type).subscribe(function (res) {
            _this.mess.showMessage("Success", "Edit type Done", "success");
        });
    };
    AddUsersTypeComponent.prototype.addUserType = function (type) {
        var _this = this;
        this.main.PostRequest('userstypes', type).subscribe(function (res) {
            _this.type = {
                utype_name: "",
                utype_id: ""
            };
            _this.mess.showMessage("Success", "Add type Done", "success");
        });
    };
    AddUsersTypeComponent.prototype.ngOnInit = function () {
    };
    AddUsersTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-users-type',
            template: __webpack_require__(/*! ./add-users-type.component.html */ "./src/app/components/add-users-type/add-users-type.component.html"),
            styles: [__webpack_require__(/*! ./add-users-type.component.css */ "./src/app/components/add-users-type/add-users-type.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_main_services__WEBPACK_IMPORTED_MODULE_1__["MainServices"],
            _services_notifications_services__WEBPACK_IMPORTED_MODULE_0__["NotificationsServices"]])
    ], AddUsersTypeComponent);
    return AddUsersTypeComponent;
}());



/***/ }),

/***/ "./src/app/components/adduser/adduser.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/adduser/adduser.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/adduser/adduser.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/adduser/adduser.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\">\r\n  <div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\" *ngIf=\"state == 'Edit' && user\">Edit Users</div>\r\n    <div class=\"panel-heading\" *ngIf=\"state == 'Add'\">Add Users</div>\r\n    <div class=\"panel-body\">\r\n      <div class=\"row\">\r\n\r\n\r\n        <div class=\"col-xs-12\" *ngIf=\"state == 'Edit' && user\">\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"user_name\">Name</label>\r\n            <input autocomplete=\"no\" name=\"user_name\" type=\"text\" class=\"form-control\" id=\"user_name\" [(ngModel)]=\"user.name\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"user_UserName\">UserName</label>\r\n            <input autocomplete=\"no\" name=\"user_UserName\" type=\"text\" class=\"form-control\" id=\"user_UserName\" [(ngModel)]=\"user.user_name\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"user_email\">Email</label>\r\n            <input autocomplete=\"no\" name=\"user_email\" type=\"email\" class=\"form-control\" id=\"user_email\" [(ngModel)]=\"user.email\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"user_type\">type</label>\r\n            <select name=\"user_type\" id=\"user_type\" class=\"form-control\" [(ngModel)]=\"user.utype_id\">\r\n              <option value=\"\">-- Please Select --</option>\r\n              <option *ngFor=\"let type of types\" value=\"{{type.utype_id}}\">{{type.utype_name}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"user_password\">Password</label>\r\n            <input autocomplete=\"no\" name=\"user_password\" type=\"password\" class=\"form-control\" id=\"user_password\" [(ngModel)]=\"user.password\">\r\n            <span class=\"inputNote\">please if you need to update any thing her you need to write your password twise.</span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"user_confirmPassword\">Confirm Password</label>\r\n            <input autocomplete=\"no\" name=\"user_confirmPassword\" type=\"password\" class=\"form-control\" id=\"user_confirmPassword\" [(ngModel)]=\"user.confirm\">\r\n          </div>\r\n\r\n          <button type=\"submit\" class=\"btn btn-default\" (click)=\"editUser(user)\">Edit</button>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-xs-12\" *ngIf=\"state == 'Add'\">\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"user_name\">Name</label>\r\n            <input autocomplete=\"no\" name=\"user_name\" type=\"text\" class=\"form-control\" id=\"user_name\" [(ngModel)]=\"user.name\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"user_UserName\">UserName</label>\r\n            <input autocomplete=\"no\" name=\"user_UserName\" type=\"text\" class=\"form-control\" id=\"user_UserName\" [(ngModel)]=\"user.user_name\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"user_email\">Email</label>\r\n            <input autocomplete=\"no\" name=\"user_email\" type=\"email\" class=\"form-control\" id=\"user_email\" [(ngModel)]=\"user.email\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"user_type\">type</label>\r\n            <select name=\"user_type\" id=\"user_type\" class=\"form-control\" [(ngModel)]=\"user.utype_id\">\r\n              <option value=\"\">-- Please Select --</option>\r\n              <option *ngFor=\"let type of types\" value=\"{{type.utype_id}}\">{{type.utype_name}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"user_password\">Password</label>\r\n            <input autocomplete=\"no\" name=\"user_password\" type=\"password\" class=\"form-control\" id=\"user_password\" [(ngModel)]=\"user.password\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"user_confirmPassword\">Confirm Password</label>\r\n            <input autocomplete=\"no\" name=\"user_confirmPassword\" type=\"password\" class=\"form-control\" id=\"user_confirmPassword\" [(ngModel)]=\"user.confirm\">\r\n          </div>\r\n\r\n\r\n          <button type=\"submit\" class=\"btn btn-default\" (click)=\"addAndUpdateUser(user)\">Add</button>\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/adduser/adduser.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/adduser/adduser.component.ts ***!
  \*********************************************************/
/*! exports provided: AdduserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdduserComponent", function() { return AdduserComponent; });
/* harmony import */ var _services_notifications_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/notifications.services */ "./src/app/services/notifications.services.ts");
/* harmony import */ var _services_main_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/main.services */ "./src/app/services/main.services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdduserComponent = /** @class */ (function () {
    function AdduserComponent(route, router, main, mess) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.main = main;
        this.mess = mess;
        this.msgs = [];
        this.route.params.subscribe(function (param) {
            _this.id = param.id;
            // console.log(this.id, typeof this.id, Number(this.id), typeof Number(this.id))
            _this.getUsersTypes();
            if (_this.id !== undefined) {
                _this.state = "Edit";
                _this.getUserData(_this.id);
            }
            else if (_this.id === undefined) {
                _this.state = "Add";
                _this.user = {
                    name: "",
                    user_name: "",
                    email: "",
                    utype_id: "",
                    password: "",
                    confirm: ""
                };
            }
            else {
                _this.router.navigateByUrl('/login');
            }
        });
    }
    AdduserComponent.prototype.getUserData = function (id) {
        var _this = this;
        this.main.getRequest('users/' + id).subscribe(function (data) {
            _this.user = data;
            console.log(_this.user);
        });
    };
    AdduserComponent.prototype.editUser = function (user) {
        var _this = this;
        if (user.password === user.confirm) {
            this.main.PutRequest('users/' + this.id, user).subscribe(function (res) {
                console.log(res);
                _this.mess.showMessage("Success", "Edit user Done", "success");
            });
        }
        else {
            this.mess.showMessage("Error", "Password and confirm password should be the same", "error");
        }
    };
    AdduserComponent.prototype.addAndUpdateUser = function (user) {
        var _this = this;
        if (user.password === user.confirm) {
            delete user["confirm"];
            this.main.PostRequest('users', user).subscribe(function (res) {
                console.log(res);
                _this.user = {
                    name: "",
                    user_name: "",
                    email: "",
                    utype_id: "",
                    password: "",
                    confirm: ""
                };
                _this.mess.showMessage("Success", "Add user Done", "success");
            }, function (err) {
                console.log(err);
                _this.mess.showMessage("Success", err.error, "error");
            });
        }
        else {
            this.mess.showMessage("Error", "Password and confirm password should be the same", "error");
        }
    };
    AdduserComponent.prototype.getUsersTypes = function () {
        var _this = this;
        this.main.getRequest('userstypes').subscribe(function (data) {
            _this.types = data;
            console.log(data);
        });
    };
    AdduserComponent.prototype.ngOnInit = function () {
    };
    AdduserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-adduser',
            template: __webpack_require__(/*! ./adduser.component.html */ "./src/app/components/adduser/adduser.component.html"),
            styles: [__webpack_require__(/*! ./adduser.component.css */ "./src/app/components/adduser/adduser.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_main_services__WEBPACK_IMPORTED_MODULE_1__["MainServices"],
            _services_notifications_services__WEBPACK_IMPORTED_MODULE_0__["NotificationsServices"]])
    ], AdduserComponent);
    return AdduserComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-brand>img {\n    height: 100%;\n    width: auto;\n}"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-notifications></app-notifications>\r\n<nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"#\">\r\n          <img src=\"../../../assets/logo.png\" alt=\"\">\r\n        </a>\r\n      </div>\r\n  \r\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <li class=\"active\"><a routerLink=\"/\">Home <span class=\"sr-only\">(current)</span></a></li>\r\n          <li class=\"dropdown\" [ngClass]=\"{'disBg': currentUserType !== 'admin'}\">\r\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Users <span class=\"caret\"></span></a>\r\n            <ul class=\"dropdown-menu\">\r\n              <li><a routerLink=\"/users\">View All Users</a></li>\r\n              <li><a routerLink=\"/addUser\">Add User</a></li>\r\n              <li><a routerLink=\"/usersTypes\">Users Types</a></li>\r\n              <li><a routerLink=\"/addUserType\">Add Users Type</a></li>\r\n            </ul>\r\n          </li>\r\n          <li class=\"dropdown\" [ngClass]=\"{'disBg': currentUserType !== 'admin'}\">\r\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Items <span class=\"caret\"></span></a>\r\n            <ul class=\"dropdown-menu\">\r\n              <li><a routerLink=\"/items\">View All Items</a></li>\r\n              <li><a routerLink=\"/addItem\">Add Item</a></li>\r\n              <li><a routerLink=\"/itemsTypes\">Items Types</a></li>\r\n              <li><a routerLink=\"/addItemsType\">Add Items Type</a></li>\r\n            </ul>\r\n          </li>\r\n          <li class=\"dropdown\">\r\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Invoices <span class=\"caret\"></span></a>\r\n            <ul class=\"dropdown-menu\">\r\n              <li><a routerLink=\"/invoices\">View All Invoices</a></li>\r\n              <li><a routerLink=\"/addInvoice\" [ngClass]=\"{'disBg': currentUserType !== 'accountant' && currentUserType !== 'admin'}\">Add Invoice</a></li>\r\n            </ul>\r\n          </li>\r\n        </ul>\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li><a (click)=\"logOut()\">Log Out</a></li>\r\n        </ul>\r\n      </div><!-- /.navbar-collapse -->\r\n    </div><!-- /.container-fluid -->\r\n  </nav>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _services_permissions_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/permissions.services */ "./src/app/services/permissions.services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, permissionsServices) {
        this.router = router;
        this.permissionsServices = permissionsServices;
        this.currentUserType = this.permissionsServices.getCurrentUserType();
    }
    HeaderComponent.prototype.logOut = function () {
        localStorage.removeItem('currentUser');
        console.log("sign out");
        this.router.navigateByUrl('/login');
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_permissions_services__WEBPACK_IMPORTED_MODULE_0__["PermissionsServices"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".counter {\n    background-color:#f5f5f5;\n    padding: 20px 0;\n    border-radius: 5px;\n}\n\n.count-title {\n    font-size: 40px;\n    font-weight: normal;\n    margin-top: 10px;\n    margin-bottom: 0;\n    text-align: center;\n}\n\n.count-text {\n    font-size: 13px;\n    font-weight: normal;\n    margin-top: 10px;\n    margin-bottom: 0;\n    text-align: center;\n}\n\n.fa-2x {\n    margin: 0 auto;\n    float: none;\n    display: table;\n    color: #4ad1e5;\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <br/>\r\n        <div class=\"col text-center\">\r\n            <h2>Welcome</h2>\r\n            <p>{{username}}</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row text-center\">\r\n        <div class=\"col-md-3\">\r\n            <div class=\"counter\">\r\n                <i class=\"fa fa-code fa-2x\"></i>\r\n                <h2>100</h2>\r\n                <p class=\"count-text \">Our Customer</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n            <div class=\"counter\">\r\n                <i class=\"fa fa-coffee fa-2x\"></i>\r\n                <h2>1700</h2>\r\n                <p class=\"count-text \">Happy Clients</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n            <div class=\"counter\">\r\n                <i class=\"fa fa-lightbulb-o fa-2x\"></i>\r\n                <h2>{{numberOfItems}}</h2>\r\n                <p class=\"count-text \">Out Items</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n            <div class=\"counter\">\r\n                <i class=\"fa fa-file-text fa-2x\"></i>\r\n                <h2>{{numberOfInvoices}}</h2>\r\n                <p class=\"count-text \">Our Invoices</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_notifications_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/notifications.services */ "./src/app/services/notifications.services.ts");
/* harmony import */ var _services_home_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/home.services */ "./src/app/services/home.services.ts");
/* harmony import */ var _services_permissions_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/permissions.services */ "./src/app/services/permissions.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(mess, home, user) {
        this.mess = mess;
        this.home = home;
        this.user = user;
        this.username = this.user.getCurrentUserName();
        this.getNumItems();
        this.getNumInvoices();
    }
    HomeComponent.prototype.getNumItems = function () {
        var _this = this;
        this.home.getNumberOfItems().subscribe(function (data) {
            _this.numberOfItems = data;
            // console.log(this.numberOfItems)
        });
    };
    HomeComponent.prototype.getNumInvoices = function () {
        var _this = this;
        this.home.getNumberOfInvoices().subscribe(function (data) {
            _this.numberOfInvoices = data;
            // console.log(this.numberOfInvoices)
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")],
            providers: [_services_notifications_services__WEBPACK_IMPORTED_MODULE_1__["NotificationsServices"]]
        }),
        __metadata("design:paramtypes", [_services_notifications_services__WEBPACK_IMPORTED_MODULE_1__["NotificationsServices"],
            _services_home_services__WEBPACK_IMPORTED_MODULE_2__["HomeServices"],
            _services_permissions_services__WEBPACK_IMPORTED_MODULE_3__["PermissionsServices"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/invoices/invoices.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/invoices/invoices.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table tr td span {\r\n    font-weight: bold;\r\n    text-decoration: underline;\r\n}"

/***/ }),

/***/ "./src/app/components/invoices/invoices.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/invoices/invoices.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\">\r\n  <div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\">All Invoices</div>\r\n    <div class=\"panel-body\">\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-xs-12\">\r\n          <table class=\"table\">\r\n            <thead class=\"black white-text\">\r\n              <tr>\r\n                <th scope=\"col\">ID</th>\r\n                <th scope=\"col\">Name</th>\r\n                <th scope=\"col\">Type</th>\r\n                <th scope=\"col\">Date</th>\r\n                <th scope=\"col\">Company Name</th>\r\n                <th scope=\"col\">Po Number</th>\r\n                <th scope=\"col\">Actions</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let invoice of invoices; let index = index\">\r\n                <th scope=\"row\">{{index + 1}}</th>\r\n                <td>{{invoice.name}}</td>\r\n                <td>{{invoice.typename}}</td>\r\n                <td>From <span>{{invoice.data_from}}</span> To <span>{{invoice.data_to}}</span></td>\r\n                <td>{{invoice.company_name}}</td>\r\n                <td>{{invoice.po_number}}</td>\r\n                <td class=\"actions\">\r\n                  <a (click)=\"deleteInvoice(invoice.inv_id)\" [ngClass]=\"{'visHidden': currentUserType !== 'admin'}\">\r\n                    <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                  </a>\r\n                  <a routerLink=\"{{'/updateInvoice/' + invoice.inv_id}}\" [ngClass]=\"{'visHidden': currentUserType !== 'account manager' && currentUserType !== 'admin' && invoice.accountant_lock === true}\">\r\n                    <i class=\"fa fa-pencil-square\" aria-hidden=\"true\"></i>\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/invoices/invoices.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/invoices/invoices.component.ts ***!
  \***********************************************************/
/*! exports provided: InvoicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesComponent", function() { return InvoicesComponent; });
/* harmony import */ var _services_permissions_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/permissions.services */ "./src/app/services/permissions.services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_notifications_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/notifications.services */ "./src/app/services/notifications.services.ts");
/* harmony import */ var _services_invoices_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/invoices.services */ "./src/app/services/invoices.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InvoicesComponent = /** @class */ (function () {
    function InvoicesComponent(mess, invoicesServices, permissionsServices) {
        this.mess = mess;
        this.invoicesServices = invoicesServices;
        this.permissionsServices = permissionsServices;
        this.currentUserType = this.permissionsServices.getCurrentUserType();
        console.log(this.currentUserType);
        this.getAllInvoices();
    }
    InvoicesComponent.prototype.getAllInvoices = function () {
        var _this = this;
        this.invoicesServices.getAllInvoices().subscribe(function (data) {
            console.log(data);
            _this.invoices = data;
        });
    };
    InvoicesComponent.prototype.deleteInvoice = function (id) {
        var _this = this;
        this.invoicesServices.deleteInvoice(id).subscribe(function (res) {
            _this.mess.showMessage("Success", "Delete invoice Done", "warn");
            _this.getAllInvoices();
        });
    };
    InvoicesComponent.prototype.ngOnInit = function () {
    };
    InvoicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invoices',
            template: __webpack_require__(/*! ./invoices.component.html */ "./src/app/components/invoices/invoices.component.html"),
            styles: [__webpack_require__(/*! ./invoices.component.css */ "./src/app/components/invoices/invoices.component.css")]
        }),
        __metadata("design:paramtypes", [_services_notifications_services__WEBPACK_IMPORTED_MODULE_2__["NotificationsServices"],
            _services_invoices_services__WEBPACK_IMPORTED_MODULE_3__["InvoicesServices"],
            _services_permissions_services__WEBPACK_IMPORTED_MODULE_0__["PermissionsServices"]])
    ], InvoicesComponent);
    return InvoicesComponent;
}());



/***/ }),

/***/ "./src/app/components/items/items.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/items/items.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/items/items.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/items/items.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\">\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">All Items</div>\n    <div class=\"panel-body\">\n      <div class=\"row\">\n\n        <div class=\"col-xs-12\">\n          <table class=\"table\">\n            <thead class=\"black white-text\">\n              <tr>\n                <th scope=\"col\">ID</th>\n                <th scope=\"col\">Name</th>\n                <th scope=\"col\">Description</th>\n                <th scope=\"col\">Type</th>\n                <th scope=\"col\">Actions</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let item of items; let index = index\">\n                <!-- <th scope=\"row\">{{item.item_id}}</th> -->\n                <th scope=\"row\">{{index + 1}}</th>\n                <td>{{item.item_name}}</td>\n                <td>{{item.item_description}}</td>\n                <td>{{item.item_type}}</td>\n                <td class=\"actions\">\n                  <a (click)=\"deleteItem(item.item_id)\">\n                    <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                  </a>\n                  <a routerLink=\"{{'/updateItem/' + item.item_id}}\">\n                    <i class=\"fa fa-pencil-square\" aria-hidden=\"true\"></i>\n                  </a>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/items/items.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/items/items.component.ts ***!
  \*****************************************************/
/*! exports provided: ItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
/* harmony import */ var _services_main_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/main.services */ "./src/app/services/main.services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_notifications_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/notifications.services */ "./src/app/services/notifications.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemsComponent = /** @class */ (function () {
    function ItemsComponent(main, mess) {
        this.main = main;
        this.mess = mess;
        this.getAllItems();
    }
    ItemsComponent.prototype.getAllItems = function () {
        var _this = this;
        this.main.getRequest('items').subscribe(function (data) {
            _this.items = data;
            // console.log(this.items)
        });
    };
    ItemsComponent.prototype.deleteItem = function (item_id) {
        var _this = this;
        this.main.DeleteRequest('items/' + item_id).subscribe(function (res) {
            _this.mess.showMessage("Success", "Delete item Done", "warn");
            _this.getAllItems();
        });
    };
    ItemsComponent.prototype.ngOnInit = function () {
    };
    ItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-items',
            template: __webpack_require__(/*! ./items.component.html */ "./src/app/components/items/items.component.html"),
            styles: [__webpack_require__(/*! ./items.component.css */ "./src/app/components/items/items.component.css")]
        }),
        __metadata("design:paramtypes", [_services_main_services__WEBPACK_IMPORTED_MODULE_0__["MainServices"],
            _services_notifications_services__WEBPACK_IMPORTED_MODULE_2__["NotificationsServices"]])
    ], ItemsComponent);
    return ItemsComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginForm {\n    width: 350px;\n    margin-top: 100px;\n}\n.loginForm h2 {\n    display: block;\n    width: 100%;\n    margin-bottom: 20px;\n}\n.loginForm .form-check {\n    padding: 0;\n    text-align: center;\n}\n.loginForm .form-check button {\n    margin: 10px;\n}"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container loginForm\">\r\n  <div class=\"row\">\r\n    <h2 class=\"text-center\">Welcome</h2>\r\n    <br/>\r\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n      <form>\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" [(ngModel)]=\"user_name\" class=\"form-control\" name=\"user_name\" placeholder=\"Your User Name\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Your Password\">\r\n        </div>\r\n        <div class=\"form-check\">\r\n          <button type=\"submit\" class=\"btn btn-primary\" (click)=\"login()\">Login</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _services_main_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/main.services */ "./src/app/services/main.services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_notifications_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/notifications.services */ "./src/app/services/notifications.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, main, mess) {
        this.router = router;
        this.main = main;
        this.mess = mess;
        if (localStorage.getItem('currentUser')) {
            this.router.navigateByUrl('/');
        }
        else {
            this.router.navigateByUrl('/login');
        }
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.main.PostRequest('login', { user_name: this.user_name, password: this.password }).subscribe(function (response) {
            console.log(response);
            _this.mess.showMessage("Success", "Login Success", "success");
            localStorage.setItem('currentUser', JSON.stringify(response));
            _this.main.setHeaders(localStorage.getItem("currentUser"));
            _this.router.navigateByUrl('/');
        }, function (err) {
            console.log(err.error);
            _this.mess.showMessage("Error", err.error, "error");
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_main_services__WEBPACK_IMPORTED_MODULE_0__["MainServices"],
            _services_notifications_services__WEBPACK_IMPORTED_MODULE_3__["NotificationsServices"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/notifications/notifications.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/notifications/notifications.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep button {\n    margin-right: .25em;\n}\n\n:host ::ng-deep .ui-message,\n:host ::ng-deep .ui-inputtext {\n    margin-right: .25em;\n}"

/***/ }),

/***/ "./src/app/components/notifications/notifications.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/notifications/notifications.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-growl></p-growl>"

/***/ }),

/***/ "./src/app/components/notifications/notifications.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/notifications/notifications.component.ts ***!
  \*********************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_notifications_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/notifications.services */ "./src/app/services/notifications.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! ./notifications.component.html */ "./src/app/components/notifications/notifications.component.html"),
            styles: [__webpack_require__(/*! ./notifications.component.css */ "./src/app/components/notifications/notifications.component.css")],
            providers: [_services_notifications_services__WEBPACK_IMPORTED_MODULE_1__["NotificationsServices"]]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/components/types/types.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/types/types.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\">\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">All Items Types</div>\n    <div class=\"panel-body\">\n      <div class=\"row\">\n\n        <div class=\"col-xs-12\">\n          <table class=\"table\">\n            <thead class=\"black white-text\">\n              <tr>\n                <th scope=\"col\">ID</th>\n                <th scope=\"col\">Name</th>\n                <th scope=\"col\">Actions</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let type of types; let index = index\">\n                <th scope=\"row\">{{index + 1}}</th>\n                <td>{{type.ptype_name}}</td>\n                <td class=\"actions\">\n                  <a (click)=\"deleteItemType(type.ptype_id)\">\n                    <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                  </a>\n                  <a routerLink=\"{{'/updateItemsType/' + type.ptype_id}}\">\n                    <i class=\"fa fa-pencil-square\" aria-hidden=\"true\"></i>\n                  </a>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/types/types.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/types/types.component.ts ***!
  \*****************************************************/
/*! exports provided: TypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypesComponent", function() { return TypesComponent; });
/* harmony import */ var _services_itemsTypes_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/itemsTypes.services */ "./src/app/services/itemsTypes.services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_notifications_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/notifications.services */ "./src/app/services/notifications.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TypesComponent = /** @class */ (function () {
    function TypesComponent(itemsTypes, mess) {
        this.itemsTypes = itemsTypes;
        this.mess = mess;
        this.getAllItemsTypes();
    }
    TypesComponent.prototype.getAllItemsTypes = function () {
        var _this = this;
        this.itemsTypes.getAll().subscribe(function (data) {
            _this.types = data;
        });
    };
    TypesComponent.prototype.deleteItemType = function (id) {
        var _this = this;
        this.itemsTypes.deleteType(id).subscribe(function (res) {
            _this.mess.showMessage("Success", "Delete type Done", "warn");
            _this.getAllItemsTypes();
        });
    };
    TypesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'types',
            template: __webpack_require__(/*! ./types.component.html */ "./src/app/components/types/types.component.html")
        }),
        __metadata("design:paramtypes", [_services_itemsTypes_services__WEBPACK_IMPORTED_MODULE_0__["ItemsTypesServices"],
            _services_notifications_services__WEBPACK_IMPORTED_MODULE_2__["NotificationsServices"]])
    ], TypesComponent);
    return TypesComponent;
}());



/***/ }),

/***/ "./src/app/components/update-invoice/update-invoice.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/update-invoice/update-invoice.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/update-invoice/update-invoice.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/update-invoice/update-invoice.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\">\r\n  <div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\" *ngIf=\"state == 'Edit' && invoice\">Edit Invoice</div>\r\n    <div class=\"panel-heading\" *ngIf=\"state == 'Add'\">Add Invoice</div>\r\n    <div class=\"panel-body\">\r\n      <div class=\"row\">\r\n\r\n\r\n        <div class=\"col-xs-12\" *ngIf=\"state == 'Edit' && invoice\">\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">Invoice Name</label>\r\n            <input autocomplete=\"no\" name=\"name\" type=\"text\" class=\"form-control\" id=\"name\" [(ngModel)]=\"invoice.name\" [disabled]=\"currentUserType !== 'admin' && currentUserType !== 'account manager'\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"type\">Invoice Type</label>\r\n            <select name=\"type\" class=\"form-control\" id=\"type\" [(ngModel)]=\"invoice.type_id\" [disabled]=\"currentUserType !== 'admin' && currentUserType !== 'account manager'\">\r\n              <option value=\"\">-- Please Select --</option>\r\n              <option *ngFor=\"let type of types\" value=\"{{type.ptype_id}}\">{{type.ptype_name}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"data_from\">Date (From)</label>\r\n            <input autocomplete=\"no\" name=\"data_from\" type=\"date\" class=\"form-control\" id=\"data_from\" [(ngModel)]=\"invoice.data_from\" [disabled]=\"currentUserType !== 'admin' && currentUserType !== 'account manager'\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"data_to\">Date (to)</label>\r\n            <input autocomplete=\"no\" name=\"data_to\" type=\"date\" class=\"form-control\" id=\"data_to\" [(ngModel)]=\"invoice.data_to\" [disabled]=\"currentUserType !== 'admin' && currentUserType !== 'account manager'\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"price\">Price (L.E)</label>\r\n            <input autocomplete=\"no\" name=\"price\" type=\"number\" class=\"form-control\" id=\"price\" [(ngModel)]=\"invoice.price\" [disabled]=\"currentUserType !== 'admin' && currentUserType !== 'account manager'\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"vat_percentage\">Vat</label>\r\n            <input autocomplete=\"no\" name=\"vat_percentage\" type=\"number\" class=\"form-control\" id=\"vat_percentage\" [(ngModel)]=\"invoice.vat_percentage\"\r\n              readonly>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"company_name\">Company Name</label>\r\n            <input autocomplete=\"no\" name=\"company_name\" type=\"text\" class=\"form-control\" id=\"company_name\" [(ngModel)]=\"invoice.company_name\" [disabled]=\"currentUserType !== 'admin' && currentUserType !== 'account manager'\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"client_name\">Client Name</label>\r\n            <input autocomplete=\"no\" name=\"client_name\" type=\"text\" class=\"form-control\" id=\"client_name\" [(ngModel)]=\"invoice.client_name\" [disabled]=\"currentUserType !== 'admin' && currentUserType !== 'account manager'\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"client_phone\">Client Phone</label>\r\n            <input autocomplete=\"no\" name=\"client_phone\" type=\"number\" class=\"form-control\" id=\"client_phone\" [(ngModel)]=\"invoice.client_phone\" [disabled]=\"currentUserType !== 'admin' && currentUserType !== 'account manager'\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"po_number\">Po Number</label>\r\n            <input autocomplete=\"no\" name=\"po_number\" type=\"number\" class=\"form-control\" id=\"po_number\" [(ngModel)]=\"invoice.po_number\" [disabled]=\"currentUserType !== 'admin' && currentUserType !== 'account manager'\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"items\">Items</label>\r\n            <select name=\"items\" class=\"form-control\" id=\"items\" (change)=\"addNewItemToInvoice(itemId)\" [(ngModel)]=\"itemId\" [disabled]=\"currentUserType !== 'admin'\">\r\n              <option value=\"\">-- Please Select --</option>\r\n              <option *ngFor=\"let item of items\" value=\"{{item.pitem_id}}\">{{item.ptype_name}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\" *ngIf=\"invoice.items.length > 0\">\r\n            <label for=\"addItems\">Add Items</label>\r\n            <span *ngFor=\"let addItem of invoice.items\" class=\"addedItemBlock\">\r\n              <i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"removeItemFromInvoice(addItem)\"></i>\r\n              <input type=\"text\" class=\"form-control col-xs-12\" [(ngModel)]=\"addItem.item_id\" placeholder=\"Item ID\" readonly>\r\n              <input type=\"text\" class=\"form-control col-xs-12\" [(ngModel)]=\"addItem.item_name\" placeholder=\"Item Name\" [disabled]=\"currentUserType !== 'admin'\">\r\n              <input type=\"text\" class=\"form-control col-xs-12\" [(ngModel)]=\"addItem.item_description\" placeholder=\"Item Description\" [disabled]=\"currentUserType !== 'admin'\">\r\n              <input type=\"text\" class=\"form-control col-xs-12\" [(ngModel)]=\"addItem.item_cost\" placeholder=\"Item Cost\" [ngClass]=\"{'disBg': currentUserType !== 'admin'}\" [disabled]=\"currentUserType !== 'admin'\">\r\n              <input type=\"text\" class=\"form-control col-xs-12\" [(ngModel)]=\"addItem.item_quantity\" placeholder=\"Item Quantity\" [disabled]=\"currentUserType !== 'admin'\">\r\n              <input type=\"text\" class=\"form-control col-xs-12\" [(ngModel)]=\"addItem.item_price\" placeholder=\"Item Price\" [disabled]=\"currentUserType !== 'admin' && currentUserType !== 'account manager'\">\r\n            </span>\r\n          </div>\r\n          <button type=\"submit\" class=\"btn btn-default\" (click)=\"editInvoice(invoice)\">Edit</button>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-xs-12\" *ngIf=\"state == 'Add'\">\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">Invoice Name</label>\r\n            <input autocomplete=\"no\" name=\"name\" type=\"text\" class=\"form-control\" id=\"name\" [(ngModel)]=\"invoice.name\" [disabled]=\"currentUserType !== 'admin'\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"type\">Invoice Type</label>\r\n            <select name=\"type\" class=\"form-control\" id=\"type\" [(ngModel)]=\"invoice.type_id\" [disabled]=\"currentUserType !== 'admin'\">\r\n              <option value=\"\">-- Please Select --</option>\r\n              <option *ngFor=\"let type of types\" value=\"{{type.ptype_id}}\">{{type.ptype_name}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"data_from\">Date (From)</label>\r\n            <input autocomplete=\"no\" name=\"data_from\" type=\"date\" class=\"form-control\" id=\"data_from\" [(ngModel)]=\"invoice.data_from\"\r\n              [disabled]=\"currentUserType !== 'admin'\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"data_to\">Date (to)</label>\r\n            <input autocomplete=\"no\" name=\"data_to\" type=\"date\" class=\"form-control\" id=\"data_to\" [(ngModel)]=\"invoice.data_to\" [disabled]=\"currentUserType !== 'admin'\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"price\">Price (L.E)</label>\r\n            <input autocomplete=\"no\" name=\"price\" type=\"number\" class=\"form-control\" id=\"price\" [(ngModel)]=\"invoice.price\" [disabled]=\"currentUserType !== 'admin'\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"vat_percentage\">Vat</label>\r\n            <input autocomplete=\"no\" name=\"vat_percentage\" type=\"number\" class=\"form-control\" id=\"vat_percentage\" [(ngModel)]=\"invoice.vat_percentage\"\r\n              readonly>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"company_name\">Company Name</label>\r\n            <input autocomplete=\"no\" name=\"company_name\" type=\"text\" class=\"form-control\" id=\"company_name\" [(ngModel)]=\"invoice.company_name\"\r\n              [disabled]=\"currentUserType !== 'admin'\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"client_name\">Client Name</label>\r\n            <input autocomplete=\"no\" name=\"client_name\" type=\"text\" class=\"form-control\" id=\"client_name\" [(ngModel)]=\"invoice.client_name\"\r\n              [disabled]=\"currentUserType !== 'admin'\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"client_phone\">Client Phone</label>\r\n            <input autocomplete=\"no\" name=\"client_phone\" type=\"number\" class=\"form-control\" id=\"client_phone\" [(ngModel)]=\"invoice.client_phone\"\r\n              [disabled]=\"currentUserType !== 'admin'\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"po_number\">Po Number</label>\r\n            <input autocomplete=\"no\" name=\"po_number\" type=\"number\" class=\"form-control\" id=\"po_number\" [(ngModel)]=\"invoice.po_number\"\r\n              [disabled]=\"currentUserType !== 'admin'\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"items\">Items</label>\r\n            <select name=\"items\" class=\"form-control\" id=\"items\" (change)=\"addNewItemToInvoice(itemId)\" [(ngModel)]=\"itemId\">\r\n              <option value=\"\">-- Please Select --</option>\r\n              <option *ngFor=\"let item of items\" value=\"{{item.item_id}}\">{{item.item_name}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\" *ngIf=\"invoice.items.length > 0\">\r\n            <label for=\"addItems\">Add Items</label>\r\n            <span *ngFor=\"let addItem of invoice.items\" class=\"addedItemBlock\">\r\n              <i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"removeItemFromInvoice(addItem)\"></i>\r\n              <input type=\"text\" class=\"form-control col-xs-12\" [(ngModel)]=\"addItem.item_id\" placeholder=\"Item ID\" readonly>\r\n              <input type=\"text\" class=\"form-control col-xs-12\" [(ngModel)]=\"addItem.item_name\" placeholder=\"Item Name\" [disabled]=\"currentUserType !== 'accountant' && currentUserType !== 'admin'\">\r\n              <input type=\"text\" class=\"form-control col-xs-12\" [(ngModel)]=\"addItem.item_description\" placeholder=\"Item Description\" [disabled]=\"currentUserType !== 'accountant' && currentUserType !== 'admin'\">\r\n              <input type=\"number\" class=\"form-control col-xs-12\" [(ngModel)]=\"addItem.item_cost\" placeholder=\"Item Cost\" [disabled]=\"currentUserType !== 'accountant' && currentUserType !== 'admin'\">\r\n              <input type=\"number\" class=\"form-control col-xs-12\" [(ngModel)]=\"addItem.item_quantity\" placeholder=\"Item Quantity\" [disabled]=\"currentUserType !== 'accountant' && currentUserType !== 'admin'\">\r\n              <input type=\"number\" class=\"form-control col-xs-12\" [(ngModel)]=\"addItem.item_price\" placeholder=\"Item Price\" [disabled]=\"currentUserType !== 'admin'\">\r\n            </span>\r\n          </div>\r\n          <button type=\"submit\" class=\"btn btn-default\" (click)=\"addNewInvoice(invoice)\">Add</button>\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/update-invoice/update-invoice.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/update-invoice/update-invoice.component.ts ***!
  \***********************************************************************/
/*! exports provided: UpdateInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateInvoiceComponent", function() { return UpdateInvoiceComponent; });
/* harmony import */ var _services_permissions_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/permissions.services */ "./src/app/services/permissions.services.ts");
/* harmony import */ var _services_notifications_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/notifications.services */ "./src/app/services/notifications.services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_invoices_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/invoices.services */ "./src/app/services/invoices.services.ts");
/* harmony import */ var _services_itemsTypes_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/itemsTypes.services */ "./src/app/services/itemsTypes.services.ts");
/* harmony import */ var _services_items_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/items.services */ "./src/app/services/items.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UpdateInvoiceComponent = /** @class */ (function () {
    function UpdateInvoiceComponent(router, route, mess, invoiceServices, typesServices, itemsServices, permissionsServices) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.mess = mess;
        this.invoiceServices = invoiceServices;
        this.typesServices = typesServices;
        this.itemsServices = itemsServices;
        this.permissionsServices = permissionsServices;
        this.addItems = [];
        this.itemId = "";
        this.currentUserType = this.permissionsServices.getCurrentUserType();
        this.route.params.subscribe(function (param) {
            _this.id = param.id;
            _this.getTypes();
            _this.getItems();
            if (_this.id !== undefined) {
                _this.state = "Edit";
                _this.getIvoiceData(_this.id);
            }
            else {
                console.log(_this.currentUserType);
                if (_this.currentUserType === "account manager") {
                    _this.router.navigateByUrl('/');
                }
                _this.state = "Add";
                _this.invoice = {
                    items: [],
                    name: "",
                    type_id: "",
                    data_from: "",
                    data_to: "",
                    price: "",
                    vat_percentage: 14,
                    company_name: "",
                    client_name: "",
                    client_phone: "",
                    po_number: "",
                    accountant_lock: "",
                    account_manager_lock: ""
                };
            }
        });
    }
    UpdateInvoiceComponent.prototype.getIvoiceData = function (id) {
        var _this = this;
        this.invoiceServices.getInvoice(id).subscribe(function (data) {
            _this.invoice = data[0];
        });
    };
    UpdateInvoiceComponent.prototype.editInvoice = function (invoice) {
        var _this = this;
        if (this.currentUserType === 'account manager') {
            invoice.account_manager_lock = true;
        }
        this.invoiceServices.editInvoice(this.id, invoice).subscribe(function (res) {
            _this.mess.showMessage("Success", "Edit invoice Done", "success");
        });
    };
    UpdateInvoiceComponent.prototype.addNewInvoice = function (invoice) {
        var _this = this;
        // console.log(invoice)
        if (this.currentUserType === 'accountant') {
            invoice.accountant_lock = true;
            invoice.account_manager_lock = false;
        }
        this.invoiceServices.addNewInvoice(invoice).subscribe(function (res) {
            console.log(res);
            // this.invoice = {
            //   items: [],
            //   name: "",
            //   type_id: "",
            //   data_from: "",
            //   data_to: "",
            //   price: "",
            //   vat_percentage: 14,
            //   company_name: "",
            //   client_name: "",
            //   client_phone: "",
            //   po_number: "",
            //   accountant_lock: "",
            //   account_manager_lock: ""
            // }
            _this.mess.showMessage("Success", "Add invoice Done", "success");
        }, function (error) {
            console.log(error);
        });
    };
    UpdateInvoiceComponent.prototype.getTypes = function () {
        var _this = this;
        this.typesServices.getAll().subscribe(function (data) {
            _this.types = data;
        });
    };
    UpdateInvoiceComponent.prototype.getItems = function () {
        var _this = this;
        this.itemsServices.getAllItems().subscribe(function (data) {
            _this.items = data;
        });
    };
    UpdateInvoiceComponent.prototype.addNewItemToInvoice = function (itemID) {
        var items = this.items;
        for (var index = 0; index < items.length; index++) {
            if (items[index].item_id == itemID) {
                var item = items[index];
                this.invoice.items.push({
                    item_id: item.item_id,
                    item_price: "",
                    item_quantity: "",
                    item_cost: "",
                    item_name: item.item_name,
                    item_description: item.item_description
                });
            }
        }
        this.itemId = "";
    };
    UpdateInvoiceComponent.prototype.removeItemFromInvoice = function (item) {
        var items = this.invoice.items;
        for (var index = 0; index < items.length; index++) {
            var oneitem = items[index];
            if (oneitem.item_id === item.item_id) {
                items.splice(index, 1);
            }
        }
    };
    UpdateInvoiceComponent.prototype.ngOnInit = function () {
    };
    UpdateInvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-update-invoice',
            template: __webpack_require__(/*! ./update-invoice.component.html */ "./src/app/components/update-invoice/update-invoice.component.html"),
            styles: [__webpack_require__(/*! ./update-invoice.component.css */ "./src/app/components/update-invoice/update-invoice.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_notifications_services__WEBPACK_IMPORTED_MODULE_1__["NotificationsServices"],
            _services_invoices_services__WEBPACK_IMPORTED_MODULE_4__["InvoicesServices"],
            _services_itemsTypes_services__WEBPACK_IMPORTED_MODULE_5__["ItemsTypesServices"],
            _services_items_services__WEBPACK_IMPORTED_MODULE_6__["ItemsServices"],
            _services_permissions_services__WEBPACK_IMPORTED_MODULE_0__["PermissionsServices"]])
    ], UpdateInvoiceComponent);
    return UpdateInvoiceComponent;
}());



/***/ }),

/***/ "./src/app/components/users-types/users-types.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/users-types/users-types.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/users-types/users-types.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/users-types/users-types.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\">\r\n  <div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\">All Users Types</div>\r\n    <div class=\"panel-body\">\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-xs-12\">\r\n          <table class=\"table\">\r\n            <thead class=\"black white-text\">\r\n              <tr>\r\n                <th scope=\"col\">ID</th>\r\n                <th scope=\"col\">Type Name</th>\r\n                <th scope=\"col\">Actions</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let type of usersTypes; let index = index\">\r\n                <th scope=\"row\">{{index + 1}}</th>\r\n                <td>{{type.utype_name}}</td>\r\n                <td class=\"actions\">\r\n                  <a (click)=\"deleteUserType(type._id)\">\r\n                    <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                  </a>\r\n                  <a routerLink=\"{{'/updateUserType/' + type._id}}\">\r\n                    <i class=\"fa fa-pencil-square\" aria-hidden=\"true\"></i>\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/users-types/users-types.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/users-types/users-types.component.ts ***!
  \*****************************************************************/
/*! exports provided: UsersTypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersTypesComponent", function() { return UsersTypesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_main_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/main.services */ "./src/app/services/main.services.ts");
/* harmony import */ var _services_notifications_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/notifications.services */ "./src/app/services/notifications.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersTypesComponent = /** @class */ (function () {
    function UsersTypesComponent(main, mess) {
        this.main = main;
        this.mess = mess;
        this.msgs = [];
        this.getAllUsersTypes();
    }
    UsersTypesComponent.prototype.getAllUsersTypes = function () {
        var _this = this;
        this.main.getRequest('userstypes').subscribe(function (data) {
            _this.usersTypes = data;
            console.log(_this.usersTypes);
        });
    };
    UsersTypesComponent.prototype.deleteUserType = function (id) {
        var _this = this;
        this.main.DeleteRequest('userstypes/' + id).subscribe(function (res) {
            _this.getAllUsersTypes();
            _this.mess.showMessage("Success", "Delete type Done", "warn");
        });
    };
    UsersTypesComponent.prototype.ngOnInit = function () {
    };
    UsersTypesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users-types',
            template: __webpack_require__(/*! ./users-types.component.html */ "./src/app/components/users-types/users-types.component.html"),
            styles: [__webpack_require__(/*! ./users-types.component.css */ "./src/app/components/users-types/users-types.component.css")]
        }),
        __metadata("design:paramtypes", [_services_main_services__WEBPACK_IMPORTED_MODULE_1__["MainServices"],
            _services_notifications_services__WEBPACK_IMPORTED_MODULE_2__["NotificationsServices"]])
    ], UsersTypesComponent);
    return UsersTypesComponent;
}());



/***/ }),

/***/ "./src/app/components/users/users.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/users/users.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/users/users.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/users/users.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\">\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">All Users</div>\n    <div class=\"panel-body\">\n      <div class=\"row\">\n\n        <div class=\"col-xs-12\">\n          <table class=\"table\">\n            <thead class=\"black white-text\">\n              <tr>\n                <th scope=\"col\">ID</th>\n                <th scope=\"col\">Name</th>\n                <th scope=\"col\">User Name</th>\n                <th scope=\"col\">Email</th>\n                <th scope=\"col\">type</th>\n                <th scope=\"col\">Actions</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let user of users; let index = index\">\n                <!-- <th scope=\"row\">{{item.item_id}}</th> -->\n                <th scope=\"row\">{{index + 1}}</th>\n                <td>{{user.name}}</td>\n                <td>{{user.user_name}}</td>\n                <td>{{user.email}}</td>\n                <td>{{user.utype_name}}</td>\n                <td class=\"actions\">\n                  <a (click)=\"deleteUser(user.user_id)\">\n                    <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                  </a>\n                  <a routerLink=\"{{'/updateUser/' + user.user_id}}\">\n                    <i class=\"fa fa-pencil-square\" aria-hidden=\"true\"></i>\n                  </a>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/users/users.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/users/users.component.ts ***!
  \*****************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_main_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/main.services */ "./src/app/services/main.services.ts");
/* harmony import */ var _services_notifications_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/notifications.services */ "./src/app/services/notifications.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersComponent = /** @class */ (function () {
    function UsersComponent(router, main, mess) {
        this.router = router;
        this.main = main;
        this.mess = mess;
        this.msgs = [];
        this.getAllUsers();
    }
    UsersComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.main.getRequest('users').subscribe(function (data) {
            _this.users = data;
            console.log(_this.users);
        });
    };
    UsersComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.main.DeleteRequest('users/' + id).subscribe(function (res) {
            console.log(res);
            _this.mess.showMessage("Success", "Delete user Done", "warn");
            _this.getAllUsers();
        });
    };
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/components/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/components/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_main_services__WEBPACK_IMPORTED_MODULE_2__["MainServices"],
            _services_notifications_services__WEBPACK_IMPORTED_MODULE_3__["NotificationsServices"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.services.ts":
/*!*******************************************!*\
  !*** ./src/app/services/auth.services.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigateByUrl('/login');
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/home.services.ts":
/*!*******************************************!*\
  !*** ./src/app/services/home.services.ts ***!
  \*******************************************/
/*! exports provided: HomeServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeServices", function() { return HomeServices; });
/* harmony import */ var _main_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.services */ "./src/app/services/main.services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeServices = /** @class */ (function () {
    function HomeServices(main) {
        this.main = main;
    }
    HomeServices.prototype.getNumberOfItems = function () {
        return this.main.getRequest('items/count');
    };
    HomeServices.prototype.getNumberOfInvoices = function () {
        return this.main.getRequest('invoices/count');
    };
    HomeServices = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_main_services__WEBPACK_IMPORTED_MODULE_0__["MainServices"]])
    ], HomeServices);
    return HomeServices;
}());



/***/ }),

/***/ "./src/app/services/invoices.services.ts":
/*!***********************************************!*\
  !*** ./src/app/services/invoices.services.ts ***!
  \***********************************************/
/*! exports provided: InvoicesServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesServices", function() { return InvoicesServices; });
/* harmony import */ var _main_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.services */ "./src/app/services/main.services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InvoicesServices = /** @class */ (function () {
    function InvoicesServices(main) {
        this.main = main;
    }
    InvoicesServices.prototype.getInvoice = function (id) {
        return this.main.getRequest('invoices/' + id);
    };
    InvoicesServices.prototype.getAllInvoices = function () {
        return this.main.getRequest('invoices');
    };
    InvoicesServices.prototype.addNewInvoice = function (invoice) {
        return this.main.PostRequest('invoices', invoice);
    };
    InvoicesServices.prototype.editInvoice = function (id, invoice) {
        return this.main.PutRequest('invoices/' + id, invoice);
    };
    InvoicesServices.prototype.deleteInvoice = function (id) {
        return this.main.DeleteRequest('invoices/' + id);
    };
    InvoicesServices = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_main_services__WEBPACK_IMPORTED_MODULE_0__["MainServices"]])
    ], InvoicesServices);
    return InvoicesServices;
}());



/***/ }),

/***/ "./src/app/services/items.services.ts":
/*!********************************************!*\
  !*** ./src/app/services/items.services.ts ***!
  \********************************************/
/*! exports provided: ItemsServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsServices", function() { return ItemsServices; });
/* harmony import */ var _main_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.services */ "./src/app/services/main.services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemsServices = /** @class */ (function () {
    function ItemsServices(http, main) {
        this.http = http;
        this.main = main;
    }
    ItemsServices.prototype.getAllItems = function () {
        return this.main.getRequest('items');
    };
    ItemsServices = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _main_services__WEBPACK_IMPORTED_MODULE_0__["MainServices"]])
    ], ItemsServices);
    return ItemsServices;
}());



/***/ }),

/***/ "./src/app/services/itemsTypes.services.ts":
/*!*************************************************!*\
  !*** ./src/app/services/itemsTypes.services.ts ***!
  \*************************************************/
/*! exports provided: ItemsTypesServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsTypesServices", function() { return ItemsTypesServices; });
/* harmony import */ var _main_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.services */ "./src/app/services/main.services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemsTypesServices = /** @class */ (function () {
    function ItemsTypesServices(main) {
        this.main = main;
    }
    ItemsTypesServices.prototype.getAll = function () {
        return this.main.getRequest('prodtypes');
    };
    ItemsTypesServices.prototype.deleteType = function (id) {
        return this.main.DeleteRequest('prodtypes/' + id);
    };
    ItemsTypesServices = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_main_services__WEBPACK_IMPORTED_MODULE_0__["MainServices"]])
    ], ItemsTypesServices);
    return ItemsTypesServices;
}());



/***/ }),

/***/ "./src/app/services/main.services.ts":
/*!*******************************************!*\
  !*** ./src/app/services/main.services.ts ***!
  \*******************************************/
/*! exports provided: MainServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainServices", function() { return MainServices; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _notifications_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notifications.services */ "./src/app/services/notifications.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MainServices = /** @class */ (function () {
    function MainServices(http, router, mess) {
        this.http = http;
        this.router = router;
        this.mess = mess;
        // url = "http://localhost:3000/";
        this.url = "https://testfordeg.herokuapp.com/"; // production
        this.getToken();
    }
    MainServices.prototype.ifTokenExpired = function (err) {
        // console.log(err);
        if (typeof err === "string") {
            if (err.includes("invalid") || err.includes("denied") || err.includes("Unauthorized")) {
                localStorage.removeItem("currentUser");
                this.router.navigateByUrl('/login');
            }
        }
        else {
            console.log(err.text);
            this.mess.showMessage("Main Services", err.text, "error");
        }
    };
    MainServices.prototype.getToken = function () {
        if (JSON.parse(localStorage.getItem("currentUser"))) {
            this.currentUser = localStorage.getItem("currentUser");
            this.setHeaders(this.currentUser);
        }
        else {
            this.router.navigateByUrl('/login');
        }
    };
    MainServices.prototype.setHeaders = function (user) {
        var token = JSON.parse(user).token;
        // console.log(token);
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set("auth-token", token)
            .set("Content-Type", "application/json");
    };
    MainServices.prototype.getRequest = function (route) {
        var _this = this;
        var newRoute = this.url + route;
        return this.http.get(newRoute, { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error, caught) {
            // console.log("error", error);
            _this.ifTokenExpired(error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
        }));
    };
    MainServices.prototype.PostRequest = function (route, body) {
        var _this = this;
        var newRoute = this.url + route;
        return this.http.post(newRoute, body, { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error, caught) {
            // console.log("error", error);
            _this.ifTokenExpired(error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
        }));
    };
    MainServices.prototype.PutRequest = function (route, body) {
        var _this = this;
        var newRoute = this.url + route;
        return this.http.put(newRoute, body, { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error, caught) {
            // console.log("error", error);
            _this.ifTokenExpired(error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
        }));
    };
    MainServices.prototype.DeleteRequest = function (route) {
        var _this = this;
        var newRoute = this.url + route;
        return this.http.delete(newRoute, { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error, caught) {
            // console.log("error", error);
            _this.ifTokenExpired(error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
        }));
    };
    MainServices.prototype.handleError = function () {
    };
    MainServices = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _notifications_services__WEBPACK_IMPORTED_MODULE_5__["NotificationsServices"]])
    ], MainServices);
    return MainServices;
}());



/***/ }),

/***/ "./src/app/services/notifications.services.ts":
/*!****************************************************!*\
  !*** ./src/app/services/notifications.services.ts ***!
  \****************************************************/
/*! exports provided: NotificationsServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsServices", function() { return NotificationsServices; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsServices = /** @class */ (function () {
    function NotificationsServices(messageService) {
        this.messageService = messageService;
    }
    // success - info - warn - error - 
    NotificationsServices.prototype.showMessage = function (mess, desc, severity) {
        this.messageService.add({ severity: severity, summary: mess, detail: desc });
    };
    NotificationsServices.prototype.clearMessages = function () {
        this.messageService.clear();
    };
    NotificationsServices = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], NotificationsServices);
    return NotificationsServices;
}());



/***/ }),

/***/ "./src/app/services/permissions.services.ts":
/*!**************************************************!*\
  !*** ./src/app/services/permissions.services.ts ***!
  \**************************************************/
/*! exports provided: PermissionsServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsServices", function() { return PermissionsServices; });
/* harmony import */ var _main_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.services */ "./src/app/services/main.services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PermissionsServices = /** @class */ (function () {
    function PermissionsServices(main) {
        this.main = main;
        this.getCurrentUserType();
    }
    PermissionsServices.prototype.getCurrentUserType = function () {
        if (localStorage.getItem("currentUser")) {
            this.currentUserType = JSON.parse(localStorage.getItem("currentUser")).utype_name.toLowerCase();
            return this.currentUserType;
        }
    };
    PermissionsServices.prototype.getCurrentUserName = function () {
        if (localStorage.getItem("currentUser")) {
            this.currentUserName = JSON.parse(localStorage.getItem("currentUser")).name;
            return this.currentUserName;
        }
    };
    PermissionsServices = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_main_services__WEBPACK_IMPORTED_MODULE_0__["MainServices"]])
    ], PermissionsServices);
    return PermissionsServices;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Work\accounts361degrees\FrontEnd\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map