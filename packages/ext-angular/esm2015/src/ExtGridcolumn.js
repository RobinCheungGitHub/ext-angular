var ExtGridcolumnComponent_1;
import * as tslib_1 from "tslib";
//import EWCGridcolumn from '../dist/ext-gridcolumn.component.js';
//inputs: (new EWCGridcolumn()).properties,
import EWCGridcolumn from '@sencha/ext-web-components/dist/ext-gridcolumn.component.js';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './angularbase';
let ExtGridcolumnComponent = ExtGridcolumnComponent_1 = class ExtGridcolumnComponent extends EngBase {
    constructor(eRef, hostComponent, vc) {
        super(eRef, hostComponent, ['label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'activeChildTabIndex', 'activeItem', 'align', 'alignSelf', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoDestroy', 'autoSize', 'axisLock', 'bind', 'bodyCls', 'border', 'bottom', 'cardSwitchAnimation', 'cell', 'centered', 'cls', 'columns', 'computedWidth', 'constrainAlign', 'contentEl', 'control', 'controller', 'data', 'dataIndex', 'defaultColumnUI', 'defaultEditor', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultToolWeights', 'defaultType', 'defaultWidth', 'depends', 'disabled', 'displayed', 'docked', 'draggable', 'editable', 'editor', 'editorDefaults', 'undefined', 'undefined', 'undefined', 'exportRenderer', 'exportStyle', 'exportSummaryRenderer', 'filter', 'flex', 'floated', 'focusableContainer', 'focusCls', 'formatter', 'fullscreen', 'groupable', 'grouper', 'groupHeaderTpl', 'height', 'hidden', 'hideable', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'hideShowMenuItem', 'html', 'id', 'ignore', 'ignoreExport', 'inactiveChildTabIndex', 'innerCls', 'instanceCls', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'left', 'listeners', 'locked', 'manageBorders', 'margin', 'masked', 'maxHeight', 'maxWidth', 'menu', 'menuDisabled', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'nameHolder', 'padding', 'plugins', 'publishes', 'record', 'reference', 'referenceHolder', 'relative', 'renderer', 'renderTo', 'reserveScrollbar', 'resetFocusPosition', 'resizable', 'right', 'ripple', 'scope', 'scratchCell', 'scrollable', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'sortable', 'sorter', 'stateful', 'statefulDefaults', 'stateId', 'style', 'summary', 'summaryCell', 'summaryDataIndex', 'summaryFormatter', 'summaryRenderer', 'undefined', 'tabIndex', 'text', 'toFrontOnShow', 'toolDefaults', 'tools', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'verticalOverflow', 'viewModel', 'weight', 'weighted', 'width', 'x', 'xtype', 'y', 'zIndex',], (new EWCGridcolumn()).events, ['ready', 'activate', 'activeItemchange', 'add', 'added', 'beforeactiveItemchange', 'beforebottomchange', 'beforecenteredchange', 'beforedisabledchange', 'beforedockedchange', 'beforeheightchange', 'beforehiddenchange', 'beforehide', 'beforeleftchange', 'beforemaxHeightchange', 'beforemaxWidthchange', 'beforeminHeightchange', 'beforeminWidthchange', 'beforeorientationchange', 'beforerightchange', 'beforescrollablechange', 'beforeshow', 'beforetofront', 'beforetopchange', 'beforewidthchange', 'blur', 'bottomchange', 'centeredchange', 'deactivate', 'destroy', 'disabledchange', 'dockedchange', 'erased', 'floatingchange', 'focus', 'focusenter', 'focusleave', 'fullscreen', 'heightchange', 'hiddenchange', 'hide', 'initialize', 'leftchange', 'maxHeightchange', 'maxWidthchange', 'minHeightchange', 'minWidthchange', 'move', 'moved', 'orientationchange', 'painted', 'positionedchange', 'remove', 'removed', 'renderedchange', 'resize', 'rightchange', 'scrollablechange', 'show', 'tofront', 'topchange', 'updatedata', 'widthchange',], vc);
        this.xtype = 'gridcolumn';
    }
    ngOnInit() {
        this.baseOnInit();
    }
    ngAfterViewInit() {
        this.baseAfterViewInit();
    }
    ngOnChanges(changes) {
        this.baseOnChanges(changes);
    }
    ngOnDestroy() {
        this.baseOnDestroy();
    }
};
ExtGridcolumnComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
    { type: ViewContainerRef }
];
ExtGridcolumnComponent = ExtGridcolumnComponent_1 = tslib_1.__decorate([
    Component({
        selector: 'ExtGridcolumn',
        inputs: ['label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'activeChildTabIndex', 'activeItem', 'align', 'alignSelf', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoDestroy', 'autoSize', 'axisLock', 'bind', 'bodyCls', 'border', 'bottom', 'cardSwitchAnimation', 'cell', 'centered', 'cls', 'columns', 'computedWidth', 'constrainAlign', 'contentEl', 'control', 'controller', 'data', 'dataIndex', 'defaultColumnUI', 'defaultEditor', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultToolWeights', 'defaultType', 'defaultWidth', 'depends', 'disabled', 'displayed', 'docked', 'draggable', 'editable', 'editor', 'editorDefaults', 'undefined', 'undefined', 'undefined', 'exportRenderer', 'exportStyle', 'exportSummaryRenderer', 'filter', 'flex', 'floated', 'focusableContainer', 'focusCls', 'formatter', 'fullscreen', 'groupable', 'grouper', 'groupHeaderTpl', 'height', 'hidden', 'hideable', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'hideShowMenuItem', 'html', 'id', 'ignore', 'ignoreExport', 'inactiveChildTabIndex', 'innerCls', 'instanceCls', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'left', 'listeners', 'locked', 'manageBorders', 'margin', 'masked', 'maxHeight', 'maxWidth', 'menu', 'menuDisabled', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'nameHolder', 'padding', 'plugins', 'publishes', 'record', 'reference', 'referenceHolder', 'relative', 'renderer', 'renderTo', 'reserveScrollbar', 'resetFocusPosition', 'resizable', 'right', 'ripple', 'scope', 'scratchCell', 'scrollable', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'sortable', 'sorter', 'stateful', 'statefulDefaults', 'stateId', 'style', 'summary', 'summaryCell', 'summaryDataIndex', 'summaryFormatter', 'summaryRenderer', 'undefined', 'tabIndex', 'text', 'toFrontOnShow', 'toolDefaults', 'tools', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'verticalOverflow', 'viewModel', 'weight', 'weighted', 'width', 'x', 'xtype', 'y', 'zIndex',],
        outputs: ['ready', 'activate', 'activeItemchange', 'add', 'added', 'beforeactiveItemchange', 'beforebottomchange', 'beforecenteredchange', 'beforedisabledchange', 'beforedockedchange', 'beforeheightchange', 'beforehiddenchange', 'beforehide', 'beforeleftchange', 'beforemaxHeightchange', 'beforemaxWidthchange', 'beforeminHeightchange', 'beforeminWidthchange', 'beforeorientationchange', 'beforerightchange', 'beforescrollablechange', 'beforeshow', 'beforetofront', 'beforetopchange', 'beforewidthchange', 'blur', 'bottomchange', 'centeredchange', 'deactivate', 'destroy', 'disabledchange', 'dockedchange', 'erased', 'floatingchange', 'focus', 'focusenter', 'focusleave', 'fullscreen', 'heightchange', 'hiddenchange', 'hide', 'initialize', 'leftchange', 'maxHeightchange', 'maxWidthchange', 'minHeightchange', 'minWidthchange', 'move', 'moved', 'orientationchange', 'painted', 'positionedchange', 'remove', 'removed', 'renderedchange', 'resize', 'rightchange', 'scrollablechange', 'show', 'tofront', 'topchange', 'updatedata', 'widthchange',],
        providers: [{ provide: EngBase, useExisting: forwardRef(() => ExtGridcolumnComponent_1) }],
        template: '<ng-content></ng-content>'
    }),
    tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf())
], ExtGridcolumnComponent);
export { ExtGridcolumnComponent };
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCGridcolumn()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0R3JpZGNvbHVtbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvRXh0R3JpZGNvbHVtbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtFQUFrRTtBQUNsRSwyQ0FBMkM7QUFDM0MsT0FBTyxhQUFhLE1BQU0sNkRBQTZELENBQUM7QUFDeEYsT0FBTyxFQUNILElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUNSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU3hDLElBQWEsc0JBQXNCLDhCQUFuQyxNQUFhLHNCQUF1QixTQUFRLE9BQU87SUFDL0MsWUFDSSxJQUFnQixFQUNnQixhQUFzQixFQUN0RCxFQUFvQjtRQUVwQixLQUFLLENBQ0QsSUFBSSxFQUNKLGFBQWEsRUFDYixDQUFDLE9BQU8sRUFBQyxhQUFhLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxnQkFBZ0IsRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsa0JBQWtCLEVBQUMsb0JBQW9CLEVBQUMscUJBQXFCLEVBQUMsWUFBWSxFQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsK0JBQStCLEVBQUMsYUFBYSxFQUFDLGdCQUFnQixFQUFDLGlCQUFpQixFQUFDLFdBQVcsRUFBQyxnQkFBZ0IsRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFDLGVBQWUsRUFBQyxnQkFBZ0IsRUFBQyxXQUFXLEVBQUMsU0FBUyxFQUFDLFlBQVksRUFBQyxNQUFNLEVBQUMsV0FBVyxFQUFDLGlCQUFpQixF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a0QiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBFV0NHcmlkY29sdW1uIGZyb20gJy4uL2Rpc3QvZXh0LWdyaWRjb2x1bW4uY29tcG9uZW50LmpzJztcbi8vaW5wdXRzOiAobmV3IEVXQ0dyaWRjb2x1bW4oKSkucHJvcGVydGllcyxcbmltcG9ydCBFV0NHcmlkY29sdW1uIGZyb20gJ0BzZW5jaGEvZXh0LXdlYi1jb21wb25lbnRzL2Rpc3QvZXh0LWdyaWRjb2x1bW4uY29tcG9uZW50LmpzJztcbmltcG9ydCB7XG4gICAgSG9zdCxcbiAgICBPcHRpb25hbCxcbiAgICBTa2lwU2VsZixcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBmb3J3YXJkUmVmLFxuICAgIFZpZXdDb250YWluZXJSZWZcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2FuZ3VsYXJiYXNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdFeHRHcmlkY29sdW1uJyxcbiAgICBpbnB1dHM6IFsnbGFiZWwnLCdmaXRUb1BhcmVudCcsJ3RhYicsJ2NvbmZpZycsJ3BsYXRmb3JtQ29uZmlnJywnZXh0bmFtZScsJ3ZpZXdwb3J0JywnYWxpZ24nLCdwbHVnaW5zJywncmVzcG9uc2l2ZUNvbmZpZycsJ3Jlc3BvbnNpdmVGb3JtdWxhcycsJ2FjdGl2ZUNoaWxkVGFiSW5kZXgnLCdhY3RpdmVJdGVtJywnYWxpZ24nLCdhbGlnblNlbGYnLCdhbGxvd0ZvY3VzaW5nRGlzYWJsZWRDaGlsZHJlbicsJ2Fsd2F5c09uVG9wJywnYXJpYUF0dHJpYnV0ZXMnLCdhcmlhRGVzY3JpYmVkQnknLCdhcmlhTGFiZWwnLCdhcmlhTGFiZWxsZWRCeScsJ2F1dG9EZXN0cm95JywnYXV0b1NpemUnLCdheGlzTG9jaycsJ2JpbmQnLCdib2R5Q2xzJywnYm9yZGVyJywnYm90dG9tJywnY2FyZFN3aXRjaEFuaW1hdGlvbicsJ2NlbGwnLCdjZW50ZXJlZCcsJ2NscycsJ2NvbHVtbnMnLCdjb21wdXRlZFdpZHRoJywnY29uc3RyYWluQWxpZ24nLCdjb250ZW50RWwnLCdjb250cm9sJywnY29udHJvbGxlcicsJ2RhdGEnLCdkYXRhSW5kZXgnLCdkZWZhdWx0Q29sdW1uVUknLCdkZWZhdWx0RWRpdG9yJywnZGVmYXVsdEZvY3VzJywnZGVmYXVsdExpc3RlbmVyU2NvcGUnLCdkZWZhdWx0cycsJ2RlZmF1bHRUb29sV2VpZ2h0cycsJ2RlZmF1bHRUeXBlJywnZGVmYXVsdFdpZHRoJywnZGVwZW5kcycsJ2Rpc2FibGVkJywnZGlzcGxheWVkJywnZG9ja2VkJywnZHJhZ2dhYmxlJywnZWRpdGFibGUnLCdlZGl0b3InLCdlZGl0b3JEZWZhdWx0cycsJ3VuZGVmaW5lZCcsJ3VuZGVmaW5lZCcsJ3VuZGVmaW5lZCcsJ2V4cG9ydFJlbmRlcmVyJywnZXhwb3J0U3R5bGUnLCdleHBvcnRTdW1tYXJ5UmVuZGVyZXInLCdmaWx0ZXInLCdmbGV4JywnZmxvYXRlZCcsJ2ZvY3VzYWJsZUNvbnRhaW5lcicsJ2ZvY3VzQ2xzJywnZm9ybWF0dGVyJywnZnVsbHNjcmVlbicsJ2dyb3VwYWJsZScsJ2dyb3VwZXInLCdncm91cEhlYWRlclRwbCcsJ2hlaWdodCcsJ2hpZGRlbicsJ2hpZGVhYmxlJywnaGlkZUFuaW1hdGlvbicsJ2hpZGVNb2RlJywnaGlkZU9uTWFza1RhcCcsJ2hpZGVTaG93TWVudUl0ZW0nLCdodG1sJywnaWQnLCdpZ25vcmUnLCdpZ25vcmVFeHBvcnQnLCdpbmFjdGl2ZUNoaWxkVGFiSW5kZXgnLCdpbm5lckNscycsJ2luc3RhbmNlQ2xzJywnaXRlbUlkJywnaXRlbXMnLCdrZXlNYXAnLCdrZXlNYXBFbmFibGVkJywna2V5TWFwVGFyZ2V0JywnbGF5b3V0JywnbGVmdCcsJ2xpc3RlbmVycycsJ2xvY2tlZCcsJ21hbmFnZUJvcmRlcnMnLCdtYXJnaW4nLCdtYXNrZWQnLCdtYXhIZWlnaHQnLCdtYXhXaWR0aCcsJ21lbnUnLCdtZW51RGlzYWJsZWQnLCdtaW5IZWlnaHQnLCdtaW5XaWR0aCcsJ21vZGFsJywnbW9kZWxWYWxpZGF0aW9uJywnbmFtZScsJ25hbWVhYmxlJywnbmFtZUhvbGRlcicsJ3BhZGRpbmcnLCdwbHVnaW5zJywncHVibGlzaGVzJywncmVjb3JkJywncmVmZXJlbmNlJywncmVmZXJlbmNlSG9sZGVyJywncmVsYXRpdmUnLCdyZW5kZXJlcicsJ3JlbmRlclRvJywncmVzZXJ2ZVNjcm9sbGJhcicsJ3Jlc2V0Rm9jdXNQb3NpdGlvbicsJ3Jlc2l6YWJsZScsJ3JpZ2h0JywncmlwcGxlJywnc2NvcGUnLCdzY3JhdGNoQ2VsbCcsJ3Njcm9sbGFibGUnLCdzZXNzaW9uJywnc2hhZG93Jywnc2hhcmVhYmxlTmFtZScsJ3NoaW0nLCdzaG93QW5pbWF0aW9uJywnc29ydGFibGUnLCdzb3J0ZXInLCdzdGF0ZWZ1bCcsJ3N0YXRlZnVsRGVmYXVsdHMnLCdzdGF0ZUlkJywnc3R5bGUnLCdzdW1tYXJ5Jywnc3VtbWFyeUNlbGwnLCdzdW1tYXJ5RGF0YUluZGV4Jywnc3VtbWFyeUZvcm1hdHRlcicsJ3N1bW1hcnlSZW5kZXJlcicsJ3VuZGVmaW5lZCcsJ3RhYkluZGV4JywndGV4dCcsJ3RvRnJvbnRPblNob3cnLCd0b29sRGVmYXVsdHMnLCd0b29scycsJ3Rvb2x0aXAnLCd0b3AnLCd0b3VjaEFjdGlvbicsJ3RwbCcsJ3RwbFdyaXRlTW9kZScsJ3RyYW5zbGF0YWJsZScsJ3R3b1dheUJpbmRhYmxlJywndWknLCd1c2VyQ2xzJywndXNlclNlbGVjdGFibGUnLCd2ZXJ0aWNhbE92ZXJmbG93Jywndmlld01vZGVsJywnd2VpZ2h0Jywnd2VpZ2h0ZWQnLCd3aWR0aCcsJ3gnLCd4dHlwZScsJ3knLCd6SW5kZXgnLF0sXG4gICAgb3V0cHV0czogWydyZWFkeScsJ2FjdGl2YXRlJywnYWN0aXZlSXRlbWNoYW5nZScsJ2FkZCcsJ2FkZGVkJywnYmVmb3JlYWN0aXZlSXRlbWNoYW5nZScsJ2JlZm9yZWJvdHRvbWNoYW5nZScsJ2JlZm9yZWNlbnRlcmVkY2hhbmdlJywnYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLCdiZWZvcmVkb2NrZWRjaGFuZ2UnLCdiZWZvcmVoZWlnaHRjaGFuZ2UnLCdiZWZvcmVoaWRkZW5jaGFuZ2UnLCdiZWZvcmVoaWRlJywnYmVmb3JlbGVmdGNoYW5nZScsJ2JlZm9yZW1heEhlaWdodGNoYW5nZScsJ2JlZm9yZW1heFdpZHRoY2hhbmdlJywnYmVmb3JlbWluSGVpZ2h0Y2hhbmdlJywnYmVmb3JlbWluV2lkdGhjaGFuZ2UnLCdiZWZvcmVvcmllbnRhdGlvbmNoYW5nZScsJ2JlZm9yZXJpZ2h0Y2hhbmdlJywnYmVmb3Jlc2Nyb2xsYWJsZWNoYW5nZScsJ2JlZm9yZXNob3cnLCdiZWZvcmV0b2Zyb250JywnYmVmb3JldG9wY2hhbmdlJywnYmVmb3Jld2lkdGhjaGFuZ2UnLCdibHVyJywnYm90dG9tY2hhbmdlJywnY2VudGVyZWRjaGFuZ2UnLCdkZWFjdGl2YXRlJywnZGVzdHJveScsJ2Rpc2FibGVkY2hhbmdlJywnZG9ja2VkY2hhbmdlJywnZXJhc2VkJywnZmxvYXRpbmdjaGFuZ2UnLCdmb2N1cycsJ2ZvY3VzZW50ZXInLCdmb2N1c2xlYXZlJywnZnVsbHNjcmVlbicsJ2hlaWdodGNoYW5nZScsJ2hpZGRlbmNoYW5nZScsJ2hpZGUnLCdpbml0aWFsaXplJywnbGVmdGNoYW5nZScsJ21heEhlaWdodGNoYW5nZScsJ21heFdpZHRoY2hhbmdlJywnbWluSGVpZ2h0Y2hhbmdlJywnbWluV2lkdGhjaGFuZ2UnLCdtb3ZlJywnbW92ZWQnLCdvcmllbnRhdGlvbmNoYW5nZScsJ3BhaW50ZWQnLCdwb3NpdGlvbmVkY2hhbmdlJywncmVtb3ZlJywncmVtb3ZlZCcsJ3JlbmRlcmVkY2hhbmdlJywncmVzaXplJywncmlnaHRjaGFuZ2UnLCdzY3JvbGxhYmxlY2hhbmdlJywnc2hvdycsJ3RvZnJvbnQnLCd0b3BjaGFuZ2UnLCd1cGRhdGVkYXRhJywnd2lkdGhjaGFuZ2UnLF0sXG4gICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dEdyaWRjb2x1bW5Db21wb25lbnQpfV0sXG4gICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRHcmlkY29sdW1uQ29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZSxcbiAgICAgICAgdmM6IFZpZXdDb250YWluZXJSZWZcbiAgICAgICAgKSB7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBbJ2xhYmVsJywnZml0VG9QYXJlbnQnLCd0YWInLCdjb25maWcnLCdwbGF0Zm9ybUNvbmZpZycsJ2V4dG5hbWUnLCd2aWV3cG9ydCcsJ2FsaWduJywncGx1Z2lucycsJ3Jlc3BvbnNpdmVDb25maWcnLCdyZXNwb25zaXZlRm9ybXVsYXMnLCdhY3RpdmVDaGlsZFRhYkluZGV4JywnYWN0aXZlSXRlbScsJ2FsaWduJywnYWxpZ25TZWxmJywnYWxsb3dGb2N1c2luZ0Rpc2FibGVkQ2hpbGRyZW4nLCdhbHdheXNPblRvcCcsJ2FyaWFBdHRyaWJ1dGVzJywnYXJpYURlc2NyaWJlZEJ5JywnYXJpYUxhYmVsJywnYXJpYUxhYmVsbGVkQnknLCdhdXRvRGVzdHJveScsJ2F1dG9TaXplJywnYXhpc0xvY2snLCdiaW5kJywnYm9keUNscycsJ2JvcmRlcicsJ2JvdHRvbScsJ2NhcmRTd2l0Y2hBbmltYXRpb24nLCdjZWxsJywnY2VudGVyZWQnLCdjbHMnLCdjb2x1bW5zJywnY29tcHV0ZWRXaWR0aCcsJ2NvbnN0cmFpbkFsaWduJywnY29udGVudEVsJywnY29udHJvbCcsJ2NvbnRyb2xsZXInLCdkYXRhJywnZGF0YUluZGV4JywnZGVmYXVsdENvbHVtblVJJywnZGVmYXVsdEVkaXRvcicsJ2RlZmF1bHRGb2N1cycsJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJywnZGVmYXVsdHMnLCdkZWZhdWx0VG9vbFdlaWdodHMnLCdkZWZhdWx0VHlwZScsJ2RlZmF1bHRXaWR0aCcsJ2RlcGVuZHMnLCdkaXNhYmxlZCcsJ2Rpc3BsYXllZCcsJ2RvY2tlZCcsJ2RyYWdnYWJsZScsJ2VkaXRhYmxlJywnZWRpdG9yJywnZWRpdG9yRGVmYXVsdHMnLCd1bmRlZmluZWQnLCd1bmRlZmluZWQnLCd1bmRlZmluZWQnLCdleHBvcnRSZW5kZXJlcicsJ2V4cG9ydFN0eWxlJywnZXhwb3J0U3VtbWFyeVJlbmRlcmVyJywnZmlsdGVyJywnZmxleCcsJ2Zsb2F0ZWQnLCdmb2N1c2FibGVDb250YWluZXInLCdmb2N1c0NscycsJ2Zvcm1hdHRlcicsJ2Z1bGxzY3JlZW4nLCdncm91cGFibGUnLCdncm91cGVyJywnZ3JvdXBIZWFkZXJUcGwnLCdoZWlnaHQnLCdoaWRkZW4nLCdoaWRlYWJsZScsJ2hpZGVBbmltYXRpb24nLCdoaWRlTW9kZScsJ2hpZGVPbk1hc2tUYXAnLCdoaWRlU2hvd01lbnVJdGVtJywnaHRtbCcsJ2lkJywnaWdub3JlJywnaWdub3JlRXhwb3J0JywnaW5hY3RpdmVDaGlsZFRhYkluZGV4JywnaW5uZXJDbHMnLCdpbnN0YW5jZUNscycsJ2l0ZW1JZCcsJ2l0ZW1zJywna2V5TWFwJywna2V5TWFwRW5hYmxlZCcsJ2tleU1hcFRhcmdldCcsJ2xheW91dCcsJ2xlZnQnLCdsaXN0ZW5lcnMnLCdsb2NrZWQnLCdtYW5hZ2VCb3JkZXJzJywnbWFyZ2luJywnbWFza2VkJywnbWF4SGVpZ2h0JywnbWF4V2lkdGgnLCdtZW51JywnbWVudURpc2FibGVkJywnbWluSGVpZ2h0JywnbWluV2lkdGgnLCdtb2RhbCcsJ21vZGVsVmFsaWRhdGlvbicsJ25hbWUnLCduYW1lYWJsZScsJ25hbWVIb2xkZXInLCdwYWRkaW5nJywncGx1Z2lucycsJ3B1Ymxpc2hlcycsJ3JlY29yZCcsJ3JlZmVyZW5jZScsJ3JlZmVyZW5jZUhvbGRlcicsJ3JlbGF0aXZlJywncmVuZGVyZXInLCdyZW5kZXJUbycsJ3Jlc2VydmVTY3JvbGxiYXInLCdyZXNldEZvY3VzUG9zaXRpb24nLCdyZXNpemFibGUnLCdyaWdodCcsJ3JpcHBsZScsJ3Njb3BlJywnc2NyYXRjaENlbGwnLCdzY3JvbGxhYmxlJywnc2Vzc2lvbicsJ3NoYWRvdycsJ3NoYXJlYWJsZU5hbWUnLCdzaGltJywnc2hvd0FuaW1hdGlvbicsJ3NvcnRhYmxlJywnc29ydGVyJywnc3RhdGVmdWwnLCdzdGF0ZWZ1bERlZmF1bHRzJywnc3RhdGVJZCcsJ3N0eWxlJywnc3VtbWFyeScsJ3N1bW1hcnlDZWxsJywnc3VtbWFyeURhdGFJbmRleCcsJ3N1bW1hcnlGb3JtYXR0ZXInLCdzdW1tYXJ5UmVuZGVyZXInLCd1bmRlZmluZWQnLCd0YWJJbmRleCcsJ3RleHQnLCd0b0Zyb250T25TaG93JywndG9vbERlZmF1bHRzJywndG9vbHMnLCd0b29sdGlwJywndG9wJywndG91Y2hBY3Rpb24nLCd0cGwnLCd0cGxXcml0ZU1vZGUnLCd0cmFuc2xhdGFibGUnLCd0d29XYXlCaW5kYWJsZScsJ3VpJywndXNlckNscycsJ3VzZXJTZWxlY3RhYmxlJywndmVydGljYWxPdmVyZmxvdycsJ3ZpZXdNb2RlbCcsJ3dlaWdodCcsJ3dlaWdodGVkJywnd2lkdGgnLCd4JywneHR5cGUnLCd5JywnekluZGV4JyxdLFxuICAgICAgICAgICAgKG5ldyBFV0NHcmlkY29sdW1uKCkpLmV2ZW50cyxcbiAgICAgICAgICAgIFsncmVhZHknLCdhY3RpdmF0ZScsJ2FjdGl2ZUl0ZW1jaGFuZ2UnLCdhZGQnLCdhZGRlZCcsJ2JlZm9yZWFjdGl2ZUl0ZW1jaGFuZ2UnLCdiZWZvcmVib3R0b21jaGFuZ2UnLCdiZWZvcmVjZW50ZXJlZGNoYW5nZScsJ2JlZm9yZWRpc2FibGVkY2hhbmdlJywnYmVmb3JlZG9ja2VkY2hhbmdlJywnYmVmb3JlaGVpZ2h0Y2hhbmdlJywnYmVmb3JlaGlkZGVuY2hhbmdlJywnYmVmb3JlaGlkZScsJ2JlZm9yZWxlZnRjaGFuZ2UnLCdiZWZvcmVtYXhIZWlnaHRjaGFuZ2UnLCdiZWZvcmVtYXhXaWR0aGNoYW5nZScsJ2JlZm9yZW1pbkhlaWdodGNoYW5nZScsJ2JlZm9yZW1pbldpZHRoY2hhbmdlJywnYmVmb3Jlb3JpZW50YXRpb25jaGFuZ2UnLCdiZWZvcmVyaWdodGNoYW5nZScsJ2JlZm9yZXNjcm9sbGFibGVjaGFuZ2UnLCdiZWZvcmVzaG93JywnYmVmb3JldG9mcm9udCcsJ2JlZm9yZXRvcGNoYW5nZScsJ2JlZm9yZXdpZHRoY2hhbmdlJywnYmx1cicsJ2JvdHRvbWNoYW5nZScsJ2NlbnRlcmVkY2hhbmdlJywnZGVhY3RpdmF0ZScsJ2Rlc3Ryb3knLCdkaXNhYmxlZGNoYW5nZScsJ2RvY2tlZGNoYW5nZScsJ2VyYXNlZCcsJ2Zsb2F0aW5nY2hhbmdlJywnZm9jdXMnLCdmb2N1c2VudGVyJywnZm9jdXNsZWF2ZScsJ2Z1bGxzY3JlZW4nLCdoZWlnaHRjaGFuZ2UnLCdoaWRkZW5jaGFuZ2UnLCdoaWRlJywnaW5pdGlhbGl6ZScsJ2xlZnRjaGFuZ2UnLCdtYXhIZWlnaHRjaGFuZ2UnLCdtYXhXaWR0aGNoYW5nZScsJ21pbkhlaWdodGNoYW5nZScsJ21pbldpZHRoY2hhbmdlJywnbW92ZScsJ21vdmVkJywnb3JpZW50YXRpb25jaGFuZ2UnLCdwYWludGVkJywncG9zaXRpb25lZGNoYW5nZScsJ3JlbW92ZScsJ3JlbW92ZWQnLCdyZW5kZXJlZGNoYW5nZScsJ3Jlc2l6ZScsJ3JpZ2h0Y2hhbmdlJywnc2Nyb2xsYWJsZWNoYW5nZScsJ3Nob3cnLCd0b2Zyb250JywndG9wY2hhbmdlJywndXBkYXRlZGF0YScsJ3dpZHRoY2hhbmdlJyxdLFxuICAgICAgICAgICAgdmNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ2dyaWRjb2x1bW4nXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG5cblxuLy8gZnVuY3Rpb24gdG9QYXNjYWxDYXNlKHMpIHtcbi8vICAgICByZXR1cm4gcy5tYXRjaCgvW2Etel0rL2dpKVxuLy8gICAgICAgICAubWFwKGZ1bmN0aW9uICh3b3JkKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKClcbi8vICAgICAgICAgfSlcbi8vICAgICAgICAgLmpvaW4oJycpXG4vLyB9XG4vLyB2YXIgcGFzY2FsTmFtZSA9IHRvUGFzY2FsQ2FzZSh0YWdOYW1lKVxuXG4vL3ZhciBldmVudHMgPSAobmV3IEVXQ0dyaWRjb2x1bW4oKSkuZXZlbnRuYW1lcztcbi8vdmFyIGV2ZW50bmFtZXNhbGwgPSBbXTtcbi8vZXZlbnRzLmZvckVhY2goIChldmVudDogYW55LCBuOiBhbnkpID0+IHtcbi8vICAgIGV2ZW50bmFtZXNhbGwucHVzaChldmVudC5uYW1lKVxuLy99KVxuLy9jb25zdCBkaXN0aW5jdCA9ICh2YWx1ZSwgaW5kZXgsIHNlbGYpID0+IHtcbi8vICAgIC8vcmV0dXJuIHRydWVcbi8vICAgIHJldHVybiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpbmRleDtcbi8vfVxuLy92YXIgZXZlbnRuYW1lcyA9IGV2ZW50bmFtZXNhbGwuZmlsdGVyKGRpc3RpbmN0KTtcbiJdfQ==