import * as tslib_1 from "tslib";
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var dialogMetaData = /** @class */ (function () {
    function dialogMetaData() {
    }
    dialogMetaData.XTYPE = 'dialog';
    dialogMetaData.PROPERTIES = [
        'activeChildTabIndex',
        'activeItem',
        'alignSelf',
        'allowFocusingDisabledChildren',
        'alwaysOnTop',
        'anchor',
        'anchorPosition',
        'ariaAttributes',
        'ariaDescribedBy',
        'ariaLabel',
        'ariaLabelledBy',
        'autoDestroy',
        'autoSize',
        'axisLock',
        'bbar',
        'bind',
        'bodyBorder',
        'bodyCls',
        'bodyPadding',
        'bodyStyle',
        'border',
        'bottom',
        'buttonAlign',
        'buttons',
        'buttonToolbar',
        'cardSwitchAnimation',
        'centered',
        'closable',
        'closeAction',
        'closeToolText',
        'cls',
        'collapsed',
        'collapsible',
        'constrainAlign',
        'constrainDrag',
        'contentEl',
        'control',
        'controller',
        'data',
        'defaultFocus',
        'defaultListenerScope',
        'defaults',
        'defaultToolWeights',
        'defaultType',
        'disabled',
        'dismissAction',
        'dismissHandler',
        'displayed',
        'docked',
        'draggable',
        'flex',
        'floated',
        'focusableContainer',
        'focusCls',
        'fullscreen',
        'header',
        'headerPosition',
        'height',
        'hidden',
        'hideAnimation',
        'hideMode',
        'hideOnMaskTap',
        'html',
        'icon',
        'iconAlign',
        'iconCls',
        'id',
        'inactiveChildTabIndex',
        'innerCls',
        'instanceCls',
        'itemId',
        'items',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'layout',
        'lbar',
        'left',
        'listeners',
        'manageBorders',
        'margin',
        'masked',
        'maskTapHandler',
        'maxHeight',
        'maximizable',
        'maximizeAnimation',
        'maximized',
        'maximizeProxy',
        'maximizeTool',
        'maxWidth',
        'minButtonWidth',
        'minHeight',
        'minWidth',
        'modal',
        'modelValidation',
        'name',
        'nameable',
        'nameHolder',
        'padding',
        'plugins',
        'publishes',
        'rbar',
        'record',
        'reference',
        'referenceHolder',
        'relative',
        'renderTo',
        'resetFocusPosition',
        'resizable',
        'restorable',
        'restoreAnimation',
        'restoreTool',
        'right',
        'ripple',
        'scrollable',
        'session',
        'shadow',
        'shareableName',
        'shim',
        'showAnimation',
        'standardButtons',
        'stateful',
        'statefulDefaults',
        'stateId',
        'style',
        'tabIndex',
        'tbar',
        'title',
        'titleAlign',
        'titleCollapse',
        'toFrontOnShow',
        'toolDefaults',
        'tools',
        'tooltip',
        'top',
        'touchAction',
        'tpl',
        'tplWriteMode',
        'translatable',
        'twoWayBindable',
        'ui',
        'userCls',
        'userSelectable',
        'viewModel',
        'weight',
        'weighted',
        'width',
        'x',
        'xtype',
        'y',
        'zIndex',
        'platformConfig',
        'responsiveConfig',
        'align',
        'fitToParent',
        'config'
    ];
    dialogMetaData.EVENTS = [
        { name: 'activate', parameters: 'newActiveItem,dialog,oldActiveItem' },
        { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
        { name: 'add', parameters: 'dialog,item,index' },
        { name: 'added', parameters: 'sender,container,index' },
        { name: 'beforeactiveItemchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforebottomchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforecenteredchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforecollapse', parameters: 'dialog' },
        { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforedockedchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeexpand', parameters: 'dialog' },
        { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforehide', parameters: 'sender' },
        { name: 'beforeleftchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforemaxHeightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforemaximize', parameters: 'dialog' },
        { name: 'beforemaxWidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeminHeightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeminWidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeresizedragstart', parameters: 'dialog,context' },
        { name: 'beforerestore', parameters: 'dialog' },
        { name: 'beforerightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforescrollablechange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeshow', parameters: 'sender' },
        { name: 'beforetofront', parameters: 'dialog' },
        { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'blur', parameters: 'dialog,event' },
        { name: 'bottomchange', parameters: 'sender,value,oldValue' },
        { name: 'centeredchange', parameters: 'sender,value,oldValue' },
        { name: 'collapse', parameters: 'dialog' },
        { name: 'deactivate', parameters: 'oldActiveItem,dialog,newActiveItem' },
        { name: 'destroy', parameters: '' },
        { name: 'disabledchange', parameters: 'sender,value,oldValue' },
        { name: 'dockedchange', parameters: 'sender,value,oldValue' },
        { name: 'drawerhide', parameters: 'dialog' },
        { name: 'drawershow', parameters: 'dialog' },
        { name: 'erased', parameters: 'sender' },
        { name: 'expand', parameters: 'dialog' },
        { name: 'floatingchange', parameters: 'sender,positioned' },
        { name: 'focus', parameters: 'dialog,event' },
        { name: 'focusenter', parameters: 'dialog,event' },
        { name: 'focusleave', parameters: 'dialog,event' },
        { name: 'fullscreen', parameters: 'sender' },
        { name: 'heightchange', parameters: 'sender,value,oldValue' },
        { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
        { name: 'hide', parameters: 'sender' },
        { name: 'initialize', parameters: 'sender' },
        { name: 'leftchange', parameters: 'sender,value,oldValue' },
        { name: 'maxHeightchange', parameters: 'sender,value,oldValue' },
        { name: 'maximize', parameters: 'dialog' },
        { name: 'maxWidthchange', parameters: 'sender,value,oldValue' },
        { name: 'minHeightchange', parameters: 'sender,value,oldValue' },
        { name: 'minWidthchange', parameters: 'sender,value,oldValue' },
        { name: 'move', parameters: 'dialog,item,toIndex,fromIndex' },
        { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'sender,element' },
        { name: 'positionedchange', parameters: 'sender,positioned' },
        { name: 'remove', parameters: 'dialog,item,index' },
        { name: 'removed', parameters: 'sender,container,index' },
        { name: 'renderedchange', parameters: 'dialog,item,rendered' },
        { name: 'resize', parameters: 'element,info' },
        { name: 'resizedrag', parameters: 'dialog,context' },
        { name: 'resizedragcancel', parameters: 'dialog,context' },
        { name: 'resizedragend', parameters: 'dialog,context' },
        { name: 'resizedragstart', parameters: 'dialog,context' },
        { name: 'restore', parameters: 'dialog' },
        { name: 'rightchange', parameters: 'sender,value,oldValue' },
        { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
        { name: 'show', parameters: 'sender' },
        { name: 'tofront', parameters: 'dialog' },
        { name: 'topchange', parameters: 'sender,value,oldValue' },
        { name: 'updatedata', parameters: 'sender,newData' },
        { name: 'widthchange', parameters: 'sender,value,oldValue' },
        { name: 'ready', parameters: '' }
    ];
    dialogMetaData.EVENTNAMES = [
        'activate',
        'activeItemchange',
        'add',
        'added',
        'beforeactiveItemchange',
        'beforebottomchange',
        'beforecenteredchange',
        'beforecollapse',
        'beforedisabledchange',
        'beforedockedchange',
        'beforeexpand',
        'beforeheightchange',
        'beforehiddenchange',
        'beforehide',
        'beforeleftchange',
        'beforemaxHeightchange',
        'beforemaximize',
        'beforemaxWidthchange',
        'beforeminHeightchange',
        'beforeminWidthchange',
        'beforeorientationchange',
        'beforeresizedragstart',
        'beforerestore',
        'beforerightchange',
        'beforescrollablechange',
        'beforeshow',
        'beforetofront',
        'beforetopchange',
        'beforewidthchange',
        'blur',
        'bottomchange',
        'centeredchange',
        'collapse',
        'deactivate',
        'destroy',
        'disabledchange',
        'dockedchange',
        'drawerhide',
        'drawershow',
        'erased',
        'expand',
        'floatingchange',
        'focus',
        'focusenter',
        'focusleave',
        'fullscreen',
        'heightchange',
        'hiddenchange',
        'hide',
        'initialize',
        'leftchange',
        'maxHeightchange',
        'maximize',
        'maxWidthchange',
        'minHeightchange',
        'minWidthchange',
        'move',
        'moved',
        'orientationchange',
        'painted',
        'positionedchange',
        'remove',
        'removed',
        'renderedchange',
        'resize',
        'resizedrag',
        'resizedragcancel',
        'resizedragend',
        'resizedragstart',
        'restore',
        'rightchange',
        'scrollablechange',
        'show',
        'tofront',
        'topchange',
        'updatedata',
        'widthchange',
        'ready'
    ];
    return dialogMetaData;
}());
export { dialogMetaData };
var ExtDialogComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtDialogComponent, _super);
    function ExtDialogComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef.nativeElement, dialogMetaData, hostComponent) || this;
        _this.hostComponent = hostComponent;
        return _this;
    }
    ExtDialogComponent_1 = ExtDialogComponent;
    ExtDialogComponent.prototype.ngOnInit = function () {
        this.baseOnInit(dialogMetaData);
    };
    ExtDialogComponent.prototype.ngAfterContentInit = function () {
        this.baseAfterContentInit();
        //this['ready'].emit(this)
    };
    var ExtDialogComponent_1;
    ExtDialogComponent = ExtDialogComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'dialog',
            inputs: dialogMetaData.PROPERTIES,
            outputs: dialogMetaData.EVENTNAMES,
            providers: [{ provide: base, useExisting: forwardRef(function () { return ExtDialogComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef, base])
    ], ExtDialogComponent);
    return ExtDialogComponent;
}(base));
export { ExtDialogComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2V4dC1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBRUwsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBS1IsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM5QjtJQUFBO0lBZ1VBLENBQUM7SUEvVGUsb0JBQUssR0FBVyxRQUFRLENBQUM7SUFDekIseUJBQVUsR0FBYTtRQUNuQyxxQkFBcUI7UUFDckIsWUFBWTtRQUNaLFdBQVc7UUFDWCwrQkFBK0I7UUFDL0IsYUFBYTtRQUNiLFFBQVE7UUFDUixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixVQUFVO1FBQ1YsVUFBVTtRQUNWLE1BQU07UUFDTixNQUFNO1FBQ04sWUFBWTtRQUNaLFNBQVM7UUFDVCxhQUFhO1FBQ2IsV0FBVztRQUNYLFFBQVE7UUFDUixRQUFRO1FBQ1IsYUFBYTtRQUNiLFNBQVM7UUFDVCxlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLFVBQVU7UUFDVixVQUFVO1FBQ1YsYUFBYTtRQUNiLGVBQWU7UUFDZixLQUFLO1FBQ0wsV0FBVztRQUNYLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLFdBQVc7UUFDWCxTQUFTO1FBQ1QsWUFBWTtRQUNaLE1BQU07UUFDTixjQUFjO1FBQ2Qsc0JBQXNCO1FBQ3RCLFVBQVU7UUFDVixvQkFBb0I7UUFDcEIsYUFBYTtRQUNiLFVBQVU7UUFDVixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWCxRQUFRO1FBQ1IsV0FBVztRQUNYLE1BQU07UUFDTixT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QWEsRUFBQyxjQUFjLEVBQUMsYUFBYSxDQUFDLFNBQ3ZEO1FBRnVELG1CQUFhLEdBQWIsYUFBYSxDQUFPOztJQUU1RSxDQUFDOzJCQUpRLGtCQUFrQjtJQUt0QixxQ0FBUSxHQUFmO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBQ00sK0NBQWtCLEdBQXpCO1FBQ0UsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUE7UUFDM0IsMEJBQTBCO0lBQzVCLENBQUM7O0lBWFUsa0JBQWtCO1FBUDlCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLE1BQU0sRUFBRSxjQUFjLENBQUMsVUFBVTtZQUNqQyxPQUFPLEVBQUUsY0FBYyxDQUFDLFVBQVU7WUFDbEMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLG9CQUFrQixFQUFsQixDQUFrQixDQUFDLEVBQUMsQ0FBQztZQUMvRSxRQUFRLEVBQUUsNkJBQTZCO1NBQ3hDLENBQUM7UUFHb0IsbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUEzQyxVQUFVLEVBQXlELElBQUk7T0FGbkUsa0JBQWtCLENBYzlCO0lBQUQseUJBQUM7Q0FBQSxBQWRELENBQXdDLElBQUksR0FjM0M7U0FkWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuZXhwb3J0IGNsYXNzIGRpYWxvZ01ldGFEYXRhIHtcbiAgcHVibGljIHN0YXRpYyBYVFlQRTogc3RyaW5nID0gJ2RpYWxvZyc7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2FjdGl2ZUNoaWxkVGFiSW5kZXgnLFxuICAgICdhY3RpdmVJdGVtJyxcbiAgICAnYWxpZ25TZWxmJyxcbiAgICAnYWxsb3dGb2N1c2luZ0Rpc2FibGVkQ2hpbGRyZW4nLFxuICAgICdhbHdheXNPblRvcCcsXG4gICAgJ2FuY2hvcicsXG4gICAgJ2FuY2hvclBvc2l0aW9uJyxcbiAgICAnYXJpYUF0dHJpYnV0ZXMnLFxuICAgICdhcmlhRGVzY3JpYmVkQnknLFxuICAgICdhcmlhTGFiZWwnLFxuICAgICdhcmlhTGFiZWxsZWRCeScsXG4gICAgJ2F1dG9EZXN0cm95JyxcbiAgICAnYXV0b1NpemUnLFxuICAgICdheGlzTG9jaycsXG4gICAgJ2JiYXInLFxuICAgICdiaW5kJyxcbiAgICAnYm9keUJvcmRlcicsXG4gICAgJ2JvZHlDbHMnLFxuICAgICdib2R5UGFkZGluZycsXG4gICAgJ2JvZHlTdHlsZScsXG4gICAgJ2JvcmRlcicsXG4gICAgJ2JvdHRvbScsXG4gICAgJ2J1dHRvbkFsaWduJyxcbiAgICAnYnV0dG9ucycsXG4gICAgJ2J1dHRvblRvb2xiYXInLFxuICAgICdjYXJkU3dpdGNoQW5pbWF0aW9uJyxcbiAgICAnY2VudGVyZWQnLFxuICAgICdjbG9zYWJsZScsXG4gICAgJ2Nsb3NlQWN0aW9uJyxcbiAgICAnY2xvc2VUb29sVGV4dCcsXG4gICAgJ2NscycsXG4gICAgJ2NvbGxhcHNlZCcsXG4gICAgJ2NvbGxhcHNpYmxlJyxcbiAgICAnY29uc3RyYWluQWxpZ24nLFxuICAgICdjb25zdHJhaW5EcmFnJyxcbiAgICAnY29udGVudEVsJyxcbiAgICAnY29udHJvbCcsXG4gICAgJ2NvbnRyb2xsZXInLFxuICAgICdkYXRhJyxcbiAgICAnZGVmYXVsdEZvY3VzJyxcbiAgICAnZGVmYXVsdExpc3RlbmVyU2NvcGUnLFxuICAgICdkZWZhdWx0cycsXG4gICAgJ2RlZmF1bHRUb29sV2VpZ2h0cycsXG4gICAgJ2RlZmF1bHRUeXBlJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdkaXNtaXNzQWN0aW9uJyxcbiAgICAnZGlzbWlzc0hhbmRsZXInLFxuICAgICdkaXNwbGF5ZWQnLFxuICAgICdkb2NrZWQnLFxuICAgICdkcmFnZ2FibGUnLFxuICAgICdmbGV4JyxcbiAgICAnZmxvYXRlZCcsXG4gICAgJ2ZvY3VzYWJsZUNvbnRhaW5lcicsXG4gICAgJ2ZvY3VzQ2xzJyxcbiAgICAnZnVsbHNjcmVlbicsXG4gICAgJ2hlYWRlcicsXG4gICAgJ2hlYWRlclBvc2l0aW9uJyxcbiAgICAnaGVpZ2h0JyxcbiAgICAnaGlkZGVuJyxcbiAgICAnaGlkZUFuaW1hdGlvbicsXG4gICAgJ2hpZGVNb2RlJyxcbiAgICAnaGlkZU9uTWFza1RhcCcsXG4gICAgJ2h0bWwnLFxuICAgICdpY29uJyxcbiAgICAnaWNvbkFsaWduJyxcbiAgICAnaWNvbkNscycsXG4gICAgJ2lkJyxcbiAgICAnaW5hY3RpdmVDaGlsZFRhYkluZGV4JyxcbiAgICAnaW5uZXJDbHMnLFxuICAgICdpbnN0YW5jZUNscycsXG4gICAgJ2l0ZW1JZCcsXG4gICAgJ2l0ZW1zJyxcbiAgICAna2V5TWFwJyxcbiAgICAna2V5TWFwRW5hYmxlZCcsXG4gICAgJ2tleU1hcFRhcmdldCcsXG4gICAgJ2xheW91dCcsXG4gICAgJ2xiYXInLFxuICAgICdsZWZ0JyxcbiAgICAnbGlzdGVuZXJzJyxcbiAgICAnbWFuYWdlQm9yZGVycycsXG4gICAgJ21hcmdpbicsXG4gICAgJ21hc2tlZCcsXG4gICAgJ21hc2tUYXBIYW5kbGVyJyxcbiAgICAnbWF4SGVpZ2h0JyxcbiAgICAnbWF4aW1pemFibGUnLFxuICAgICdtYXhpbWl6ZUFuaW1hdGlvbicsXG4gICAgJ21heGltaXplZCcsXG4gICAgJ21heGltaXplUHJveHknLFxuICAgICdtYXhpbWl6ZVRvb2wnLFxuICAgICdtYXhXaWR0aCcsXG4gICAgJ21pbkJ1dHRvbldpZHRoJyxcbiAgICAnbWluSGVpZ2h0JyxcbiAgICAnbWluV2lkdGgnLFxuICAgICdtb2RhbCcsXG4gICAgJ21vZGVsVmFsaWRhdGlvbicsXG4gICAgJ25hbWUnLFxuICAgICduYW1lYWJsZScsXG4gICAgJ25hbWVIb2xkZXInLFxuICAgICdwYWRkaW5nJyxcbiAgICAncGx1Z2lucycsXG4gICAgJ3B1Ymxpc2hlcycsXG4gICAgJ3JiYXInLFxuICAgICdyZWNvcmQnLFxuICAgICdyZWZlcmVuY2UnLFxuICAgICdyZWZlcmVuY2VIb2xkZXInLFxuICAgICdyZWxhdGl2ZScsXG4gICAgJ3JlbmRlclRvJyxcbiAgICAncmVzZXRGb2N1c1Bvc2l0aW9uJyxcbiAgICAncmVzaXphYmxlJyxcbiAgICAncmVzdG9yYWJsZScsXG4gICAgJ3Jlc3RvcmVBbmltYXRpb24nLFxuICAgICdyZXN0b3JlVG9vbCcsXG4gICAgJ3JpZ2h0JyxcbiAgICAncmlwcGxlJyxcbiAgICAnc2Nyb2xsYWJsZScsXG4gICAgJ3Nlc3Npb24nLFxuICAgICdzaGFkb3cnLFxuICAgICdzaGFyZWFibGVOYW1lJyxcbiAgICAnc2hpbScsXG4gICAgJ3Nob3dBbmltYXRpb24nLFxuICAgICdzdGFuZGFyZEJ1dHRvbnMnLFxuICAgICdzdGF0ZWZ1bCcsXG4gICAgJ3N0YXRlZnVsRGVmYXVsdHMnLFxuICAgICdzdGF0ZUlkJyxcbiAgICAnc3R5bGUnLFxuICAgICd0YWJJbmRleCcsXG4gICAgJ3RiYXInLFxuICAgICd0aXRsZScsXG4gICAgJ3RpdGxlQWxpZ24nLFxuICAgICd0aXRsZUNvbGxhcHNlJyxcbiAgICAndG9Gcm9udE9uU2hvdycsXG4gICAgJ3Rvb2xEZWZhdWx0cycsXG4gICAgJ3Rvb2xzJyxcbiAgICAndG9vbHRpcCcsXG4gICAgJ3RvcCcsXG4gICAgJ3RvdWNoQWN0aW9uJyxcbiAgICAndHBsJyxcbiAgICAndHBsV3JpdGVNb2RlJyxcbiAgICAndHJhbnNsYXRhYmxlJyxcbiAgICAndHdvV2F5QmluZGFibGUnLFxuICAgICd1aScsXG4gICAgJ3VzZXJDbHMnLFxuICAgICd1c2VyU2VsZWN0YWJsZScsXG4gICAgJ3ZpZXdNb2RlbCcsXG4gICAgJ3dlaWdodCcsXG4gICAgJ3dlaWdodGVkJyxcbiAgICAnd2lkdGgnLFxuICAgICd4JyxcbiAgICAneHR5cGUnLFxuICAgICd5JyxcbiAgICAnekluZGV4JyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAnYWxpZ24nLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcbntuYW1lOidhY3RpdmF0ZScscGFyYW1ldGVyczonbmV3QWN0aXZlSXRlbSxkaWFsb2csb2xkQWN0aXZlSXRlbSd9LFxue25hbWU6J2FjdGl2ZUl0ZW1jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2FkZCcscGFyYW1ldGVyczonZGlhbG9nLGl0ZW0saW5kZXgnfSxcbntuYW1lOidhZGRlZCcscGFyYW1ldGVyczonc2VuZGVyLGNvbnRhaW5lcixpbmRleCd9LFxue25hbWU6J2JlZm9yZWFjdGl2ZUl0ZW1jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVib3R0b21jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVjZW50ZXJlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWNvbGxhcHNlJyxwYXJhbWV0ZXJzOidkaWFsb2cnfSxcbntuYW1lOidiZWZvcmVkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWRvY2tlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWV4cGFuZCcscGFyYW1ldGVyczonZGlhbG9nJ30sXG57bmFtZTonYmVmb3JlaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlaGlkZScscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTonYmVmb3JlbGVmdGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZW1heEhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZW1heGltaXplJyxwYXJhbWV0ZXJzOidkaWFsb2cnfSxcbntuYW1lOidiZWZvcmVtYXhXaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZW1pbkhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZW1pbldpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3Jlb3JpZW50YXRpb25jaGFuZ2UnLHBhcmFtZXRlcnM6Jyd9LFxue25hbWU6J2JlZm9yZXJlc2l6ZWRyYWdzdGFydCcscGFyYW1ldGVyczonZGlhbG9nLGNvbnRleHQnfSxcbntuYW1lOidiZWZvcmVyZXN0b3JlJyxwYXJhbWV0ZXJzOidkaWFsb2cnfSxcbntuYW1lOidiZWZvcmVyaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZXNjcm9sbGFibGVjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVzaG93JyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcbntuYW1lOidiZWZvcmV0b2Zyb250JyxwYXJhbWV0ZXJzOidkaWFsb2cnfSxcbntuYW1lOidiZWZvcmV0b3BjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmV3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JsdXInLHBhcmFtZXRlcnM6J2RpYWxvZyxldmVudCd9LFxue25hbWU6J2JvdHRvbWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonY2VudGVyZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2NvbGxhcHNlJyxwYXJhbWV0ZXJzOidkaWFsb2cnfSxcbntuYW1lOidkZWFjdGl2YXRlJyxwYXJhbWV0ZXJzOidvbGRBY3RpdmVJdGVtLGRpYWxvZyxuZXdBY3RpdmVJdGVtJ30sXG57bmFtZTonZGVzdHJveScscGFyYW1ldGVyczonJ30sXG57bmFtZTonZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2RvY2tlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonZHJhd2VyaGlkZScscGFyYW1ldGVyczonZGlhbG9nJ30sXG57bmFtZTonZHJhd2Vyc2hvdycscGFyYW1ldGVyczonZGlhbG9nJ30sXG57bmFtZTonZXJhc2VkJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcbntuYW1lOidleHBhbmQnLHBhcmFtZXRlcnM6J2RpYWxvZyd9LFxue25hbWU6J2Zsb2F0aW5nY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIscG9zaXRpb25lZCd9LFxue25hbWU6J2ZvY3VzJyxwYXJhbWV0ZXJzOidkaWFsb2csZXZlbnQnfSxcbntuYW1lOidmb2N1c2VudGVyJyxwYXJhbWV0ZXJzOidkaWFsb2csZXZlbnQnfSxcbntuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOidkaWFsb2csZXZlbnQnfSxcbntuYW1lOidmdWxsc2NyZWVuJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcbntuYW1lOidoZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2hpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonaGlkZScscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTonaW5pdGlhbGl6ZScscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTonbGVmdGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonbWF4SGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidtYXhpbWl6ZScscGFyYW1ldGVyczonZGlhbG9nJ30sXG57bmFtZTonbWF4V2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J21pbkhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonbWluV2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J21vdmUnLHBhcmFtZXRlcnM6J2RpYWxvZyxpdGVtLHRvSW5kZXgsZnJvbUluZGV4J30sXG57bmFtZTonbW92ZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixjb250YWluZXIsdG9JbmRleCxmcm9tSW5kZXgnfSxcbntuYW1lOidvcmllbnRhdGlvbmNoYW5nZScscGFyYW1ldGVyczonJ30sXG57bmFtZToncGFpbnRlZCcscGFyYW1ldGVyczonc2VuZGVyLGVsZW1lbnQnfSxcbntuYW1lOidwb3NpdGlvbmVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIscG9zaXRpb25lZCd9LFxue25hbWU6J3JlbW92ZScscGFyYW1ldGVyczonZGlhbG9nLGl0ZW0saW5kZXgnfSxcbntuYW1lOidyZW1vdmVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsY29udGFpbmVyLGluZGV4J30sXG57bmFtZToncmVuZGVyZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J2RpYWxvZyxpdGVtLHJlbmRlcmVkJ30sXG57bmFtZToncmVzaXplJyxwYXJhbWV0ZXJzOidlbGVtZW50LGluZm8nfSxcbntuYW1lOidyZXNpemVkcmFnJyxwYXJhbWV0ZXJzOidkaWFsb2csY29udGV4dCd9LFxue25hbWU6J3Jlc2l6ZWRyYWdjYW5jZWwnLHBhcmFtZXRlcnM6J2RpYWxvZyxjb250ZXh0J30sXG57bmFtZToncmVzaXplZHJhZ2VuZCcscGFyYW1ldGVyczonZGlhbG9nLGNvbnRleHQnfSxcbntuYW1lOidyZXNpemVkcmFnc3RhcnQnLHBhcmFtZXRlcnM6J2RpYWxvZyxjb250ZXh0J30sXG57bmFtZToncmVzdG9yZScscGFyYW1ldGVyczonZGlhbG9nJ30sXG57bmFtZToncmlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J3Njcm9sbGFibGVjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J3Nob3cnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J3RvZnJvbnQnLHBhcmFtZXRlcnM6J2RpYWxvZyd9LFxue25hbWU6J3RvcGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTondXBkYXRlZGF0YScscGFyYW1ldGVyczonc2VuZGVyLG5ld0RhdGEnfSxcbntuYW1lOid3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuJ2FjdGl2YXRlJyxcbidhY3RpdmVJdGVtY2hhbmdlJyxcbidhZGQnLFxuJ2FkZGVkJyxcbidiZWZvcmVhY3RpdmVJdGVtY2hhbmdlJyxcbidiZWZvcmVib3R0b21jaGFuZ2UnLFxuJ2JlZm9yZWNlbnRlcmVkY2hhbmdlJyxcbidiZWZvcmVjb2xsYXBzZScsXG4nYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLFxuJ2JlZm9yZWRvY2tlZGNoYW5nZScsXG4nYmVmb3JlZXhwYW5kJyxcbidiZWZvcmVoZWlnaHRjaGFuZ2UnLFxuJ2JlZm9yZWhpZGRlbmNoYW5nZScsXG4nYmVmb3JlaGlkZScsXG4nYmVmb3JlbGVmdGNoYW5nZScsXG4nYmVmb3JlbWF4SGVpZ2h0Y2hhbmdlJyxcbidiZWZvcmVtYXhpbWl6ZScsXG4nYmVmb3JlbWF4V2lkdGhjaGFuZ2UnLFxuJ2JlZm9yZW1pbkhlaWdodGNoYW5nZScsXG4nYmVmb3JlbWluV2lkdGhjaGFuZ2UnLFxuJ2JlZm9yZW9yaWVudGF0aW9uY2hhbmdlJyxcbidiZWZvcmVyZXNpemVkcmFnc3RhcnQnLFxuJ2JlZm9yZXJlc3RvcmUnLFxuJ2JlZm9yZXJpZ2h0Y2hhbmdlJyxcbidiZWZvcmVzY3JvbGxhYmxlY2hhbmdlJyxcbidiZWZvcmVzaG93JyxcbidiZWZvcmV0b2Zyb250JyxcbidiZWZvcmV0b3BjaGFuZ2UnLFxuJ2JlZm9yZXdpZHRoY2hhbmdlJyxcbidibHVyJyxcbidib3R0b21jaGFuZ2UnLFxuJ2NlbnRlcmVkY2hhbmdlJyxcbidjb2xsYXBzZScsXG4nZGVhY3RpdmF0ZScsXG4nZGVzdHJveScsXG4nZGlzYWJsZWRjaGFuZ2UnLFxuJ2RvY2tlZGNoYW5nZScsXG4nZHJhd2VyaGlkZScsXG4nZHJhd2Vyc2hvdycsXG4nZXJhc2VkJyxcbidleHBhbmQnLFxuJ2Zsb2F0aW5nY2hhbmdlJyxcbidmb2N1cycsXG4nZm9jdXNlbnRlcicsXG4nZm9jdXNsZWF2ZScsXG4nZnVsbHNjcmVlbicsXG4naGVpZ2h0Y2hhbmdlJyxcbidoaWRkZW5jaGFuZ2UnLFxuJ2hpZGUnLFxuJ2luaXRpYWxpemUnLFxuJ2xlZnRjaGFuZ2UnLFxuJ21heEhlaWdodGNoYW5nZScsXG4nbWF4aW1pemUnLFxuJ21heFdpZHRoY2hhbmdlJyxcbidtaW5IZWlnaHRjaGFuZ2UnLFxuJ21pbldpZHRoY2hhbmdlJyxcbidtb3ZlJyxcbidtb3ZlZCcsXG4nb3JpZW50YXRpb25jaGFuZ2UnLFxuJ3BhaW50ZWQnLFxuJ3Bvc2l0aW9uZWRjaGFuZ2UnLFxuJ3JlbW92ZScsXG4ncmVtb3ZlZCcsXG4ncmVuZGVyZWRjaGFuZ2UnLFxuJ3Jlc2l6ZScsXG4ncmVzaXplZHJhZycsXG4ncmVzaXplZHJhZ2NhbmNlbCcsXG4ncmVzaXplZHJhZ2VuZCcsXG4ncmVzaXplZHJhZ3N0YXJ0JyxcbidyZXN0b3JlJyxcbidyaWdodGNoYW5nZScsXG4nc2Nyb2xsYWJsZWNoYW5nZScsXG4nc2hvdycsXG4ndG9mcm9udCcsXG4ndG9wY2hhbmdlJyxcbid1cGRhdGVkYXRhJyxcbid3aWR0aGNoYW5nZScsXG4ncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGlhbG9nJywgXG4gIGlucHV0czogZGlhbG9nTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogZGlhbG9nTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IGJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dERpYWxvZ0NvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dERpYWxvZ0NvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBlUmVmOkVsZW1lbnRSZWYsIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHVibGljIGhvc3RDb21wb25lbnQgOiBiYXNlKSB7XG4gICAgICBzdXBlcihlUmVmLm5hdGl2ZUVsZW1lbnQsZGlhbG9nTWV0YURhdGEsaG9zdENvbXBvbmVudClcbiAgICB9XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmJhc2VPbkluaXQoZGlhbG9nTWV0YURhdGEpXG4gIH1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICAvL3RoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICB9XG4gIC8vcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHt0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcyl9XG5cbn0iXX0=