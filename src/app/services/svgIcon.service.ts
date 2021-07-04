// Using this Service , custom images which are not provided by Angular Material, can be used as mat-icon , SYNTAX : <mat-icon svgIcon='CUSTOM_ICON_NAME'></mat-icon>
// For this service to work, register & make a reference of it in the constructor() of /src/app.component.ts to make it available app-wide
// Then call the icons app-wide only with it's name (Ex - honeycomb) ; no need to make a reference of it in it's constructor()
// <fa-icon [icon]="ICON_NAME"></fa-icon>

// npm install @fortawesome/angular-fontawesome@0.5.0 --save

import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';


@Injectable({
    providedIn: 'root'
})

export class SvgIconService
{
    private CUSTOM_SVG_PATH = `${environment.iconsPath}` + 'icons/';

    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer)
    {
        console.log('Custom Icon service');  // to check if the code is being executed
        console.log('CUSTOM_SVG_PATH = ' + this.CUSTOM_SVG_PATH);

        iconRegistry.addSvgIcon('honeycomb', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'honeycomb.svg'));
        iconRegistry.addSvgIcon('mdntracer', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH +  'flow.svg'));
        iconRegistry.addSvgIcon('user-management', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'user-management.svg'));
        iconRegistry.addSvgIcon('config-management', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'config-management.svg'));
        iconRegistry.addSvgIcon('double-right-arrow', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'double-right-arrow.svg'));
        iconRegistry.addSvgIcon('double-left-arrow', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'double-left-arrow.svg'));
        iconRegistry.addSvgIcon('single-user-login', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'user.svg'));
        iconRegistry.addSvgIcon('system-operation', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'system-operation.svg'));
        iconRegistry.addSvgIcon('export-doc', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'export-doc.svg'));
        iconRegistry.addSvgIcon('csd', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'csd.svg'));
        iconRegistry.addSvgIcon('mcc', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'mcc.svg'));
        iconRegistry.addSvgIcon('up-filled-arrow', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'up-filled-arrow.svg'));
        iconRegistry.addSvgIcon('down-filled-arrow', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'down-filled-arrow.svg'));
        iconRegistry.addSvgIcon('left-filled-arrow', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'left-filled-arrow.svg'));
        iconRegistry.addSvgIcon('right-filled-arrow', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'right-filled-arrow.svg'));
        iconRegistry.addSvgIcon('left-outlined-arrow', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'left-outlined-arrow.svg'));
        iconRegistry.addSvgIcon('plus', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'plus.svg'));
        iconRegistry.addSvgIcon('trash', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'trash.svg'));
        iconRegistry.addSvgIcon('block', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'block.svg'));
        iconRegistry.addSvgIcon('info', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'info.svg'));
        iconRegistry.addSvgIcon('warning', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'warning.svg'));
        iconRegistry.addSvgIcon('exclamation', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'exclamation.svg'));
        iconRegistry.addSvgIcon('calendar', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'calendar.svg'));
        iconRegistry.addSvgIcon('filter', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'filter-solid.svg'));
        iconRegistry.addSvgIcon('table', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'table-solid.svg'));
        iconRegistry.addSvgIcon('report', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'report.svg'));
        iconRegistry.addSvgIcon('plus-solid', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'plus-solid.svg'));
        iconRegistry.addSvgIcon('plus-circle-solid', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'plus-circle-solid.svg'));
        iconRegistry.addSvgIcon('bar-graph', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'bar-graph.svg'));
        iconRegistry.addSvgIcon('alarm-clock', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'alarm-clock.svg'));
        iconRegistry.addSvgIcon('bell-solid', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'bell-solid.svg'));
        iconRegistry.addSvgIcon('clipboard-solid', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'clipboard-solid.svg'));
        iconRegistry.addSvgIcon('edit-solid', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'edit-solid.svg'));
        iconRegistry.addSvgIcon('file-export-solid', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'file-export-solid.svg'));
        iconRegistry.addSvgIcon('sync-alt-solid', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'sync-alt-solid.svg'));
        iconRegistry.addSvgIcon('upload-solid', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'upload-solid.svg'));
        iconRegistry.addSvgIcon('json-file', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'json-file.svg'));
        iconRegistry.addSvgIcon('download-solid', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'download-solid.svg'));
        iconRegistry.addSvgIcon('full-screen', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'full-screen.svg'));
        iconRegistry.addSvgIcon('kafka', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'kafka.svg'));
        iconRegistry.addSvgIcon('envelope-open-solid', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'envelope-open-solid.svg'));
        iconRegistry.addSvgIcon('envelope-solid', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'envelope-solid.svg'));
        iconRegistry.addSvgIcon('envelope-open-text-solid', sanitizer.bypassSecurityTrustResourceUrl(this.CUSTOM_SVG_PATH + 'envelope-open-text-solid.svg'));

    }

}
