(self.webpackChunkcd_user=self.webpackChunkcd_user||[]).push([[9383,237],{9383:(K,A,c)=>{c.r(A),c.d(A,{DEFAULT_LANGUAGE:()=>w,FakeMissingTranslationHandler:()=>S,MissingTranslationHandler:()=>D,TranslateCompiler:()=>T,TranslateDefaultParser:()=>P,TranslateDirective:()=>R,TranslateFakeCompiler:()=>F,TranslateFakeLoader:()=>y,TranslateLoader:()=>p,TranslateModule:()=>I,TranslateParser:()=>v,TranslatePipe:()=>V,TranslateService:()=>C,TranslateStore:()=>M,USE_DEFAULT_LANG:()=>_,USE_EXTEND:()=>E,USE_STORE:()=>m});var r=c(4836),o=c(5126),d=c(8808);class p{}let y=(()=>{class n extends p{getTranslation(e){return(0,o.of)({})}}return n.\u0275fac=function(){let l;return function(t){return(l||(l=r.\u0275\u0275getInheritedFactory(n)))(t||n)}}(),n.\u0275prov=r.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();class D{}let S=(()=>{class n{handle(e){return e.key}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=r.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();function L(n,l){if(n===l)return!0;if(null===n||null===l)return!1;if(n!=n&&l!=l)return!0;let a,s,i,e=typeof n;if(e==typeof l&&"object"==e){if(!Array.isArray(n)){if(Array.isArray(l))return!1;for(s in i=Object.create(null),n){if(!L(n[s],l[s]))return!1;i[s]=!0}for(s in l)if(!(s in i)&&typeof l[s]<"u")return!1;return!0}if(!Array.isArray(l))return!1;if((a=n.length)==l.length){for(s=0;s<a;s++)if(!L(n[s],l[s]))return!1;return!0}}return!1}function h(n){return typeof n<"u"&&null!==n}function j(n){return n&&"object"==typeof n&&!Array.isArray(n)}function O(n,l){let e=Object.assign({},n);return j(n)&&j(l)&&Object.keys(l).forEach(t=>{j(l[t])?t in n?e[t]=O(n[t],l[t]):Object.assign(e,{[t]:l[t]}):Object.assign(e,{[t]:l[t]})}),e}class v{}let P=(()=>{class n extends v{constructor(){super(...arguments),this.templateMatcher=/{{\s?([^{}\s]*)\s?}}/g}interpolate(e,t){let a;return a="string"==typeof e?this.interpolateString(e,t):"function"==typeof e?this.interpolateFunction(e,t):e,a}getValue(e,t){let a="string"==typeof t?t.split("."):[t];t="";do{t+=a.shift(),!h(e)||!h(e[t])||"object"!=typeof e[t]&&a.length?a.length?t+=".":e=void 0:(e=e[t],t="")}while(a.length);return e}interpolateFunction(e,t){return e(t)}interpolateString(e,t){return t?e.replace(this.templateMatcher,(a,s)=>{let i=this.getValue(t,s);return h(i)?i:a}):e}}return n.\u0275fac=function(){let l;return function(t){return(l||(l=r.\u0275\u0275getInheritedFactory(n)))(t||n)}}(),n.\u0275prov=r.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();class T{}let F=(()=>{class n extends T{compile(e,t){return e}compileTranslations(e,t){return e}}return n.\u0275fac=function(){let l;return function(t){return(l||(l=r.\u0275\u0275getInheritedFactory(n)))(t||n)}}(),n.\u0275prov=r.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();class M{constructor(){this.currentLang=this.defaultLang,this.translations={},this.langs=[],this.onTranslationChange=new r.EventEmitter,this.onLangChange=new r.EventEmitter,this.onDefaultLangChange=new r.EventEmitter}}const m=new r.InjectionToken("USE_STORE"),_=new r.InjectionToken("USE_DEFAULT_LANG"),w=new r.InjectionToken("DEFAULT_LANGUAGE"),E=new r.InjectionToken("USE_EXTEND");let C=(()=>{class n{constructor(e,t,a,s,i,u=!0,f=!1,g=!1,b){this.store=e,this.currentLoader=t,this.compiler=a,this.parser=s,this.missingTranslationHandler=i,this.useDefaultLang=u,this.isolate=f,this.extend=g,this.pending=!1,this._onTranslationChange=new r.EventEmitter,this._onLangChange=new r.EventEmitter,this._onDefaultLangChange=new r.EventEmitter,this._langs=[],this._translations={},this._translationRequests={},b&&this.setDefaultLang(b)}get onTranslationChange(){return this.isolate?this._onTranslationChange:this.store.onTranslationChange}get onLangChange(){return this.isolate?this._onLangChange:this.store.onLangChange}get onDefaultLangChange(){return this.isolate?this._onDefaultLangChange:this.store.onDefaultLangChange}get defaultLang(){return this.isolate?this._defaultLang:this.store.defaultLang}set defaultLang(e){this.isolate?this._defaultLang=e:this.store.defaultLang=e}get currentLang(){return this.isolate?this._currentLang:this.store.currentLang}set currentLang(e){this.isolate?this._currentLang=e:this.store.currentLang=e}get langs(){return this.isolate?this._langs:this.store.langs}set langs(e){this.isolate?this._langs=e:this.store.langs=e}get translations(){return this.isolate?this._translations:this.store.translations}set translations(e){this.isolate?this._translations=e:this.store.translations=e}setDefaultLang(e){if(e===this.defaultLang)return;let t=this.retrieveTranslations(e);typeof t<"u"?(null==this.defaultLang&&(this.defaultLang=e),t.pipe((0,d.take)(1)).subscribe(a=>{this.changeDefaultLang(e)})):this.changeDefaultLang(e)}getDefaultLang(){return this.defaultLang}use(e){if(e===this.currentLang)return(0,o.of)(this.translations[e]);let t=this.retrieveTranslations(e);return typeof t<"u"?(this.currentLang||(this.currentLang=e),t.pipe((0,d.take)(1)).subscribe(a=>{this.changeLang(e)}),t):(this.changeLang(e),(0,o.of)(this.translations[e]))}retrieveTranslations(e){let t;return(typeof this.translations[e]>"u"||this.extend)&&(this._translationRequests[e]=this._translationRequests[e]||this.getTranslation(e),t=this._translationRequests[e]),t}getTranslation(e){this.pending=!0;const t=this.currentLoader.getTranslation(e).pipe((0,d.shareReplay)(1),(0,d.take)(1));return this.loadingTranslations=t.pipe((0,d.map)(a=>this.compiler.compileTranslations(a,e)),(0,d.shareReplay)(1),(0,d.take)(1)),this.loadingTranslations.subscribe({next:a=>{this.translations[e]=this.extend&&this.translations[e]?{...a,...this.translations[e]}:a,this.updateLangs(),this.pending=!1},error:a=>{this.pending=!1}}),t}setTranslation(e,t,a=!1){t=this.compiler.compileTranslations(t,e),this.translations[e]=(a||this.extend)&&this.translations[e]?O(this.translations[e],t):t,this.updateLangs(),this.onTranslationChange.emit({lang:e,translations:this.translations[e]})}getLangs(){return this.langs}addLangs(e){e.forEach(t=>{-1===this.langs.indexOf(t)&&this.langs.push(t)})}updateLangs(){this.addLangs(Object.keys(this.translations))}getParsedResult(e,t,a){let s;if(t instanceof Array){let i={},u=!1;for(let f of t)i[f]=this.getParsedResult(e,f,a),(0,o.isObservable)(i[f])&&(u=!0);if(u){const f=t.map(g=>(0,o.isObservable)(i[g])?i[g]:(0,o.of)(i[g]));return(0,o.forkJoin)(f).pipe((0,d.map)(g=>{let b={};return g.forEach((U,N)=>{b[t[N]]=U}),b}))}return i}if(e&&(s=this.parser.interpolate(this.parser.getValue(e,t),a)),typeof s>"u"&&null!=this.defaultLang&&this.defaultLang!==this.currentLang&&this.useDefaultLang&&(s=this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang],t),a)),typeof s>"u"){let i={key:t,translateService:this};typeof a<"u"&&(i.interpolateParams=a),s=this.missingTranslationHandler.handle(i)}return typeof s<"u"?s:t}get(e,t){if(!h(e)||!e.length)throw new Error('Parameter "key" required');if(this.pending)return this.loadingTranslations.pipe((0,d.concatMap)(a=>(a=this.getParsedResult(a,e,t),(0,o.isObservable)(a)?a:(0,o.of)(a))));{let a=this.getParsedResult(this.translations[this.currentLang],e,t);return(0,o.isObservable)(a)?a:(0,o.of)(a)}}getStreamOnTranslationChange(e,t){if(!h(e)||!e.length)throw new Error('Parameter "key" required');return(0,o.concat)((0,o.defer)(()=>this.get(e,t)),this.onTranslationChange.pipe((0,d.switchMap)(a=>{const s=this.getParsedResult(a.translations,e,t);return"function"==typeof s.subscribe?s:(0,o.of)(s)})))}stream(e,t){if(!h(e)||!e.length)throw new Error('Parameter "key" required');return(0,o.concat)((0,o.defer)(()=>this.get(e,t)),this.onLangChange.pipe((0,d.switchMap)(a=>{const s=this.getParsedResult(a.translations,e,t);return(0,o.isObservable)(s)?s:(0,o.of)(s)})))}instant(e,t){if(!h(e)||!e.length)throw new Error('Parameter "key" required');let a=this.getParsedResult(this.translations[this.currentLang],e,t);if((0,o.isObservable)(a)){if(e instanceof Array){let s={};return e.forEach((i,u)=>{s[e[u]]=e[u]}),s}return e}return a}set(e,t,a=this.currentLang){this.translations[a][e]=this.compiler.compile(t,a),this.updateLangs(),this.onTranslationChange.emit({lang:a,translations:this.translations[a]})}changeLang(e){this.currentLang=e,this.onLangChange.emit({lang:e,translations:this.translations[e]}),null==this.defaultLang&&this.changeDefaultLang(e)}changeDefaultLang(e){this.defaultLang=e,this.onDefaultLangChange.emit({lang:e,translations:this.translations[e]})}reloadLang(e){return this.resetLang(e),this.getTranslation(e)}resetLang(e){this._translationRequests[e]=void 0,this.translations[e]=void 0}getBrowserLang(){if(typeof window>"u"||typeof window.navigator>"u")return;let e=window.navigator.languages?window.navigator.languages[0]:null;return e=e||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,typeof e>"u"?void 0:(-1!==e.indexOf("-")&&(e=e.split("-")[0]),-1!==e.indexOf("_")&&(e=e.split("_")[0]),e)}getBrowserCultureLang(){if(typeof window>"u"||typeof window.navigator>"u")return;let e=window.navigator.languages?window.navigator.languages[0]:null;return e=e||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,e}}return n.\u0275fac=function(e){return new(e||n)(r.\u0275\u0275inject(M),r.\u0275\u0275inject(p),r.\u0275\u0275inject(T),r.\u0275\u0275inject(v),r.\u0275\u0275inject(D),r.\u0275\u0275inject(_),r.\u0275\u0275inject(m),r.\u0275\u0275inject(E),r.\u0275\u0275inject(w))},n.\u0275prov=r.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})(),R=(()=>{class n{constructor(e,t,a){this.translateService=e,this.element=t,this._ref=a,this.onTranslationChangeSub||(this.onTranslationChangeSub=this.translateService.onTranslationChange.subscribe(s=>{s.lang===this.translateService.currentLang&&this.checkNodes(!0,s.translations)})),this.onLangChangeSub||(this.onLangChangeSub=this.translateService.onLangChange.subscribe(s=>{this.checkNodes(!0,s.translations)})),this.onDefaultLangChangeSub||(this.onDefaultLangChangeSub=this.translateService.onDefaultLangChange.subscribe(s=>{this.checkNodes(!0)}))}set translate(e){e&&(this.key=e,this.checkNodes())}set translateParams(e){L(this.currentParams,e)||(this.currentParams=e,this.checkNodes(!0))}ngAfterViewChecked(){this.checkNodes()}checkNodes(e=!1,t){let a=this.element.nativeElement.childNodes;a.length||(this.setContent(this.element.nativeElement,this.key),a=this.element.nativeElement.childNodes);for(let s=0;s<a.length;++s){let i=a[s];if(3===i.nodeType){let u;if(e&&(i.lastKey=null),h(i.lookupKey))u=i.lookupKey;else if(this.key)u=this.key;else{let f=this.getContent(i),g=f.trim();g.length&&(i.lookupKey=g,f!==i.currentValue?(u=g,i.originalContent=f||i.originalContent):i.originalContent?u=i.originalContent.trim():f!==i.currentValue&&(u=g,i.originalContent=f||i.originalContent))}this.updateValue(u,i,t)}}}updateValue(e,t,a){if(e){if(t.lastKey===e&&this.lastParams===this.currentParams)return;this.lastParams=this.currentParams;let s=i=>{i!==e&&(t.lastKey=e),t.originalContent||(t.originalContent=this.getContent(t)),t.currentValue=h(i)?i:t.originalContent||e,this.setContent(t,this.key?t.currentValue:t.originalContent.replace(e,t.currentValue)),this._ref.markForCheck()};if(h(a)){let i=this.translateService.getParsedResult(a,e,this.currentParams);(0,o.isObservable)(i)?i.subscribe({next:s}):s(i)}else this.translateService.get(e,this.currentParams).subscribe(s)}}getContent(e){return h(e.textContent)?e.textContent:e.data}setContent(e,t){h(e.textContent)?e.textContent=t:e.data=t}ngOnDestroy(){this.onLangChangeSub&&this.onLangChangeSub.unsubscribe(),this.onDefaultLangChangeSub&&this.onDefaultLangChangeSub.unsubscribe(),this.onTranslationChangeSub&&this.onTranslationChangeSub.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(r.\u0275\u0275directiveInject(C),r.\u0275\u0275directiveInject(r.ElementRef),r.\u0275\u0275directiveInject(r.ChangeDetectorRef))},n.\u0275dir=r.\u0275\u0275defineDirective({type:n,selectors:[["","translate",""],["","ngx-translate",""]],inputs:{translate:"translate",translateParams:"translateParams"}}),n})(),V=(()=>{class n{constructor(e,t){this.translate=e,this._ref=t,this.value="",this.lastKey=null,this.lastParams=[]}updateValue(e,t,a){let s=i=>{this.value=void 0!==i?i:e,this.lastKey=e,this._ref.markForCheck()};if(a){let i=this.translate.getParsedResult(a,e,t);(0,o.isObservable)(i.subscribe)?i.subscribe(s):s(i)}this.translate.get(e,t).subscribe(s)}transform(e,...t){if(!e||!e.length)return e;if(L(e,this.lastKey)&&L(t,this.lastParams))return this.value;let a;if(h(t[0])&&t.length)if("string"==typeof t[0]&&t[0].length){let s=t[0].replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g,'"$2":').replace(/:(\s)?(\')(.*?)(\')/g,':"$3"');try{a=JSON.parse(s)}catch{throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${t[0]}`)}}else"object"==typeof t[0]&&!Array.isArray(t[0])&&(a=t[0]);return this.lastKey=e,this.lastParams=t,this.updateValue(e,a),this._dispose(),this.onTranslationChange||(this.onTranslationChange=this.translate.onTranslationChange.subscribe(s=>{this.lastKey&&s.lang===this.translate.currentLang&&(this.lastKey=null,this.updateValue(e,a,s.translations))})),this.onLangChange||(this.onLangChange=this.translate.onLangChange.subscribe(s=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,a,s.translations))})),this.onDefaultLangChange||(this.onDefaultLangChange=this.translate.onDefaultLangChange.subscribe(()=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,a))})),this.value}_dispose(){typeof this.onTranslationChange<"u"&&(this.onTranslationChange.unsubscribe(),this.onTranslationChange=void 0),typeof this.onLangChange<"u"&&(this.onLangChange.unsubscribe(),this.onLangChange=void 0),typeof this.onDefaultLangChange<"u"&&(this.onDefaultLangChange.unsubscribe(),this.onDefaultLangChange=void 0)}ngOnDestroy(){this._dispose()}}return n.\u0275fac=function(e){return new(e||n)(r.\u0275\u0275directiveInject(C,16),r.\u0275\u0275directiveInject(r.ChangeDetectorRef,16))},n.\u0275pipe=r.\u0275\u0275definePipe({name:"translate",type:n,pure:!1}),n.\u0275prov=r.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})(),I=(()=>{class n{static forRoot(e={}){return{ngModule:n,providers:[e.loader||{provide:p,useClass:y},e.compiler||{provide:T,useClass:F},e.parser||{provide:v,useClass:P},e.missingTranslationHandler||{provide:D,useClass:S},M,{provide:m,useValue:e.isolate},{provide:_,useValue:e.useDefaultLang},{provide:E,useValue:e.extend},{provide:w,useValue:e.defaultLanguage},C]}}static forChild(e={}){return{ngModule:n,providers:[e.loader||{provide:p,useClass:y},e.compiler||{provide:T,useClass:F},e.parser||{provide:v,useClass:P},e.missingTranslationHandler||{provide:D,useClass:S},{provide:m,useValue:e.isolate},{provide:_,useValue:e.useDefaultLang},{provide:E,useValue:e.extend},{provide:w,useValue:e.defaultLanguage},C]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=r.\u0275\u0275defineInjector({}),n})()}}]);