//import EWCTabbar from '../dist/ext-tabbar.component.js';
//inputs: (new EWCTabbar()).properties,
import EWCTabbar from '@sencha/ext-web-components/dist/ext-tabbar.component.js';
import {
    Host,
    Optional,
    SkipSelf,
    Component,
    ElementRef,
    forwardRef,
    ViewContainerRef
  } from '@angular/core';
import { EngBase } from './angularbase';

@Component({
    selector: 'ExtTabbar',
    inputs: ['label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeChildTabIndex','activeItem','activeTab','alignSelf','allowFocusingDisabledChildren','alwaysOnTop','animateIndicator','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoSize','axisLock','bind','bodyCls','border','bottom','cardSwitchAnimation','centered','cls','constrainAlign','contentEl','control','controller','data','defaultButtonUI','defaultFocus','defaultListenerScope','defaults','defaultTabUI','defaultType','disabled','displayed','docked','draggable','undefined','undefined','undefined','flex','floated','focusableContainer','focusCls','fullscreen','height','hidden','hideAnimation','hideMode','hideOnMaskTap','html','id','inactiveChildTabIndex','innerCls','instanceCls','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','left','listeners','manageBorders','margin','masked','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','name','nameable','nameHolder','padding','plugins','publishes','record','reference','referenceHolder','relative','renderTo','resetFocusPosition','right','ripple','scrollable','session','shadow','shareableName','shim','showAnimation','stateful','statefulDefaults','stateId','style','tabIndex','tabRotation','title','toFrontOnShow','tooltip','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','userCls','userSelectable','viewModel','weight','weighted','width','x','xtype','y','zIndex',],
    outputs: ['ready','activate','activeItemchange','activeTabchange','add','added','beforeactiveItemchange','beforeactiveTabchange','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','deactivate','destroy','disabledchange','dockedchange','erased','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','move','moved','orientationchange','painted','positionedchange','remove','removed','renderedchange','resize','rightchange','scrollablechange','show','tabchange','tofront','topchange','updatedata','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtTabbarComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtTabbarComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeChildTabIndex','activeItem','activeTab','alignSelf','allowFocusingDisabledChildren','alwaysOnTop','animateIndicator','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoSize','axisLock','bind','bodyCls','border','bottom','cardSwitchAnimation','centered','cls','constrainAlign','contentEl','control','controller','data','defaultButtonUI','defaultFocus','defaultListenerScope','defaults','defaultTabUI','defaultType','disabled','displayed','docked','draggable','undefined','undefined','undefined','flex','floated','focusableContainer','focusCls','fullscreen','height','hidden','hideAnimation','hideMode','hideOnMaskTap','html','id','inactiveChildTabIndex','innerCls','instanceCls','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','left','listeners','manageBorders','margin','masked','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','name','nameable','nameHolder','padding','plugins','publishes','record','reference','referenceHolder','relative','renderTo','resetFocusPosition','right','ripple','scrollable','session','shadow','shareableName','shim','showAnimation','stateful','statefulDefaults','stateId','style','tabIndex','tabRotation','title','toFrontOnShow','tooltip','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','userCls','userSelectable','viewModel','weight','weighted','width','x','xtype','y','zIndex',],
            (new EWCTabbar()).events,
            ['ready','activate','activeItemchange','activeTabchange','add','added','beforeactiveItemchange','beforeactiveTabchange','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','deactivate','destroy','disabledchange','dockedchange','erased','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','move','moved','orientationchange','painted','positionedchange','remove','removed','renderedchange','resize','rightchange','scrollablechange','show','tabchange','tofront','topchange','updatedata','widthchange',],
            vc
        )
        this.xtype = 'tabbar'
    }

    public ngOnInit() {
        this.baseOnInit()
    }

    public ngAfterViewInit() {
        this.baseAfterViewInit()
    }

    public ngOnChanges(changes) {
        this.baseOnChanges(changes)
    }

    public ngOnDestroy() {
        this.baseOnDestroy()
    }
}


// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)

//var events = (new EWCTabbar()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
