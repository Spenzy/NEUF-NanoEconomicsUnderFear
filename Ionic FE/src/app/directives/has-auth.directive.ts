import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from '../services/auth.service';

@Directive({
  selector: '[appHasAuth]'
})
export class HasAuthDirective implements OnInit{
  @Input('appHasAuth') adminRole: boolean;

  constructor(private authService: AuthService, private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

  ngOnInit() {
    this.authService.currentUser.subscribe(_ => {
      if (this.authService.isLogged()){
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
      else {
        this.viewContainer.clear();
      }
    });
  }
}
