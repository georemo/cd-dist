(self.webpackChunkcd_shell=self.webpackChunkcd_shell||[]).push([[4984],{34984:(E,l,h)=>{h.r(l),h.d(l,{NGX_ECHARTS_CONFIG:()=>d,NgxEchartsDirective:()=>g,NgxEchartsModule:()=>p});var c=h(15861),r=h(87675),n=h(33635),u=h(65893);class o{constructor(i){this.changes=i}static of(i){return new o(i)}notEmpty(i){if(this.changes[i]){const e=this.changes[i].currentValue;if(null!=e)return(0,n.of)(e)}return n.EMPTY}has(i){return this.changes[i]?(0,n.of)(this.changes[i].currentValue):n.EMPTY}notFirst(i){return this.changes[i]&&!this.changes[i].isFirstChange()?(0,n.of)(this.changes[i].currentValue):n.EMPTY}notFirstAndEmpty(i){if(this.changes[i]&&!this.changes[i].isFirstChange()){const e=this.changes[i].currentValue;if(null!=e)return(0,n.of)(e)}return n.EMPTY}}const d=new r.InjectionToken("NGX_ECHARTS_CONFIG");let g=(()=>{class a{constructor(e,t,s){this.el=t,this.ngZone=s,this.options=null,this.theme=null,this.initOpts=null,this.merge=null,this.autoResize=!0,this.loading=!1,this.loadingType="default",this.loadingOpts=null,this.chartInit=new r.EventEmitter,this.optionsError=new r.EventEmitter,this.chartClick=this.createLazyEvent("click"),this.chartDblClick=this.createLazyEvent("dblclick"),this.chartMouseDown=this.createLazyEvent("mousedown"),this.chartMouseMove=this.createLazyEvent("mousemove"),this.chartMouseUp=this.createLazyEvent("mouseup"),this.chartMouseOver=this.createLazyEvent("mouseover"),this.chartMouseOut=this.createLazyEvent("mouseout"),this.chartGlobalOut=this.createLazyEvent("globalout"),this.chartContextMenu=this.createLazyEvent("contextmenu"),this.chartLegendSelectChanged=this.createLazyEvent("legendselectchanged"),this.chartLegendSelected=this.createLazyEvent("legendselected"),this.chartLegendUnselected=this.createLazyEvent("legendunselected"),this.chartLegendScroll=this.createLazyEvent("legendscroll"),this.chartDataZoom=this.createLazyEvent("datazoom"),this.chartDataRangeSelected=this.createLazyEvent("datarangeselected"),this.chartTimelineChanged=this.createLazyEvent("timelinechanged"),this.chartTimelinePlayChanged=this.createLazyEvent("timelineplaychanged"),this.chartRestore=this.createLazyEvent("restore"),this.chartDataViewChanged=this.createLazyEvent("dataviewchanged"),this.chartMagicTypeChanged=this.createLazyEvent("magictypechanged"),this.chartPieSelectChanged=this.createLazyEvent("pieselectchanged"),this.chartPieSelected=this.createLazyEvent("pieselected"),this.chartPieUnselected=this.createLazyEvent("pieunselected"),this.chartMapSelectChanged=this.createLazyEvent("mapselectchanged"),this.chartMapSelected=this.createLazyEvent("mapselected"),this.chartMapUnselected=this.createLazyEvent("mapunselected"),this.chartAxisAreaSelected=this.createLazyEvent("axisareaselected"),this.chartFocusNodeAdjacency=this.createLazyEvent("focusnodeadjacency"),this.chartUnfocusNodeAdjacency=this.createLazyEvent("unfocusnodeadjacency"),this.chartBrush=this.createLazyEvent("brush"),this.chartBrushEnd=this.createLazyEvent("brushend"),this.chartBrushSelected=this.createLazyEvent("brushselected"),this.chartRendered=this.createLazyEvent("rendered"),this.chartFinished=this.createLazyEvent("finished"),this.animationFrameID=null,this.resize$=new n.Subject,this.echarts=e.echarts}ngOnChanges(e){const t=o.of(e);t.notFirstAndEmpty("options").subscribe(s=>this.onOptionsChange(s)),t.notFirstAndEmpty("merge").subscribe(s=>this.setOption(s)),t.has("loading").subscribe(s=>this.toggleLoading(!!s)),t.notFirst("theme").subscribe(()=>this.refreshChart())}ngOnInit(){if(!window.ResizeObserver)throw new Error("please install a polyfill for ResizeObserver");this.resizeSub=this.resize$.pipe((0,u.throttleTime)(100,n.asyncScheduler,{leading:!1,trailing:!0})).subscribe(()=>this.resize()),this.autoResize&&(this.resizeOb=this.ngZone.runOutsideAngular(()=>new window.ResizeObserver(()=>{this.animationFrameID=window.requestAnimationFrame(()=>this.resize$.next())})),this.resizeOb.observe(this.el.nativeElement))}ngOnDestroy(){window.clearTimeout(this.initChartTimer),this.resizeSub&&this.resizeSub.unsubscribe(),this.animationFrameID&&window.cancelAnimationFrame(this.animationFrameID),this.resizeOb&&this.resizeOb.unobserve(this.el.nativeElement),this.dispose()}ngAfterViewInit(){this.initChartTimer=window.setTimeout(()=>this.initChart())}dispose(){this.chart&&(this.chart.isDisposed()||this.chart.dispose(),this.chart=null)}resize(){this.chart&&this.chart.resize()}toggleLoading(e){this.chart&&(e?this.chart.showLoading(this.loadingType,this.loadingOpts):this.chart.hideLoading())}setOption(e,t){if(this.chart)try{this.chart.setOption(e,t)}catch(s){console.error(s),this.optionsError.emit(s)}}refreshChart(){var e=this;return(0,c.Z)(function*(){e.dispose(),yield e.initChart()})()}createChart(){const e=this.el.nativeElement;if(window&&window.getComputedStyle){const t=window.getComputedStyle(e,null).getPropertyValue("height");(!t||"0px"===t)&&(!e.style.height||"0px"===e.style.height)&&(e.style.height="400px")}return this.ngZone.runOutsideAngular(()=>("function"==typeof this.echarts?this.echarts:()=>Promise.resolve(this.echarts))().then(({init:s})=>s(e,this.theme,this.initOpts)))}initChart(){var e=this;return(0,c.Z)(function*(){yield e.onOptionsChange(e.options),e.merge&&e.chart&&e.setOption(e.merge)})()}onOptionsChange(e){var t=this;return(0,c.Z)(function*(){e&&(t.chart||(t.chart=yield t.createChart(),t.chartInit.emit(t.chart)),t.setOption(t.options,!0))})()}createLazyEvent(e){return this.chartInit.pipe((0,u.switchMap)(t=>new n.Observable(s=>(t.on(e,v=>this.ngZone.run(()=>s.next(v))),()=>{this.chart&&(this.chart.isDisposed()||t.off(e))}))))}}return a.\u0275fac=function(e){return new(e||a)(r.\u0275\u0275directiveInject(d),r.\u0275\u0275directiveInject(r.ElementRef),r.\u0275\u0275directiveInject(r.NgZone))},a.\u0275dir=r.\u0275\u0275defineDirective({type:a,selectors:[["echarts"],["","echarts",""]],inputs:{options:"options",theme:"theme",initOpts:"initOpts",merge:"merge",autoResize:"autoResize",loading:"loading",loadingType:"loadingType",loadingOpts:"loadingOpts"},outputs:{chartInit:"chartInit",optionsError:"optionsError",chartClick:"chartClick",chartDblClick:"chartDblClick",chartMouseDown:"chartMouseDown",chartMouseMove:"chartMouseMove",chartMouseUp:"chartMouseUp",chartMouseOver:"chartMouseOver",chartMouseOut:"chartMouseOut",chartGlobalOut:"chartGlobalOut",chartContextMenu:"chartContextMenu",chartLegendSelectChanged:"chartLegendSelectChanged",chartLegendSelected:"chartLegendSelected",chartLegendUnselected:"chartLegendUnselected",chartLegendScroll:"chartLegendScroll",chartDataZoom:"chartDataZoom",chartDataRangeSelected:"chartDataRangeSelected",chartTimelineChanged:"chartTimelineChanged",chartTimelinePlayChanged:"chartTimelinePlayChanged",chartRestore:"chartRestore",chartDataViewChanged:"chartDataViewChanged",chartMagicTypeChanged:"chartMagicTypeChanged",chartPieSelectChanged:"chartPieSelectChanged",chartPieSelected:"chartPieSelected",chartPieUnselected:"chartPieUnselected",chartMapSelectChanged:"chartMapSelectChanged",chartMapSelected:"chartMapSelected",chartMapUnselected:"chartMapUnselected",chartAxisAreaSelected:"chartAxisAreaSelected",chartFocusNodeAdjacency:"chartFocusNodeAdjacency",chartUnfocusNodeAdjacency:"chartUnfocusNodeAdjacency",chartBrush:"chartBrush",chartBrushEnd:"chartBrushEnd",chartBrushSelected:"chartBrushSelected",chartRendered:"chartRendered",chartFinished:"chartFinished"},exportAs:["echarts"],features:[r.\u0275\u0275NgOnChangesFeature]}),a})(),p=(()=>{class a{static forRoot(e){return{ngModule:a,providers:[{provide:d,useValue:e}]}}static forChild(){return{ngModule:a}}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=r.\u0275\u0275defineNgModule({type:a}),a.\u0275inj=r.\u0275\u0275defineInjector({}),a})()}}]);