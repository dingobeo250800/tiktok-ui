import config from '~/config';

//layout
import { HeaderOnly } from '~/layouts';
//pages
import Home from '~/components/pages/Home';
import Following from '~/components/pages/Following';
import Profile from '~/components/pages/Profile';
import Search from '~/components/pages/Search';
import Upload from '~/components/pages/Upload';
import Live from '~/components/pages/Live';

//public routes
export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.live, component: Live },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];
export const privateRoutes = [];
