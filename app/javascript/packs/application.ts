import 'zone.js';
import '@angular/compiler'; // <-- not sure why this is needed...
import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app.module';

platformBrowser().bootstrapModule(AppModule).catch(console.error);

