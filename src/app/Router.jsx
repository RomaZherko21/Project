import { Route, Routes } from 'react-router-dom'

import { Home, Posts } from 'pages'
import { ROUTES } from 'shared/consts'

function Router() {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.POSTS} element={<Posts />} />
        </Routes>
    )
}

export default Router
