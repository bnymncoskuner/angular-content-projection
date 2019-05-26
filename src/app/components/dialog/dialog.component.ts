import { Component, OnInit, ComponentFactoryResolver, Type, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  header;

  @ViewChild('content', {read: ViewContainerRef}) content: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  renderChild(componentType: Type<any>) {
    const compFactory = this.resolver.resolveComponentFactory(componentType);
    this.content.createComponent(compFactory);
  }

  onCancel() {

  }

  onApprove() {
    
  }
}
