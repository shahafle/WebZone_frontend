import { Home } from './js/pages/home-page/Home'
import { Editor } from './js/pages/editor-page/Editor';


export const routes = [
    {
        path: '/',
        component: <Home />,
    },
    {
        path: '/editor',
        component: <Editor />,
    }
]