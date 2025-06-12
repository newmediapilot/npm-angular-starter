import { Component } from '@angular/core';
import { NavGlobal } from '../../components/nav.global';
import { HeaderEl } from '../../components/core/header.el';
import { MainEl } from '../../components/core/main.el';
import { FooterEl } from '../../components/core/footer.el';
import { FooterGlobal } from '../../components/footer.global';
import { BcrumbsGlobal } from '../../components/bcrumbs.global';
import { IndexContent } from './index.content';
import {
  MainPreloaderError,
  MainPreloaderLoading,
  MainPreloaderPlaceholder,
} from '../../components/main.preloader';
import { LinksContent } from '../links/links.content';

@Component({
  selector: 'page-home',
  template: `
    <div class="grid grid-rows-[100px_1fr_60px] h-screen">
      <header-el>
        <nav-global />
        <bcrumbs-global />
      </header-el>
      <main-el>
        @defer {
          <index-content />
        } @loading {
          <main-preloader-loading />
        } @placeholder (minimum 1.75s) {
          <main-preloader-placeholder />
        } @error {
          <main-preloader-error />
        }
      </main-el>
      <footer-el>
        <footer-global />
      </footer-el>
    </div>
  `,
  imports: [
    NavGlobal,
    HeaderEl,
    MainEl,
    FooterEl,
    FooterGlobal,
    BcrumbsGlobal,
    IndexContent,
    MainPreloaderError,
    MainPreloaderLoading,
    MainPreloaderPlaceholder,
  ],
})
export class IndexPage {}
