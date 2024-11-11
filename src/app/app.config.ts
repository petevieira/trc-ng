import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClient, provideHttpClient } from '@angular/common/http';
// import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { routes } from './app.routes';

// Factory function to create a new TranslateHttpLoader
// const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) =>
//     new TranslateHttpLoader(http, './assets/i18n/', '.json');

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(),
        provideRouter(routes),
        // importProvidersFrom(
        //     TranslateModule.forRoot({
        //         loader: {
        //             provide: TranslateLoader,
        //             useFactory: httpLoaderFactory,
        //             deps: [HttpClient],
        //         },
        //     })
        // ),
    ],
};
