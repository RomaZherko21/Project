import { observer } from 'mobx-react-lite'
import { Route, Routes } from 'react-router-dom'

import { Home, NotFound, Profile, Stats } from 'pages'
import { ROUTES } from 'shared/consts'
import { UserModel } from 'models'

function Router() {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.STATS} element={<Stats />} />
            <Route path="*" element={<NotFound />} />
            {UserModel.isLoggedIn() && (
                <>
                    <Route path={ROUTES.PROFILE} element={<Profile />} />
                </>
            )}
        </Routes>
    )
}

export default observer(Router)
