import { Route, Routes } from 'react-router-dom'

import { Home, Stats } from 'pages'
import { ROUTES } from 'shared/consts'

function Router() {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.STATS} element={<Stats />} />
        </Routes>
    )
}

export default Router
