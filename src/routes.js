import { HomePage } from './js/pages/home-page/HomePage';
import { EditorPage } from './js/pages/editor-page/EditorPage';
import { TemplatesPage } from './js/pages/templates-page/TemplatesPage';


export const routes = [
    {
        path: '/',
        component: <HomePage />,
    },
    {
        path: '/editor',
        component: <EditorPage />,
    },
    {
        path: '/templates',
        component: <TemplatesPage />,
    },
    {
        path: '/editor/:wapId',
        component: <EditorPage />,
    }
]