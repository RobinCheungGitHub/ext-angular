import {
  Injectable,
  Host,
  Optional,
  SkipSelf,
  Output,
  OnInit,
  AfterContentInit,
  OnChanges,
  Component,
  ElementRef,
  forwardRef
} from '@angular/core';
import { base } from './base';
export class dataviewMetaData {
  public static XTYPE: string = 'dataview';
  public static PROPERTIES: string[] = [
    'activeChildTabIndex',
    'activeItem',
    'alignSelf',
    'allowFocusingDisabledChildren',
    'alwaysOnTop',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'associatedData',
    'autoDestroy',
    'autoSize',
    'axisLock',
    'bind',
    'bodyCls',
    'border',
    'bottom',
    'cardSwitchAnimation',
    'centered',
    'cls',
    'constrainAlign',
    'contentEl',
    'control',
    'controller',
    'data',
    'defaultFocus',
    'defaultListenerScope',
    'defaults',
    'defaultType',
    'deferEmptyText',
    'deselectOnContainerClick',
    'disabled',
    'disableSelection',
    'displayed',
    'docked',
    'draggable',
    'emptyItemText',
    'emptyState',
    'emptyText',
    'emptyTextDefaults',
    'emptyTextProperty',
    'flex',
    'floated',
    'focusableContainer',
    'focusCls',
    'fullscreen',
    'height',
    'hidden',
    'hideAnimation',
    'hideMode',
    'hideOnMaskTap',
    'html',
    'id',
    'inactiveChildTabIndex',
    'inline',
    'innerCls',
    'instanceCls',
    'itemButtonMode',
    'itemCls',
    'itemId',
    'itemRipple',
    'items',
    'itemsFocusable',
    'itemTpl',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'lastSelected',
    'layout',
    'left',
    'listeners',
    'loadingHeight',
    'loadingText',
    'manageBorders',
    'margin',
    'markDirty',
    'masked',
    'maxHeight',
    'maxWidth',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'name',
    'nameable',
    'nameHolder',
    'padding',
    'plugins',
    'pressedDelay',
    'publishes',
    'record',
    'reference',
    'referenceHolder',
    'relative',
    'renderTo',
    'resetFocusPosition',
    'right',
    'ripple',
    'scrollable',
    'scrollDock',
    'scrollToTopOnRefresh',
    'selectable',
    'selected',
    'selection',
    'session',
    'shadow',
    'shareableName',
    'shim',
    'showAnimation',
    'stateful',
    'statefulDefaults',
    'stateId',
    'store',
    'style',
    'tabIndex',
    'toFrontOnShow',
    'tooltip',
    'top',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'translatable',
    'triggerCtEvent',
    'triggerEvent',
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
  public static EVENTS: any[] = [
{name:'activate',parameters:'newActiveItem,dataview,oldActiveItem'},
{name:'activeItemchange',parameters:'sender,value,oldValue'},
{name:'add',parameters:''},
{name:'added',parameters:'sender,container,index'},
{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
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
{name:'beforestorechange',parameters:'sender,value,oldValue,undefined'},
{name:'beforetofront',parameters:'dataview'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'dataview,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'childdoubletap',parameters:'dataview,location'},
{name:'childlongpress',parameters:'dataview,location'},
{name:'childmouseenter',parameters:'dataview,location'},
{name:'childmouseleave',parameters:'dataview,location'},
{name:'childsingletap',parameters:'dataview,location'},
{name:'childtap',parameters:'dataview,location'},
{name:'childtaphold',parameters:'dataview,location'},
{name:'childtouchcancel',parameters:'dataview,location'},
{name:'childtouchend',parameters:'dataview,location'},
{name:'childtouchmove',parameters:'dataview,location'},
{name:'childtouchstart',parameters:'dataview,location'},
{name:'deactivate',parameters:'oldActiveItem,dataview,newActiveItem'},
{name:'deselect',parameters:'dataview,records'},
{name:'destroy',parameters:''},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'erased',parameters:'sender'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'dataview,event'},
{name:'focusenter',parameters:'dataview,event'},
{name:'focusleave',parameters:'dataview,event'},
{name:'fullscreen',parameters:'sender'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'hide',parameters:'sender'},
{name:'initialize',parameters:'sender'},
{name:'itemdoubletap',parameters:'dataview,index,target,record,e'},
{name:'itemlongpress',parameters:'dataview,index,target,record,e'},
{name:'itemmouseenter',parameters:'dataview,index,target,record,e'},
{name:'itemmouseleave',parameters:'dataview,index,target,record,e'},
{name:'itemsingletap',parameters:'dataview,index,target,record,e'},
{name:'itemswipe',parameters:'dataview,index,target,record,e'},
{name:'itemtap',parameters:'dataview,index,target,record,e'},
{name:'itemtaphold',parameters:'dataview,index,target,record,e'},
{name:'itemtouchcancel',parameters:'dataview,index,target,record,e'},
{name:'itemtouchend',parameters:'dataview,index,target,record,e'},
{name:'itemtouchmove',parameters:'dataview,index,target,record,e'},
{name:'itemtouchstart',parameters:'dataview,index,target,record,e'},
{name:'leftchange',parameters:'sender,value,oldValue'},
{name:'maxHeightchange',parameters:'sender,value,oldValue'},
{name:'maxWidthchange',parameters:'sender,value,oldValue'},
{name:'minHeightchange',parameters:'sender,value,oldValue'},
{name:'minWidthchange',parameters:'sender,value,oldValue'},
{name:'move',parameters:''},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'navigate',parameters:'dataview,to,from'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'refresh',parameters:'dataview'},
{name:'remove',parameters:''},
{name:'removed',parameters:'sender,container,index'},
{name:'renderedchange',parameters:'dataview,item,rendered'},
{name:'resize',parameters:'element,info'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'rowselection',parameters:'view,selection'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'select',parameters:'dataview,selected'},
{name:'selectionchange',parameters:'view,records,selected,selection'},
{name:'show',parameters:'sender'},
{name:'storechange',parameters:'sender,value,oldValue'},
{name:'tofront',parameters:'dataview'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
'activate',
'activeItemchange',
'add',
'added',
'beforeactiveItemchange',
'beforebottomchange',
'beforecenteredchange',
'beforedisabledchange',
'beforedockedchange',
'beforeheightchange',
'beforehiddenchange',
'beforehide',
'beforeleftchange',
'beforemaxHeightchange',
'beforemaxWidthchange',
'beforeminHeightchange',
'beforeminWidthchange',
'beforeorientationchange',
'beforerightchange',
'beforescrollablechange',
'beforeshow',
'beforestorechange',
'beforetofront',
'beforetopchange',
'beforewidthchange',
'blur',
'bottomchange',
'centeredchange',
'childdoubletap',
'childlongpress',
'childmouseenter',
'childmouseleave',
'childsingletap',
'childtap',
'childtaphold',
'childtouchcancel',
'childtouchend',
'childtouchmove',
'childtouchstart',
'deactivate',
'deselect',
'destroy',
'disabledchange',
'dockedchange',
'erased',
'floatingchange',
'focus',
'focusenter',
'focusleave',
'fullscreen',
'heightchange',
'hiddenchange',
'hide',
'initialize',
'itemdoubletap',
'itemlongpress',
'itemmouseenter',
'itemmouseleave',
'itemsingletap',
'itemswipe',
'itemtap',
'itemtaphold',
'itemtouchcancel',
'itemtouchend',
'itemtouchmove',
'itemtouchstart',
'leftchange',
'maxHeightchange',
'maxWidthchange',
'minHeightchange',
'minWidthchange',
'move',
'moved',
'navigate',
'orientationchange',
'painted',
'positionedchange',
'refresh',
'remove',
'removed',
'renderedchange',
'resize',
'rightchange',
'rowselection',
'scrollablechange',
'select',
'selectionchange',
'show',
'storechange',
'tofront',
'topchange',
'updatedata',
'widthchange',
'ready'
];
}
@Component({
  selector: 'dataview', 
  inputs: dataviewMetaData.PROPERTIES,
  outputs: dataviewMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtDataviewComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtDataviewComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(
    eRef:ElementRef, @Host() @Optional() @SkipSelf() public hostComponent : base) {
      super(eRef.nativeElement,dataviewMetaData,hostComponent)
    }
  public ngOnInit() {
    this.baseOnInit(dataviewMetaData)
  }
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    //this['ready'].emit(this)
  }
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}

}