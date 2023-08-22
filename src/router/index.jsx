import { Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import { RouterData } from "./index-data";
import './style.css';

function RouterComponent() {
  return (
    <>
      <Routes>
        {RouterData.map(elem =>
          <Route key={elem.id} path={elem.path} element={
            <Suspense fallback={<div className="spin_wrapp">
            <div className='loader'></div>
          </div>}>
              {elem.component}
            </Suspense>
          } />
        )}
      </Routes>
    </>
  )
}

export default RouterComponent