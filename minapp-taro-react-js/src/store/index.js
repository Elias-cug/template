import { init } from '@rematch/core'
import createLoadingPlugin from '@rematch/loading'
import {models} from './loader'

const loadingPlugin = createLoadingPlugin({number: true})

const configureStore = () => {
  const store = init({
    plugins: [loadingPlugin],
    models
  })
  return store
}

export default configureStore

