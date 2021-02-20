import icCommunity from '!!raw-loader!../assets/ic-community.svg';
import icHelp from '!!raw-loader!../assets/ic-help.svg';
import icHome from '!!raw-loader!../assets/ic-home.svg';
import icLocalFireDepartment from '!!raw-loader!../assets/ic-local-fire-department.svg';
import icLocalFlorist from '!!raw-loader!../assets/ic-local-florist.svg';
import icLocalPolice from '!!raw-loader!../assets/ic-local-police.svg';
import icNotification from '!!raw-loader!../assets/ic-notification.svg';
import icSearch from '!!raw-loader!../assets/ic-search.svg';
import icStudyPlan from '!!raw-loader!../assets/ic-studyplan.svg';
import icVideo from '!!raw-loader!../assets/ic-video.svg';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('ic_community', sanitizer.bypassSecurityTrustHtml(icCommunity));
    iconRegistry.addSvgIconLiteral('ic_help', sanitizer.bypassSecurityTrustHtml(icHelp));
    iconRegistry.addSvgIconLiteral('ic_home', sanitizer.bypassSecurityTrustHtml(icHome));
    iconRegistry.addSvgIconLiteral('ic_local_fire_department', sanitizer.bypassSecurityTrustHtml(icLocalFireDepartment));
    iconRegistry.addSvgIconLiteral('ic_local_florist', sanitizer.bypassSecurityTrustHtml(icLocalFlorist));
    iconRegistry.addSvgIconLiteral('ic_local_police', sanitizer.bypassSecurityTrustHtml(icLocalPolice));
    iconRegistry.addSvgIconLiteral('ic_notification', sanitizer.bypassSecurityTrustHtml(icNotification));
    iconRegistry.addSvgIconLiteral('ic_search', sanitizer.bypassSecurityTrustHtml(icSearch));
    iconRegistry.addSvgIconLiteral('ic_studyplan', sanitizer.bypassSecurityTrustHtml(icStudyPlan));
    iconRegistry.addSvgIconLiteral('ic_video', sanitizer.bypassSecurityTrustHtml(icVideo));
  }
}
