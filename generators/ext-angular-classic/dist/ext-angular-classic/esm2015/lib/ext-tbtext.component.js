/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
export class tbtextMetaData {
}
tbtextMetaData.XTYPE = 'tbtext';
tbtextMetaData.PROPERTIESOBJECT = {
    "activeCounter": "Number",
    "alignOnScroll": "Boolean",
    "alignTarget": "String",
    "alwaysOnTop": "Boolean/Number",
    "anchor": "String",
    "animateShadow": "Boolean",
    "ariaAttributes": "Object",
    "ariaDescribedBy": "String",
    "ariaLabel": "String",
    "ariaLabelledBy": "String",
    "autoEl": "String/Object",
    "autoRender": "Boolean/String/HTMLElement/Ext.dom.Element",
    "autoScroll": "Boolean",
    "autoShow": "Boolean",
    "baseCls": "String",
    "bind": "Object/String",
    "border": "Number/String/Boolean",
    "childEls": "Object/String[]/Object[]",
    "cls": "String/String[]",
    "columnWidth": "Number",
    "componentCls": "String",
    "componentLayout": "String/Object",
    "constrain": "Boolean",
    "constraintInsets": "Object/String",
    "constrainTo": "Ext.util.Region/Ext.dom.Element",
    "contentEl": "String",
    "controller": "String/Object/Ext.app.ViewController",
    "data": "Object",
    "defaultAlign": "String",
    "defaultListenerScope": "Boolean",
    "disabled": "Boolean",
    "disabledCls": "String",
    "dock": "'top'/'bottom'/'left'/'right'",
    "draggable": "Boolean/Object",
    "fixed": "Boolean",
    "flex": "Number",
    "floating": "Boolean",
    "focusCls": "String",
    "focusOnToFront": "Boolean",
    "formBind": "Boolean",
    "frame": "Boolean",
    "height": "Number|String",
    "hidden": "Boolean",
    "hideMode": "String",
    "html": "String/Object",
    "id": "String",
    "itemId": "String",
    "keyMap": "Object",
    "keyMapEnabled": "Boolean",
    "keyMapTarget": "String",
    "liquidLayout": "Boolean",
    "listeners": "Object",
    "liveDrag": "Boolean",
    "loader": "Ext.ComponentLoader/Object",
    "margin": "Number/String",
    "maskDefaults": "Object",
    "maskElement": "String",
    "maxHeight": "Number",
    "maxWidth": "Number",
    "minHeight": "Number",
    "minWidth": "Number",
    "modal": "Boolean",
    "modelValidation": "Boolean",
    "nameable": "Boolean",
    "overCls": "String",
    "overflowText": "String",
    "overflowX": "String",
    "overflowY": "String",
    "padding": "Number/String",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "publishes": "String/String[]/Object",
    "reference": "String",
    "region": "'north'/'south'/'east'/'west'/'center'",
    "renderConfig": "Object",
    "renderData": "Object",
    "renderSelectors": "Object",
    "renderTo": "String/HTMLElement/Ext.dom.Element",
    "renderTpl": "Ext.XTemplate/String/String[]",
    "resizable": "Boolean/Object",
    "resizeHandles": "String",
    "saveDelay": "Number",
    "scrollable": "Boolean/String/Object",
    "session": "Boolean/Object/Ext.data.Session",
    "shadow": "String/Boolean",
    "shadowOffset": "Number",
    "shareableName": "Boolean",
    "shim": "Boolean",
    "shrinkWrap": "Boolean/Number",
    "stateEvents": "String[]",
    "stateful": "Boolean/Object",
    "stateId": "String",
    "style": "String/Object",
    "tabIndex": "Number",
    "text": "String",
    "toFrontOnShow": "Boolean",
    "touchAction": "Object",
    "tpl": "Ext.XTemplate/Ext.Template/String/String[]",
    "tplWriteMode": "String",
    "twoWayBindable": "String/String[]/Object",
    "ui": "String",
    "uiCls": "String[]",
    "userCls": "String/String[]",
    "viewModel": "String/Object/Ext.app.ViewModel",
    "weight": "Number",
    "width": "Number|String",
    "xtype": "Ext.enums.Widget",
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
tbtextMetaData.PROPERTIES = [
    'activeCounter',
    'alignOnScroll',
    'alignTarget',
    'alwaysOnTop',
    'anchor',
    'animateShadow',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'autoEl',
    'autoRender',
    'autoScroll',
    'autoShow',
    'baseCls',
    'bind',
    'border',
    'childEls',
    'cls',
    'columnWidth',
    'componentCls',
    'componentLayout',
    'constrain',
    'constraintInsets',
    'constrainTo',
    'contentEl',
    'controller',
    'data',
    'defaultAlign',
    'defaultListenerScope',
    'disabled',
    'disabledCls',
    'dock',
    'draggable',
    'fixed',
    'flex',
    'floating',
    'focusCls',
    'focusOnToFront',
    'formBind',
    'frame',
    'height',
    'hidden',
    'hideMode',
    'html',
    'id',
    'itemId',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'liquidLayout',
    'listeners',
    'liveDrag',
    'loader',
    'margin',
    'maskDefaults',
    'maskElement',
    'maxHeight',
    'maxWidth',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'nameable',
    'overCls',
    'overflowText',
    'overflowX',
    'overflowY',
    'padding',
    'plugins',
    'publishes',
    'reference',
    'region',
    'renderConfig',
    'renderData',
    'renderSelectors',
    'renderTo',
    'renderTpl',
    'resizable',
    'resizeHandles',
    'saveDelay',
    'scrollable',
    'session',
    'shadow',
    'shadowOffset',
    'shareableName',
    'shim',
    'shrinkWrap',
    'stateEvents',
    'stateful',
    'stateId',
    'style',
    'tabIndex',
    'text',
    'toFrontOnShow',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'twoWayBindable',
    'ui',
    'uiCls',
    'userCls',
    'viewModel',
    'weight',
    'width',
    'xtype',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
tbtextMetaData.EVENTS = [
    { name: 'activate', parameters: 'tbtext' },
    { name: 'added', parameters: 'tbtext,container,pos' },
    { name: 'afterlayoutanimation', parameters: 'tbtext' },
    { name: 'afterrender', parameters: 'tbtext' },
    { name: 'beforeactivate', parameters: 'tbtext' },
    { name: 'beforedeactivate', parameters: 'tbtext' },
    { name: 'beforedestroy', parameters: 'tbtext' },
    { name: 'beforehide', parameters: 'tbtext' },
    { name: 'beforerender', parameters: 'tbtext' },
    { name: 'beforeshow', parameters: 'tbtext' },
    { name: 'beforestaterestore', parameters: 'tbtext,state' },
    { name: 'beforestatesave', parameters: 'tbtext,state' },
    { name: 'blur', parameters: 'tbtext,event' },
    { name: 'boxready', parameters: 'tbtext,width,height' },
    { name: 'deactivate', parameters: 'tbtext' },
    { name: 'destroy', parameters: 'tbtext' },
    { name: 'disable', parameters: 'tbtext' },
    { name: 'enable', parameters: 'tbtext' },
    { name: 'focus', parameters: 'tbtext,event' },
    { name: 'focusenter', parameters: 'tbtext,event' },
    { name: 'focusleave', parameters: 'tbtext,event' },
    { name: 'hide', parameters: 'tbtext' },
    { name: 'move', parameters: 'tbtext,x,y' },
    { name: 'removed', parameters: 'tbtext,ownerCt' },
    { name: 'render', parameters: 'tbtext' },
    { name: 'resize', parameters: 'tbtext,width,height,oldWidth,oldHeight' },
    { name: 'show', parameters: 'tbtext' },
    { name: 'staterestore', parameters: 'tbtext,state' },
    { name: 'statesave', parameters: 'tbtext,state' },
    { name: 'ready', parameters: '' }
];
tbtextMetaData.EVENTNAMES = [
    'activate',
    'added',
    'afterlayoutanimation',
    'afterrender',
    'beforeactivate',
    'beforedeactivate',
    'beforedestroy',
    'beforehide',
    'beforerender',
    'beforeshow',
    'beforestaterestore',
    'beforestatesave',
    'blur',
    'boxready',
    'deactivate',
    'destroy',
    'disable',
    'enable',
    'focus',
    'focusenter',
    'focusleave',
    'hide',
    'move',
    'removed',
    'render',
    'resize',
    'show',
    'staterestore',
    'statesave',
    'ready'
];
if (false) {
    /** @type {?} */
    tbtextMetaData.XTYPE;
    /** @type {?} */
    tbtextMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    tbtextMetaData.PROPERTIES;
    /** @type {?} */
    tbtextMetaData.EVENTS;
    /** @type {?} */
    tbtextMetaData.EVENTNAMES;
}
export class ExtTbtextComponent extends base {
    /**
     * @param {?} eRef
     */
    constructor(eRef) { super(eRef, tbtextMetaData); }
    /**
     * @return {?}
     */
    ngOnInit() { this.baseOnInit(tbtextMetaData); }
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    }
}
ExtTbtextComponent.decorators = [
    { type: Component, args: [{
                selector: 'tbtext',
                inputs: tbtextMetaData.PROPERTIES,
                outputs: tbtextMetaData.EVENTNAMES,
                providers: [{ provide: base, useExisting: forwardRef(() => ExtTbtextComponent) }],
                template: '<ng-template #dynamic></ng-template>'
            }] }
];
/** @nocollapse */
ExtTbtextComponent.ctorParameters = () => [
    { type: ElementRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXRidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLWNsYXNzaWMvIiwic291cmNlcyI6WyJsaWIvZXh0LXRidGV4dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFLTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlCLE1BQU0sT0FBTyxjQUFjOztBQUNYLG9CQUFLLEdBQVcsUUFBUSxDQUFDO0FBQ3pCLCtCQUFnQixHQUFRO0lBQ3BDLGVBQWUsRUFBRSxRQUFRO0lBQ3pCLGVBQWUsRUFBRSxTQUFTO0lBQzFCLGFBQWEsRUFBRSxRQUFRO0lBQ3ZCLGFBQWEsRUFBRSxnQkFBZ0I7SUFDL0IsUUFBUSxFQUFFLFFBQVE7SUFDbEIsZUFBZSxFQUFFLFNBQVM7SUFDMUIsZ0JBQWdCLEVBQUUsUUFBUTtJQUMxQixpQkFBaUIsRUFBRSxRQUFRO0lBQzNCLFdBQVcsRUFBRSxRQUFRO0lBQ3JCLGdCQUFnQixFQUFFLFFBQVE7SUFDMUIsUUFBUSxFQUFFLGVBQWU7SUFDekIsWUFBWSxFQUFFLDRDQUE0QztJQUMxRCxZQUFZLEVBQUUsU0FBUztJQUN2QixVQUFVLEVBQUUsU0FBUztJQUNyQixTQUFTLEVBQUUsUUFBUTtJQUNuQixNQUFNLEVBQUUsZUFBZTtJQUN2QixRQUFRLEVBQUUsdUJBQXVCO0lBQ2pDLFVBQVUsRUFBRSwwQkFBMEI7SUFDdEMsS0FBSyxFQUFFLGlCQUFpQjtJQUN4QixhQUFhLEVBQUUsUUFBUTtJQUN2QixjQUFjLEVBQUUsUUFBUTtJQUN4QixpQkFBaUIsRUFBRSxlQUFlO0lBQ2xDLFdBQVcsRUFBRSxTQUFTO0lBQ3RCLGtCQUFrQixFQUFFLGVBQWU7SUFDbkMsYUFBYSxFQUFFLGlDQUFpQztJQUNoRCxXQUFXLEVBQUUsUUFBUTtJ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LEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFDLENBQUM7Z0JBQy9FLFFBQVEsRUFBRSxzQ0FBc0M7YUFDakQ7Ozs7WUE3U0MsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuZXhwb3J0IGNsYXNzIHRidGV4dE1ldGFEYXRhIHtcbiAgcHVibGljIHN0YXRpYyBYVFlQRTogc3RyaW5nID0gJ3RidGV4dCc7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFU09CSkVDVDogYW55ID0ge1xuICAgIFwiYWN0aXZlQ291bnRlclwiOiBcIk51bWJlclwiLFxuICAgIFwiYWxpZ25PblNjcm9sbFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImFsaWduVGFyZ2V0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhbHdheXNPblRvcFwiOiBcIkJvb2xlYW4vTnVtYmVyXCIsXG4gICAgXCJhbmNob3JcIjogXCJTdHJpbmdcIixcbiAgICBcImFuaW1hdGVTaGFkb3dcIjogXCJCb29sZWFuXCIsXG4gICAgXCJhcmlhQXR0cmlidXRlc1wiOiBcIk9iamVjdFwiLFxuICAgIFwiYXJpYURlc2NyaWJlZEJ5XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhcmlhTGFiZWxcIjogXCJTdHJpbmdcIixcbiAgICBcImFyaWFMYWJlbGxlZEJ5XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhdXRvRWxcIjogXCJTdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJhdXRvUmVuZGVyXCI6IFwiQm9vbGVhbi9TdHJpbmcvSFRNTEVsZW1lbnQvRXh0LmRvbS5FbGVtZW50XCIsXG4gICAgXCJhdXRvU2Nyb2xsXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYXV0b1Nob3dcIjogXCJCb29sZWFuXCIsXG4gICAgXCJiYXNlQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJiaW5kXCI6IFwiT2JqZWN0L1N0cmluZ1wiLFxuICAgIFwiYm9yZGVyXCI6IFwiTnVtYmVyL1N0cmluZy9Cb29sZWFuXCIsXG4gICAgXCJjaGlsZEVsc1wiOiBcIk9iamVjdC9TdHJpbmdbXS9PYmplY3RbXVwiLFxuICAgIFwiY2xzXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJjb2x1bW5XaWR0aFwiOiBcIk51bWJlclwiLFxuICAgIFwiY29tcG9uZW50Q2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJjb21wb25lbnRMYXlvdXRcIjogXCJTdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJjb25zdHJhaW5cIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb25zdHJhaW50SW5zZXRzXCI6IFwiT2JqZWN0L1N0cmluZ1wiLFxuICAgIFwiY29uc3RyYWluVG9cIjogXCJFeHQudXRpbC5SZWdpb24vRXh0LmRvbS5FbGVtZW50XCIsXG4gICAgXCJjb250ZW50RWxcIjogXCJTdHJpbmdcIixcbiAgICBcImNvbnRyb2xsZXJcIjogXCJTdHJpbmcvT2JqZWN0L0V4dC5hcHAuVmlld0NvbnRyb2xsZXJcIixcbiAgICBcImRhdGFcIjogXCJPYmplY3RcIixcbiAgICBcImRlZmF1bHRBbGlnblwiOiBcIlN0cmluZ1wiLFxuICAgIFwiZGVmYXVsdExpc3RlbmVyU2NvcGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkaXNhYmxlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRpc2FibGVkQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJkb2NrXCI6IFwiJ3RvcCcvJ2JvdHRvbScvJ2xlZnQnLydyaWdodCdcIixcbiAgICBcImRyYWdnYWJsZVwiOiBcIkJvb2xlYW4vT2JqZWN0XCIsXG4gICAgXCJmaXhlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImZsZXhcIjogXCJOdW1iZXJcIixcbiAgICBcImZsb2F0aW5nXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZm9jdXNDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImZvY3VzT25Ub0Zyb250XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZm9ybUJpbmRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJmcmFtZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcImhlaWdodFwiOiBcIk51bWJlcnxTdHJpbmdcIixcbiAgICBcImhpZGRlblwiOiBcIkJvb2xlYW5cIixcbiAgICBcImhpZGVNb2RlXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJodG1sXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwiaWRcIjogXCJTdHJpbmdcIixcbiAgICBcIml0ZW1JZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwia2V5TWFwXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJrZXlNYXBFbmFibGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwia2V5TWFwVGFyZ2V0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJsaXF1aWRMYXlvdXRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJsaXN0ZW5lcnNcIjogXCJPYmplY3RcIixcbiAgICBcImxpdmVEcmFnXCI6IFwiQm9vbGVhblwiLFxuICAgIFwibG9hZGVyXCI6IFwiRXh0LkNvbXBvbmVudExvYWRlci9PYmplY3RcIixcbiAgICBcIm1hcmdpblwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcIm1hc2tEZWZhdWx0c1wiOiBcIk9iamVjdFwiLFxuICAgIFwibWFza0VsZW1lbnRcIjogXCJTdHJpbmdcIixcbiAgICBcIm1heEhlaWdodFwiOiBcIk51bWJlclwiLFxuICAgIFwibWF4V2lkdGhcIjogXCJOdW1iZXJcIixcbiAgICBcIm1pbkhlaWdodFwiOiBcIk51bWJlclwiLFxuICAgIFwibWluV2lkdGhcIjogXCJOdW1iZXJcIixcbiAgICBcIm1vZGFsXCI6IFwiQm9vbGVhblwiLFxuICAgIFwibW9kZWxWYWxpZGF0aW9uXCI6IFwiQm9vbGVhblwiLFxuICAgIFwibmFtZWFibGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJvdmVyQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJvdmVyZmxvd1RleHRcIjogXCJTdHJpbmdcIixcbiAgICBcIm92ZXJmbG93WFwiOiBcIlN0cmluZ1wiLFxuICAgIFwib3ZlcmZsb3dZXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJwYWRkaW5nXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwicGx1Z2luc1wiOiBcIkFycmF5L0V4dC5lbnVtcy5QbHVnaW4vT2JqZWN0L0V4dC5wbHVnaW4uQWJzdHJhY3RcIixcbiAgICBcInB1Ymxpc2hlc1wiOiBcIlN0cmluZy9TdHJpbmdbXS9PYmplY3RcIixcbiAgICBcInJlZmVyZW5jZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwicmVnaW9uXCI6IFwiJ25vcnRoJy8nc291dGgnLydlYXN0Jy8nd2VzdCcvJ2NlbnRlcidcIixcbiAgICBcInJlbmRlckNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwicmVuZGVyRGF0YVwiOiBcIk9iamVjdFwiLFxuICAgIFwicmVuZGVyU2VsZWN0b3JzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZW5kZXJUb1wiOiBcIlN0cmluZy9IVE1MRWxlbWVudC9FeHQuZG9tLkVsZW1lbnRcIixcbiAgICBcInJlbmRlclRwbFwiOiBcIkV4dC5YVGVtcGxhdGUvU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJyZXNpemFibGVcIjogXCJCb29sZWFuL09iamVjdFwiLFxuICAgIFwicmVzaXplSGFuZGxlc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwic2F2ZURlbGF5XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJzY3JvbGxhYmxlXCI6IFwiQm9vbGVhbi9TdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJzZXNzaW9uXCI6IFwiQm9vbGVhbi9PYmplY3QvRXh0LmRhdGEuU2Vzc2lvblwiLFxuICAgIFwic2hhZG93XCI6IFwiU3RyaW5nL0Jvb2xlYW5cIixcbiAgICBcInNoYWRvd09mZnNldFwiOiBcIk51bWJlclwiLFxuICAgIFwic2hhcmVhYmxlTmFtZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInNoaW1cIjogXCJCb29sZWFuXCIsXG4gICAgXCJzaHJpbmtXcmFwXCI6IFwiQm9vbGVhbi9OdW1iZXJcIixcbiAgICBcInN0YXRlRXZlbnRzXCI6IFwiU3RyaW5nW11cIixcbiAgICBcInN0YXRlZnVsXCI6IFwiQm9vbGVhbi9PYmplY3RcIixcbiAgICBcInN0YXRlSWRcIjogXCJTdHJpbmdcIixcbiAgICBcInN0eWxlXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwidGFiSW5kZXhcIjogXCJOdW1iZXJcIixcbiAgICBcInRleHRcIjogXCJTdHJpbmdcIixcbiAgICBcInRvRnJvbnRPblNob3dcIjogXCJCb29sZWFuXCIsXG4gICAgXCJ0b3VjaEFjdGlvblwiOiBcIk9iamVjdFwiLFxuICAgIFwidHBsXCI6IFwiRXh0LlhUZW1wbGF0ZS9FeHQuVGVtcGxhdGUvU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJ0cGxXcml0ZU1vZGVcIjogXCJTdHJpbmdcIixcbiAgICBcInR3b1dheUJpbmRhYmxlXCI6IFwiU3RyaW5nL1N0cmluZ1tdL09iamVjdFwiLFxuICAgIFwidWlcIjogXCJTdHJpbmdcIixcbiAgICBcInVpQ2xzXCI6IFwiU3RyaW5nW11cIixcbiAgICBcInVzZXJDbHNcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcInZpZXdNb2RlbFwiOiBcIlN0cmluZy9PYmplY3QvRXh0LmFwcC5WaWV3TW9kZWxcIixcbiAgICBcIndlaWdodFwiOiBcIk51bWJlclwiLFxuICAgIFwid2lkdGhcIjogXCJOdW1iZXJ8U3RyaW5nXCIsXG4gICAgXCJ4dHlwZVwiOiBcIkV4dC5lbnVtcy5XaWRnZXRcIixcbiAgICBcInBsYXRmb3JtQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZXNwb25zaXZlQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJmaXRUb1BhcmVudFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbmZpZ1wiOiBcIk9iamVjdFwiLFxufTtcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnYWN0aXZlQ291bnRlcicsXG4gICAgJ2FsaWduT25TY3JvbGwnLFxuICAgICdhbGlnblRhcmdldCcsXG4gICAgJ2Fsd2F5c09uVG9wJyxcbiAgICAnYW5jaG9yJyxcbiAgICAnYW5pbWF0ZVNoYWRvdycsXG4gICAgJ2FyaWFBdHRyaWJ1dGVzJyxcbiAgICAnYXJpYURlc2NyaWJlZEJ5JyxcbiAgICAnYXJpYUxhYmVsJyxcbiAgICAnYXJpYUxhYmVsbGVkQnknLFxuICAgICdhdXRvRWwnLFxuICAgICdhdXRvUmVuZGVyJyxcbiAgICAnYXV0b1Njcm9sbCcsXG4gICAgJ2F1dG9TaG93JyxcbiAgICAnYmFzZUNscycsXG4gICAgJ2JpbmQnLFxuICAgICdib3JkZXInLFxuICAgICdjaGlsZEVscycsXG4gICAgJ2NscycsXG4gICAgJ2NvbHVtbldpZHRoJyxcbiAgICAnY29tcG9uZW50Q2xzJyxcbiAgICAnY29tcG9uZW50TGF5b3V0JyxcbiAgICAnY29uc3RyYWluJyxcbiAgICAnY29uc3RyYWludEluc2V0cycsXG4gICAgJ2NvbnN0cmFpblRvJyxcbiAgICAnY29udGVudEVsJyxcbiAgICAnY29udHJvbGxlcicsXG4gICAgJ2RhdGEnLFxuICAgICdkZWZhdWx0QWxpZ24nLFxuICAgICdkZWZhdWx0TGlzdGVuZXJTY29wZScsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnZGlzYWJsZWRDbHMnLFxuICAgICdkb2NrJyxcbiAgICAnZHJhZ2dhYmxlJyxcbiAgICAnZml4ZWQnLFxuICAgICdmbGV4JyxcbiAgICAnZmxvYXRpbmcnLFxuICAgICdmb2N1c0NscycsXG4gICAgJ2ZvY3VzT25Ub0Zyb250JyxcbiAgICAnZm9ybUJpbmQnLFxuICAgICdmcmFtZScsXG4gICAgJ2hlaWdodCcsXG4gICAgJ2hpZGRlbicsXG4gICAgJ2hpZGVNb2RlJyxcbiAgICAnaHRtbCcsXG4gICAgJ2lkJyxcbiAgICAnaXRlbUlkJyxcbiAgICAna2V5TWFwJyxcbiAgICAna2V5TWFwRW5hYmxlZCcsXG4gICAgJ2tleU1hcFRhcmdldCcsXG4gICAgJ2xpcXVpZExheW91dCcsXG4gICAgJ2xpc3RlbmVycycsXG4gICAgJ2xpdmVEcmFnJyxcbiAgICAnbG9hZGVyJyxcbiAgICAnbWFyZ2luJyxcbiAgICAnbWFza0RlZmF1bHRzJyxcbiAgICAnbWFza0VsZW1lbnQnLFxuICAgICdtYXhIZWlnaHQnLFxuICAgICdtYXhXaWR0aCcsXG4gICAgJ21pbkhlaWdodCcsXG4gICAgJ21pbldpZHRoJyxcbiAgICAnbW9kYWwnLFxuICAgICdtb2RlbFZhbGlkYXRpb24nLFxuICAgICduYW1lYWJsZScsXG4gICAgJ292ZXJDbHMnLFxuICAgICdvdmVyZmxvd1RleHQnLFxuICAgICdvdmVyZmxvd1gnLFxuICAgICdvdmVyZmxvd1knLFxuICAgICdwYWRkaW5nJyxcbiAgICAncGx1Z2lucycsXG4gICAgJ3B1Ymxpc2hlcycsXG4gICAgJ3JlZmVyZW5jZScsXG4gICAgJ3JlZ2lvbicsXG4gICAgJ3JlbmRlckNvbmZpZycsXG4gICAgJ3JlbmRlckRhdGEnLFxuICAgICdyZW5kZXJTZWxlY3RvcnMnLFxuICAgICdyZW5kZXJUbycsXG4gICAgJ3JlbmRlclRwbCcsXG4gICAgJ3Jlc2l6YWJsZScsXG4gICAgJ3Jlc2l6ZUhhbmRsZXMnLFxuICAgICdzYXZlRGVsYXknLFxuICAgICdzY3JvbGxhYmxlJyxcbiAgICAnc2Vzc2lvbicsXG4gICAgJ3NoYWRvdycsXG4gICAgJ3NoYWRvd09mZnNldCcsXG4gICAgJ3NoYXJlYWJsZU5hbWUnLFxuICAgICdzaGltJyxcbiAgICAnc2hyaW5rV3JhcCcsXG4gICAgJ3N0YXRlRXZlbnRzJyxcbiAgICAnc3RhdGVmdWwnLFxuICAgICdzdGF0ZUlkJyxcbiAgICAnc3R5bGUnLFxuICAgICd0YWJJbmRleCcsXG4gICAgJ3RleHQnLFxuICAgICd0b0Zyb250T25TaG93JyxcbiAgICAndG91Y2hBY3Rpb24nLFxuICAgICd0cGwnLFxuICAgICd0cGxXcml0ZU1vZGUnLFxuICAgICd0d29XYXlCaW5kYWJsZScsXG4gICAgJ3VpJyxcbiAgICAndWlDbHMnLFxuICAgICd1c2VyQ2xzJyxcbiAgICAndmlld01vZGVsJyxcbiAgICAnd2VpZ2h0JyxcbiAgICAnd2lkdGgnLFxuICAgICd4dHlwZScsXG4gICAgJ3BsYXRmb3JtQ29uZmlnJyxcbiAgICAncmVzcG9uc2l2ZUNvbmZpZycsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xuXHRcdHtuYW1lOidhY3RpdmF0ZScscGFyYW1ldGVyczondGJ0ZXh0J30sXG5cdFx0e25hbWU6J2FkZGVkJyxwYXJhbWV0ZXJzOid0YnRleHQsY29udGFpbmVyLHBvcyd9LFxuXHRcdHtuYW1lOidhZnRlcmxheW91dGFuaW1hdGlvbicscGFyYW1ldGVyczondGJ0ZXh0J30sXG5cdFx0e25hbWU6J2FmdGVycmVuZGVyJyxwYXJhbWV0ZXJzOid0YnRleHQnfSxcblx0XHR7bmFtZTonYmVmb3JlYWN0aXZhdGUnLHBhcmFtZXRlcnM6J3RidGV4dCd9LFxuXHRcdHtuYW1lOidiZWZvcmVkZWFjdGl2YXRlJyxwYXJhbWV0ZXJzOid0YnRleHQnfSxcblx0XHR7bmFtZTonYmVmb3JlZGVzdHJveScscGFyYW1ldGVyczondGJ0ZXh0J30sXG5cdFx0e25hbWU6J2JlZm9yZWhpZGUnLHBhcmFtZXRlcnM6J3RidGV4dCd9LFxuXHRcdHtuYW1lOidiZWZvcmVyZW5kZXInLHBhcmFtZXRlcnM6J3RidGV4dCd9LFxuXHRcdHtuYW1lOidiZWZvcmVzaG93JyxwYXJhbWV0ZXJzOid0YnRleHQnfSxcblx0XHR7bmFtZTonYmVmb3Jlc3RhdGVyZXN0b3JlJyxwYXJhbWV0ZXJzOid0YnRleHQsc3RhdGUnfSxcblx0XHR7bmFtZTonYmVmb3Jlc3RhdGVzYXZlJyxwYXJhbWV0ZXJzOid0YnRleHQsc3RhdGUnfSxcblx0XHR7bmFtZTonYmx1cicscGFyYW1ldGVyczondGJ0ZXh0LGV2ZW50J30sXG5cdFx0e25hbWU6J2JveHJlYWR5JyxwYXJhbWV0ZXJzOid0YnRleHQsd2lkdGgsaGVpZ2h0J30sXG5cdFx0e25hbWU6J2RlYWN0aXZhdGUnLHBhcmFtZXRlcnM6J3RidGV4dCd9LFxuXHRcdHtuYW1lOidkZXN0cm95JyxwYXJhbWV0ZXJzOid0YnRleHQnfSxcblx0XHR7bmFtZTonZGlzYWJsZScscGFyYW1ldGVyczondGJ0ZXh0J30sXG5cdFx0e25hbWU6J2VuYWJsZScscGFyYW1ldGVyczondGJ0ZXh0J30sXG5cdFx0e25hbWU6J2ZvY3VzJyxwYXJhbWV0ZXJzOid0YnRleHQsZXZlbnQnfSxcblx0XHR7bmFtZTonZm9jdXNlbnRlcicscGFyYW1ldGVyczondGJ0ZXh0LGV2ZW50J30sXG5cdFx0e25hbWU6J2ZvY3VzbGVhdmUnLHBhcmFtZXRlcnM6J3RidGV4dCxldmVudCd9LFxuXHRcdHtuYW1lOidoaWRlJyxwYXJhbWV0ZXJzOid0YnRleHQnfSxcblx0XHR7bmFtZTonbW92ZScscGFyYW1ldGVyczondGJ0ZXh0LHgseSd9LFxuXHRcdHtuYW1lOidyZW1vdmVkJyxwYXJhbWV0ZXJzOid0YnRleHQsb3duZXJDdCd9LFxuXHRcdHtuYW1lOidyZW5kZXInLHBhcmFtZXRlcnM6J3RidGV4dCd9LFxuXHRcdHtuYW1lOidyZXNpemUnLHBhcmFtZXRlcnM6J3RidGV4dCx3aWR0aCxoZWlnaHQsb2xkV2lkdGgsb2xkSGVpZ2h0J30sXG5cdFx0e25hbWU6J3Nob3cnLHBhcmFtZXRlcnM6J3RidGV4dCd9LFxuXHRcdHtuYW1lOidzdGF0ZXJlc3RvcmUnLHBhcmFtZXRlcnM6J3RidGV4dCxzdGF0ZSd9LFxuXHRcdHtuYW1lOidzdGF0ZXNhdmUnLHBhcmFtZXRlcnM6J3RidGV4dCxzdGF0ZSd9LFxuXHRcdHtuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG5cdFx0J2FjdGl2YXRlJyxcblx0XHQnYWRkZWQnLFxuXHRcdCdhZnRlcmxheW91dGFuaW1hdGlvbicsXG5cdFx0J2FmdGVycmVuZGVyJyxcblx0XHQnYmVmb3JlYWN0aXZhdGUnLFxuXHRcdCdiZWZvcmVkZWFjdGl2YXRlJyxcblx0XHQnYmVmb3JlZGVzdHJveScsXG5cdFx0J2JlZm9yZWhpZGUnLFxuXHRcdCdiZWZvcmVyZW5kZXInLFxuXHRcdCdiZWZvcmVzaG93Jyxcblx0XHQnYmVmb3Jlc3RhdGVyZXN0b3JlJyxcblx0XHQnYmVmb3Jlc3RhdGVzYXZlJyxcblx0XHQnYmx1cicsXG5cdFx0J2JveHJlYWR5Jyxcblx0XHQnZGVhY3RpdmF0ZScsXG5cdFx0J2Rlc3Ryb3knLFxuXHRcdCdkaXNhYmxlJyxcblx0XHQnZW5hYmxlJyxcblx0XHQnZm9jdXMnLFxuXHRcdCdmb2N1c2VudGVyJyxcblx0XHQnZm9jdXNsZWF2ZScsXG5cdFx0J2hpZGUnLFxuXHRcdCdtb3ZlJyxcblx0XHQncmVtb3ZlZCcsXG5cdFx0J3JlbmRlcicsXG5cdFx0J3Jlc2l6ZScsXG5cdFx0J3Nob3cnLFxuXHRcdCdzdGF0ZXJlc3RvcmUnLFxuXHRcdCdzdGF0ZXNhdmUnLFxuXHRcdCdyZWFkeSdcbl07XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YnRleHQnLCBcbiAgaW5wdXRzOiB0YnRleHRNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiB0YnRleHRNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogYmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0VGJ0ZXh0Q29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZSAjZHluYW1pYz48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0VGJ0ZXh0Q29tcG9uZW50IGV4dGVuZHMgYmFzZSBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlckNvbnRlbnRJbml0LE9uQ2hhbmdlcyB7XG4gIGNvbnN0cnVjdG9yKGVSZWY6RWxlbWVudFJlZikge3N1cGVyKGVSZWYsdGJ0ZXh0TWV0YURhdGEpfVxuICBwdWJsaWMgbmdPbkluaXQoKSB7dGhpcy5iYXNlT25Jbml0KHRidGV4dE1ldGFEYXRhKX1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgICB9XG59Il19