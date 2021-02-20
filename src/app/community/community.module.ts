import icMessage from '!!raw-loader!../../assets/ic-message.svg';
import icThumbsDown from '!!raw-loader!../../assets/ic-thumbs-down.svg';
import icThumbsUp from '!!raw-loader!../../assets/ic-thumbs-up.svg';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { DomSanitizer } from '@angular/platform-browser';
import { CommunityRoutingModule } from './community-routing.module';
import { CommunityComponent } from './community.component';

@NgModule({
  declarations: [CommunityComponent],
  imports: [
    CommonModule,
    CommunityRoutingModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTabsModule
  ]
})
export class CommunityModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('ic_message', sanitizer.bypassSecurityTrustHtml(icMessage));
    iconRegistry.addSvgIconLiteral('ic_thumbs_down', sanitizer.bypassSecurityTrustHtml(icThumbsDown));
    iconRegistry.addSvgIconLiteral('ic_thumbs_up', sanitizer.bypassSecurityTrustHtml(icThumbsUp));
  }
}
