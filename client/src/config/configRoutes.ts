import { lazy } from "react";

export const ROUTES = [
    {
        id:1, path :"/", component: lazy(()=>import('../components/pages/LandingPage'))
    }
]