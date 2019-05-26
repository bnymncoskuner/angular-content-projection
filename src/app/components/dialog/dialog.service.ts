import { Injectable, ComponentFactoryResolver, Type, Injector, ApplicationRef, EmbeddedViewRef, ComponentRef } from '@angular/core';
import { DialogComponent } from './dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  dialogRef: ComponentRef<DialogComponent>;

  constructor(private injector: Injector, 
              private resolver: ComponentFactoryResolver,
              private appRef: ApplicationRef) { }

  open<T>(component: Type<T>, config: {
    header: string,
    data?: any
  }) {
    const factory = this.resolver.resolveComponentFactory(DialogComponent);
    const compRef = factory.create(this.injector);
    this.appRef.attachView(compRef.hostView);

    compRef.instance.renderChild(component);

    compRef.instance.header = config.header;

    const el = (compRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(el);

    return compRef;
  }
}
