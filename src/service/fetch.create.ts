// import { inject } from '@angular/core';
// import { createEffect, Actions, ofType } from '@ngrx/effects';
// import { map, switchMap, catchError } from 'rxjs/operators';
// import { ActionCreator } from '@ngrx/store';
// import { of } from 'rxjs';
//
// export function createFetchEffect(
//     trigger: ActionCreator,
//     serviceClass: any,
//     url: string,
//     success: ActionCreator,
//     failure: ActionCreator
// ) {
//     const actions$ = inject(Actions);
//     const service = inject(serviceClass);
//     return createEffect(() =>
//         actions$.pipe(
//             ofType(trigger),
//             switchMap(() =>
//                 service.fetch(url).pipe(
//                     map((data: any) => success({ data })),
//                     catchError((error: any) => of(failure({ error })))
//                 )
//             )
//         )
//     );
// }
