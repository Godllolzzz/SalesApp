// App.jsx
import { Route, Routes } from 'react-router-dom'
import DotNet from './containers/DotNet'
// import ThankYou from './containers/ThankYou' // if you have it

function App() {
  return (
    <Routes>
      {/* Home page — show DotNet or your main sales page */}
      <Route path="/" element={<DotNet />} />

      {/* Your sales pages */}
      <Route path="/sales" element={<DotNet />} />
      <Route path="/sales/dot-net-certification-training" element={<DotNet />} />
      <Route path="/sales/java-certification-training" element={<DotNet />} />

      {/* Optional: Thank you page */}
      {/* <Route path="/offer/offer/:courseName" element={<ThankYou />} /> */}

      {/* 404 fallback */}
      <Route path="*" element={<div className="text-center py-20 text-4xl">404 - Page Not Found</div>} />
    </Routes>
  )
}

export default App