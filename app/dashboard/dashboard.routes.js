"use strict";
var home_component_1 = require('./home/home.component');
exports.MODULE_ROUTES = [
    { path: 'dashboard', component: home_component_1.HomeComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
exports.MODULE_COMPONENTS = [
    home_component_1.HomeComponent
];
//# sourceMappingURL=dashboard.routes.js.map