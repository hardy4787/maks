import { Directive , OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from "../../core/services/auth.service";

@Directive({
  selector: '[appIfAuthenticated]'
})
export class IfAuthenticatedDirective implements OnInit{
  private hasView = false;

  constructor (
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    const isAuthorized = this.authService.isAuthorized();

    if (isAuthorized && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!isAuthorized && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
