import { NgModule, ModuleWithProviders } from '@angular/core';



import { NawahService } from '../nawah.service';
import { CacheService } from './cache.service';

@NgModule({

    declarations: [],

    exports: []

})

export class NawahModule {

    public static forRoot(): ModuleWithProviders<NgModule> {

        return {

            ngModule: NawahModule,

            providers: [
                NawahService,
                CacheService
            ]

        };

    }

}