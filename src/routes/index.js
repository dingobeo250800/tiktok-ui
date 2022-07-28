import { HeaderOnly } from '~/components/Layout';
import routesConfig from '~/config/routes';

import Following from '~/components/pages/Following';
import Home from '~/components/pages/Home';
import Profile from '~/components/pages/Profile';
import Search from '~/components/pages/Search';
import Upload from '~/components/pages/Upload';

//public routes
export const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
];

export const privateRoutes = [];
