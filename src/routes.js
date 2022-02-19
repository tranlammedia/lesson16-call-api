import HomePage from './pages/HomePage/HomePage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import ProductListPage from './pages/ProductsPage/ProductListPage'

const routes = [
    {
        path : '/',
        element : <HomePage/>
    },
    {
        path : '*',
        element : <NotFoundPage/>
    },
    {
        path : '*',
        element : <ProductListPage/>
    },
]

export default routes