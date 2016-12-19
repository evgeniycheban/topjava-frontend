import { Component, ViewContainerRef } from '@angular/core';
import { ComponentsHelper } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(componentsHelper: ComponentsHelper, private viewContainerRef: ViewContainerRef) {
     componentsHelper.setRootViewContainerRef(viewContainerRef);
  }
}
