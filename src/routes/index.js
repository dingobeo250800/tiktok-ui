import { HeaderOnly } from '~/components/Layout';
import Following from '~/components/pages/Following';
import Home from '~/components/pages/Home';
import Profile from '~/components/pages/Profile';
import Search from '~/components/pages/Search';
import Upload from '~/components/pages/Upload';

//public routes
export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/@:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

export const privateRoutes = [];
