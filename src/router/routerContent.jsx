import React from 'react'
import Cpt_Home from '../components/com.Home/Cpt_Home'
import Cpt_HomeAccessories from '../components/com.Accessories/Cpt_HomeAccessories'
import Cpt_HomeCart from '../components/com.Cart/Cpt_HomeCart'
import Cpt_HomeIPhone from '../components/com.IPhone/Cpt_HomeIPhone'
import Cpt_HomeLaptop from '../components/com.Laptop/Cpt_HomeLaptop'
import Cpt_HomePhone from '../components/com.Phone/Cpt_HomePhone'
import Cpt_HomeTablet from '../components/com.Tablet/Cpt_HomeTablet'
import Cpt_NotFound from '../components/com.NotFound/Cpt_NotFound'
import ContainerHome from '../containers/ContainerHome'
import ContainerHomeCart from '../containers/ContainerHomeCart';
import ContainerIPhone from '../containers/ContainerIPhone'

const routers=[
    {
        path:"/",
        exact:true,
        main:()=><ContainerHome/>
    },
    {
        path:"/accessories",
        exact:false,
        main:()=> <Cpt_HomeAccessories/>
    },
    {
        path:"/cart",
        exact:false,
        main:()=> <ContainerHomeCart/>
    },
    {
        path:"/iPhone",
        exact:false,
        main:()=> <ContainerIPhone/>
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