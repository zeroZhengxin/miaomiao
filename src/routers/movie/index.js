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
            path:'detail/1/:movieId',
            components:{
                default:() => import('@/components/NowPlaying'),
                detail:() => import('@/views/Movie/detail')
            },
            props:{
                //可在详情页直接通过props接收到movieId
                detail:true
            }
        },
        {
            path:'detail/2/:movieId',
            components:{
                default:() => import('@/components/ComingSoon'),
                detail:() => import('@/views/Movie/detail')
            },
            props:{
                //可在详情页直接通过props接收到movieId
                detail:true
            }
        },
        {
            path:'/movie',
            redirect:'/movie/nowPlaying'
        }
        
    ]
}