import { Component, EventEmitter, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Output() public sidenavToggle = new EventEmitter();
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
  );

  isStudentsHidden: boolean = true;
  isInformationHidden: boolean = true;

  constructor(private breakpointObserver: BreakpointObserver) {}

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  showStudentsDropdown() {
    this.isStudentsHidden = !this.isStudentsHidden;
  }

  showInformationDropdown() {
    this.isInformationHidden = !this.isInformationHidden;
  }
}
