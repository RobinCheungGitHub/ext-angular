import { ElementRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './angularbase';
import * as ɵngcc0 from '@angular/core';
export declare class ExtDialogComponent extends EngBase {
    constructor(eRef: ElementRef, hostComponent: EngBase, vc: ViewContainerRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: any): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ExtDialogComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ExtDialogComponent, "ExtDialog", never, {
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
    "activeChildTabIndex": "activeChildTabIndex";
    "activeItem": "activeItem";
    "alignSelf": "alignSelf";
    "allowFocusingDisabledChildren": "allowFocusingDisabledChildren";
    "alwaysOnTop": "alwaysOnTop";
    "anchor": "anchor";
    "anchorPosition": "anchorPosition";
    "ariaAttributes": "ariaAttributes";
    "ariaDescribedBy": "ariaDescribedBy";
    "ariaLabel": "ariaLabel";
    "ariaLabelledBy": "ariaLabelledBy";
    "autoDestroy": "autoDestroy";
    "autoSize": "autoSize";
    "axisLock": "axisLock";
    "bbar": "bbar";
    "bind": "bind";
    "bodyBorder": "bodyBorder";
    "bodyCls": "bodyCls";
    "bodyPadding": "bodyPadding";
    "bodyStyle": "bodyStyle";
    "border": "border";
    "bottom": "bottom";
    "buttonAlign": "buttonAlign";
    "buttons": "buttons";
    "buttonToolbar": "buttonToolbar";
    "cardSwitchAnimation": "cardSwitchAnimation";
    "centered": "centered";
    "closable": "closable";
    "closeAction": "closeAction";
    "closeToolText": "closeToolText";
    "cls": "cls";
    "collapsed": "collapsed";
    "collapsible": "collapsible";
    "constrainAlign": "constrainAlign";
    "constrainDrag": "constrainDrag";
    "contentEl": "contentEl";
    "control": "control";
    "controller": "controller";
    "data": "data";
    "defaultFocus": "defaultFocus";
    "defaultListenerScope": "defaultListenerScope";
    "defaults": "defaults";
    "defaultToolWeights": "defaultToolWeights";
    "defaultType": "defaultType";
    "disabled": "disabled";
    "dismissAction": "dismissAction";
    "dismissHandler": "dismissHandler";
    "displayed": "displayed";
    "docked": "docked";
    "draggable": "draggable";
    "undefined": "undefined";
    "flex": "flex";
    "floated": "floated";
    "focusableContainer": "focusableContainer";
    "focusCls": "focusCls";
    "fullscreen": "fullscreen";
    "headerPosition": "headerPosition";
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
    "inactiveChildTabIndex": "inactiveChildTabIndex";
    "innerCls": "innerCls";
    "instanceCls": "instanceCls";
    "itemId": "itemId";
    "items": "items";
    "keyMap": "keyMap";
    "keyMapEnabled": "keyMapEnabled";
    "keyMapTarget": "keyMapTarget";
    "layout": "layout";
    "lbar": "lbar";
    "left": "left";
    "listeners": "listeners";
    "manageBorders": "manageBorders";
    "margin": "margin";
    "masked": "masked";
    "maskTapHandler": "maskTapHandler";
    "maxHeight": "maxHeight";
    "maximizable": "maximizable";
    "maximizeAnimation": "maximizeAnimation";
    "maximized": "maximized";
    "maximizeProxy": "maximizeProxy";
    "maximizeTool": "maximizeTool";
    "maxWidth": "maxWidth";
    "minButtonWidth": "minButtonWidth";
    "minHeight": "minHeight";
    "minWidth": "minWidth";
    "modal": "modal";
    "modelValidation": "modelValidation";
    "name": "name";
    "nameable": "nameable";
    "nameHolder": "nameHolder";
    "padding": "padding";
    "publishes": "publishes";
    "rbar": "rbar";
    "record": "record";
    "reference": "reference";
    "referenceHolder": "referenceHolder";
    "relative": "relative";
    "renderTo": "renderTo";
    "resetFocusPosition": "resetFocusPosition";
    "resizable": "resizable";
    "restorable": "restorable";
    "restoreAnimation": "restoreAnimation";
    "restoreTool": "restoreTool";
    "right": "right";
    "ripple": "ripple";
    "scrollable": "scrollable";
    "session": "session";
    "shadow": "shadow";
    "shareableName": "shareableName";
    "shim": "shim";
    "showAnimation": "showAnimation";
    "standardButtons": "standardButtons";
    "stateful": "stateful";
    "statefulDefaults": "statefulDefaults";
    "stateId": "stateId";
    "style": "style";
    "tabIndex": "tabIndex";
    "tbar": "tbar";
    "title": "title";
    "titleAlign": "titleAlign";
    "titleCollapse": "titleCollapse";
    "toFrontOnShow": "toFrontOnShow";
    "toolDefaults": "toolDefaults";
    "tools": "tools";
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
    "viewModel": "viewModel";
    "weight": "weight";
    "weighted": "weighted";
    "width": "width";
    "x": "x";
    "xtype": "xtype";
    "y": "y";
    "zIndex": "zIndex";
}, {
    "ready": "ready";
    "activate": "activate";
    "activeItemchange": "activeItemchange";
    "add": "add";
    "added": "added";
    "beforeactiveItemchange": "beforeactiveItemchange";
    "beforebottomchange": "beforebottomchange";
    "beforecenteredchange": "beforecenteredchange";
    "beforecollapse": "beforecollapse";
    "beforedisabledchange": "beforedisabledchange";
    "beforedockedchange": "beforedockedchange";
    "beforeexpand": "beforeexpand";
    "beforeheightchange": "beforeheightchange";
    "beforehiddenchange": "beforehiddenchange";
    "beforehide": "beforehide";
    "beforeleftchange": "beforeleftchange";
    "beforemaxHeightchange": "beforemaxHeightchange";
    "beforemaximize": "beforemaximize";
    "beforemaxWidthchange": "beforemaxWidthchange";
    "beforeminHeightchange": "beforeminHeightchange";
    "beforeminWidthchange": "beforeminWidthchange";
    "beforeorientationchange": "beforeorientationchange";
    "beforeresizedragstart": "beforeresizedragstart";
    "beforerestore": "beforerestore";
    "beforerightchange": "beforerightchange";
    "beforescrollablechange": "beforescrollablechange";
    "beforeshow": "beforeshow";
    "beforetofront": "beforetofront";
    "beforetopchange": "beforetopchange";
    "beforewidthchange": "beforewidthchange";
    "blur": "blur";
    "bottomchange": "bottomchange";
    "centeredchange": "centeredchange";
    "collapse": "collapse";
    "deactivate": "deactivate";
    "destroy": "destroy";
    "disabledchange": "disabledchange";
    "dockedchange": "dockedchange";
    "drawerhide": "drawerhide";
    "drawershow": "drawershow";
    "erased": "erased";
    "expand": "expand";
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
    "maximize": "maximize";
    "maxWidthchange": "maxWidthchange";
    "minHeightchange": "minHeightchange";
    "minWidthchange": "minWidthchange";
    "move": "move";
    "moved": "moved";
    "orientationchange": "orientationchange";
    "painted": "painted";
    "positionedchange": "positionedchange";
    "remove": "remove";
    "removed": "removed";
    "renderedchange": "renderedchange";
    "resize": "resize";
    "resizedrag": "resizedrag";
    "resizedragcancel": "resizedragcancel";
    "resizedragend": "resizedragend";
    "resizedragstart": "resizedragstart";
    "restore": "restore";
    "rightchange": "rightchange";
    "scrollablechange": "scrollablechange";
    "show": "show";
    "tofront": "tofront";
    "topchange": "topchange";
    "updatedata": "updatedata";
    "widthchange": "widthchange";
}, never>;
}

//# sourceMappingURL=ExtDialog.d.ts.map