var ExtTextareafieldComponent_1;
import * as tslib_1 from "tslib";
//import EWCTextareafield from '../dist/ext-textareafield.component.js';
//inputs: (new EWCTextareafield()).properties,
import EWCTextareafield from '@sencha/ext-web-components-modern/dist/ext-textareafield.component.js';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './angularbase';
let ExtTextareafieldComponent = ExtTextareafieldComponent_1 = class ExtTextareafieldComponent extends EngBase {
    constructor(eRef, hostComponent, vc) {
        super(eRef, hostComponent, ['renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'alignSelf', 'alwaysOnTop', 'animateUnderline', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoCapitalize', 'autoComplete', 'autoCorrect', 'autoFitErrors', 'autoHideInputMask', 'axisLock', 'badFormatMessage', 'bind', 'bodyAlign', 'border', 'bottom', 'bubbleDirty', 'centered', 'clearable', 'cls', 'constrainAlign', 'contentEl', 'controller', 'data', 'dataType', 'defaultListenerScope', 'dirty', 'disabled', 'displayed', 'docked', 'draggable', 'editable', 'undefined', 'error', 'errorMessage', 'errorTarget', 'errorTip', 'errorTpl', 'undefined', 'undefined', 'flex', 'floated', 'focusCls', 'fullscreen', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'html', 'id', 'inline', 'undefined', 'inputMask', 'inputType', 'inputValue', 'instanceCls', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'label', 'labelAlign', 'labelCls', 'labelInPlaceholder', 'labelMinWidth', 'labelTextAlign', 'labelWidth', 'labelWrap', 'left', 'listeners', 'margin', 'maxHeight', 'maxLength', 'maxRows', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'padding', 'parseValidator', 'pattern', 'placeholder', 'undefined', 'plugins', 'publishes', 'readOnly', 'record', 'reference', 'relative', 'renderTo', 'required', 'requiredMessage', 'right', 'ripple', 'scrollable', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'sideError', 'stateful', 'statefulDefaults', 'stateId', 'stripCharsRe', 'style', 'tabIndex', 'textAlign', 'tipError', 'titleError', 'toFrontOnShow', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'triggers', 'twoWayBindable', 'ui', 'underError', 'userCls', 'userSelectable', 'validateDisabled', 'validationMessage', 'validators', 'value', 'viewModel', 'weight', 'width', 'x', 'xtype', 'y', 'zIndex',], (new EWCTextareafield()).events, ['ready', 'action', 'added', 'beforebottomchange', 'beforecenteredchange', 'beforedisabledchange', 'beforedockedchange', 'beforeheightchange', 'beforehiddenchange', 'beforehide', 'beforeleftchange', 'beforemaxHeightchange', 'beforemaxWidthchange', 'beforeminHeightchange', 'beforeminWidthchange', 'beforeorientationchange', 'beforerightchange', 'beforescrollablechange', 'beforeshow', 'beforetofront', 'beforetopchange', 'beforewidthchange', 'blur', 'bottomchange', 'centeredchange', 'change', 'clearicontap', 'click', 'destroy', 'dirtychange', 'disabledchange', 'dockedchange', 'erased', 'errorchange', 'floatingchange', 'focus', 'focusenter', 'focusleave', 'fullscreen', 'heightchange', 'hiddenchange', 'hide', 'initialize', 'keydown', 'keyup', 'leftchange', 'maxHeightchange', 'maxWidthchange', 'minHeightchange', 'minWidthchange', 'mousedown', 'moved', 'orientationchange', 'painted', 'paste', 'positionedchange', 'removed', 'resize', 'rightchange', 'scrollablechange', 'show', 'tofront', 'topchange', 'updatedata', 'widthchange',], vc);
        this.xtype = 'textareafield';
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
ExtTextareafieldComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
    { type: ViewContainerRef }
];
ExtTextareafieldComponent = ExtTextareafieldComponent_1 = tslib_1.__decorate([
    Component({
        selector: 'ExtTextareafield',
        inputs: ['renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'alignSelf', 'alwaysOnTop', 'animateUnderline', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoCapitalize', 'autoComplete', 'autoCorrect', 'autoFitErrors', 'autoHideInputMask', 'axisLock', 'badFormatMessage', 'bind', 'bodyAlign', 'border', 'bottom', 'bubbleDirty', 'centered', 'clearable', 'cls', 'constrainAlign', 'contentEl', 'controller', 'data', 'dataType', 'defaultListenerScope', 'dirty', 'disabled', 'displayed', 'docked', 'draggable', 'editable', 'undefined', 'error', 'errorMessage', 'errorTarget', 'errorTip', 'errorTpl', 'undefined', 'undefined', 'flex', 'floated', 'focusCls', 'fullscreen', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'html', 'id', 'inline', 'undefined', 'inputMask', 'inputType', 'inputValue', 'instanceCls', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'label', 'labelAlign', 'labelCls', 'labelInPlaceholder', 'labelMinWidth', 'labelTextAlign', 'labelWidth', 'labelWrap', 'left', 'listeners', 'margin', 'maxHeight', 'maxLength', 'maxRows', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'padding', 'parseValidator', 'pattern', 'placeholder', 'undefined', 'plugins', 'publishes', 'readOnly', 'record', 'reference', 'relative', 'renderTo', 'required', 'requiredMessage', 'right', 'ripple', 'scrollable', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'sideError', 'stateful', 'statefulDefaults', 'stateId', 'stripCharsRe', 'style', 'tabIndex', 'textAlign', 'tipError', 'titleError', 'toFrontOnShow', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'triggers', 'twoWayBindable', 'ui', 'underError', 'userCls', 'userSelectable', 'validateDisabled', 'validationMessage', 'validators', 'value', 'viewModel', 'weight', 'width', 'x', 'xtype', 'y', 'zIndex',],
        outputs: ['ready', 'action', 'added', 'beforebottomchange', 'beforecenteredchange', 'beforedisabledchange', 'beforedockedchange', 'beforeheightchange', 'beforehiddenchange', 'beforehide', 'beforeleftchange', 'beforemaxHeightchange', 'beforemaxWidthchange', 'beforeminHeightchange', 'beforeminWidthchange', 'beforeorientationchange', 'beforerightchange', 'beforescrollablechange', 'beforeshow', 'beforetofront', 'beforetopchange', 'beforewidthchange', 'blur', 'bottomchange', 'centeredchange', 'change', 'clearicontap', 'click', 'destroy', 'dirtychange', 'disabledchange', 'dockedchange', 'erased', 'errorchange', 'floatingchange', 'focus', 'focusenter', 'focusleave', 'fullscreen', 'heightchange', 'hiddenchange', 'hide', 'initialize', 'keydown', 'keyup', 'leftchange', 'maxHeightchange', 'maxWidthchange', 'minHeightchange', 'minWidthchange', 'mousedown', 'moved', 'orientationchange', 'painted', 'paste', 'positionedchange', 'removed', 'resize', 'rightchange', 'scrollablechange', 'show', 'tofront', 'topchange', 'updatedata', 'widthchange',],
        providers: [{ provide: EngBase, useExisting: forwardRef(() => ExtTextareafieldComponent_1) }],
        template: '<ng-content></ng-content>'
    }),
    tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf())
], ExtTextareafieldComponent);
export { ExtTextareafieldComponent };
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCTextareafield()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0VGV4dGFyZWFmaWVsZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItbW9kZXJuLyIsInNvdXJjZXMiOlsic3JjL0V4dFRleHRhcmVhZmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3RUFBd0U7QUFDeEUsOENBQThDO0FBQzlDLE9BQU8sZ0JBQWdCLE1BQU0sdUVBQXVFLENBQUM7QUFDckcsT0FBTyxFQUNILElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUNSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU3hDLElBQWEseUJBQXlCLGlDQUF0QyxNQUFhLHlCQUEwQixTQUFRLE9BQU87SUFDbEQsWUFDSSxJQUFnQixFQUNnQixhQUFzQixFQUN0RCxFQUFvQjtRQUVwQixLQUFLLENBQ0QsSUFBSSxFQUNKLGFBQWEsRUFDYixDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUMsYUFBYSxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsZ0JBQWdCLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLGtCQUFrQixFQUFDLG9CQUFvQixFQUFDLFdBQVcsRUFBQyxhQUFhLEVBQUMsa0JBQWtCLEVBQUMsZ0JBQWdCLEVBQUMsaUJBQWlCLEVBQUMsV0FBVyxFQUFDLGdCQUFnQixFQUFDLGdCQUFnQixFQUFDLGNBQWMsRUFBQyxhQUFhLEVBQUMsZUFBZSxFQUFDLG1CQUFtQixFQUFDLFVBQVUsRUFBQyxrQkFBa0IsRUFBQyxNQUFNLEVBQUMsV0FBVyxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsYUFBYSxFQUFDLFVBQVUsRUFBQyxXQUFXLEVBQUMsS0FBSyxFQUFDLGdCQUFnQixFQUFDLFdBQVcsRUFBQyxZQUFZLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxz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LEVBQUMsbUJBQW1CLEVBQUMsU0FBUyxFQUFDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLGFBQWEsRUFBQyxrQkFBa0IsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBQyxZQUFZLEVBQUMsYUFBYSxFQUFFO1FBQ3A5QixTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQywyQkFBeUIsQ0FBQyxFQUFDLENBQUM7UUFDekYsUUFBUSxFQUFFLDJCQUEyQjtLQUN4QyxDQUFDO0lBSU8sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO0dBSDFCLHlCQUF5QixDQWdDckM7U0FoQ1kseUJBQXlCO0FBbUN0Qyw2QkFBNkI7QUFDN0IsaUNBQWlDO0FBQ2pDLGlDQUFpQztBQUNqQyxpRkFBaUY7QUFDakYsYUFBYTtBQUNiLG9CQUFvQjtBQUNwQixJQUFJO0FBQ0oseUNBQXlDO0FBRXpDLG1EQUFtRDtBQUNuRCx5QkFBeUI7QUFDekIsMkNBQTJDO0FBQzNDLG9DQUFvQztBQUNwQyxJQUFJO0FBQ0osNENBQTRDO0FBQzVDLG1CQUFtQjtBQUNuQiwyQ0FBMkM7QUFDM0MsR0FBRztBQUNILGtEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IEVXQ1RleHRhcmVhZmllbGQgZnJvbSAnLi4vZGlzdC9leHQtdGV4dGFyZWFmaWVsZC5jb21wb25lbnQuanMnO1xuLy9pbnB1dHM6IChuZXcgRVdDVGV4dGFyZWFmaWVsZCgpKS5wcm9wZXJ0aWVzLFxuaW1wb3J0IEVXQ1RleHRhcmVhZmllbGQgZnJvbSAnQHNlbmNoYS9leHQtd2ViLWNvbXBvbmVudHMtbW9kZXJuL2Rpc3QvZXh0LXRleHRhcmVhZmllbGQuY29tcG9uZW50LmpzJztcbmltcG9ydCB7XG4gICAgSG9zdCxcbiAgICBPcHRpb25hbCxcbiAgICBTa2lwU2VsZixcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBmb3J3YXJkUmVmLFxuICAgIFZpZXdDb250YWluZXJSZWZcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2FuZ3VsYXJiYXNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdFeHRUZXh0YXJlYWZpZWxkJyxcbiAgICBpbnB1dHM6IFsncmVuZGVyZXInLCAnbGFiZWwnLCdmaXRUb1BhcmVudCcsJ3RhYicsJ2NvbmZpZycsJ3BsYXRmb3JtQ29uZmlnJywnZXh0bmFtZScsJ3ZpZXdwb3J0JywnYWxpZ24nLCdwbHVnaW5zJywncmVzcG9uc2l2ZUNvbmZpZycsJ3Jlc3BvbnNpdmVGb3JtdWxhcycsJ2FsaWduU2VsZicsJ2Fsd2F5c09uVG9wJywnYW5pbWF0ZVVuZGVybGluZScsJ2FyaWFBdHRyaWJ1dGVzJywnYXJpYURlc2NyaWJlZEJ5JywnYXJpYUxhYmVsJywnYXJpYUxhYmVsbGVkQnknLCdhdXRvQ2FwaXRhbGl6ZScsJ2F1dG9Db21wbGV0ZScsJ2F1dG9Db3JyZWN0JywnYXV0b0ZpdEVycm9ycycsJ2F1dG9IaWRlSW5wdXRNYXNrJywnYXhpc0xvY2snLCdiYWRGb3JtYXRNZXNzYWdlJywnYmluZCcsJ2JvZHlBbGlnbicsJ2JvcmRlcicsJ2JvdHRvbScsJ2J1YmJsZURpcnR5JywnY2VudGVyZWQnLCdjbGVhcmFibGUnLCdjbHMnLCdjb25zdHJhaW5BbGlnbicsJ2NvbnRlbnRFbCcsJ2NvbnRyb2xsZXInLCdkYXRhJywnZGF0YVR5cGUnLCdkZWZhdWx0TGlzdGVuZXJTY29wZScsJ2RpcnR5JywnZGlzYWJsZWQnLCdkaXNwbGF5ZWQnLCdkb2NrZWQnLCdkcmFnZ2FibGUnLCdlZGl0YWJsZScsJ3VuZGVmaW5lZCcsJ2Vycm9yJywnZXJyb3JNZXNzYWdlJywnZXJyb3JUYXJnZXQnLCdlcnJvclRpcCcsJ2Vycm9yVHBsJywndW5kZWZpbmVkJywndW5kZWZpbmVkJywnZmxleCcsJ2Zsb2F0ZWQnLCdmb2N1c0NscycsJ2Z1bGxzY3JlZW4nLCdoZWlnaHQnLCdoaWRkZW4nLCdoaWRlQW5pbWF0aW9uJywnaGlkZU1vZGUnLCdoaWRlT25NYXNrVGFwJywnaHRtbCcsJ2lkJywnaW5saW5lJywndW5kZWZpbmVkJywnaW5wdXRNYXNrJywnaW5wdXRUeXBlJywnaW5wdXRWYWx1ZScsJ2luc3RhbmNlQ2xzJywnaXRlbUlkJywna2V5TWFwJywna2V5TWFwRW5hYmxlZCcsJ2tleU1hcFRhcmdldCcsJ2xhYmVsJywnbGFiZWxBbGlnbicsJ2xhYmVsQ2xzJywnbGFiZWxJblBsYWNlaG9sZGVyJywnbGFiZWxNaW5XaWR0aCcsJ2xhYmVsVGV4dEFsaWduJywnbGFiZWxXaWR0aCcsJ2xhYmVsV3JhcCcsJ2xlZnQnLCdsaXN0ZW5lcnMnLCdtYXJnaW4nLCdtYXhIZWlnaHQnLCdtYXhMZW5ndGgnLCdtYXhSb3dzJywnbWF4V2lkdGgnLCdtaW5IZWlnaHQnLCdtaW5XaWR0aCcsJ21vZGFsJywnbW9kZWxWYWxpZGF0aW9uJywnbmFtZScsJ25hbWVhYmxlJywncGFkZGluZycsJ3BhcnNlVmFsaWRhdG9yJywncGF0dGVybicsJ3BsYWNlaG9sZGVyJywndW5kZWZpbmVkJywncGx1Z2lucycsJ3B1Ymxpc2hlcycsJ3JlYWRPbmx5JywncmVjb3JkJywncmVmZXJlbmNlJywncmVsYXRpdmUnLCdyZW5kZXJUbycsJ3JlcXVpcmVkJywncmVxdWlyZWRNZXNzYWdlJywncmlnaHQnLCdyaXBwbGUnLCdzY3JvbGxhYmxlJywnc2Vzc2lvbicsJ3NoYWRvdycsJ3NoYXJlYWJsZU5hbWUnLCdzaGltJywnc2hvd0FuaW1hdGlvbicsJ3NpZGVFcnJvcicsJ3N0YXRlZnVsJywnc3RhdGVmdWxEZWZhdWx0cycsJ3N0YXRlSWQnLCdzdHJpcENoYXJzUmUnLCdzdHlsZScsJ3RhYkluZGV4JywndGV4dEFsaWduJywndGlwRXJyb3InLCd0aXRsZUVycm9yJywndG9Gcm9udE9uU2hvdycsJ3Rvb2x0aXAnLCd0b3AnLCd0b3VjaEFjdGlvbicsJ3RwbCcsJ3RwbFdyaXRlTW9kZScsJ3RyYW5zbGF0YWJsZScsJ3RyaWdnZXJzJywndHdvV2F5QmluZGFibGUnLCd1aScsJ3VuZGVyRXJyb3InLCd1c2VyQ2xzJywndXNlclNlbGVjdGFibGUnLCd2YWxpZGF0ZURpc2FibGVkJywndmFsaWRhdGlvbk1lc3NhZ2UnLCd2YWxpZGF0b3JzJywndmFsdWUnLCd2aWV3TW9kZWwnLCd3ZWlnaHQnLCd3aWR0aCcsJ3gnLCd4dHlwZScsJ3knLCd6SW5kZXgnLF0sXG4gICAgb3V0cHV0czogWydyZWFkeScsJ2FjdGlvbicsJ2FkZGVkJywnYmVmb3JlYm90dG9tY2hhbmdlJywnYmVmb3JlY2VudGVyZWRjaGFuZ2UnLCdiZWZvcmVkaXNhYmxlZGNoYW5nZScsJ2JlZm9yZWRvY2tlZGNoYW5nZScsJ2JlZm9yZWhlaWdodGNoYW5nZScsJ2JlZm9yZWhpZGRlbmNoYW5nZScsJ2JlZm9yZWhpZGUnLCdiZWZvcmVsZWZ0Y2hhbmdlJywnYmVmb3JlbWF4SGVpZ2h0Y2hhbmdlJywnYmVmb3JlbWF4V2lkdGhjaGFuZ2UnLCdiZWZvcmVtaW5IZWlnaHRjaGFuZ2UnLCdiZWZvcmVtaW5XaWR0aGNoYW5nZScsJ2JlZm9yZW9yaWVudGF0aW9uY2hhbmdlJywnYmVmb3JlcmlnaHRjaGFuZ2UnLCdiZWZvcmVzY3JvbGxhYmxlY2hhbmdlJywnYmVmb3Jlc2hvdycsJ2JlZm9yZXRvZnJvbnQnLCdiZWZvcmV0b3BjaGFuZ2UnLCdiZWZvcmV3aWR0aGNoYW5nZScsJ2JsdXInLCdib3R0b21jaGFuZ2UnLCdjZW50ZXJlZGNoYW5nZScsJ2NoYW5nZScsJ2NsZWFyaWNvbnRhcCcsJ2NsaWNrJywnZGVzdHJveScsJ2RpcnR5Y2hhbmdlJywnZGlzYWJsZWRjaGFuZ2UnLCdkb2NrZWRjaGFuZ2UnLCdlcmFzZWQnLCdlcnJvcmNoYW5nZScsJ2Zsb2F0aW5nY2hhbmdlJywnZm9jdXMnLCdmb2N1c2VudGVyJywnZm9jdXNsZWF2ZScsJ2Z1bGxzY3JlZW4nLCdoZWlnaHRjaGFuZ2UnLCdoaWRkZW5jaGFuZ2UnLCdoaWRlJywnaW5pdGlhbGl6ZScsJ2tleWRvd24nLCdrZXl1cCcsJ2xlZnRjaGFuZ2UnLCdtYXhIZWlnaHRjaGFuZ2UnLCdtYXhXaWR0aGNoYW5nZScsJ21pbkhlaWdodGNoYW5nZScsJ21pbldpZHRoY2hhbmdlJywnbW91c2Vkb3duJywnbW92ZWQnLCdvcmllbnRhdGlvbmNoYW5nZScsJ3BhaW50ZWQnLCdwYXN0ZScsJ3Bvc2l0aW9uZWRjaGFuZ2UnLCdyZW1vdmVkJywncmVzaXplJywncmlnaHRjaGFuZ2UnLCdzY3JvbGxhYmxlY2hhbmdlJywnc2hvdycsJ3RvZnJvbnQnLCd0b3BjaGFuZ2UnLCd1cGRhdGVkYXRhJywnd2lkdGhjaGFuZ2UnLF0sXG4gICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dFRleHRhcmVhZmllbGRDb21wb25lbnQpfV0sXG4gICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRUZXh0YXJlYWZpZWxkQ29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZSxcbiAgICAgICAgdmM6IFZpZXdDb250YWluZXJSZWZcbiAgICAgICAgKSB7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBbJ3JlbmRlcmVyJywgJ2xhYmVsJywnZml0VG9QYXJlbnQnLCd0YWInLCdjb25maWcnLCdwbGF0Zm9ybUNvbmZpZycsJ2V4dG5hbWUnLCd2aWV3cG9ydCcsJ2FsaWduJywncGx1Z2lucycsJ3Jlc3BvbnNpdmVDb25maWcnLCdyZXNwb25zaXZlRm9ybXVsYXMnLCdhbGlnblNlbGYnLCdhbHdheXNPblRvcCcsJ2FuaW1hdGVVbmRlcmxpbmUnLCdhcmlhQXR0cmlidXRlcycsJ2FyaWFEZXNjcmliZWRCeScsJ2FyaWFMYWJlbCcsJ2FyaWFMYWJlbGxlZEJ5JywnYXV0b0NhcGl0YWxpemUnLCdhdXRvQ29tcGxldGUnLCdhdXRvQ29ycmVjdCcsJ2F1dG9GaXRFcnJvcnMnLCdhdXRvSGlkZUlucHV0TWFzaycsJ2F4aXNMb2NrJywnYmFkRm9ybWF0TWVzc2FnZScsJ2JpbmQnLCdib2R5QWxpZ24nLCdib3JkZXInLCdib3R0b20nLCdidWJibGVEaXJ0eScsJ2NlbnRlcmVkJywnY2xlYXJhYmxlJywnY2xzJywnY29uc3RyYWluQWxpZ24nLCdjb250ZW50RWwnLCdjb250cm9sbGVyJywnZGF0YScsJ2RhdGFUeXBlJywnZGVmYXVsdExpc3RlbmVyU2NvcGUnLCdkaXJ0eScsJ2Rpc2FibGVkJywnZGlzcGxheWVkJywnZG9ja2VkJywnZHJhZ2dhYmxlJywnZWRpdGFibGUnLCd1bmRlZmluZWQnLCdlcnJvcicsJ2Vycm9yTWVzc2FnZScsJ2Vycm9yVGFyZ2V0JywnZXJyb3JUaXAnLCdlcnJvclRwbCcsJ3VuZGVmaW5lZCcsJ3VuZGVmaW5lZCcsJ2ZsZXgnLCdmbG9hdGVkJywnZm9jdXNDbHMnLCdmdWxsc2NyZWVuJywnaGVpZ2h0JywnaGlkZGVuJywnaGlkZUFuaW1hdGlvbicsJ2hpZGVNb2RlJywnaGlkZU9uTWFza1RhcCcsJ2h0bWwnLCdpZCcsJ2lubGluZScsJ3VuZGVmaW5lZCcsJ2lucHV0TWFzaycsJ2lucHV0VHlwZScsJ2lucHV0VmFsdWUnLCdpbnN0YW5jZUNscycsJ2l0ZW1JZCcsJ2tleU1hcCcsJ2tleU1hcEVuYWJsZWQnLCdrZXlNYXBUYXJnZXQnLCdsYWJlbCcsJ2xhYmVsQWxpZ24nLCdsYWJlbENscycsJ2xhYmVsSW5QbGFjZWhvbGRlcicsJ2xhYmVsTWluV2lkdGgnLCdsYWJlbFRleHRBbGlnbicsJ2xhYmVsV2lkdGgnLCdsYWJlbFdyYXAnLCdsZWZ0JywnbGlzdGVuZXJzJywnbWFyZ2luJywnbWF4SGVpZ2h0JywnbWF4TGVuZ3RoJywnbWF4Um93cycsJ21heFdpZHRoJywnbWluSGVpZ2h0JywnbWluV2lkdGgnLCdtb2RhbCcsJ21vZGVsVmFsaWRhdGlvbicsJ25hbWUnLCduYW1lYWJsZScsJ3BhZGRpbmcnLCdwYXJzZVZhbGlkYXRvcicsJ3BhdHRlcm4nLCdwbGFjZWhvbGRlcicsJ3VuZGVmaW5lZCcsJ3BsdWdpbnMnLCdwdWJsaXNoZXMnLCdyZWFkT25seScsJ3JlY29yZCcsJ3JlZmVyZW5jZScsJ3JlbGF0aXZlJywncmVuZGVyVG8nLCdyZXF1aXJlZCcsJ3JlcXVpcmVkTWVzc2FnZScsJ3JpZ2h0JywncmlwcGxlJywnc2Nyb2xsYWJsZScsJ3Nlc3Npb24nLCdzaGFkb3cnLCdzaGFyZWFibGVOYW1lJywnc2hpbScsJ3Nob3dBbmltYXRpb24nLCdzaWRlRXJyb3InLCdzdGF0ZWZ1bCcsJ3N0YXRlZnVsRGVmYXVsdHMnLCdzdGF0ZUlkJywnc3RyaXBDaGFyc1JlJywnc3R5bGUnLCd0YWJJbmRleCcsJ3RleHRBbGlnbicsJ3RpcEVycm9yJywndGl0bGVFcnJvcicsJ3RvRnJvbnRPblNob3cnLCd0b29sdGlwJywndG9wJywndG91Y2hBY3Rpb24nLCd0cGwnLCd0cGxXcml0ZU1vZGUnLCd0cmFuc2xhdGFibGUnLCd0cmlnZ2VycycsJ3R3b1dheUJpbmRhYmxlJywndWknLCd1bmRlckVycm9yJywndXNlckNscycsJ3VzZXJTZWxlY3RhYmxlJywndmFsaWRhdGVEaXNhYmxlZCcsJ3ZhbGlkYXRpb25NZXNzYWdlJywndmFsaWRhdG9ycycsJ3ZhbHVlJywndmlld01vZGVsJywnd2VpZ2h0Jywnd2lkdGgnLCd4JywneHR5cGUnLCd5JywnekluZGV4JyxdLFxuICAgICAgICAgICAgKG5ldyBFV0NUZXh0YXJlYWZpZWxkKCkpLmV2ZW50cyxcbiAgICAgICAgICAgIFsncmVhZHknLCdhY3Rpb24nLCdhZGRlZCcsJ2JlZm9yZWJvdHRvbWNoYW5nZScsJ2JlZm9yZWNlbnRlcmVkY2hhbmdlJywnYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLCdiZWZvcmVkb2NrZWRjaGFuZ2UnLCdiZWZvcmVoZWlnaHRjaGFuZ2UnLCdiZWZvcmVoaWRkZW5jaGFuZ2UnLCdiZWZvcmVoaWRlJywnYmVmb3JlbGVmdGNoYW5nZScsJ2JlZm9yZW1heEhlaWdodGNoYW5nZScsJ2JlZm9yZW1heFdpZHRoY2hhbmdlJywnYmVmb3JlbWluSGVpZ2h0Y2hhbmdlJywnYmVmb3JlbWluV2lkdGhjaGFuZ2UnLCdiZWZvcmVvcmllbnRhdGlvbmNoYW5nZScsJ2JlZm9yZXJpZ2h0Y2hhbmdlJywnYmVmb3Jlc2Nyb2xsYWJsZWNoYW5nZScsJ2JlZm9yZXNob3cnLCdiZWZvcmV0b2Zyb250JywnYmVmb3JldG9wY2hhbmdlJywnYmVmb3Jld2lkdGhjaGFuZ2UnLCdibHVyJywnYm90dG9tY2hhbmdlJywnY2VudGVyZWRjaGFuZ2UnLCdjaGFuZ2UnLCdjbGVhcmljb250YXAnLCdjbGljaycsJ2Rlc3Ryb3knLCdkaXJ0eWNoYW5nZScsJ2Rpc2FibGVkY2hhbmdlJywnZG9ja2VkY2hhbmdlJywnZXJhc2VkJywnZXJyb3JjaGFuZ2UnLCdmbG9hdGluZ2NoYW5nZScsJ2ZvY3VzJywnZm9jdXNlbnRlcicsJ2ZvY3VzbGVhdmUnLCdmdWxsc2NyZWVuJywnaGVpZ2h0Y2hhbmdlJywnaGlkZGVuY2hhbmdlJywnaGlkZScsJ2luaXRpYWxpemUnLCdrZXlkb3duJywna2V5dXAnLCdsZWZ0Y2hhbmdlJywnbWF4SGVpZ2h0Y2hhbmdlJywnbWF4V2lkdGhjaGFuZ2UnLCdtaW5IZWlnaHRjaGFuZ2UnLCdtaW5XaWR0aGNoYW5nZScsJ21vdXNlZG93bicsJ21vdmVkJywnb3JpZW50YXRpb25jaGFuZ2UnLCdwYWludGVkJywncGFzdGUnLCdwb3NpdGlvbmVkY2hhbmdlJywncmVtb3ZlZCcsJ3Jlc2l6ZScsJ3JpZ2h0Y2hhbmdlJywnc2Nyb2xsYWJsZWNoYW5nZScsJ3Nob3cnLCd0b2Zyb250JywndG9wY2hhbmdlJywndXBkYXRlZGF0YScsJ3dpZHRoY2hhbmdlJyxdLFxuICAgICAgICAgICAgdmNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ3RleHRhcmVhZmllbGQnXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG5cblxuLy8gZnVuY3Rpb24gdG9QYXNjYWxDYXNlKHMpIHtcbi8vICAgICByZXR1cm4gcy5tYXRjaCgvW2Etel0rL2dpKVxuLy8gICAgICAgICAubWFwKGZ1bmN0aW9uICh3b3JkKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKClcbi8vICAgICAgICAgfSlcbi8vICAgICAgICAgLmpvaW4oJycpXG4vLyB9XG4vLyB2YXIgcGFzY2FsTmFtZSA9IHRvUGFzY2FsQ2FzZSh0YWdOYW1lKVxuXG4vL3ZhciBldmVudHMgPSAobmV3IEVXQ1RleHRhcmVhZmllbGQoKSkuZXZlbnRuYW1lcztcbi8vdmFyIGV2ZW50bmFtZXNhbGwgPSBbXTtcbi8vZXZlbnRzLmZvckVhY2goIChldmVudDogYW55LCBuOiBhbnkpID0+IHtcbi8vICAgIGV2ZW50bmFtZXNhbGwucHVzaChldmVudC5uYW1lKVxuLy99KVxuLy9jb25zdCBkaXN0aW5jdCA9ICh2YWx1ZSwgaW5kZXgsIHNlbGYpID0+IHtcbi8vICAgIC8vcmV0dXJuIHRydWVcbi8vICAgIHJldHVybiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpbmRleDtcbi8vfVxuLy92YXIgZXZlbnRuYW1lcyA9IGV2ZW50bmFtZXNhbGwuZmlsdGVyKGRpc3RpbmN0KTtcbiJdfQ==