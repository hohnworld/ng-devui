import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevUIApiModule } from 'ng-devui/shared/devui-api/devui-api.module';
import { DevUICodeboxModule } from 'ng-devui/shared/devui-codebox/devui-codebox.module';
import { TranslateModule } from '@ngx-translate/core';
import { DDemoNavModule } from 'src/app/component/d-demo-nav.module';
import { TagsInputModule } from '../tags.input.module';
import { ButtonModule } from './../../button/button.module';
import { TagsInputDemoAsyncComponent } from './async/async.component';
import { TagsInputDemoBasicComponent } from './basic/basic.component';
import { TagsInputDemoNgModelComponent } from './ngmodel/ngmodel.component';
import { TagsInputDemoComponent } from './tags.input-demo.component';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    TagsInputModule,
    DevUIApiModule,
    DevUICodeboxModule,
    DDemoNavModule,
    ButtonModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'demo' },
      { path: 'demo', component: TagsInputDemoComponent },
      {
        path: 'api',
        component: DevUIApiComponent,
        data: {
          'zh-cn': require('!html-loader!markdown-loader!../doc/api-cn.md'),
          'en-us': require('!html-loader!markdown-loader!../doc/api-en.md'),
        },
      },
    ]),
  ],
  exports: [],
  declarations: [TagsInputDemoComponent, TagsInputDemoBasicComponent, TagsInputDemoNgModelComponent, TagsInputDemoAsyncComponent],
})
export class TagsInputDemoModule {}
