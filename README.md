# `npm-angular-starter`

Starter project to test out Angular `20.0.1`

#### Development:

```shell
npm run start
```

#### Deploy:

```shell
npm run deploy
```

# Features

> TODO...

# Powered by:

- [Angular 20](https://angular.dev/)
- [Yarn](https://yarnpkg.com/)
- [Daisy UI](https://daisyui.com/components/breadcrumbs/)
- [Tailwind CSS](https://tailwindcss.com/)
- [JSON Server](https://www.npmjs.com/package/json-server)

<br>

# References:

| Tool          | URL                             | Description             | Notes                 |
|---------------|---------------------------------|-------------------------|-----------------------|
| Angular Defer | https://angular.dev/guide/templates/defer | Lazy loading components | Code Splitting where "Components, directives, pipes, and any component CSS styles can be deferred when loading an application." |

#### Angular Placeholder Strategy

- `(after 100ms;)` - the minimum amount of time that this placeholder should be shown
- `(minimum 1s;)` - the amount of time to wait after loading begins before showing the loading template
- `@defer (on hover)` is pre-fetch on hover
- `@defer (on immediate)` after, minimum, when, etc. are ignored in this mode.
- `@defer (when condition)` conditional expression eg. when `this.ready`
> - NgModule-based dependencies are not deferred and are included in the eagerly loaded bundle.
> - ie. NgModule deps add to the initial perceivable load time
```angular181html
<hoc-component>
    // Load with skeleton flow
    @defer {
        <large-component />
    } @loading (after 100ms; minimum 1s) {
        <img alt="loading large component..." src="loading.gif" />
    } @placeholder {
        <p>Placeholder content (empty state)</p>
    } @error {
        <p>Failed to load large component.</p>
    }
    // Prefetch on hover
    @defer (on hover) {
        <large-component />
    } @placeholder {
        <div>Large component placeholder</div>
    }
    // Prefetch on arrive
    @defer (on interaction; prefetch on idle) {
        <large-cmp />
    } @placeholder {
        <div>Large component placeholder</div>
    }
</hoc-component>
```
> AI was used to generate `db.json`
