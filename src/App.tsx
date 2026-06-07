import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import RootLayout from './components/RootLayout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App