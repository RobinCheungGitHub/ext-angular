import { ElementRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './runtime/angularbase';
import * as ɵngcc0 from '@angular/core';
export declare class ExtSearchfieldComponent extends EngBase {
    constructor(eRef: ElementRef, hostComponent: EngBase, vc: ViewContainerRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: any): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ExtSearchfieldComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ExtSearchfieldComponent, "ExtSearchfield", never, {
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
    "alignSelf": "alignSelf";
    "alwaysOnTop": "alwaysOnTop";
    "animateUnderline": "animateUnderline";
    "ariaAttributes": "ariaAttributes";
    "ariaDescribedBy": "ariaDescribedBy";
    "ariaLabel": "ariaLabel";
    "ariaLabelledBy": "ariaLabelledBy";
    "autoCapitalize": "autoCapitalize";
    "autoComplete": "autoComplete";
    "autoCorrect": "autoCorrect";
    "autoFitErrors": "autoFitErrors";
    "autoHideInputMask": "autoHideInputMask";
    "axisLock": "axisLock";
    "badFormatMessage": "badFormatMessage";
    "bind": "bind";
    "bodyAlign": "bodyAlign";
    "border": "border";
    "bottom": "bottom";
    "bubbleDirty": "bubbleDirty";
    "centered": "centered";
    "clearable": "clearable";
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
    "editable": "editable";
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
    "inline": "inline";
    "inputMask": "inputMask";
    "inputType": "inputType";
    "inputValue": "inputValue";
    "instanceCls": "instanceCls";
    "itemId": "itemId";
    "keyMap": "keyMap";
    "keyMapEnabled": "keyMapEnabled";
    "keyMapTarget": "keyMapTarget";
    "labelAlign": "labelAlign";
    "labelCls": "labelCls";
    "labelInPlaceholder": "labelInPlaceholder";
    "labelMinWidth": "labelMinWidth";
    "labelTextAlign": "labelTextAlign";
    "labelWidth": "labelWidth";
    "labelWrap": "labelWrap";
    "left": "left";
    "listeners": "listeners";
    "margin": "margin";
    "maxHeight": "maxHeight";
    "maxLength": "maxLength";
    "maxWidth": "maxWidth";
    "minHeight": "minHeight";
    "minWidth": "minWidth";
    "modal": "modal";
    "modelValidation": "modelValidation";
    "name": "name";
    "nameable": "nameable";
    "padding": "padding";
    "parseValidator": "parseValidator";
    "pattern": "pattern";
    "placeholder": "placeholder";
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
    "stateful": "stateful";
    "statefulDefaults": "statefulDefaults";
    "stateId": "stateId";
    "stripCharsRe": "stripCharsRe";
    "style": "style";
    "tabIndex": "tabIndex";
    "textAlign": "textAlign";
    "tipError": "tipError";
    "titleError": "titleError";
    "toFrontOnShow": "toFrontOnShow";
    "tooltip": "tooltip";
    "top": "top";
    "touchAction": "touchAction";
    "tpl": "tpl";
    "tplWriteMode": "tplWriteMode";
    "translatable": "translatable";
    "triggers": "triggers";
    "twoWayBindable": "twoWayBindable";
    "ui": "ui";
    "underError": "underError";
    "userCls": "userCls";
    "userSelectable": "userSelectable";
    "validateDisabled": "validateDisabled";
    "validationMessage": "validationMessage";
    "validators": "validators";
    "value": "value";
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
    "action": "action";
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
    "clearicontap": "clearicontap";
    "click": "click";
    "destroy": "destroy";
    "dirtychange": "dirtychange";
    "disabledchange": "disabledchange";
    "dockedchange": "dockedchange";
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
    "keydown": "keydown";
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0U2VhcmNoZmllbGQuZC50cyIsInNvdXJjZXMiOlsiRXh0U2VhcmNoZmllbGQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL3J1bnRpbWUvYW5ndWxhcmJhc2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRXh0U2VhcmNoZmllbGRDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihlUmVmOiBFbGVtZW50UmVmLCBob3N0Q29tcG9uZW50OiBFbmdCYXNlLCB2YzogVmlld0NvbnRhaW5lclJlZik7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZDtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=