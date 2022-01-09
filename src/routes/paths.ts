import { lazy } from 'react'

export const Example = lazy(() =>
  import('src/pages/Example/Example').then(module => ({
    default: module.Example,
  })),
)
export const GenericNotFound = lazy(() =>
  import('src/pages/GenericNotFound/GenericNotFound').then(module => ({
    default: module.GenericNotFound,
  })),
)
