(self.webpackChunkcd_shell=self.webpackChunkcd_shell||[]).push([[1940,580],{580:(D,m,f)=>{f.r(m),f.d(m,{LeafletBaseLayersDirective:()=>M,LeafletControlLayersChanges:()=>y,LeafletControlLayersConfig:()=>v,LeafletControlLayersWrapper:()=>c,LeafletDirective:()=>h,LeafletDirectiveWrapper:()=>u,LeafletLayerDirective:()=>p,LeafletLayersControlDirective:()=>C,LeafletLayersDirective:()=>L,LeafletModule:()=>g,LeafletTileLayerDefinition:()=>d,LeafletUtil:()=>a});var n=f(87675),l=f(31815);class a{static mapToArray(i){const e=[];for(const s in i)i.hasOwnProperty(s)&&e.push(i[s]);return e}static handleEvent(i,e,s){0<e.observers.length&&i.run(()=>{e.emit(s)})}}let h=(()=>{class o{constructor(e,s){this.element=e,this.zone=s,this.DEFAULT_ZOOM=1,this.DEFAULT_CENTER=(0,l.latLng)(38.907192,-77.036871),this.DEFAULT_FPZ_OPTIONS={},this.fitBoundsOptions=this.DEFAULT_FPZ_OPTIONS,this.panOptions=this.DEFAULT_FPZ_OPTIONS,this.zoomOptions=this.DEFAULT_FPZ_OPTIONS,this.zoomPanOptions=this.DEFAULT_FPZ_OPTIONS,this.options={},this.mapReady=new n.EventEmitter,this.zoomChange=new n.EventEmitter,this.centerChange=new n.EventEmitter,this.onClick=new n.EventEmitter,this.onDoubleClick=new n.EventEmitter,this.onMouseDown=new n.EventEmitter,this.onMouseUp=new n.EventEmitter,this.onMouseMove=new n.EventEmitter,this.onMouseOver=new n.EventEmitter,this.onMouseOut=new n.EventEmitter,this.onMapMove=new n.EventEmitter,this.onMapMoveStart=new n.EventEmitter,this.onMapMoveEnd=new n.EventEmitter,this.onMapZoom=new n.EventEmitter,this.onMapZoomStart=new n.EventEmitter,this.onMapZoomEnd=new n.EventEmitter}ngOnInit(){this.zone.runOutsideAngular(()=>{this.map=(0,l.map)(this.element.nativeElement,this.options),this.addMapEventListeners()}),null!=this.center&&null!=this.zoom&&this.setView(this.center,this.zoom),null!=this.fitBounds&&this.setFitBounds(this.fitBounds),null!=this.maxBounds&&this.setMaxBounds(this.maxBounds),null!=this.minZoom&&this.setMinZoom(this.minZoom),null!=this.maxZoom&&this.setMaxZoom(this.maxZoom),this.doResize(),this.mapReady.emit(this.map)}ngOnChanges(e){e.zoom&&e.center&&null!=this.zoom&&null!=this.center?this.setView(e.center.currentValue,e.zoom.currentValue):e.zoom?this.setZoom(e.zoom.currentValue):e.center&&this.setCenter(e.center.currentValue),e.fitBounds&&this.setFitBounds(e.fitBounds.currentValue),e.maxBounds&&this.setMaxBounds(e.maxBounds.currentValue),e.minZoom&&this.setMinZoom(e.minZoom.currentValue),e.maxZoom&&this.setMaxZoom(e.maxZoom.currentValue)}ngOnDestroy(){null!=this.map&&this.map.remove()}getMap(){return this.map}onResize(){this.delayResize()}addMapEventListeners(){const e=(t,r)=>{this.map.on(t,r)};e("click",t=>a.handleEvent(this.zone,this.onClick,t)),e("dblclick",t=>a.handleEvent(this.zone,this.onDoubleClick,t)),e("mousedown",t=>a.handleEvent(this.zone,this.onMouseDown,t)),e("mouseup",t=>a.handleEvent(this.zone,this.onMouseUp,t)),e("mouseover",t=>a.handleEvent(this.zone,this.onMouseOver,t)),e("mouseout",t=>a.handleEvent(this.zone,this.onMouseOut,t)),e("mousemove",t=>a.handleEvent(this.zone,this.onMouseMove,t)),e("zoomstart",t=>a.handleEvent(this.zone,this.onMapZoomStart,t)),e("zoom",t=>a.handleEvent(this.zone,this.onMapZoom,t)),e("zoomend",t=>a.handleEvent(this.zone,this.onMapZoomEnd,t)),e("movestart",t=>a.handleEvent(this.zone,this.onMapMoveStart,t)),e("move",t=>a.handleEvent(this.zone,this.onMapMove,t)),e("moveend",t=>a.handleEvent(this.zone,this.onMapMoveEnd,t));const s=()=>{const t=this.map.getZoom();t!==this.zoom&&(this.zoom=t,a.handleEvent(this.zone,this.zoomChange,t));const r=this.map.getCenter();(null!=r||null!=this.center)&&((null==r||null==this.center)&&r!==this.center||r.lat!==this.center.lat||r.lng!==this.center.lng)&&(this.center=r,a.handleEvent(this.zone,this.centerChange,r))};e("moveend",s),e("zoomend",s)}doResize(){this.zone.runOutsideAngular(()=>{null!=this.map&&this.map.invalidateSize({})})}delayResize(){null!=this.resizeTimer&&clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout(this.doResize.bind(this),200)}setView(e,s){null!=this.map&&null!=e&&null!=s&&this.map.setView(e,s,this.zoomPanOptions)}setZoom(e){null!=this.map&&null!=e&&this.map.setZoom(e,this.zoomOptions)}setCenter(e){null!=this.map&&null!=e&&this.map.panTo(e,this.panOptions)}setFitBounds(e){null!=this.map&&null!=e&&this.map.fitBounds(e,this.fitBoundsOptions)}setMaxBounds(e){null!=this.map&&null!=e&&this.map.setMaxBounds(e)}setMinZoom(e){null!=this.map&&null!=e&&this.map.setMinZoom(e)}setMaxZoom(e){null!=this.map&&null!=e&&this.map.setMaxZoom(e)}}return o.\u0275fac=function(e){return new(e||o)(n.\u0275\u0275directiveInject(n.ElementRef),n.\u0275\u0275directiveInject(n.NgZone))},o.\u0275dir=n.\u0275\u0275defineDirective({type:o,selectors:[["","leaflet",""]],hostBindings:function(e,s){1&e&&n.\u0275\u0275listener("resize",function(){return s.onResize()},!1,n.\u0275\u0275resolveWindow)},inputs:{fitBoundsOptions:["leafletFitBoundsOptions","fitBoundsOptions"],panOptions:["leafletPanOptions","panOptions"],zoomOptions:["leafletZoomOptions","zoomOptions"],zoomPanOptions:["leafletZoomPanOptions","zoomPanOptions"],options:["leafletOptions","options"],zoom:["leafletZoom","zoom"],center:["leafletCenter","center"],fitBounds:["leafletFitBounds","fitBounds"],maxBounds:["leafletMaxBounds","maxBounds"],minZoom:["leafletMinZoom","minZoom"],maxZoom:["leafletMaxZoom","maxZoom"]},outputs:{mapReady:"leafletMapReady",zoomChange:"leafletZoomChange",centerChange:"leafletCenterChange",onClick:"leafletClick",onDoubleClick:"leafletDoubleClick",onMouseDown:"leafletMouseDown",onMouseUp:"leafletMouseUp",onMouseMove:"leafletMouseMove",onMouseOver:"leafletMouseOver",onMouseOut:"leafletMouseOut",onMapMove:"leafletMapMove",onMapMoveStart:"leafletMapMoveStart",onMapMoveEnd:"leafletMapMoveEnd",onMapZoom:"leafletMapZoom",onMapZoomStart:"leafletMapZoomStart",onMapZoomEnd:"leafletMapZoomEnd"},features:[n.\u0275\u0275NgOnChangesFeature]}),o})();class u{constructor(i){this.leafletDirective=i}init(){}getMap(){return this.leafletDirective.getMap()}}let p=(()=>{class o{constructor(e,s){this.zone=s,this.onAdd=new n.EventEmitter,this.onRemove=new n.EventEmitter,this.leafletDirective=new u(e)}ngOnInit(){this.leafletDirective.init()}ngOnDestroy(){null!=this.layer&&(this.removeLayerEventListeners(this.layer),this.layer.remove())}ngOnChanges(e){if(e.layer){const s=e.layer.previousValue,t=e.layer.currentValue;this.zone.runOutsideAngular(()=>{null!=s&&(this.removeLayerEventListeners(s),s.remove()),null!=t&&(this.addLayerEventListeners(t),this.leafletDirective.getMap().addLayer(t))})}}addLayerEventListeners(e){this.onAddLayerHandler=s=>a.handleEvent(this.zone,this.onAdd,s),e.on("add",this.onAddLayerHandler),this.onRemoveLayerHandler=s=>a.handleEvent(this.zone,this.onRemove,s),e.on("remove",this.onRemoveLayerHandler)}removeLayerEventListeners(e){e.off("add",this.onAddLayerHandler),e.off("remove",this.onRemoveLayerHandler)}}return o.\u0275fac=function(e){return new(e||o)(n.\u0275\u0275directiveInject(h),n.\u0275\u0275directiveInject(n.NgZone))},o.\u0275dir=n.\u0275\u0275defineDirective({type:o,selectors:[["","leafletLayer",""]],inputs:{layer:["leafletLayer","layer"]},outputs:{onAdd:"leafletLayerAdd",onRemove:"leafletLayerRemove"},features:[n.\u0275\u0275NgOnChangesFeature]}),o})(),L=(()=>{class o{constructor(e,s,t){this.differs=s,this.zone=t,this.leafletDirective=new u(e),this.layersDiffer=this.differs.find([]).create()}set layers(e){this.layersValue=e,this.updateLayers()}get layers(){return this.layersValue}ngDoCheck(){this.updateLayers()}ngOnInit(){this.leafletDirective.init(),this.updateLayers()}ngOnDestroy(){this.layers=[]}updateLayers(){const e=this.leafletDirective.getMap();if(null!=e&&null!=this.layersDiffer){const s=this.layersDiffer.diff(this.layersValue);null!=s&&this.zone.runOutsideAngular(()=>{s.forEachRemovedItem(t=>{e.removeLayer(t.item)}),s.forEachAddedItem(t=>{e.addLayer(t.item)})})}}}return o.\u0275fac=function(e){return new(e||o)(n.\u0275\u0275directiveInject(h),n.\u0275\u0275directiveInject(n.IterableDiffers),n.\u0275\u0275directiveInject(n.NgZone))},o.\u0275dir=n.\u0275\u0275defineDirective({type:o,selectors:[["","leafletLayers",""]],inputs:{layers:["leafletLayers","layers"]}}),o})();class y{constructor(){this.layersRemoved=0,this.layersChanged=0,this.layersAdded=0}changed(){return!(0===this.layersRemoved&&0===this.layersChanged&&0===this.layersAdded)}}class c{constructor(i,e){this.zone=i,this.layersControlReady=e}getLayersControl(){return this.layersControl}init(i,e){const s=i.baseLayers||{},t=i.overlays||{};return this.zone.runOutsideAngular(()=>{this.layersControl=l.control.layers(s,t,e)}),this.layersControlReady.emit(this.layersControl),this.layersControl}applyBaseLayerChanges(i){let e=new y;return null!=this.layersControl&&(e=this.applyChanges(i,this.layersControl.addBaseLayer)),e}applyOverlayChanges(i){let e=new y;return null!=this.layersControl&&(e=this.applyChanges(i,this.layersControl.addOverlay)),e}applyChanges(i,e){const s=new y;return null!=i&&this.zone.runOutsideAngular(()=>{i.forEachChangedItem(t=>{this.layersControl.removeLayer(t.previousValue),e.call(this.layersControl,t.currentValue,t.key),s.layersChanged++}),i.forEachRemovedItem(t=>{this.layersControl.removeLayer(t.previousValue),s.layersRemoved++}),i.forEachAddedItem(t=>{e.call(this.layersControl,t.currentValue,t.key),s.layersAdded++})}),s}}class v{constructor(){this.baseLayers={},this.overlays={}}}let C=(()=>{class o{constructor(e,s,t){this.differs=s,this.zone=t,this.layersControlReady=new n.EventEmitter,this.leafletDirective=new u(e),this.controlLayers=new c(this.zone,this.layersControlReady),this.baseLayersDiffer=this.differs.find({}).create(),this.overlaysDiffer=this.differs.find({}).create()}set layersControlConfig(e){null==e&&(e=new v),null==e.baseLayers&&(e.baseLayers={}),null==e.overlays&&(e.overlays={}),this.layersControlConfigValue=e,this.updateLayers()}get layersControlConfig(){return this.layersControlConfigValue}ngOnInit(){this.leafletDirective.init(),this.zone.runOutsideAngular(()=>{this.controlLayers.init({},this.layersControlOptions).addTo(this.leafletDirective.getMap())}),this.updateLayers()}ngOnDestroy(){this.layersControlConfig={baseLayers:{},overlays:{}},this.controlLayers.getLayersControl().remove()}ngDoCheck(){this.updateLayers()}updateLayers(){const e=this.leafletDirective.getMap(),s=this.controlLayers.getLayersControl();if(null!=e&&null!=s){if(null!=this.baseLayersDiffer&&null!=this.layersControlConfigValue.baseLayers){const t=this.baseLayersDiffer.diff(this.layersControlConfigValue.baseLayers);this.controlLayers.applyBaseLayerChanges(t)}if(null!=this.overlaysDiffer&&null!=this.layersControlConfigValue.overlays){const t=this.overlaysDiffer.diff(this.layersControlConfigValue.overlays);this.controlLayers.applyOverlayChanges(t)}}}}return o.\u0275fac=function(e){return new(e||o)(n.\u0275\u0275directiveInject(h),n.\u0275\u0275directiveInject(n.KeyValueDiffers),n.\u0275\u0275directiveInject(n.NgZone))},o.\u0275dir=n.\u0275\u0275defineDirective({type:o,selectors:[["","leafletLayersControl",""]],inputs:{layersControlConfig:["leafletLayersControl","layersControlConfig"],layersControlOptions:["leafletLayersControlOptions","layersControlOptions"]},outputs:{layersControlReady:"leafletLayersControlReady"}}),o})(),M=(()=>{class o{constructor(e,s,t){this.differs=s,this.zone=t,this.layersControlReady=new n.EventEmitter,this.leafletDirective=new u(e),this.controlLayers=new c(this.zone,this.layersControlReady),this.baseLayersDiffer=this.differs.find({}).create()}set baseLayers(e){this.baseLayersValue=e,this.updateBaseLayers()}get baseLayers(){return this.baseLayersValue}ngOnDestroy(){this.baseLayers={},null!=this.controlLayers.getLayersControl()&&this.controlLayers.getLayersControl().remove()}ngOnInit(){this.leafletDirective.init(),this.zone.runOutsideAngular(()=>{this.controlLayers.init({},this.layersControlOptions).addTo(this.leafletDirective.getMap())}),this.updateBaseLayers()}ngDoCheck(){this.updateBaseLayers()}updateBaseLayers(){const e=this.leafletDirective.getMap(),s=this.controlLayers.getLayersControl();if(null!=e&&null!=s&&null!=this.baseLayersDiffer){const t=this.baseLayersDiffer.diff(this.baseLayersValue);this.controlLayers.applyBaseLayerChanges(t).changed()&&this.syncBaseLayer()}}syncBaseLayer(){const e=this.leafletDirective.getMap(),s=a.mapToArray(this.baseLayers);let t;e.eachLayer(r=>{t=s.find(E=>r===E)}),null!=t?this.baseLayer=t:s.length>0&&(this.baseLayer=s[0],this.zone.runOutsideAngular(()=>{this.baseLayer.addTo(e)}))}}return o.\u0275fac=function(e){return new(e||o)(n.\u0275\u0275directiveInject(h),n.\u0275\u0275directiveInject(n.KeyValueDiffers),n.\u0275\u0275directiveInject(n.NgZone))},o.\u0275dir=n.\u0275\u0275defineDirective({type:o,selectors:[["","leafletBaseLayers",""]],inputs:{baseLayers:["leafletBaseLayers","baseLayers"],layersControlOptions:["leafletLayersControlOptions","layersControlOptions"]},outputs:{layersControlReady:"leafletLayersControlReady"}}),o})(),g=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=n.\u0275\u0275defineInjector({}),o})();class d{constructor(i,e,s){this.type=i,this.url=e,this.options=s}static createTileLayer(i){let e;return e="xyz"===i.type?(0,l.tileLayer)(i.url,i.options):l.tileLayer.wms(i.url,i.options),e}static createTileLayers(i){const e={};for(const s in i)i.hasOwnProperty(s)&&(e[s]=d.createTileLayer(i[s]));return e}createTileLayer(){return d.createTileLayer(this)}}}}]);