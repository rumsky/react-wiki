import Base from './Base';
import Hardpoint from './Hardpoint';
import Performance from './Performance';
import Collection from './Collection';
import Playground from './Playground';
const routes = [
    {
        path: '/',
        name: 'base',
        exact: true,
        component: Base,
    },
    {
        path: '/base',
        name: 'base',
        component: Base,
    },
    {
        path: '/hardpoint',
        name: 'hardpoint',
        component: Hardpoint,
    },
    {
        path: '/performance',
        name: 'performance',
        component: Performance,
    },
    {
        path: '/collection',
        name: 'collection',
        component: Collection,
    },
    {
        path: '/playground',
        name: 'playground',
        component: Playground,
    }
    
];

export default routes;