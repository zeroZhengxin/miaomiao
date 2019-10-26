export default{
    path: '/movie',
    component: () => import('@/views/Movie'),//@由脚手架提供，表示src下的目录
    children :[
        {
            path:'city',
            component: () => import('@/components/City')
        },
        {
            path:'comingSoon',
            component: () => import('@/components/ComingSoon')
        },
        {
            path:'nowPlaying',
            component: () => import('@/components/NowPlaying')
        },
        {
            path:'search',
            component: () => import('@/components/Search')
        },
        {
            path:'/movie',
            redirect:'/movie/nowPlaying'
        }
    ]
}