import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'person',
        loadChildren: () => import('./person/person.module').then(m => m.JhipsterSampleApplicationPersonModule),
      },
      {
        path: 'person-addresses',
        loadChildren: () =>
          import('./person-addresses/person-addresses.module').then(m => m.JhipsterSampleApplicationPersonAddressesModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class JhipsterSampleApplicationEntityModule {}
