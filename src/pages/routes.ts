import { Routes } from '@angular/router';
import { IndexPage } from './index/index.page';
import { AboutPage } from './about/about.page';
import { LinksPage } from './links/links.page';
import { ResolveAbout } from './about/about.resolver';

export const routes: Routes = [
  { path: '', component: IndexPage },
  {
    path: 'about',
    component: AboutPage,
    resolve: { [ResolveAbout.name]: ResolveAbout },
  },
  {
    path: 'about/links',
    component: LinksPage,
  },
];
