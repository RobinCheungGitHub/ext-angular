import { ElementRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './runtime/angularbase';
import * as ɵngcc0 from '@angular/core';
export declare class ExtTabComponent extends EngBase {
    constructor(eRef: ElementRef, hostComponent: EngBase, vc: ViewContainerRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: any): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ExtTabComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ExtTabComponent, "ExtTab", never, {
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
    "active": "active";
    "alignSelf": "alignSelf";
    "allowDepress": "allowDepress";
    "alwaysOnTop": "alwaysOnTop";
    "ariaAttributes": "ariaAttributes";
    "ariaDescribedBy": "ariaDescribedBy";
    "ariaLabel": "ariaLabel";
    "ariaLabelledBy": "ariaLabelledBy";
    "arrow": "arrow";
    "arrowAlign": "arrowAlign";
    "autoEvent": "autoEvent";
    "axisLock": "axisLock";
    "badgeText": "badgeText";
    "bind": "bind";
    "border": "border";
    "bottom": "bottom";
    "buttonType": "buttonType";
    "centered": "centered";
    "closable": "closable";
    "cls": "cls";
    "constrainAlign": "constrainAlign";
    "contentEl": "contentEl";
    "controller": "controller";
    "data": "data";
    "defaultListenerScope": "defaultListenerScope";
    "destroyMenu": "destroyMenu";
    "disabled": "disabled";
    "displayed": "displayed";
    "docked": "docked";
    "draggable": "draggable";
    "enableToggle": "enableToggle";
    "undefined": "undefined";
    "flex": "flex";
    "floated": "floated";
    "focusCls": "focusCls";
    "fullscreen": "fullscreen";
    "handler": "handler";
    "height": "height";
    "hidden": "hidden";
    "hideAnimation": "hideAnimation";
    "hideMode": "hideMode";
    "hideOnMaskTap": "hideOnMaskTap";
    "html": "html";
    "icon": "icon";
    "iconAlign": "iconAlign";
    "iconCls": "iconCls";
    "id": "id";
    "instanceCls": "instanceCls";
    "itemId": "itemId";
    "keyMap": "keyMap";
    "keyMapEnabled": "keyMapEnabled";
    "keyMapTarget": "keyMapTarget";
    "left": "left";
    "listeners": "listeners";
    "margin": "margin";
    "maxHeight": "maxHeight";
    "maxWidth": "maxWidth";
    "menu": "menu";
    "menuAlign": "menuAlign";
    "minHeight": "minHeight";
    "minWidth": "minWidth";
    "modal": "modal";
    "modelValidation": "modelValidation";
    "name": "name";
    "nameable": "nameable";
    "padding": "padding";
    "pressed": "pressed";
    "pressedDelay": "pressedDelay";
    "publishes": "publishes";
    "record": "record";
    "reference": "reference";
    "relative": "relative";
    "renderTo": "renderTo";
    "right": "right";
    "ripple": "ripple";
    "rotation": "rotation";
    "scope": "scope";
    "scrollable": "scrollable";
    "session": "session";
    "shadow": "shadow";
    "shareableName": "shareableName";
    "shim": "shim";
    "showAnimation": "showAnimation";
    "stateful": "stateful";
    "statefulDefaults": "statefulDefaults";
    "stateId": "stateId";
    "stretchMenu": "stretchMenu";
    "style": "style";
    "tabIndex": "tabIndex";
    "tabPosition": "tabPosition";
    "text": "text";
    "textAlign": "textAlign";
    "title": "title";
    "toFrontOnShow": "toFrontOnShow";
    "toggleHandler": "toggleHandler";
    "tooltip": "tooltip";
    "top": "top";
    "touchAction": "touchAction";
    "tpl": "tpl";
    "tplWriteMode": "tplWriteMode";
    "translatable": "translatable";
    "twoWayBindable": "twoWayBindable";
    "ui": "ui";
    "userCls": "userCls";
    "userSelectable": "userSelectable";
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
    "activate": "activate";
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
    "beforepressedchange": "beforepressedchange";
    "beforerightchange": "beforerightchange";
    "beforescrollablechange": "beforescrollablechange";
    "beforeshow": "beforeshow";
    "beforetofront": "beforetofront";
    "beforetopchange": "beforetopchange";
    "beforewidthchange": "beforewidthchange";
    "blur": "blur";
    "bottomchange": "bottomchange";
    "centeredchange": "centeredchange";
    "deactivate": "deactivate";
    "destroy": "destroy";
    "disabledchange": "disabledchange";
    "dockedchange": "dockedchange";
    "erased": "erased";
    "floatingchange": "floatingchange";
    "focus": "focus";
    "focusenter": "focusenter";
    "focusleave": "focusleave";
    "fullscreen": "fullscreen";
    "heightchange": "heightchange";
    "hiddenchange": "hiddenchange";
    "hide": "hide";
    "initialize": "initialize";
    "leftchange": "leftchange";
    "maxHeightchange": "maxHeightchange";
    "maxWidthchange": "maxWidthchange";
    "minHeightchange": "minHeightchange";
    "minWidthchange": "minWidthchange";
    "moved": "moved";
    "orientationchange": "orientationchange";
    "painted": "painted";
    "positionedchange": "positionedchange";
    "pressedchange": "pressedchange";
    "release": "release";
    "removed": "removed";
    "resize": "resize";
    "rightchange": "rightchange";
    "scrollablechange": "scrollablechange";
    "show": "show";
    "tap": "tap";
    "tofront": "tofront";
    "topchange": "topchange";
    "updatedata": "updatedata";
    "widthchange": "widthchange";
}, never>;
}

//# sourceMappingURL=ExtTab.d.ts.map