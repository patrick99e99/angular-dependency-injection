# README

Angular Dependency Injection in conjunction with a new rails app is not working and I cannot figure out why...

* step 1: `gem install bundler`
* step 2: `bundle install`
* step 3: `rails s`
* step 4: go to localhost:3000 and observe the error:

> core.mjs:7643 ERROR Error: NG0202: This constructor is not compatible with Angular Dependency Injection because its dependency at index 0 of the parameter list is invalid.
> This can happen if the dependency type is a primitive like a string or if an ancestor of this class is missing an Angular decorator.
>
> Please check that 1) the type for the parameter at index 0 is correct and 2) the correct Angular decorators are defined for this class and its ancestors.
>     at ɵɵinvalidFactoryDep (core.mjs:4798:1)
>     at NodeInjectorFactory.AppComponent_Factory [as factory] (ɵfac.js? [sm]:1:1)
>     at getNodeInjectable (core.mjs:3523:1)
>     at instantiateRootComponent (core.mjs:12580:1)
>     at createRootComponent (core.mjs:14048:1)
>     at ComponentFactory.create (core.mjs:13925:1)
>     at ApplicationRef.bootstrap (core.mjs:27360:1)
>     at core.mjs:27020:1
>     at Array.forEach (<anonymous>)
>     at PlatformRef._moduleDoBootstrap (core.mjs:27020:1)
> handleError @ core.mjs:7643
> (anonymous) @ core.mjs:27101
> invoke @ zone.js:372
> run @ zone.js:134
> runOutsideAngular @ core.mjs:26190
> (anonymous) @ core.mjs:27101
> invoke @ zone.js:372
> onInvoke @ core.mjs:26291
> invoke @ zone.js:371
> run @ zone.js:134
> (anonymous) @ zone.js:1275
> invokeTask @ zone.js:406
> onInvokeTask @ core.mjs:26278
> invokeTask @ zone.js:405
> runTask @ zone.js:178
> drainMicroTaskQueue @ zone.js:585
> Promise.then (async)
> nativeScheduleMicroTask @ zone.js:561
> scheduleMicroTask @ zone.js:572
> scheduleTask @ zone.js:396
> scheduleTask @ zone.js:221
> scheduleMicroTask @ zone.js:241
> scheduleResolveOrReject @ zone.js:1265
> then @ zone.js:1461
> bootstrapModule @ core.mjs:27015
> ./app/javascript/packs/application.ts @ application.ts:5
> __webpack_require__ @ bootstrap:19
> __webpack_exec__ @ application.ts:5
> (anonymous) @ application.ts:5
> __webpack_require__.O @ chunk loaded:23
> (anonymous) @ application.ts:5
> webpackJsonpCallback @ jsonp chunk loading:34
> (anonymous) @ application.js:2
> zone.js:372 Error: NG0202: This constructor is not compatible with Angular Dependency Injection because its dependency at index 0 of the parameter list is invalid.
> This can happen if the dependency type is a primitive like a string or if an ancestor of this class is missing an Angular decorator.
>
> Please check that 1) the type for the parameter at index 0 is correct and 2) the correct Angular decorators are defined for this class and its ancestors.
>     at ɵɵinvalidFactoryDep (core.mjs:4798:1)
>     at NodeInjectorFactory.AppComponent_Factory [as factory] (ɵfac.js? [sm]:1:1)
>     at getNodeInjectable (core.mjs:3523:1)
>     at instantiateRootComponent (core.mjs:12580:1)
>     at createRootComponent (core.mjs:14048:1)
>     at ComponentFactory.create (core.mjs:13925:1)
>     at ApplicationRef.bootstrap (core.mjs:27360:1)
>     at core.mjs:27020:1
>     at Array.forEach (<anonymous>)
>     at PlatformRef._moduleDoBootstrap (core.mjs:27020:1)>

* step 5: open the file `app/javascript/packs/app.component.ts`
* step 6: comment out

		constructor (private service: AppService) {
			this.status = 'does not work!';
		}

* step 7: uncomment:

		//  constructor () {
		//    this.service = inject(AppService);
		//    this.status = 'works!';
		//  }

* step 8: refresh the browser and observe that there is no error.  Dependency
  injection only works when done via `inject()` but NOT with the constructor
  arguments.  Clearly something is messed up with configuruation somehow which
  is breaking that functionality and I have spent multiple days trying to
  figure out what and am a complete loss.

I have made a stack overflow post regarding this, and also posted on gitter and no one has responded: https://stackoverflow.com/questions/73548046/webpack-seems-to-be-breaking-dependency-injection-in-angular

