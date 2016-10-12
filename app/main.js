"use strict";
//this is JiT compiler
//The browser platform with a compiler
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
// The app module
var app_module_1 = require('./app.module');
// Compile and launch the module
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//this is AoT compiler
// The browser platform without a compiler
// import { platformBrowser } from '@angular/platform-browser';
// // The app module factory produced by the static offline compiler
// import { AppModuleNgFactory } from './app.module.ngfactory';
// // Launch with the app module factory.
// platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
//# sourceMappingURL=main.js.map