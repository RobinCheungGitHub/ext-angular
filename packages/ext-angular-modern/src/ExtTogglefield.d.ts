import { ElementRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './runtime/angularbase';
import * as ɵngcc0 from '@angular/core';
export declare class ExtTogglefieldComponent extends EngBase {
    constructor(eRef: ElementRef, hostComponent: EngBase, vc: ViewContainerRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: any): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ExtTogglefieldComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ExtTogglefieldComponent, "ExtTogglefield", never, {
    "aMe": "aMe";
    "header": "header";
    "renderer": "renderer";
    "label": "label";
    "fitToParent": "fitToParent";
    "tab": "tab";
    "config": "config";
    "platformConfig": "platformConfig";
    "extname": "extname";
    "viewport": "viewport";
    "align": "align";
    "plugins": "plugins";
    "responsiveConfig": "responsiveConfig";
    "responsiveFormulas": "responsiveFormulas";
    "activeLabel": "activeLabel";
    "alignSelf": "alignSelf";
    "alwaysOnTop": "alwaysOnTop";
    "ariaAttributes": "ariaAttributes";
    "ariaDescribedBy": "ariaDescribedBy";
    "ariaLabel": "ariaLabel";
    "ariaLabelledBy": "ariaLabelledBy";
    "autoFitErrors": "autoFitErrors";
    "axisLock": "axisLock";
    "bind": "bind";
    "bodyAlign": "bodyAlign";
    "border": "border";
    "bottom": "bottom";
    "boxLabel": "boxLabel";
    "boxLabelAlign": "boxLabelAlign";
    "bubbleDirty": "bubbleDirty";
    "centered": "centered";
    "cls": "cls";
    "constrainAlign": "constrainAlign";
    "contentEl": "contentEl";
    "controller": "controller";
    "data": "data";
    "dataType": "dataType";
    "defaultListenerScope": "defaultListenerScope";
    "dirty": "dirty";
    "disabled": "disabled";
    "displayed": "displayed";
    "docked": "docked";
    "draggable": "draggable";
    "undefined": "undefined";
    "error": "error";
    "errorMessage": "errorMessage";
    "errorTarget": "errorTarget";
    "errorTip": "errorTip";
    "errorTpl": "errorTpl";
    "flex": "flex";
    "floated": "floated";
    "focusCls": "focusCls";
    "fullscreen": "fullscreen";
    "height": "height";
    "hidden": "hidden";
    "hideAnimation": "hideAnimation";
    "hideMode": "hideMode";
    "hideOnMaskTap": "hideOnMaskTap";
    "html": "html";
    "id": "id";
    "inactiveLabel": "inactiveLabel";
    "increment": "increment";
    "inline": "inline";
    "instanceCls": "instanceCls";
    "itemId": "itemId";
    "keyMap": "keyMap";
    "keyMapEnabled": "keyMapEnabled";
    "keyMapTarget": "keyMapTarget";
    "labelAlign": "labelAlign";
    "labelCls": "labelCls";
    "labelMinWidth": "labelMinWidth";
    "labelTextAlign": "labelTextAlign";
    "labelWidth": "labelWidth";
    "labelWrap": "labelWrap";
    "left": "left";
    "listeners": "listeners";
    "liveUpdate": "liveUpdate";
    "margin": "margin";
    "maxHeight": "maxHeight";
    "maxValue": "maxValue";
    "maxWidth": "maxWidth";
    "minHeight": "minHeight";
    "minValue": "minValue";
    "minWidth": "minWidth";
    "modal": "modal";
    "modelValidation": "modelValidation";
    "name": "name";
    "nameable": "nameable";
    "padding": "padding";
    "publishes": "publishes";
    "readOnly": "readOnly";
    "record": "record";
    "reference": "reference";
    "relative": "relative";
    "renderTo": "renderTo";
    "required": "required";
    "requiredMessage": "requiredMessage";
    "right": "right";
    "ripple": "ripple";
    "scrollable": "scrollable";
    "session": "session";
    "shadow": "shadow";
    "shareableName": "shareableName";
    "shim": "shim";
    "showAnimation": "showAnimation";
    "sideError": "sideError";
    "slider": "slider";
    "stateful": "stateful";
    "statefulDefaults": "statefulDefaults";
    "stateId": "stateId";
    "style": "style";
    "tabIndex": "tabIndex";
    "tipError": "tipError";
    "titleError": "titleError";
    "toFrontOnShow": "toFrontOnShow";
    "tooltip": "tooltip";
    "top": "top";
    "touchAction": "touchAction";
    "tpl": "tpl";
    "tplWriteMode": "tplWriteMode";
    "translatable": "translatable";
    "twoWayBindable": "twoWayBindable";
    "ui": "ui";
    "underError": "underError";
    "userCls": "userCls";
    "userSelectable": "userSelectable";
    "validateDisabled": "validateDisabled";
    "validationMessage": "validationMessage";
    "validators": "validators";
    "value": "value";
    "values": "values";
    "viewModel": "viewModel";
    "weight": "weight";
    "width": "width";
    "x": "x";
    "xtype": "xtype";
    "y": "y";
    "zIndex": "zIndex";
}, {
    "ready": "ready";
    "created": "created";
    "added": "added";
    "beforebottomchange": "beforebottomchange";
    "beforecenteredchange": "beforecenteredchange";
    "beforedisabledchange": "beforedisabledchange";
    "beforedockedchange": "beforedockedchange";
    "beforeheightchange": "beforeheightchange";
    "beforehiddenchange": "beforehiddenchange";
    "beforehide": "beforehide";
    "beforeleftchange": "beforeleftchange";
    "beforemaxHeightchange": "beforemaxHeightchange";
    "beforemaxWidthchange": "beforemaxWidthchange";
    "beforeminHeightchange": "beforeminHeightchange";
    "beforeminWidthchange": "beforeminWidthchange";
    "beforeorientationchange": "beforeorientationchange";
    "beforerightchange": "beforerightchange";
    "beforescrollablechange": "beforescrollablechange";
    "beforeshow": "beforeshow";
    "beforetofront": "beforetofront";
    "beforetopchange": "beforetopchange";
    "beforewidthchange": "beforewidthchange";
    "blur": "blur";
    "bottomchange": "bottomchange";
    "centeredchange": "centeredchange";
    "change": "change";
    "click": "click";
    "destroy": "destroy";
    "dirtychange": "dirtychange";
    "disabledchange": "disabledchange";
    "dockedchange": "dockedchange";
    "drag": "drag";
    "dragchange": "dragchange";
    "dragend": "dragend";
    "dragstart": "dragstart";
    "erased": "erased";
    "errorchange": "errorchange";
    "floatingchange": "floatingchange";
    "focus": "focus";
    "focusenter": "focusenter";
    "focusleave": "focusleave";
    "fullscreen": "fullscreen";
    "heightchange": "heightchange";
    "hiddenchange": "hiddenchange";
    "hide": "hide";
    "initialize": "initialize";
    "keyup": "keyup";
    "leftchange": "leftchange";
    "maxHeightchange": "maxHeightchange";
    "maxWidthchange": "maxWidthchange";
    "minHeightchange": "minHeightchange";
    "minWidthchange": "minWidthchange";
    "mousedown": "mousedown";
    "moved": "moved";
    "orientationchange": "orientationchange";
    "painted": "painted";
    "paste": "paste";
    "positionedchange": "positionedchange";
    "removed": "removed";
    "resize": "resize";
    "rightchange": "rightchange";
    "scrollablechange": "scrollablechange";
    "show": "show";
    "tofront": "tofront";
    "topchange": "topchange";
    "updatedata": "updatedata";
    "widthchange": "widthchange";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0VG9nZ2xlZmllbGQuZC50cyIsInNvdXJjZXMiOlsiRXh0VG9nZ2xlZmllbGQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9ydW50aW1lL2FuZ3VsYXJiYXNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEV4dFRvZ2dsZWZpZWxkQ29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSB7XG4gICAgY29uc3RydWN0b3IoZVJlZjogRWxlbWVudFJlZiwgaG9zdENvbXBvbmVudDogRW5nQmFzZSwgdmM6IFZpZXdDb250YWluZXJSZWYpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQ7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19