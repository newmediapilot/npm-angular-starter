import { Routes } from '@angular/router';
import { IndexPage } from '../pages/index.page';
import { AboutPage } from '../pages/about.page';
import { LinksPage } from '../pages/links.page';

export const routes: Routes = [
  { path: '', component: IndexPage },
  { path: 'about', component: AboutPage },
  { path: 'about/links', component: LinksPage },
];
