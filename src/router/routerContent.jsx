import React from 'react'
import Cpt_Home from '../components/Cpt_Home'
import Cpt_HomeAccessories from '../components/Cpt_HomeAccessories'
import Cpt_HomeCart from '../components/Cpt_HomeCart'
import Cpt_HomeIPhone from '../components/Cpt_HomeIPhone'
import Cpt_HomeLaptop from '../components/Cpt_HomeLaptop'
import Cpt_HomePhone from '../components/Cpt_HomePhone'
import Cpt_HomeTablet from '../components/Cpt_HomeTablet'
import Cpt_NotFound from '../components/Cpt_NotFound'

const routers=[
    {
        path:"/",
        exact:true,
        main:()=> <Cpt_Home/>
    },
    {
        path:"/accessories",
        exact:false,
        main:()=> <Cpt_HomeAccessories/>
    },
    {
        path:"/cart",
        exact:false,
        main:()=> <Cpt_HomeCart/>
    },
    {
        path:"/iPhone",
        exact:false,
        main:()=> <Cpt_HomeIPhone/>
    },
    {
        path:"/lapTop",
        exact:false,
        main:()=> <Cpt_HomeLaptop/>
    },
    {
        path:"/phone",
        exact:false,
        main:()=> <Cpt_HomePhone/>
    },
    // {
    //     path:"/promotion",
    //     exact:false,
    //     main:()=> <Cpt_HomePromotion/>
    // },
    {
        path:"/tablet",
        exact:false,
        main:()=> <Cpt_HomeTablet/>
    },  
    {           // 404 phải  đặt dưới cùng 
        path:"",
        exact:false,
        main:()=> <Cpt_NotFound/>
    }, 
]
export default routers;