import { HomePage } from './js/pages/home-page/HomePage'
import { EditorPage } from './js/pages/editor-page/EditorPage'


export const routes = [
    {
        path: '/',
        component: <HomePage />,
    },
    {
        path: '/editor',
        component: <EditorPage />,
    }
]