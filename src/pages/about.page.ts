import { Component } from '@angular/core';
import { NavGlobal } from '../components/nav.global';
import { HeaderEl } from '../components/core/header.el';
import { MainEl } from '../components/core/main.el';
import { FooterEl } from '../components/core/footer.el';
import { FooterGlobal } from '../components/footer.global';
import { BcrumbsGlobal } from '../components/bcrumbs.global';
import { IndexContent } from './index/index.content';
import {AboutContent} from './index/about.content';

@Component({
  selector: 'page-about',
  template: `
    <div class="grid grid-rows-[100px_1fr_80px] h-screen">
      <header-el>
        <nav-global />
        <bcrumbs-global />
      </header-el>
      <main-el>
        <about-content />
      </main-el>
      <footer-el>
        <footer-global />
      </footer-el>
    </div>
  `,
  imports: [NavGlobal, HeaderEl, MainEl, FooterEl, FooterGlobal, BcrumbsGlobal, AboutContent],
})
export class AboutPage {}
