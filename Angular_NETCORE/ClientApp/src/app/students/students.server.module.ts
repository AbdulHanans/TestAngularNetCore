import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { StudentsComponent } from './students.component';
import { StudentsModule } from './students.module';

@NgModule({
  imports: [StudentsModule, ServerModule, ModuleMapLoaderModule],
    bootstrap: [StudentsComponent]
})
export class AppServerModule { }
