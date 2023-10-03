import React from "react"
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from "react-router-dom"
import Components from "./Components"
import Palette from "./Palette"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route index element={<Components />} />
            <Route path="palette" element={<Palette />} />
        </Route>
    )
)

function App({ routes }) {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
