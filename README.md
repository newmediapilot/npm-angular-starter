# `npm-angular-starter`

Starter project to test out Angular `20.0.1`

#### Live Demo:

https://newmediapilot.github.io/npm-angular-starter/my-app/browser/

#### Development:

```shell
npm run start
```

#### Deploy:

```shell
npm run deploy
```

# Features

#### Navigation

- `AngularRouter` + `routerLink`

#### Prefetch

- `@defer` prefetch strategy for `*.page.ts`

### Components

- Composites, Primitives

```
components/*.*.ts
components/core/*.*.ts
```

### Pages

- Layout, Content

```
pages/{page}.*.ts
pages/{page}/{page}.content.*.ts
```

#### Angular Placeholder Strategy

- `(minimum 1s;)` - minimum time we hold loader onscreen (to prevent flash)
- `(after 100ms;)` - time before we show laoder onscreen (placeholder stage)
- `@defer (on hover)` pre-fetch on hover of #id declaration, ie a nav
- `@defer (on immediate)` `after, minimum, when` are ignored (max speed)
- `@defer (when condition)` conditional expression eg. when `this.ready` (data dependent)

> - NgModule-based dependencies are not deferred and are included in the eagerly loaded bundle.
> - ie. NgModule deps add to the initial perceivable load time (deprecation maybe)

- Forbidden elements; `ng-content`, `router-outlet`; no dynamic stuff
- This method requires declared components which are part of your `import`
- Walks down the import tree of each node; delegates `async import`
- That becomes an automatic preloader

```angular181html

<hoc-component>
    // Load with skeleton flow
    @defer {
        <large-component/>
    } @loading (after 100ms; minimum 1s) {
        <img alt="loading large component..." src="loading.gif"/>
    } @placeholder {
        <p>Placeholder content (empty state)</p>
    } @error {
        <p>Failed to load large component.</p>
    }
    // Prefetch on hover
    @defer (on hover) {
        <large-component/>
    } @placeholder {
        <div>Large component placeholder</div>
    }
    // Prefetch on arrive
    @defer (on interaction; prefetch on idle) {
        <large-cmp/>
    } @placeholder {
        <div>Large component placeholder</div>
    }
</hoc-component>
```

### Preload Pattern

```angular181html
@defer {
    <!-- "await import("./index/links.content") -->
    <!-- └─ promise.*" -->
    <links-content/>
} @loading {
    <!-- "promise.pending"-->
    <main-preloader-loading/>
} @placeholder (minimum 3s) {
    <!-- "promise.pending?"-->
    <main-preloader-placeholder/>
} @error {
    <!-- "promise.catch"-->
    <main-preloader-error/>
}
```

# Powered by:

- [Angular 20](https://angular.dev/)
- [NGRX](https://ngrx.io/guide/store/install)
- [Dev Tools](https://ngrx.io/guide/store-devtools)
- [Yarn](https://yarnpkg.com/)
- [Daisy UI](https://daisyui.com/components/breadcrumbs/)
- [Tailwind CSS](https://tailwindcss.com/)
- [JSON Server](https://www.npmjs.com/package/json-server)

# References:

| Tool            | URL                                       | Description                              | Notes                                                                                                                           |
|-----------------|-------------------------------------------|------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| Akita           | https://opensource.salesforce.com/akita/  | Reactive state (agnostic)                | Nice API but older                                                                                                              |
| NGXS            | https://www.npmjs.com/package/@ngxs/store | Angular specific state                   | Simple shorthand API, `dispatch()` returns action interface `var {greet} = dispatch(Greet) && greet('message')`                 |
| Daisy UI        | https://daisyui.com/                      | A UI component library based on Tailwind | Similar to Radix & Skeleton                                                                                                     |
| Angular Defer   | https://angular.dev/guide/templates/defer | Lazy loading components                  | Code Splitting where "Components, directives, pipes, and any component CSS styles can be deferred when loading an application." |
| Feature Creator | https://ngrx.io/guide/store/feature-creators | Analogous to `createSlice`               | Code Splitting where "Components, directives, pipes, and any component CSS styles can be deferred when loading an application." |

> AI was used to generate `db.json`
