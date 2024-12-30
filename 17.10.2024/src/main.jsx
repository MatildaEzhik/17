import { createRoot } from 'react-dom/client'

import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { store } from './redux/store.js'
import { router } from './router/index.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
)
