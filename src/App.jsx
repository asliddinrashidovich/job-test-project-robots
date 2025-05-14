import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import MainLayout from "./layout/main-layout"
import MainPage from "./pages/main-page"
import NotfoundPage from "./pages/notfound"
import FormRequestPage from "./pages/form-request-page"

function App() {
  
  const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<MainPage/>}/>
          <Route path="form" element={<FormRequestPage/>}/>
          <Route path="*" element={<NotfoundPage/>}/>
        </Route>
      )
    )
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App