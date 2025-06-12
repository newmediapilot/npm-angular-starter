import { Router } from '@angular/router';
import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[prefetchHover]',
  standalone: true,
})
export class PrefetchHover {
  @Input('prefetchHover') routePath!: string;
  constructor(private router: Router) {}
  @HostListener('mouseenter')
  onHover() {
    this.router.config.forEach((route) => {
      if (route.path === this.routePath && route.loadChildren) {
        this.router.navigateByUrl(`/${this.routePath}`, {
          skipLocationChange: true,
        });
      }
    });
  }
}
