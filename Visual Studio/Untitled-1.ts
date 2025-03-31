import { createBrowserRouter } from "react_router-dom";
import { Home } from "../pages/Home";
import {Test} from "../pagues/Test"

const router = createBrowserRouter([
    {
        path: "/",
        element: Home ()
    },
    {
        path: '/test',
        element: Test.Test(),
    }
])

export {router} ;