import { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

const Example = lazy(() =>
  import('src/pages/Example/Example').then(module => ({
    default: module.Example,
  })),
)
const GenericNotFound = lazy(() =>
  import('src/pages/GenericNotFound/GenericNotFound').then(module => ({
    default: module.GenericNotFound,
  })),
)

export const Routes = () => {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <Switch>
        <Route exact path="/" component={Example} />

        <Route path="/404" component={GenericNotFound} />
        <Redirect to="/404" />
      </Switch>
    </Suspense>
  )
}
