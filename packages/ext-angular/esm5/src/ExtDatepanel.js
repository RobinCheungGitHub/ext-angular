import * as tslib_1 from "tslib";
//import EWCDatepanel from '../dist/ext-datepanel.component.js';
//inputs: (new EWCDatepanel()).properties,
import EWCDatepanel from '@sencha/ext-web-components/dist/ext-datepanel.component.js';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './angularbase';
var ExtDatepanelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtDatepanelComponent, _super);
    function ExtDatepanelComponent(eRef, hostComponent, vc) {
        var _this = _super.call(this, eRef, hostComponent, ['label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'activeChildTabIndex', 'activeItem', 'alignSelf', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'anchor', 'anchorPosition', 'animation', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoConfirm', 'autoDestroy', 'autoSize', 'axisLock', 'bbar', 'bind', 'bodyBorder', 'bodyCls', 'bodyPadding', 'bodyStyle', 'border', 'bottom', 'buttonAlign', 'buttons', 'buttonToolbar', 'captionFormat', 'cardSwitchAnimation', 'centered', 'closable', 'closeAction', 'closeToolText', 'cls', 'collapsed', 'collapsible', 'constrainAlign', 'contentEl', 'control', 'controller', 'data', 'dateCellFormat', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultToolWeights', 'defaultType', 'disabled', 'disabledDates', 'disabledDays', 'displayed', 'docked', 'draggable', 'undefined', 'undefined', 'undefined', 'flex', 'floated', 'focusableContainer', 'focusableDate', 'focusCls', 'format', 'fullscreen', 'handler', 'header', 'headerFormat', 'headerLength', 'headerPosition', 'height', 'hidden', 'hideAnimation', 'hideCaptions', 'hideMode', 'hideOnMaskTap', 'hideOutside', 'html', 'icon', 'iconAlign', 'iconCls', 'id', 'inactiveChildTabIndex', 'innerCls', 'instanceCls', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'lbar', 'left', 'listeners', 'manageBorders', 'margin', 'masked', 'maxDate', 'maxHeight', 'maxWidth', 'minButtonWidth', 'minDate', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'nameHolder', 'navigationPosition', 'nextText', 'padding', 'panes', 'plugins', 'prevText', 'publishes', 'rbar', 'record', 'reference', 'referenceHolder', 'relative', 'renderTo', 'resetFocusPosition', 'resizable', 'right', 'ripple', 'scope', 'scrollable', 'selectOnNavigate', 'session', 'shadow', 'shareableName', 'shim', 'showAfterMaxDate', 'showAnimation', 'showBeforeMinDate', 'showFooter', 'showTodayButton', 'specialDates', 'specialDays', 'splitTitle', 'standardButtons', 'startDay', 'stateful', 'statefulDefaults', 'stateId', 'style', 'tabIndex', 'tbar', 'title', 'titleAlign', 'titleAnimation', 'titleCollapse', 'toFrontOnShow', 'toolDefaults', 'tools', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'transformCellCls', 'translatable', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'value', 'viewModel', 'weekendDays', 'weight', 'weighted', 'width', 'x', 'xtype', 'y', 'yearPicker', 'yearPickerDefaults', 'zIndex',], (new EWCDatepanel()).events, ['ready', 'activate', 'activeItemchange', 'add', 'added', 'beforeactiveItemchange', 'beforebottomchange', 'beforecenteredchange', 'beforecollapse', 'beforedisabledchange', 'beforedockedchange', 'beforeexpand', 'beforeheightchange', 'beforehiddenchange', 'beforehide', 'beforeleftchange', 'beforemaxHeightchange', 'beforemaxWidthchange', 'beforeminHeightchange', 'beforeminWidthchange', 'beforeorientationchange', 'beforeresizedragstart', 'beforerightchange', 'beforescrollablechange', 'beforeshow', 'beforetofront', 'beforetopchange', 'beforewidthchange', 'blur', 'bottomchange', 'centeredchange', 'collapse', 'deactivate', 'destroy', 'disabledchange', 'dockedchange', 'drawerhide', 'drawershow', 'erased', 'expand', 'floatingchange', 'focus', 'focusenter', 'focusleave', 'fullscreen', 'heightchange', 'hiddenchange', 'hide', 'initialize', 'leftchange', 'maxHeightchange', 'maxWidthchange', 'minHeightchange', 'minWidthchange', 'move', 'moved', 'orientationchange', 'painted', 'positionedchange', 'remove', 'removed', 'renderedchange', 'resize', 'resizedrag', 'resizedragcancel', 'resizedragend', 'resizedragstart', 'rightchange', 'scrollablechange', 'show', 'tofront', 'topchange', 'updatedata', 'widthchange',], vc) || this;
        _this.xtype = 'datepanel';
        return _this;
    }
    ExtDatepanelComponent_1 = ExtDatepanelComponent;
    ExtDatepanelComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtDatepanelComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtDatepanelComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtDatepanelComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtDatepanelComponent_1;
    ExtDatepanelComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
        { type: ViewContainerRef }
    ]; };
    ExtDatepanelComponent = ExtDatepanelComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ExtDatepanel',
            inputs: ['label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'activeChildTabIndex', 'activeItem', 'alignSelf', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'anchor', 'anchorPosition', 'animation', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoConfirm', 'autoDestroy', 'autoSize', 'axisLock', 'bbar', 'bind', 'bodyBorder', 'bodyCls', 'bodyPadding', 'bodyStyle', 'border', 'bottom', 'buttonAlign', 'buttons', 'buttonToolbar', 'captionFormat', 'cardSwitchAnimation', 'centered', 'closable', 'closeAction', 'closeToolText', 'cls', 'collapsed', 'collapsible', 'constrainAlign', 'contentEl', 'control', 'controller', 'data', 'dateCellFormat', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultToolWeights', 'defaultType', 'disabled', 'disabledDates', 'disabledDays', 'displayed', 'docked', 'draggable', 'undefined', 'undefined', 'undefined', 'flex', 'floated', 'focusableContainer', 'focusableDate', 'focusCls', 'format', 'fullscreen', 'handler', 'header', 'headerFormat', 'headerLength', 'headerPosition', 'height', 'hidden', 'hideAnimation', 'hideCaptions', 'hideMode', 'hideOnMaskTap', 'hideOutside', 'html', 'icon', 'iconAlign', 'iconCls', 'id', 'inactiveChildTabIndex', 'innerCls', 'instanceCls', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'lbar', 'left', 'listeners', 'manageBorders', 'margin', 'masked', 'maxDate', 'maxHeight', 'maxWidth', 'minButtonWidth', 'minDate', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'nameHolder', 'navigationPosition', 'nextText', 'padding', 'panes', 'plugins', 'prevText', 'publishes', 'rbar', 'record', 'reference', 'referenceHolder', 'relative', 'renderTo', 'resetFocusPosition', 'resizable', 'right', 'ripple', 'scope', 'scrollable', 'selectOnNavigate', 'session', 'shadow', 'shareableName', 'shim', 'showAfterMaxDate', 'showAnimation', 'showBeforeMinDate', 'showFooter', 'showTodayButton', 'specialDates', 'specialDays', 'splitTitle', 'standardButtons', 'startDay', 'stateful', 'statefulDefaults', 'stateId', 'style', 'tabIndex', 'tbar', 'title', 'titleAlign', 'titleAnimation', 'titleCollapse', 'toFrontOnShow', 'toolDefaults', 'tools', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'transformCellCls', 'translatable', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'value', 'viewModel', 'weekendDays', 'weight', 'weighted', 'width', 'x', 'xtype', 'y', 'yearPicker', 'yearPickerDefaults', 'zIndex',],
            outputs: ['ready', 'activate', 'activeItemchange', 'add', 'added', 'beforeactiveItemchange', 'beforebottomchange', 'beforecenteredchange', 'beforecollapse', 'beforedisabledchange', 'beforedockedchange', 'beforeexpand', 'beforeheightchange', 'beforehiddenchange', 'beforehide', 'beforeleftchange', 'beforemaxHeightchange', 'beforemaxWidthchange', 'beforeminHeightchange', 'beforeminWidthchange', 'beforeorientationchange', 'beforeresizedragstart', 'beforerightchange', 'beforescrollablechange', 'beforeshow', 'beforetofront', 'beforetopchange', 'beforewidthchange', 'blur', 'bottomchange', 'centeredchange', 'collapse', 'deactivate', 'destroy', 'disabledchange', 'dockedchange', 'drawerhide', 'drawershow', 'erased', 'expand', 'floatingchange', 'focus', 'focusenter', 'focusleave', 'fullscreen', 'heightchange', 'hiddenchange', 'hide', 'initialize', 'leftchange', 'maxHeightchange', 'maxWidthchange', 'minHeightchange', 'minWidthchange', 'move', 'moved', 'orientationchange', 'painted', 'positionedchange', 'remove', 'removed', 'renderedchange', 'resize', 'resizedrag', 'resizedragcancel', 'resizedragend', 'resizedragstart', 'rightchange', 'scrollablechange', 'show', 'tofront', 'topchange', 'updatedata', 'widthchange',],
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtDatepanelComponent_1; }) }],
            template: '<ng-content></ng-content>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf())
    ], ExtDatepanelComponent);
    return ExtDatepanelComponent;
}(EngBase));
export { ExtDatepanelComponent };
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCDatepanel()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0RGF0ZXBhbmVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9FeHREYXRlcGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGdFQUFnRTtBQUNoRSwwQ0FBMEM7QUFDMUMsT0FBTyxZQUFZLE1BQU0sNERBQTRELENBQUM7QUFDdEYsT0FBTyxFQUNILElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUNSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU3hDO0lBQTJDLGlEQUFPO0lBQzlDLCtCQUNJLElBQWdCLEVBQ2dCLGFBQXNCLEVBQ3RELEVBQW9CO1FBSHhCLFlBS0ksa0JBQ0ksSUFBSSxFQUNKLGFBQWEsRUFDYixDQUFDLE9BQU8sRUFBQyxhQUFhLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxnQkFBZ0IsRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsa0JBQWtCLEVBQUMsb0JBQW9CLEVBQUMscUJBQXFCLEVBQUMsWUFBWSxFQUFDLFdBQVcsRUFBQywrQkFBK0IsRUFBQyxhQUFhLEVBQUMsUUFBUSxFQUFDLGdCQUFnQixFQUFDLFdBQVcsRUFBQyxnQkFBZ0IsRUFBQyxpQkFBaUIsRUFBQyxXQUFXLEVBQUMsZ0JBQWdCLEVBQUMsYUFBYSxFQUFDLGFBQWEsRUFBQyxVQUFVLEVBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsWUFBWSxFQUFDLFNBQVMsRUFBQyxhQUFhLEVBQUMsV0FBVyxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsYUFBYSxFQUFDLFNBQVMsRUFBQyxlQUFlLEVBQUMsZUFBZSxFQUFDLHFCQUFxQixFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsYUFBYSxFQUFDLGVBQWUsRUFB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T0FBTyxFQUFDLG1CQUFtQixFQUFDLFNBQVMsRUFBQyxrQkFBa0IsRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLGdCQUFnQixFQUFDLFFBQVEsRUFBQyxZQUFZLEVBQUMsa0JBQWtCLEVBQUMsZUFBZSxFQUFDLGlCQUFpQixFQUFDLGFBQWEsRUFBQyxrQkFBa0IsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBQyxZQUFZLEVBQUMsYUFBYSxFQUFFO1lBQzVuQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsdUJBQXFCLEVBQXJCLENBQXFCLENBQUMsRUFBQyxDQUFDO1lBQ3JGLFFBQVEsRUFBRSwyQkFBMkI7U0FDeEMsQ0FBQztRQUlPLG1CQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtPQUgxQixxQkFBcUIsQ0FnQ2pDO0lBQUQsNEJBQUM7Q0FBQSxBQWhDRCxDQUEyQyxPQUFPLEdBZ0NqRDtTQWhDWSxxQkFBcUI7QUFtQ2xDLDZCQUE2QjtBQUM3QixpQ0FBaUM7QUFDakMsaUNBQWlDO0FBQ2pDLGlGQUFpRjtBQUNqRixhQUFhO0FBQ2Isb0JBQW9CO0FBQ3BCLElBQUk7QUFDSix5Q0FBeUM7QUFFekMsK0NBQStDO0FBQy9DLHlCQUF5QjtBQUN6QiwyQ0FBMkM7QUFDM0Msb0NBQW9DO0FBQ3BDLElBQUk7QUFDSiw0Q0FBNEM7QUFDNUMsbUJBQW1CO0FBQ25CLDJDQUEyQztBQUMzQyxHQUFHO0FBQ0gsa0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgRVdDRGF0ZXBhbmVsIGZyb20gJy4uL2Rpc3QvZXh0LWRhdGVwYW5lbC5jb21wb25lbnQuanMnO1xuLy9pbnB1dHM6IChuZXcgRVdDRGF0ZXBhbmVsKCkpLnByb3BlcnRpZXMsXG5pbXBvcnQgRVdDRGF0ZXBhbmVsIGZyb20gJ0BzZW5jaGEvZXh0LXdlYi1jb21wb25lbnRzL2Rpc3QvZXh0LWRhdGVwYW5lbC5jb21wb25lbnQuanMnO1xuaW1wb3J0IHtcbiAgICBIb3N0LFxuICAgIE9wdGlvbmFsLFxuICAgIFNraXBTZWxmLFxuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIGZvcndhcmRSZWYsXG4gICAgVmlld0NvbnRhaW5lclJlZlxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vYW5ndWxhcmJhc2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ0V4dERhdGVwYW5lbCcsXG4gICAgaW5wdXRzOiBbJ2xhYmVsJywnZml0VG9QYXJlbnQnLCd0YWInLCdjb25maWcnLCdwbGF0Zm9ybUNvbmZpZycsJ2V4dG5hbWUnLCd2aWV3cG9ydCcsJ2FsaWduJywncGx1Z2lucycsJ3Jlc3BvbnNpdmVDb25maWcnLCdyZXNwb25zaXZlRm9ybXVsYXMnLCdhY3RpdmVDaGlsZFRhYkluZGV4JywnYWN0aXZlSXRlbScsJ2FsaWduU2VsZicsJ2FsbG93Rm9jdXNpbmdEaXNhYmxlZENoaWxkcmVuJywnYWx3YXlzT25Ub3AnLCdhbmNob3InLCdhbmNob3JQb3NpdGlvbicsJ2FuaW1hdGlvbicsJ2FyaWFBdHRyaWJ1dGVzJywnYXJpYURlc2NyaWJlZEJ5JywnYXJpYUxhYmVsJywnYXJpYUxhYmVsbGVkQnknLCdhdXRvQ29uZmlybScsJ2F1dG9EZXN0cm95JywnYXV0b1NpemUnLCdheGlzTG9jaycsJ2JiYXInLCdiaW5kJywnYm9keUJvcmRlcicsJ2JvZHlDbHMnLCdib2R5UGFkZGluZycsJ2JvZHlTdHlsZScsJ2JvcmRlcicsJ2JvdHRvbScsJ2J1dHRvbkFsaWduJywnYnV0dG9ucycsJ2J1dHRvblRvb2xiYXInLCdjYXB0aW9uRm9ybWF0JywnY2FyZFN3aXRjaEFuaW1hdGlvbicsJ2NlbnRlcmVkJywnY2xvc2FibGUnLCdjbG9zZUFjdGlvbicsJ2Nsb3NlVG9vbFRleHQnLCdjbHMnLCdjb2xsYXBzZWQnLCdjb2xsYXBzaWJsZScsJ2NvbnN0cmFpbkFsaWduJywnY29udGVudEVsJywnY29udHJvbCcsJ2NvbnRyb2xsZXInLCdkYXRhJywnZGF0ZUNlbGxGb3JtYXQnLCdkZWZhdWx0Rm9jdXMnLCdkZWZhdWx0TGlzdGVuZXJTY29wZScsJ2RlZmF1bHRzJywnZGVmYXVsdFRvb2xXZWlnaHRzJywnZGVmYXVsdFR5cGUnLCdkaXNhYmxlZCcsJ2Rpc2FibGVkRGF0ZXMnLCdkaXNhYmxlZERheXMnLCdkaXNwbGF5ZWQnLCdkb2NrZWQnLCdkcmFnZ2FibGUnLCd1bmRlZmluZWQnLCd1bmRlZmluZWQnLCd1bmRlZmluZWQnLCdmbGV4JywnZmxvYXRlZCcsJ2ZvY3VzYWJsZUNvbnRhaW5lcicsJ2ZvY3VzYWJsZURhdGUnLCdmb2N1c0NscycsJ2Zvcm1hdCcsJ2Z1bGxzY3JlZW4nLCdoYW5kbGVyJywnaGVhZGVyJywnaGVhZGVyRm9ybWF0JywnaGVhZGVyTGVuZ3RoJywnaGVhZGVyUG9zaXRpb24nLCdoZWlnaHQnLCdoaWRkZW4nLCdoaWRlQW5pbWF0aW9uJywnaGlkZUNhcHRpb25zJywnaGlkZU1vZGUnLCdoaWRlT25NYXNrVGFwJywnaGlkZU91dHNpZGUnLCdodG1sJywnaWNvbicsJ2ljb25BbGlnbicsJ2ljb25DbHMnLCdpZCcsJ2luYWN0aXZlQ2hpbGRUYWJJbmRleCcsJ2lubmVyQ2xzJywnaW5zdGFuY2VDbHMnLCdpdGVtSWQnLCdpdGVtcycsJ2tleU1hcCcsJ2tleU1hcEVuYWJsZWQnLCdrZXlNYXBUYXJnZXQnLCdsYXlvdXQnLCdsYmFyJywnbGVmdCcsJ2xpc3RlbmVycycsJ21hbmFnZUJvcmRlcnMnLCdtYXJnaW4nLCdtYXNrZWQnLCdtYXhEYXRlJywnbWF4SGVpZ2h0JywnbWF4V2lkdGgnLCdtaW5CdXR0b25XaWR0aCcsJ21pbkRhdGUnLCdtaW5IZWlnaHQnLCdtaW5XaWR0aCcsJ21vZGFsJywnbW9kZWxWYWxpZGF0aW9uJywnbmFtZScsJ25hbWVhYmxlJywnbmFtZUhvbGRlcicsJ25hdmlnYXRpb25Qb3NpdGlvbicsJ25leHRUZXh0JywncGFkZGluZycsJ3BhbmVzJywncGx1Z2lucycsJ3ByZXZUZXh0JywncHVibGlzaGVzJywncmJhcicsJ3JlY29yZCcsJ3JlZmVyZW5jZScsJ3JlZmVyZW5jZUhvbGRlcicsJ3JlbGF0aXZlJywncmVuZGVyVG8nLCdyZXNldEZvY3VzUG9zaXRpb24nLCdyZXNpemFibGUnLCdyaWdodCcsJ3JpcHBsZScsJ3Njb3BlJywnc2Nyb2xsYWJsZScsJ3NlbGVjdE9uTmF2aWdhdGUnLCdzZXNzaW9uJywnc2hhZG93Jywnc2hhcmVhYmxlTmFtZScsJ3NoaW0nLCdzaG93QWZ0ZXJNYXhEYXRlJywnc2hvd0FuaW1hdGlvbicsJ3Nob3dCZWZvcmVNaW5EYXRlJywnc2hvd0Zvb3RlcicsJ3Nob3dUb2RheUJ1dHRvbicsJ3NwZWNpYWxEYXRlcycsJ3NwZWNpYWxEYXlzJywnc3BsaXRUaXRsZScsJ3N0YW5kYXJkQnV0dG9ucycsJ3N0YXJ0RGF5Jywnc3RhdGVmdWwnLCdzdGF0ZWZ1bERlZmF1bHRzJywnc3RhdGVJZCcsJ3N0eWxlJywndGFiSW5kZXgnLCd0YmFyJywndGl0bGUnLCd0aXRsZUFsaWduJywndGl0bGVBbmltYXRpb24nLCd0aXRsZUNvbGxhcHNlJywndG9Gcm9udE9uU2hvdycsJ3Rvb2xEZWZhdWx0cycsJ3Rvb2xzJywndG9vbHRpcCcsJ3RvcCcsJ3RvdWNoQWN0aW9uJywndHBsJywndHBsV3JpdGVNb2RlJywndHJhbnNmb3JtQ2VsbENscycsJ3RyYW5zbGF0YWJsZScsJ3R3b1dheUJpbmRhYmxlJywndWknLCd1c2VyQ2xzJywndXNlclNlbGVjdGFibGUnLCd2YWx1ZScsJ3ZpZXdNb2RlbCcsJ3dlZWtlbmREYXlzJywnd2VpZ2h0Jywnd2VpZ2h0ZWQnLCd3aWR0aCcsJ3gnLCd4dHlwZScsJ3knLCd5ZWFyUGlja2VyJywneWVhclBpY2tlckRlZmF1bHRzJywnekluZGV4JyxdLFxuICAgIG91dHB1dHM6IFsncmVhZHknLCdhY3RpdmF0ZScsJ2FjdGl2ZUl0ZW1jaGFuZ2UnLCdhZGQnLCdhZGRlZCcsJ2JlZm9yZWFjdGl2ZUl0ZW1jaGFuZ2UnLCdiZWZvcmVib3R0b21jaGFuZ2UnLCdiZWZvcmVjZW50ZXJlZGNoYW5nZScsJ2JlZm9yZWNvbGxhcHNlJywnYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLCdiZWZvcmVkb2NrZWRjaGFuZ2UnLCdiZWZvcmVleHBhbmQnLCdiZWZvcmVoZWlnaHRjaGFuZ2UnLCdiZWZvcmVoaWRkZW5jaGFuZ2UnLCdiZWZvcmVoaWRlJywnYmVmb3JlbGVmdGNoYW5nZScsJ2JlZm9yZW1heEhlaWdodGNoYW5nZScsJ2JlZm9yZW1heFdpZHRoY2hhbmdlJywnYmVmb3JlbWluSGVpZ2h0Y2hhbmdlJywnYmVmb3JlbWluV2lkdGhjaGFuZ2UnLCdiZWZvcmVvcmllbnRhdGlvbmNoYW5nZScsJ2JlZm9yZXJlc2l6ZWRyYWdzdGFydCcsJ2JlZm9yZXJpZ2h0Y2hhbmdlJywnYmVmb3Jlc2Nyb2xsYWJsZWNoYW5nZScsJ2JlZm9yZXNob3cnLCdiZWZvcmV0b2Zyb250JywnYmVmb3JldG9wY2hhbmdlJywnYmVmb3Jld2lkdGhjaGFuZ2UnLCdibHVyJywnYm90dG9tY2hhbmdlJywnY2VudGVyZWRjaGFuZ2UnLCdjb2xsYXBzZScsJ2RlYWN0aXZhdGUnLCdkZXN0cm95JywnZGlzYWJsZWRjaGFuZ2UnLCdkb2NrZWRjaGFuZ2UnLCdkcmF3ZXJoaWRlJywnZHJhd2Vyc2hvdycsJ2VyYXNlZCcsJ2V4cGFuZCcsJ2Zsb2F0aW5nY2hhbmdlJywnZm9jdXMnLCdmb2N1c2VudGVyJywnZm9jdXNsZWF2ZScsJ2Z1bGxzY3JlZW4nLCdoZWlnaHRjaGFuZ2UnLCdoaWRkZW5jaGFuZ2UnLCdoaWRlJywnaW5pdGlhbGl6ZScsJ2xlZnRjaGFuZ2UnLCdtYXhIZWlnaHRjaGFuZ2UnLCdtYXhXaWR0aGNoYW5nZScsJ21pbkhlaWdodGNoYW5nZScsJ21pbldpZHRoY2hhbmdlJywnbW92ZScsJ21vdmVkJywnb3JpZW50YXRpb25jaGFuZ2UnLCdwYWludGVkJywncG9zaXRpb25lZGNoYW5nZScsJ3JlbW92ZScsJ3JlbW92ZWQnLCdyZW5kZXJlZGNoYW5nZScsJ3Jlc2l6ZScsJ3Jlc2l6ZWRyYWcnLCdyZXNpemVkcmFnY2FuY2VsJywncmVzaXplZHJhZ2VuZCcsJ3Jlc2l6ZWRyYWdzdGFydCcsJ3JpZ2h0Y2hhbmdlJywnc2Nyb2xsYWJsZWNoYW5nZScsJ3Nob3cnLCd0b2Zyb250JywndG9wY2hhbmdlJywndXBkYXRlZGF0YScsJ3dpZHRoY2hhbmdlJyxdLFxuICAgIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHREYXRlcGFuZWxDb21wb25lbnQpfV0sXG4gICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHREYXRlcGFuZWxDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlLFxuICAgICAgICB2YzogVmlld0NvbnRhaW5lclJlZlxuICAgICAgICApIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIFsnbGFiZWwnLCdmaXRUb1BhcmVudCcsJ3RhYicsJ2NvbmZpZycsJ3BsYXRmb3JtQ29uZmlnJywnZXh0bmFtZScsJ3ZpZXdwb3J0JywnYWxpZ24nLCdwbHVnaW5zJywncmVzcG9uc2l2ZUNvbmZpZycsJ3Jlc3BvbnNpdmVGb3JtdWxhcycsJ2FjdGl2ZUNoaWxkVGFiSW5kZXgnLCdhY3RpdmVJdGVtJywnYWxpZ25TZWxmJywnYWxsb3dGb2N1c2luZ0Rpc2FibGVkQ2hpbGRyZW4nLCdhbHdheXNPblRvcCcsJ2FuY2hvcicsJ2FuY2hvclBvc2l0aW9uJywnYW5pbWF0aW9uJywnYXJpYUF0dHJpYnV0ZXMnLCdhcmlhRGVzY3JpYmVkQnknLCdhcmlhTGFiZWwnLCdhcmlhTGFiZWxsZWRCeScsJ2F1dG9Db25maXJtJywnYXV0b0Rlc3Ryb3knLCdhdXRvU2l6ZScsJ2F4aXNMb2NrJywnYmJhcicsJ2JpbmQnLCdib2R5Qm9yZGVyJywnYm9keUNscycsJ2JvZHlQYWRkaW5nJywnYm9keVN0eWxlJywnYm9yZGVyJywnYm90dG9tJywnYnV0dG9uQWxpZ24nLCdidXR0b25zJywnYnV0dG9uVG9vbGJhcicsJ2NhcHRpb25Gb3JtYXQnLCdjYXJkU3dpdGNoQW5pbWF0aW9uJywnY2VudGVyZWQnLCdjbG9zYWJsZScsJ2Nsb3NlQWN0aW9uJywnY2xvc2VUb29sVGV4dCcsJ2NscycsJ2NvbGxhcHNlZCcsJ2NvbGxhcHNpYmxlJywnY29uc3RyYWluQWxpZ24nLCdjb250ZW50RWwnLCdjb250cm9sJywnY29udHJvbGxlcicsJ2RhdGEnLCdkYXRlQ2VsbEZvcm1hdCcsJ2RlZmF1bHRGb2N1cycsJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJywnZGVmYXVsdHMnLCdkZWZhdWx0VG9vbFdlaWdodHMnLCdkZWZhdWx0VHlwZScsJ2Rpc2FibGVkJywnZGlzYWJsZWREYXRlcycsJ2Rpc2FibGVkRGF5cycsJ2Rpc3BsYXllZCcsJ2RvY2tlZCcsJ2RyYWdnYWJsZScsJ3VuZGVmaW5lZCcsJ3VuZGVmaW5lZCcsJ3VuZGVmaW5lZCcsJ2ZsZXgnLCdmbG9hdGVkJywnZm9jdXNhYmxlQ29udGFpbmVyJywnZm9jdXNhYmxlRGF0ZScsJ2ZvY3VzQ2xzJywnZm9ybWF0JywnZnVsbHNjcmVlbicsJ2hhbmRsZXInLCdoZWFkZXInLCdoZWFkZXJGb3JtYXQnLCdoZWFkZXJMZW5ndGgnLCdoZWFkZXJQb3NpdGlvbicsJ2hlaWdodCcsJ2hpZGRlbicsJ2hpZGVBbmltYXRpb24nLCdoaWRlQ2FwdGlvbnMnLCdoaWRlTW9kZScsJ2hpZGVPbk1hc2tUYXAnLCdoaWRlT3V0c2lkZScsJ2h0bWwnLCdpY29uJywnaWNvbkFsaWduJywnaWNvbkNscycsJ2lkJywnaW5hY3RpdmVDaGlsZFRhYkluZGV4JywnaW5uZXJDbHMnLCdpbnN0YW5jZUNscycsJ2l0ZW1JZCcsJ2l0ZW1zJywna2V5TWFwJywna2V5TWFwRW5hYmxlZCcsJ2tleU1hcFRhcmdldCcsJ2xheW91dCcsJ2xiYXInLCdsZWZ0JywnbGlzdGVuZXJzJywnbWFuYWdlQm9yZGVycycsJ21hcmdpbicsJ21hc2tlZCcsJ21heERhdGUnLCdtYXhIZWlnaHQnLCdtYXhXaWR0aCcsJ21pbkJ1dHRvbldpZHRoJywnbWluRGF0ZScsJ21pbkhlaWdodCcsJ21pbldpZHRoJywnbW9kYWwnLCdtb2RlbFZhbGlkYXRpb24nLCduYW1lJywnbmFtZWFibGUnLCduYW1lSG9sZGVyJywnbmF2aWdhdGlvblBvc2l0aW9uJywnbmV4dFRleHQnLCdwYWRkaW5nJywncGFuZXMnLCdwbHVnaW5zJywncHJldlRleHQnLCdwdWJsaXNoZXMnLCdyYmFyJywncmVjb3JkJywncmVmZXJlbmNlJywncmVmZXJlbmNlSG9sZGVyJywncmVsYXRpdmUnLCdyZW5kZXJUbycsJ3Jlc2V0Rm9jdXNQb3NpdGlvbicsJ3Jlc2l6YWJsZScsJ3JpZ2h0JywncmlwcGxlJywnc2NvcGUnLCdzY3JvbGxhYmxlJywnc2VsZWN0T25OYXZpZ2F0ZScsJ3Nlc3Npb24nLCdzaGFkb3cnLCdzaGFyZWFibGVOYW1lJywnc2hpbScsJ3Nob3dBZnRlck1heERhdGUnLCdzaG93QW5pbWF0aW9uJywnc2hvd0JlZm9yZU1pbkRhdGUnLCdzaG93Rm9vdGVyJywnc2hvd1RvZGF5QnV0dG9uJywnc3BlY2lhbERhdGVzJywnc3BlY2lhbERheXMnLCdzcGxpdFRpdGxlJywnc3RhbmRhcmRCdXR0b25zJywnc3RhcnREYXknLCdzdGF0ZWZ1bCcsJ3N0YXRlZnVsRGVmYXVsdHMnLCdzdGF0ZUlkJywnc3R5bGUnLCd0YWJJbmRleCcsJ3RiYXInLCd0aXRsZScsJ3RpdGxlQWxpZ24nLCd0aXRsZUFuaW1hdGlvbicsJ3RpdGxlQ29sbGFwc2UnLCd0b0Zyb250T25TaG93JywndG9vbERlZmF1bHRzJywndG9vbHMnLCd0b29sdGlwJywndG9wJywndG91Y2hBY3Rpb24nLCd0cGwnLCd0cGxXcml0ZU1vZGUnLCd0cmFuc2Zvcm1DZWxsQ2xzJywndHJhbnNsYXRhYmxlJywndHdvV2F5QmluZGFibGUnLCd1aScsJ3VzZXJDbHMnLCd1c2VyU2VsZWN0YWJsZScsJ3ZhbHVlJywndmlld01vZGVsJywnd2Vla2VuZERheXMnLCd3ZWlnaHQnLCd3ZWlnaHRlZCcsJ3dpZHRoJywneCcsJ3h0eXBlJywneScsJ3llYXJQaWNrZXInLCd5ZWFyUGlja2VyRGVmYXVsdHMnLCd6SW5kZXgnLF0sXG4gICAgICAgICAgICAobmV3IEVXQ0RhdGVwYW5lbCgpKS5ldmVudHMsXG4gICAgICAgICAgICBbJ3JlYWR5JywnYWN0aXZhdGUnLCdhY3RpdmVJdGVtY2hhbmdlJywnYWRkJywnYWRkZWQnLCdiZWZvcmVhY3RpdmVJdGVtY2hhbmdlJywnYmVmb3JlYm90dG9tY2hhbmdlJywnYmVmb3JlY2VudGVyZWRjaGFuZ2UnLCdiZWZvcmVjb2xsYXBzZScsJ2JlZm9yZWRpc2FibGVkY2hhbmdlJywnYmVmb3JlZG9ja2VkY2hhbmdlJywnYmVmb3JlZXhwYW5kJywnYmVmb3JlaGVpZ2h0Y2hhbmdlJywnYmVmb3JlaGlkZGVuY2hhbmdlJywnYmVmb3JlaGlkZScsJ2JlZm9yZWxlZnRjaGFuZ2UnLCdiZWZvcmVtYXhIZWlnaHRjaGFuZ2UnLCdiZWZvcmVtYXhXaWR0aGNoYW5nZScsJ2JlZm9yZW1pbkhlaWdodGNoYW5nZScsJ2JlZm9yZW1pbldpZHRoY2hhbmdlJywnYmVmb3Jlb3JpZW50YXRpb25jaGFuZ2UnLCdiZWZvcmVyZXNpemVkcmFnc3RhcnQnLCdiZWZvcmVyaWdodGNoYW5nZScsJ2JlZm9yZXNjcm9sbGFibGVjaGFuZ2UnLCdiZWZvcmVzaG93JywnYmVmb3JldG9mcm9udCcsJ2JlZm9yZXRvcGNoYW5nZScsJ2JlZm9yZXdpZHRoY2hhbmdlJywnYmx1cicsJ2JvdHRvbWNoYW5nZScsJ2NlbnRlcmVkY2hhbmdlJywnY29sbGFwc2UnLCdkZWFjdGl2YXRlJywnZGVzdHJveScsJ2Rpc2FibGVkY2hhbmdlJywnZG9ja2VkY2hhbmdlJywnZHJhd2VyaGlkZScsJ2RyYXdlcnNob3cnLCdlcmFzZWQnLCdleHBhbmQnLCdmbG9hdGluZ2NoYW5nZScsJ2ZvY3VzJywnZm9jdXNlbnRlcicsJ2ZvY3VzbGVhdmUnLCdmdWxsc2NyZWVuJywnaGVpZ2h0Y2hhbmdlJywnaGlkZGVuY2hhbmdlJywnaGlkZScsJ2luaXRpYWxpemUnLCdsZWZ0Y2hhbmdlJywnbWF4SGVpZ2h0Y2hhbmdlJywnbWF4V2lkdGhjaGFuZ2UnLCdtaW5IZWlnaHRjaGFuZ2UnLCdtaW5XaWR0aGNoYW5nZScsJ21vdmUnLCdtb3ZlZCcsJ29yaWVudGF0aW9uY2hhbmdlJywncGFpbnRlZCcsJ3Bvc2l0aW9uZWRjaGFuZ2UnLCdyZW1vdmUnLCdyZW1vdmVkJywncmVuZGVyZWRjaGFuZ2UnLCdyZXNpemUnLCdyZXNpemVkcmFnJywncmVzaXplZHJhZ2NhbmNlbCcsJ3Jlc2l6ZWRyYWdlbmQnLCdyZXNpemVkcmFnc3RhcnQnLCdyaWdodGNoYW5nZScsJ3Njcm9sbGFibGVjaGFuZ2UnLCdzaG93JywndG9mcm9udCcsJ3RvcGNoYW5nZScsJ3VwZGF0ZWRhdGEnLCd3aWR0aGNoYW5nZScsXSxcbiAgICAgICAgICAgIHZjXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdkYXRlcGFuZWwnXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG5cblxuLy8gZnVuY3Rpb24gdG9QYXNjYWxDYXNlKHMpIHtcbi8vICAgICByZXR1cm4gcy5tYXRjaCgvW2Etel0rL2dpKVxuLy8gICAgICAgICAubWFwKGZ1bmN0aW9uICh3b3JkKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKClcbi8vICAgICAgICAgfSlcbi8vICAgICAgICAgLmpvaW4oJycpXG4vLyB9XG4vLyB2YXIgcGFzY2FsTmFtZSA9IHRvUGFzY2FsQ2FzZSh0YWdOYW1lKVxuXG4vL3ZhciBldmVudHMgPSAobmV3IEVXQ0RhdGVwYW5lbCgpKS5ldmVudG5hbWVzO1xuLy92YXIgZXZlbnRuYW1lc2FsbCA9IFtdO1xuLy9ldmVudHMuZm9yRWFjaCggKGV2ZW50OiBhbnksIG46IGFueSkgPT4ge1xuLy8gICAgZXZlbnRuYW1lc2FsbC5wdXNoKGV2ZW50Lm5hbWUpXG4vL30pXG4vL2NvbnN0IGRpc3RpbmN0ID0gKHZhbHVlLCBpbmRleCwgc2VsZikgPT4ge1xuLy8gICAgLy9yZXR1cm4gdHJ1ZVxuLy8gICAgcmV0dXJuIHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4O1xuLy99XG4vL3ZhciBldmVudG5hbWVzID0gZXZlbnRuYW1lc2FsbC5maWx0ZXIoZGlzdGluY3QpO1xuIl19