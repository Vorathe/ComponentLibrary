import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastyModule } from 'ng2-toasty';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { Ng2TabModule } from 'ng2-tab';


import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AutoSaveComponent } from './features/autosave/autosave.component';
import { ConditionalValidationComponent } from './features/validation/conditional/conditional-validation.component';
import { ValidationComponent } from './features/validation/validation.component';
import { ModalComponent } from './features/modal/modal.component';
import { ModalHostComponent } from './features/modal/modal-host.component';
import { SearchComponent } from './features/search/search.component';
import { NavigationComponent } from './shared';
import { HeaderComponent } from './shared';
import { MessagingComponent } from './features/messaging/messaging.component';
import { FileUploadComponent } from './features/fileupload/fileupload.component';
import { TabContentComponent, TabListComponent } from './shared';
import { TabsComponent } from './features/tabs/tabs.component';
import { routing } from './app.routing';

import { AddressService } from './shared';
import { GiphySearchService } from './shared';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    ToastyModule.forRoot(),
    Ng2TabModule,
    routing

  ],
  declarations: [
    AppComponent,
    IndexComponent,
    AutoSaveComponent,
    ValidationComponent,
    ConditionalValidationComponent,
    ModalComponent,
    ModalHostComponent,
    NavigationComponent,
    HeaderComponent,
    SearchComponent,
    MessagingComponent,
    FileDropDirective,
    FileSelectDirective,
    FileUploadComponent,
    TabContentComponent,
    TabListComponent,
    TabsComponent
  ],
  providers: [GiphySearchService, AddressService],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(public appRef: ApplicationRef) {}
}
