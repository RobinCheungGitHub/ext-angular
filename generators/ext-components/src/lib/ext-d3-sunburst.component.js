(function () {
class ExtD3_sunburst extends ExtBase {
	get alwaysOnTop(){return this.getAttribute('alwaysOnTop')};set alwaysOnTop(alwaysOnTop){this.setAttribute('alwaysOnTop',alwaysOnTop)}
	get ariaAttributes(){return this.getAttribute('ariaAttributes')};set ariaAttributes(ariaAttributes){this.setAttribute('ariaAttributes',ariaAttributes)}
	get ariaDescribedBy(){return this.getAttribute('ariaDescribedBy')};set ariaDescribedBy(ariaDescribedBy){this.setAttribute('ariaDescribedBy',ariaDescribedBy)}
	get ariaLabel(){return this.getAttribute('ariaLabel')};set ariaLabel(ariaLabel){this.setAttribute('ariaLabel',ariaLabel)}
	get ariaLabelledBy(){return this.getAttribute('ariaLabelledBy')};set ariaLabelledBy(ariaLabelledBy){this.setAttribute('ariaLabelledBy',ariaLabelledBy)}
	get axisLock(){return this.getAttribute('axisLock')};set axisLock(axisLock){this.setAttribute('axisLock',axisLock)}
	get bind(){return this.getAttribute('bind')};set bind(bind){this.setAttribute('bind',bind)}
	get border(){return this.getAttribute('border')};set border(border){this.setAttribute('border',border)}
	get bottom(){return this.getAttribute('bottom')};set bottom(bottom){this.setAttribute('bottom',bottom)}
	get centered(){return this.getAttribute('centered')};set centered(centered){this.setAttribute('centered',centered)}
	get clipScene(){return this.getAttribute('clipScene')};set clipScene(clipScene){this.setAttribute('clipScene',clipScene)}
	get cls(){return this.getAttribute('cls')};set cls(cls){this.setAttribute('cls',cls)}
	get colorAxis(){return this.getAttribute('colorAxis')};set colorAxis(colorAxis){this.setAttribute('colorAxis',colorAxis)}
	get componentCls(){return this.getAttribute('componentCls')};set componentCls(componentCls){this.setAttribute('componentCls',componentCls)}
	get constrainAlign(){return this.getAttribute('constrainAlign')};set constrainAlign(constrainAlign){this.setAttribute('constrainAlign',constrainAlign)}
	get contentEl(){return this.getAttribute('contentEl')};set contentEl(contentEl){this.setAttribute('contentEl',contentEl)}
	get controller(){return this.getAttribute('controller')};set controller(controller){this.setAttribute('controller',controller)}
	get data(){return this.getAttribute('data')};set data(data){this.setAttribute('data',data)}
	get defaultListenerScope(){return this.getAttribute('defaultListenerScope')};set defaultListenerScope(defaultListenerScope){this.setAttribute('defaultListenerScope',defaultListenerScope)}
	get disabled(){return this.getAttribute('disabled')};set disabled(disabled){this.setAttribute('disabled',disabled)}
	get displayed(){return this.getAttribute('displayed')};set displayed(displayed){this.setAttribute('displayed',displayed)}
	get docked(){return this.getAttribute('docked')};set docked(docked){this.setAttribute('docked',docked)}
	get draggable(){return this.getAttribute('draggable')};set draggable(draggable){this.setAttribute('draggable',draggable)}
	get enterAnimation(){return this.getAttribute('enterAnimation')};set enterAnimation(enterAnimation){this.setAttribute('enterAnimation',enterAnimation)}
	get eventHandlers(){return this.getAttribute('eventHandlers')};set eventHandlers(eventHandlers){this.setAttribute('eventHandlers',eventHandlers)}
	get exitAnimation(){return this.getAttribute('exitAnimation')};set exitAnimation(exitAnimation){this.setAttribute('exitAnimation',exitAnimation)}
	get expandEventName(){return this.getAttribute('expandEventName')};set expandEventName(expandEventName){this.setAttribute('expandEventName',expandEventName)}
	get flex(){return this.getAttribute('flex')};set flex(flex){this.setAttribute('flex',flex)}
	get floated(){return this.getAttribute('floated')};set floated(floated){this.setAttribute('floated',floated)}
	get focusCls(){return this.getAttribute('focusCls')};set focusCls(focusCls){this.setAttribute('focusCls',focusCls)}
	get fullscreen(){return this.getAttribute('fullscreen')};set fullscreen(fullscreen){this.setAttribute('fullscreen',fullscreen)}
	get height(){return this.getAttribute('height')};set height(height){this.setAttribute('height',height)}
	get hidden(){return this.getAttribute('hidden')};set hidden(hidden){this.setAttribute('hidden',hidden)}
	get hideAnimation(){return this.getAttribute('hideAnimation')};set hideAnimation(hideAnimation){this.setAttribute('hideAnimation',hideAnimation)}
	get hideMode(){return this.getAttribute('hideMode')};set hideMode(hideMode){this.setAttribute('hideMode',hideMode)}
	get hideOnMaskTap(){return this.getAttribute('hideOnMaskTap')};set hideOnMaskTap(hideOnMaskTap){this.setAttribute('hideOnMaskTap',hideOnMaskTap)}
	get hierarchyCls(){return this.getAttribute('hierarchyCls')};set hierarchyCls(hierarchyCls){this.setAttribute('hierarchyCls',hierarchyCls)}
	get html(){return this.getAttribute('html')};set html(html){this.setAttribute('html',html)}
	get id(){return this.getAttribute('id')};set id(id){this.setAttribute('id',id)}
	get instanceCls(){return this.getAttribute('instanceCls')};set instanceCls(instanceCls){this.setAttribute('instanceCls',instanceCls)}
	get interactions(){return this.getAttribute('interactions')};set interactions(interactions){this.setAttribute('interactions',interactions)}
	get itemId(){return this.getAttribute('itemId')};set itemId(itemId){this.setAttribute('itemId',itemId)}
	get keyMap(){return this.getAttribute('keyMap')};set keyMap(keyMap){this.setAttribute('keyMap',keyMap)}
	get keyMapEnabled(){return this.getAttribute('keyMapEnabled')};set keyMapEnabled(keyMapEnabled){this.setAttribute('keyMapEnabled',keyMapEnabled)}
	get keyMapTarget(){return this.getAttribute('keyMapTarget')};set keyMapTarget(keyMapTarget){this.setAttribute('keyMapTarget',keyMapTarget)}
	get layout(){return this.getAttribute('layout')};set layout(layout){this.setAttribute('layout',layout)}
	get left(){return this.getAttribute('left')};set left(left){this.setAttribute('left',left)}
	get linkKey(){return this.getAttribute('linkKey')};set linkKey(linkKey){this.setAttribute('linkKey',linkKey)}
	get listeners(){return this.getAttribute('listeners')};set listeners(listeners){this.setAttribute('listeners',listeners)}
	get margin(){return this.getAttribute('margin')};set margin(margin){this.setAttribute('margin',margin)}
	get maxHeight(){return this.getAttribute('maxHeight')};set maxHeight(maxHeight){this.setAttribute('maxHeight',maxHeight)}
	get maxWidth(){return this.getAttribute('maxWidth')};set maxWidth(maxWidth){this.setAttribute('maxWidth',maxWidth)}
	get minHeight(){return this.getAttribute('minHeight')};set minHeight(minHeight){this.setAttribute('minHeight',minHeight)}
	get minWidth(){return this.getAttribute('minWidth')};set minWidth(minWidth){this.setAttribute('minWidth',minWidth)}
	get modal(){return this.getAttribute('modal')};set modal(modal){this.setAttribute('modal',modal)}
	get modelValidation(){return this.getAttribute('modelValidation')};set modelValidation(modelValidation){this.setAttribute('modelValidation',modelValidation)}
	get name(){return this.getAttribute('name')};set name(name){this.setAttribute('name',name)}
	get nameable(){return this.getAttribute('nameable')};set nameable(nameable){this.setAttribute('nameable',nameable)}
	get nodeChildren(){return this.getAttribute('nodeChildren')};set nodeChildren(nodeChildren){this.setAttribute('nodeChildren',nodeChildren)}
	get nodeClass(){return this.getAttribute('nodeClass')};set nodeClass(nodeClass){this.setAttribute('nodeClass',nodeClass)}
	get nodeKey(){return this.getAttribute('nodeKey')};set nodeKey(nodeKey){this.setAttribute('nodeKey',nodeKey)}
	get nodeText(){return this.getAttribute('nodeText')};set nodeText(nodeText){this.setAttribute('nodeText',nodeText)}
	get nodeTransform(){return this.getAttribute('nodeTransform')};set nodeTransform(nodeTransform){this.setAttribute('nodeTransform',nodeTransform)}
	get nodeValue(){return this.getAttribute('nodeValue')};set nodeValue(nodeValue){this.setAttribute('nodeValue',nodeValue)}
	get noParentValue(){return this.getAttribute('noParentValue')};set noParentValue(noParentValue){this.setAttribute('noParentValue',noParentValue)}
	get noSizeLayout(){return this.getAttribute('noSizeLayout')};set noSizeLayout(noSizeLayout){this.setAttribute('noSizeLayout',noSizeLayout)}
	get padding(){return this.getAttribute('padding')};set padding(padding){this.setAttribute('padding',padding)}
	get plugins(){return this.getAttribute('plugins')};set plugins(plugins){this.setAttribute('plugins',plugins)}
	get publishes(){return this.getAttribute('publishes')};set publishes(publishes){this.setAttribute('publishes',publishes)}
	get record(){return this.getAttribute('record')};set record(record){this.setAttribute('record',record)}
	get reference(){return this.getAttribute('reference')};set reference(reference){this.setAttribute('reference',reference)}
	get relative(){return this.getAttribute('relative')};set relative(relative){this.setAttribute('relative',relative)}
	get renderLinks(){return this.getAttribute('renderLinks')};set renderLinks(renderLinks){this.setAttribute('renderLinks',renderLinks)}
	get renderTo(){return this.getAttribute('renderTo')};set renderTo(renderTo){this.setAttribute('renderTo',renderTo)}
	get right(){return this.getAttribute('right')};set right(right){this.setAttribute('right',right)}
	get ripple(){return this.getAttribute('ripple')};set ripple(ripple){this.setAttribute('ripple',ripple)}
	get rootVisible(){return this.getAttribute('rootVisible')};set rootVisible(rootVisible){this.setAttribute('rootVisible',rootVisible)}
	get scrollable(){return this.getAttribute('scrollable')};set scrollable(scrollable){this.setAttribute('scrollable',scrollable)}
	get selectEventName(){return this.getAttribute('selectEventName')};set selectEventName(selectEventName){this.setAttribute('selectEventName',selectEventName)}
	get selection(){return this.getAttribute('selection')};set selection(selection){this.setAttribute('selection',selection)}
	get selfAlign(){return this.getAttribute('selfAlign')};set selfAlign(selfAlign){this.setAttribute('selfAlign',selfAlign)}
	get session(){return this.getAttribute('session')};set session(session){this.setAttribute('session',session)}
	get shadow(){return this.getAttribute('shadow')};set shadow(shadow){this.setAttribute('shadow',shadow)}
	get shareableName(){return this.getAttribute('shareableName')};set shareableName(shareableName){this.setAttribute('shareableName',shareableName)}
	get shim(){return this.getAttribute('shim')};set shim(shim){this.setAttribute('shim',shim)}
	get showAnimation(){return this.getAttribute('showAnimation')};set showAnimation(showAnimation){this.setAttribute('showAnimation',showAnimation)}
	get size(){return this.getAttribute('size')};set size(size){this.setAttribute('size',size)}
	get sorter(){return this.getAttribute('sorter')};set sorter(sorter){this.setAttribute('sorter',sorter)}
	get stateful(){return this.getAttribute('stateful')};set stateful(stateful){this.setAttribute('stateful',stateful)}
	get statefulDefaults(){return this.getAttribute('statefulDefaults')};set statefulDefaults(statefulDefaults){this.setAttribute('statefulDefaults',statefulDefaults)}
	get stateId(){return this.getAttribute('stateId')};set stateId(stateId){this.setAttribute('stateId',stateId)}
	get store(){return this.getAttribute('store')};set store(store){this.setAttribute('store',store)}
	get style(){return this.getAttribute('style')};set style(style){this.setAttribute('style',style)}
	get tabIndex(){return this.getAttribute('tabIndex')};set tabIndex(tabIndex){this.setAttribute('tabIndex',tabIndex)}
	get textPadding(){return this.getAttribute('textPadding')};set textPadding(textPadding){this.setAttribute('textPadding',textPadding)}
	get toFrontOnShow(){return this.getAttribute('toFrontOnShow')};set toFrontOnShow(toFrontOnShow){this.setAttribute('toFrontOnShow',toFrontOnShow)}
	get tooltip(){return this.getAttribute('tooltip')};set tooltip(tooltip){this.setAttribute('tooltip',tooltip)}
	get top(){return this.getAttribute('top')};set top(top){this.setAttribute('top',top)}
	get touchAction(){return this.getAttribute('touchAction')};set touchAction(touchAction){this.setAttribute('touchAction',touchAction)}
	get tpl(){return this.getAttribute('tpl')};set tpl(tpl){this.setAttribute('tpl',tpl)}
	get tplWriteMode(){return this.getAttribute('tplWriteMode')};set tplWriteMode(tplWriteMode){this.setAttribute('tplWriteMode',tplWriteMode)}
	get transitions(){return this.getAttribute('transitions')};set transitions(transitions){this.setAttribute('transitions',transitions)}
	get translatable(){return this.getAttribute('translatable')};set translatable(translatable){this.setAttribute('translatable',translatable)}
	get twoWayBindable(){return this.getAttribute('twoWayBindable')};set twoWayBindable(twoWayBindable){this.setAttribute('twoWayBindable',twoWayBindable)}
	get ui(){return this.getAttribute('ui')};set ui(ui){this.setAttribute('ui',ui)}
	get userCls(){return this.getAttribute('userCls')};set userCls(userCls){this.setAttribute('userCls',userCls)}
	get userSelectable(){return this.getAttribute('userSelectable')};set userSelectable(userSelectable){this.setAttribute('userSelectable',userSelectable)}
	get viewModel(){return this.getAttribute('viewModel')};set viewModel(viewModel){this.setAttribute('viewModel',viewModel)}
	get weight(){return this.getAttribute('weight')};set weight(weight){this.setAttribute('weight',weight)}
	get width(){return this.getAttribute('width')};set width(width){this.setAttribute('width',width)}
	get x(){return this.getAttribute('x')};set x(x){this.setAttribute('x',x)}
	get xtype(){return this.getAttribute('xtype')};set xtype(xtype){this.setAttribute('xtype',xtype)}
	get y(){return this.getAttribute('y')};set y(y){this.setAttribute('y',y)}
	get zIndex(){return this.getAttribute('zIndex')};set zIndex(zIndex){this.setAttribute('zIndex',zIndex)}
	get zoomParentDotRadius(){return this.getAttribute('zoomParentDotRadius')};set zoomParentDotRadius(zoomParentDotRadius){this.setAttribute('zoomParentDotRadius',zoomParentDotRadius)}

	static XTYPE() {return 'd3_sunburst'}
  static PROPERTIESOBJECT() { return {
    "alwaysOnTop": "Boolean/Number",
    "ariaAttributes": "Object",
    "ariaDescribedBy": "String",
    "ariaLabel": "String",
    "ariaLabelledBy": "String",
    "axisLock": "Boolean",
    "bind": "Object/String",
    "border": "Boolean",
    "bottom": "Number/String",
    "centered": "Boolean",
    "clipScene": "Boolean",
    "cls": "String/String[]",
    "colorAxis": "Ext.d3.axis.Color",
    "componentCls": "String",
    "constrainAlign": "String/Ext.util.Region/Ext.dom.Element",
    "contentEl": "Ext.dom.Element/HTMLElement/String",
    "controller": "String/Object/Ext.app.ViewController",
    "data": "Object",
    "defaultListenerScope": "Boolean",
    "disabled": "Boolean",
    "displayed": "Boolean",
    "docked": "String",
    "draggable": "Boolean/Object/Ext.drag.Source",
    "enterAnimation": "String/Mixed",
    "eventHandlers": "Object",
    "exitAnimation": "String/Mixed",
    "expandEventName": "String/String[]",
    "flex": "Number/String/Object",
    "floated": "Boolean",
    "focusCls": "String",
    "fullscreen": "Boolean",
    "height": "Number/String",
    "hidden": "Boolean",
    "hideAnimation": "String/Mixed",
    "hideMode": "'clip'/'display'/'offsets'/'opacity'/'visibility'",
    "hideOnMaskTap": "Boolean",
    "hierarchyCls": "String",
    "html": "String/Ext.dom.Element/HTMLElement",
    "id": "String",
    "instanceCls": "String/String[]",
    "interactions": "any",
    "itemId": "String",
    "keyMap": "Object",
    "keyMapEnabled": "Boolean",
    "keyMapTarget": "String",
    "layout": "Function",
    "left": "Number/String",
    "linkKey": "Function",
    "listeners": "Object",
    "margin": "Number/String",
    "maxHeight": "Number/String",
    "maxWidth": "Number/String",
    "minHeight": "Number/String",
    "minWidth": "Number/String",
    "modal": "Boolean",
    "modelValidation": "Boolean",
    "name": "String",
    "nameable": "Boolean",
    "nodeChildren": "Function",
    "nodeClass": "Function",
    "nodeKey": "Function",
    "nodeText": "Function/String/String[]",
    "nodeTransform": "Function",
    "nodeValue": "Function/String/Number",
    "noParentValue": "Boolean",
    "noSizeLayout": "Boolean",
    "padding": "Object/String/Number",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "publishes": "String/String[]/Object",
    "record": "Ext.data.Model",
    "reference": "String",
    "relative": "Boolean",
    "renderLinks": "Boolean",
    "renderTo": "Ext.dom.Element",
    "right": "Number/String",
    "ripple": "Boolean/Object/String",
    "rootVisible": "Boolean",
    "scrollable": "Boolean/String/Object",
    "selectEventName": "String/String[]",
    "selection": "Ext.data.TreeModel",
    "selfAlign": "String",
    "session": "Boolean/Object/Ext.data.Session",
    "shadow": "Boolean",
    "shareableName": "Boolean",
    "shim": "Boolean",
    "showAnimation": "String/Mixed",
    "size": "Object",
    "sorter": "Function",
    "stateful": "Boolean/Object/String[]",
    "statefulDefaults": "Object/String[]",
    "stateId": "String",
    "store": "Ext.data.Store",
    "style": "String/Object",
    "tabIndex": "Number",
    "textPadding": "Array",
    "toFrontOnShow": "Boolean",
    "tooltip": "String/Object",
    "top": "Number/String",
    "touchAction": "Object",
    "tpl": "String/String[]/Ext.Template/Ext.XTemplate[]",
    "tplWriteMode": "String",
    "transitions": "any",
    "translatable": "Object",
    "twoWayBindable": "String/String[]/Object",
    "ui": "String/String[]",
    "userCls": "String/String[]",
    "userSelectable": "Boolean/String/Object",
    "viewModel": "String/Object/Ext.app.ViewModel",
    "weight": "Number",
    "width": "Number/String",
    "x": "Number",
    "xtype": "String",
    "y": "Number",
    "zIndex": "Number",
    "zoomParentDotRadius": "Number",
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",

  }}
  static EVENTS() { return [
		{name:'added',parameters:'sender,container,index'},
		{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehide',parameters:'sender'},
		{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeshow',parameters:'sender'},
		{name:'beforetofront',parameters:'d3-sunburst'},
		{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'d3-sunburst,event'},
		{name:'bottomchange',parameters:'sender,value,oldValue'},
		{name:'centeredchange',parameters:'sender,value,oldValue'},
		{name:'destroy',parameters:''},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'dockedchange',parameters:'sender,value,oldValue'},
		{name:'erased',parameters:'sender'},
		{name:'floatingchange',parameters:'sender,positioned'},
		{name:'focus',parameters:'d3-sunburst,event'},
		{name:'focusenter',parameters:'d3-sunburst,event'},
		{name:'focusleave',parameters:'d3-sunburst,event'},
		{name:'fullscreen',parameters:'sender'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'hide',parameters:'sender'},
		{name:'initialize',parameters:'sender'},
		{name:'layout',parameters:'component'},
		{name:'leftchange',parameters:'sender,value,oldValue'},
		{name:'maxHeightchange',parameters:'sender,value,oldValue'},
		{name:'maxWidthchange',parameters:'sender,value,oldValue'},
		{name:'minHeightchange',parameters:'sender,value,oldValue'},
		{name:'minWidthchange',parameters:'sender,value,oldValue'},
		{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'sender,element'},
		{name:'positionedchange',parameters:'sender,positioned'},
		{name:'removed',parameters:'sender,container,index'},
		{name:'resize',parameters:'element,info'},
		{name:'rightchange',parameters:'sender,value,oldValue'},
		{name:'sceneresize',parameters:'component,scene,size'},
		{name:'scenesetup',parameters:'component,scene'},
		{name:'scrollablechange',parameters:'sender,value,oldValue'},
		{name:'show',parameters:'sender'},
		{name:'tofront',parameters:'d3-sunburst'},
		{name:'topchange',parameters:'sender,value,oldValue'},
		{name:'updatedata',parameters:'sender,newData'},
		{name:'widthchange',parameters:'sender,value,oldValue'},
		{name:'ready',parameters:''}

  ]}
  static METHODS() { return [
		{ name:'_addDeclaredListeners',function: function(listeners) { return this.ext._addDeclaredListeners(listeners) } },
		{ name:'_fixReference',function: function() { return this.ext._fixReference() } },
		{ name:'_flushStateful',function: function() { return this.ext._flushStateful() } },
		{ name:'_getStateId',function: function() { return this.ext._getStateId() } },
		{ name:'activatePlugin',function: function(type) { return this.ext.activatePlugin(type) } },
		{ name:'addAfterListener',function: function() { return this.ext.addAfterListener() } },
		{ name:'addBeforeListener',function: function() { return this.ext.addBeforeListener() } },
		{ name:'addCls',function: function(cls,prefix,suffix) { return this.ext.addCls(cls,prefix,suffix) } },
		{ name:'addDelegatedListener',function: function(eventName,fn,scope,options,order,caller,manager) { return this.ext.addDelegatedListener(eventName,fn,scope,options,order,caller,manager) } },
		{ name:'addDeprecations',function: function(deprecations) { return this.ext.addDeprecations(deprecations) } },
		{ name:'addElementReference',function: function(name,domNode) { return this.ext.addElementReference(name,domNode) } },
		{ name:'addElementReferenceOnDemand',function: function(name,domNode) { return this.ext.addElementReferenceOnDemand(name,domNode) } },
		{ name:'addListener',function: function(eventName,fn,scope,options,order,caller) { return this.ext.addListener(eventName,fn,scope,options,order,caller) } },
		{ name:'addManagedListener',function: function(item,ename,fn,scope,options,noDestroy) { return this.ext.addManagedListener(item,ename,fn,scope,options,noDestroy) } },
		{ name:'addNodeListener',function: function(eventName,handler) { return this.ext.addNodeListener(eventName,handler) } },
		{ name:'addNodeListeners',function: function() { return this.ext.addNodeListeners() } },
		{ name:'addPlugin',function: function(plugin) { return this.ext.addPlugin(plugin) } },
		{ name:'afterEdit',function: function() { return this.ext.afterEdit() } },
		{ name:'afterErase',function: function() { return this.ext.afterErase() } },
		{ name:'afterRender',function: function() { return this.ext.afterRender() } },
		{ name:'alignContent',function: function(options,transition) { return this.ext.alignContent(options,transition) } },
		{ name:'alignTo',function: function(component,alignment,options) { return this.ext.alignTo(component,alignment,options) } },
		{ name:'applyBind',function: function(binds,currentBindings) { return this.ext.applyBind(binds,currentBindings) } },
		{ name:'applyCentered',function: function(centered) { return this.ext.applyCentered(centered) } },
		{ name:'applyPlugins',function: function(plugins,oldPlugins) { return this.ext.applyPlugins(plugins,oldPlugins) } },
		{ name:'applySession',function: function(session) { return this.ext.applySession(session) } },
		{ name:'applyStyle',function: function(style,oldStyle) { return this.ext.applyStyle(style,oldStyle) } },
		{ name:'applyTpl',function: function(tpl) { return this.ext.applyTpl(tpl) } },
		{ name:'applyViewModel',function: function(viewModel) { return this.ext.applyViewModel(viewModel) } },
		{ name:'beforeInitialize',function: function() { return this.ext.beforeInitialize() } },
		{ name:'blur',function: function() { return this.ext.blur() } },
		{ name:'bubble',function: function(fn,scope,args) { return this.ext.bubble(fn,scope,args) } },
		{ name:'callOverridden',function: function(args) { return this.ext.callOverridden(args) } },
		{ name:'callParent',function: function(args) { return this.ext.callParent(args) } },
		{ name:'callSuper',function: function(args) { return this.ext.callSuper(args) } },
		{ name:'center',function: function() { return this.ext.center() } },
		{ name:'clearDelegatedListeners',function: function() { return this.ext.clearDelegatedListeners() } },
		{ name:'clearListeners',function: function() { return this.ext.clearListeners() } },
		{ name:'clearManagedListeners',function: function() { return this.ext.clearManagedListeners() } },
		{ name:'clearScene',function: function() { return this.ext.clearScene() } },
		{ name:'constructor',function: function(config) { return this.ext.constructor(config) } },
		{ name:'createPlugin',function: function(config) { return this.ext.createPlugin(config) } },
		{ name:'createRelayer',function: function(newName,beginEnd) { return this.ext.createRelayer(newName,beginEnd) } },
		{ name:'createTransition',function: function(name,selection) { return this.ext.createTransition(name,selection) } },
		{ name:'destroy',function: function() { return this.ext.destroy() } },
		{ name:'destroyMembers',function: function(args) { return this.ext.destroyMembers(args) } },
		{ name:'destroyPlugin',function: function(plugin) { return this.ext.destroyPlugin(plugin) } },
		{ name:'disable',function: function() { return this.ext.disable() } },
		{ name:'doAddListener',function: function(name,fn,scope,options,order,caller,manager) { return this.ext.doAddListener(name,fn,scope,options,order,caller,manager) } },
		{ name:'doDestroy',function: function() { return this.ext.doDestroy() } },
		{ name:'doFireDelegatedEvent',function: function(eventName,args) { return this.ext.doFireDelegatedEvent(eventName,args) } },
		{ name:'doFireEvent',function: function(eventName,args,bubbles) { return this.ext.doFireEvent(eventName,args,bubbles) } },
		{ name:'doInheritUi',function: function() { return this.ext.doInheritUi() } },
		{ name:'doUninheritUi',function: function() { return this.ext.doUninheritUi() } },
		{ name:'enable',function: function() { return this.ext.enable() } },
		{ name:'enableBubble',function: function(eventNames) { return this.ext.enableBubble(eventNames) } },
		{ name:'findFloatParent',function: function(needsShow) { return this.ext.findFloatParent(needsShow) } },
		{ name:'findFocusTarget',function: function() { return this.ext.findFocusTarget() } },
		{ name:'findNode',function: function(node,selection) { return this.ext.findNode(node,selection) } },
		{ name:'findPlugin',function: function(type) { return this.ext.findPlugin(type) } },
		{ name:'fireAction',function: function(eventName,args,fn,scope,options,order) { return this.ext.fireAction(eventName,args,fn,scope,options,order) } },
		{ name:'fireEvent',function: function(eventName,args) { return this.ext.fireEvent(eventName,args) } },
		{ name:'fireEventArgs',function: function(eventName,args) { return this.ext.fireEventArgs(eventName,args) } },
		{ name:'fireEventedAction',function: function(eventName,args,fn,scope,fnArgs) { return this.ext.fireEventedAction(eventName,args,fn,scope,fnArgs) } },
		{ name:'focus',function: function(selectText) { return this.ext.focus(selectText) } },
		{ name:'getAlignmentInfo',function: function(component,alignment) { return this.ext.getAlignmentInfo(component,alignment) } },
		{ name:'getAlignRegion',function: function(component,alignment,options) { return this.ext.getAlignRegion(component,alignment,options) } },
		{ name:'getAriaLabelEl',function: function(reference) { return this.ext.getAriaLabelEl(reference) } },
		{ name:'getBubbleParent',function: function() { return this.ext.getBubbleParent() } },
		{ name:'getClassCls',function: function() { return this.ext.getClassCls() } },
		{ name:'getConfig',function: function(name,peek,ifInitialized) { return this.ext.getConfig(name,peek,ifInitialized) } },
		{ name:'getController',function: function() { return this.ext.getController() } },
		{ name:'getCurrentAlignmentInfo',function: function() { return this.ext.getCurrentAlignmentInfo() } },
		{ name:'getCurrentConfig',function: function() { return this.ext.getCurrentConfig() } },
		{ name:'getDefs',function: function() { return this.ext.getDefs() } },
		{ name:'getElementConfig',function: function() { return this.ext.getElementConfig() } },
		{ name:'getFloatParent',function: function() { return this.ext.getFloatParent() } },
		{ name:'getFloatWrap',function: function() { return this.ext.getFloatWrap() } },
		{ name:'getFocusClsEl',function: function(focusEl) { return this.ext.getFocusClsEl(focusEl) } },
		{ name:'getFocusEl',function: function() { return this.ext.getFocusEl() } },
		{ name:'getId',function: function() { return this.ext.getId() } },
		{ name:'getInherited',function: function(inner) { return this.ext.getInherited(inner) } },
		{ name:'getInheritedConfig',function: function(property,skipThis) { return this.ext.getInheritedConfig(property,skipThis) } },
		{ name:'getInitialConfig',function: function(name) { return this.ext.getInitialConfig(name) } },
		{ name:'getModalSibling',function: function() { return this.ext.getModalSibling() } },
		{ name:'getPlugin',function: function(id) { return this.ext.getPlugin(id) } },
		{ name:'getRefOwner',function: function() { return this.ext.getRefOwner() } },
		{ name:'getRenderTarget',function: function() { return this.ext.getRenderTarget() } },
		{ name:'getScene',function: function() { return this.ext.getScene() } },
		{ name:'getScrollableClientRegion',function: function() { return this.ext.getScrollableClientRegion() } },
		{ name:'getSize',function: function() { return this.ext.getSize() } },
		{ name:'getStateBuilder',function: function(cache) { return this.ext.getStateBuilder(cache) } },
		{ name:'getStatefulOwner',function: function() { return this.ext.getStatefulOwner() } },
		{ name:'getTabIndex',function: function() { return this.ext.getTabIndex() } },
		{ name:'getXTypes',function: function() { return this.ext.getXTypes() } },
		{ name:'handleBlurEvent',function: function(info) { return this.ext.handleBlurEvent(info) } },
		{ name:'handleFocusEvent',function: function(info) { return this.ext.handleFocusEvent(info) } },
		{ name:'hasCls',function: function(className) { return this.ext.hasCls(className) } },
		{ name:'hasConfig',function: function(name) { return this.ext.hasConfig(name) } },
		{ name:'hasListener',function: function(eventName) { return this.ext.hasListener(eventName) } },
		{ name:'hide',function: function(animation) { return this.ext.hide(animation) } },
		{ name:'hideMask',function: function() { return this.ext.hideMask() } },
		{ name:'hideRoot',function: function() { return this.ext.hideRoot() } },
		{ name:'initBindable',function: function() { return this.ext.initBindable() } },
		{ name:'initConfig',function: function(instanceConfig) { return this.ext.initConfig(instanceConfig) } },
		{ name:'initDragConstraints',function: function(draggable) { return this.ext.initDragConstraints(draggable) } },
		{ name:'initElement',function: function() { return this.ext.initElement() } },
		{ name:'initElementListeners',function: function(elementConfig) { return this.ext.initElementListeners(elementConfig) } },
		{ name:'initFocusableElement',function: function(force) { return this.ext.initFocusableElement(force) } },
		{ name:'initFocusableEvents',function: function(force) { return this.ext.initFocusableEvents(force) } },
		{ name:'initialize',function: function() { return this.ext.initialize() } },
		{ name:'initInheritedState',function: function(inheritedState) { return this.ext.initInheritedState(inheritedState) } },
		{ name:'initKeyMap',function: function() { return this.ext.initKeyMap() } },
		{ name:'initUiReference',function: function(referenceName,uiCls,isInstance) { return this.ext.initUiReference(referenceName,uiCls,isInstance) } },
		{ name:'insertFloatedDom',function: function(needsShow) { return this.ext.insertFloatedDom(needsShow) } },
		{ name:'invalidateInheritedState',function: function() { return this.ext.invalidateInheritedState() } },
		{ name:'is',function: function(selector) { return this.ext.is(selector) } },
		{ name:'isAncestor',function: function(possibleDescendant) { return this.ext.isAncestor(possibleDescendant) } },
		{ name:'isBBoxInSlice',function: function(bbox,a1,a2,r1,r2,px,py) { return this.ext.isBBoxInSlice(bbox,a1,a2,r1,r2,px,py) } },
		{ name:'isBlurring',function: function(e) { return this.ext.isBlurring(e) } },
		{ name:'isBound',function: function(name) { return this.ext.isBound(name) } },
		{ name:'isCentered',function: function() { return this.ext.isCentered() } },
		{ name:'isDescendantOf',function: function(ancestor) { return this.ext.isDescendantOf(ancestor) } },
		{ name:'isDestructing',function: function() { return this.ext.isDestructing() } },
		{ name:'isDisabled',function: function() { return this.ext.isDisabled() } },
		{ name:'isEnabled',function: function() { return this.ext.isEnabled() } },
		{ name:'isFocusable',function: function(deep) { return this.ext.isFocusable(deep) } },
		{ name:'isFocusing',function: function(e) { return this.ext.isFocusing(e) } },
		{ name:'isHeighted',function: function() { return this.ext.isHeighted() } },
		{ name:'isHidden',function: function(deep) { return this.ext.isHidden(deep) } },
		{ name:'isPainted',function: function() { return this.ext.isPainted() } },
		{ name:'isRecordInStore',function: function(record) { return this.ext.isRecordInStore(record) } },
		{ name:'isRendered',function: function() { return this.ext.isRendered() } },
		{ name:'isSuspended',function: function(event) { return this.ext.isSuspended(event) } },
		{ name:'isSyncing',function: function(name) { return this.ext.isSyncing(name) } },
		{ name:'isVisible',function: function(deep) { return this.ext.isVisible(deep) } },
		{ name:'isWidthed',function: function() { return this.ext.isWidthed() } },
		{ name:'isXType',function: function(xtype,shallow) { return this.ext.isXType(xtype,shallow) } },
		{ name:'link',function: function(name,value) { return this.ext.link(name,value) } },
		{ name:'loadState',function: function(state,stateful) { return this.ext.loadState(state,stateful) } },
		{ name:'lookupController',function: function(skipThis) { return this.ext.lookupController(skipThis) } },
		{ name:'lookupNameHolder',function: function(skipThis) { return this.ext.lookupNameHolder(skipThis) } },
		{ name:'lookupReferenceHolder',function: function(skipThis) { return this.ext.lookupReferenceHolder(skipThis) } },
		{ name:'lookupSession',function: function(skipThis) { return this.ext.lookupSession(skipThis) } },
		{ name:'lookupTpl',function: function(name) { return this.ext.lookupTpl(name) } },
		{ name:'lookupViewModel',function: function(skipThis) { return this.ext.lookupViewModel(skipThis) } },
		{ name:'mon',function: function(item,ename,fn,scope,options,noDestroy) { return this.ext.mon(item,ename,fn,scope,options,noDestroy) } },
		{ name:'mun',function: function(item,ename,fn,scope) { return this.ext.mun(item,ename,fn,scope) } },
		{ name:'nodeFromRecord',function: function(record) { return this.ext.nodeFromRecord(record) } },
		{ name:'on',function: function(eventName,fn,scope,options,order,caller) { return this.ext.on(eventName,fn,scope,options,order,caller) } },
		{ name:'onAdded',function: function(parent,instanced) { return this.ext.onAdded(parent,instanced) } },
		{ name:'onAfter',function: function(eventName,fn,scope,options) { return this.ext.onAfter(eventName,fn,scope,options) } },
		{ name:'onBefore',function: function(eventName,fn,scope,options) { return this.ext.onBefore(eventName,fn,scope,options) } },
		{ name:'onBlur',function: function(e) { return this.ext.onBlur(e) } },
		{ name:'onFocus',function: function(e) { return this.ext.onFocus(e) } },
		{ name:'onFocusEnter',function: function(e) { return this.ext.onFocusEnter(e) } },
		{ name:'onFocusLeave',function: function(e) { return this.ext.onFocusLeave(e) } },
		{ name:'onFocusMove',function: function(info) { return this.ext.onFocusMove(info) } },
		{ name:'onInheritedAdd',function: function(parent,instanced) { return this.ext.onInheritedAdd(parent,instanced) } },
		{ name:'onInheritedRemove',function: function(destroying) { return this.ext.onInheritedRemove(destroying) } },
		{ name:'onInitialized',function: function(fn,scope,args) { return this.ext.onInitialized(fn,scope,args) } },
		{ name:'onLayout',function: function() { return this.ext.onLayout() } },
		{ name:'onNodeDeselect',function: function(record,selection) { return this.ext.onNodeDeselect(record,selection) } },
		{ name:'onNodesAdd',function: function(selection) { return this.ext.onNodesAdd(selection) } },
		{ name:'onNodeSelect',function: function(record,selection) { return this.ext.onNodeSelect(record,selection) } },
		{ name:'onRender',function: function() { return this.ext.onRender() } },
		{ name:'onResize',function: function(width,height,oldWidth,oldHeight) { return this.ext.onResize(width,height,oldWidth,oldHeight) } },
		{ name:'onSceneResize',function: function(scene,rect) { return this.ext.onSceneResize(scene,rect) } },
		{ name:'onScrollEnd',function: function(x,y) { return this.ext.onScrollEnd(x,y) } },
		{ name:'onScrollMove',function: function(x,y) { return this.ext.onScrollMove(x,y) } },
		{ name:'onScrollStart',function: function(x,y) { return this.ext.onScrollStart(x,y) } },
		{ name:'onStatefulChange',function: function() { return this.ext.onStatefulChange() } },
		{ name:'owns',function: function(element) { return this.ext.owns(element) } },
		{ name:'performLayout',function: function() { return this.ext.performLayout() } },
		{ name:'persistState',function: function() { return this.ext.persistState() } },
		{ name:'positionTextFn',function: function(selection) { return this.ext.positionTextFn(selection) } },
		{ name:'preprocessShow',function: function(component,alignment,options) { return this.ext.preprocessShow(component,alignment,options) } },
		{ name:'processElementConfig',function: function() { return this.ext.processElementConfig() } },
		{ name:'publishState',function: function(property,value) { return this.ext.publishState(property,value) } },
		{ name:'readStateObject',function: function() { return this.ext.readStateObject() } },
		{ name:'realign',function: function(component,alignment,options) { return this.ext.realign(component,alignment,options) } },
		{ name:'relayEvents',function: function(origin,events,prefix) { return this.ext.relayEvents(origin,events,prefix) } },
		{ name:'removeAfterListener',function: function() { return this.ext.removeAfterListener() } },
		{ name:'removeBeforeListener',function: function() { return this.ext.removeBeforeListener() } },
		{ name:'removeCls',function: function(cls,prefix,suffix) { return this.ext.removeCls(cls,prefix,suffix) } },
		{ name:'removeDelegatedListener',function: function(eventName,fn,scope) { return this.ext.removeDelegatedListener(eventName,fn,scope) } },
		{ name:'removeLinks',function: function(selection) { return this.ext.removeLinks(selection) } },
		{ name:'removeListener',function: function(eventName,fn,scope,eventOptions) { return this.ext.removeListener(eventName,fn,scope,eventOptions) } },
		{ name:'removeManagedListener',function: function(item,ename,fn,scope) { return this.ext.removeManagedListener(item,ename,fn,scope) } },
		{ name:'removeManagedListenerItem',function: function(isClear,managedListener,item,ename,fn,scope) { return this.ext.removeManagedListenerItem(isClear,managedListener,item,ename,fn,scope) } },
		{ name:'removeNodeListener',function: function(eventName,handler) { return this.ext.removeNodeListener(eventName,handler) } },
		{ name:'removeNodes',function: function(selection) { return this.ext.removeNodes(selection) } },
		{ name:'removePlugin',function: function(plugin,destroy) { return this.ext.removePlugin(plugin,destroy) } },
		{ name:'renderLinks',function: function(update) { return this.ext.renderLinks(update) } },
		{ name:'renderNodes',function: function(update) { return this.ext.renderNodes(update) } },
		{ name:'renderScene',function: function(nodes,links) { return this.ext.renderScene(nodes,links) } },
		{ name:'replaceCls',function: function(oldCls,newCls,prefix,suffix) { return this.ext.replaceCls(oldCls,newCls,prefix,suffix) } },
		{ name:'resetFloating',function: function() { return this.ext.resetFloating() } },
		{ name:'resetPositioned',function: function() { return this.ext.resetPositioned() } },
		{ name:'resetZoom',function: function(instantly) { return this.ext.resetZoom(instantly) } },
		{ name:'resizeHandler',function: function(size) { return this.ext.resizeHandler(size) } },
		{ name:'resolveListenerScope',function: function(defaultScope) { return this.ext.resolveListenerScope(defaultScope) } },
		{ name:'resolveSatelliteListenerScope',function: function(satellite,defaultScope) { return this.ext.resolveSatelliteListenerScope(satellite,defaultScope) } },
		{ name:'resumeEvent',function: function(eventName) { return this.ext.resumeEvent(eventName) } },
		{ name:'resumeEvents',function: function(discardQueue) { return this.ext.resumeEvents(discardQueue) } },
		{ name:'revertFocus',function: function() { return this.ext.revertFocus() } },
		{ name:'revertFocusTo',function: function(target) { return this.ext.revertFocusTo(target) } },
		{ name:'saveState',function: function(state,stateful) { return this.ext.saveState(state,stateful) } },
		{ name:'selectionFromRecord',function: function(record) { return this.ext.selectionFromRecord(record) } },
		{ name:'setConfig',function: function(name,value,options) { return this.ext.setConfig(name,value,options) } },
		{ name:'setCurrentAlignmentInfo',function: function(alignmentInfo) { return this.ext.setCurrentAlignmentInfo(alignmentInfo) } },
		{ name:'setLayoutSize',function: function(size) { return this.ext.setLayoutSize(size) } },
		{ name:'setListeners',function: function(listeners) { return this.ext.setListeners(listeners) } },
		{ name:'setRendered',function: function(rendered,root) { return this.ext.setRendered(rendered,root) } },
		{ name:'setSize',function: function(width,height) { return this.ext.setSize(width,height) } },
		{ name:'setTabIndex',function: function(newTabIndex,focusEl) { return this.ext.setTabIndex(newTabIndex,focusEl) } },
		{ name:'setVisibility',function: function(isVisible) { return this.ext.setVisibility(isVisible) } },
		{ name:'setXY',function: function(x,y,animation) { return this.ext.setXY(x,y,animation) } },
		{ name:'show',function: function(animation,options) { return this.ext.show(animation,options) } },
		{ name:'showAt',function: function(x,y) { return this.ext.showAt(x,y) } },
		{ name:'showBy',function: function(component,alignment,options) { return this.ext.showBy(component,alignment,options) } },
		{ name:'showMask',function: function(msg) { return this.ext.showMask(msg) } },
		{ name:'skipLayoutTransition',function: function() { return this.ext.skipLayoutTransition() } },
		{ name:'statics',function: function() { return this.ext.statics() } },
		{ name:'suspendEvent',function: function(eventName) { return this.ext.suspendEvent(eventName) } },
		{ name:'suspendEvents',function: function(queueSuspended) { return this.ext.suspendEvents(queueSuspended) } },
		{ name:'syncAlwaysOnTop',function: function(fromMousedown) { return this.ext.syncAlwaysOnTop(fromMousedown) } },
		{ name:'syncFloatWrap',function: function() { return this.ext.syncFloatWrap() } },
		{ name:'textVisibilityFn',function: function(selection) { return this.ext.textVisibilityFn(selection) } },
		{ name:'toFront',function: function(fromMousedown) { return this.ext.toFront(fromMousedown) } },
		{ name:'toggleCls',function: function(className,state) { return this.ext.toggleCls(className,state) } },
		{ name:'toLocalXY',function: function(event,view) { return this.ext.toLocalXY(event,view) } },
		{ name:'transformStatefulConfig',function: function(instanceConfig,configurator) { return this.ext.transformStatefulConfig(instanceConfig,configurator) } },
		{ name:'triggerInitialized',function: function() { return this.ext.triggerInitialized() } },
		{ name:'un',function: function(eventName,fn,scope,eventOptions) { return this.ext.un(eventName,fn,scope,eventOptions) } },
		{ name:'unAfter',function: function(eventName,fn,scope,options) { return this.ext.unAfter(eventName,fn,scope,options) } },
		{ name:'unBefore',function: function(eventName,fn,scope,options) { return this.ext.unBefore(eventName,fn,scope,options) } },
		{ name:'unlink',function: function(names) { return this.ext.unlink(names) } },
		{ name:'up',function: function(selector,limit) { return this.ext.up(selector,limit) } },
		{ name:'updateCls',function: function(newCls,oldCls) { return this.ext.updateCls(newCls,oldCls) } },
		{ name:'updateData',function: function(newData) { return this.ext.updateData(newData) } },
		{ name:'updateEventName',function: function(name,oldName,handler) { return this.ext.updateEventName(name,oldName,handler) } },
		{ name:'updateHeight',function: function(height) { return this.ext.updateHeight(height) } },
		{ name:'updateSession',function: function(session) { return this.ext.updateSession(session) } },
		{ name:'updateViewModel',function: function(viewModel,oldViewModel) { return this.ext.updateViewModel(viewModel,oldViewModel) } },
		{ name:'updateWidth',function: function(width) { return this.ext.updateWidth(width) } },
		{ name:'watchConfig',function: function(name,fn,scope) { return this.ext.watchConfig(name,fn,scope) } },
		{ name:'whenVisible',function: function(fn,args) { return this.ext.whenVisible(fn,args) } },
		{ name:'zoomInNode',function: function(record,instantly) { return this.ext.zoomInNode(record,instantly) } },

  ]}

  constructor() {
    super()
    this.METHODS = ExtD3_sunburst.METHODS()
    this.XTYPE = ExtD3_sunburst.XTYPE()
    //this.PROPERTIES = ExtD3_sunburst.PROPERTIES()
    this.PROPERTIESOBJECT = ExtD3_sunburst.PROPERTIESOBJECT()
    this.EVENTS = ExtD3_sunburst.EVENTS()
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }
}
window.customElements.define('ext-d3_sunburst', ExtD3_sunburst);
})();