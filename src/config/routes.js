import Home from '../pages/home/HomeComponent'
import Scheduling from '../pages/scheduling'

const routes = [
    {
        exact: true,
        path: '/',
        component: Home
    },
    {
        exact: true,
        path: '/agendamento',
        component: Scheduling
    }

]

export default routes