import { lazy } from "react";
import { constant } from "./constant";
import cart from '../assets/images/cart_icon.png'
import profile from '../assets/images/hacker.png'

export const NAVLINK = [
    {
        id:1, path:constant.LINK.CART, icon:cart, component:lazy(()=>import('../components/common/Cart'))
    },{
        id:2, path:constant.LINK.PROFILE, icon:profile, component:lazy(()=>import('../components/common/Profile'))
    }
]