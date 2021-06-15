import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from '../services/auth.service';

@Directive({
  selector: '[appHasAdmin]'
})
export class HasAdminDirective implements OnInit{
  @Input('appHasAdmin') adminRole: boolean;

  constructor(private authService: AuthService, private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

  ngOnInit() {
    this.authService.currentUser.subscribe(_ => {
      if (this.authService.isAdmin()){
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
      else {
        this.viewContainer.clear();
      }
    });
  }
}
