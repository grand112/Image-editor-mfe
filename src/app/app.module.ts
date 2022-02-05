import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { FileSaverModule } from 'ngx-filesaver';
import { TuiImageEditorModule } from 'tui-image-editor-angular';

import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { WrapperComponent } from './wrapper/wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    EditorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FileSaverModule,
    TuiImageEditorModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule {

  constructor(private injector: Injector) { }

  ngDoBootstrap(): void {
    const imageEditorElement = createCustomElement(EditorComponent, { injector: this.injector });
    customElements.define('image-editor', imageEditorElement);

    const wrapperElement = createCustomElement(WrapperComponent, { injector: this.injector });
    customElements.define('editor-wrapper', wrapperElement);
  }
}
