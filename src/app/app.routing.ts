import { RouterModule, Routes } from '@angular/router';

import { AutoSaveComponent } from './features/autosave/autosave.component';
import { ValidationComponent } from './features/validation/validation.component';
import { IndexComponent } from './index/index.component';
import { ConditionalValidationComponent } from './features/validation/conditional/conditional-validation.component';
import { ModalHostComponent } from './features/modal/modal-host.component';
import { MessagingComponent } from './features/messaging/messaging.component';
import { FileUploadComponent } from './features/fileupload/fileupload.component';
import { TabsComponent } from './features/tabs/tabs.component';
import { SearchComponent } from './features/search/search.component';
import { DropdownComponent } from './features/dropdown/dropdown.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'autosave', component: AutoSaveComponent },
  { path: 'validation', component: ValidationComponent },
  { path: 'conditional-validation', component: ConditionalValidationComponent },
  { path: 'modal', component: ModalHostComponent },
  { path: 'messaging', component: MessagingComponent },
  { path: 'file-upload', component: FileUploadComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'dropdown', component: DropdownComponent }
];

export const routing = RouterModule.forRoot(routes);
