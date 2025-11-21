// App.jsx
import { Route, Routes } from 'react-router-dom'
import DotNet from './containers/DotNet'
import ThankYouPage from './components/ThankYouPage'
// import ThankYou from './containers/ThankYou' // if you have it

function App() {
  return (
    <Routes>
      <Route path="/" element={<DotNet />} />

      <Route path="/sales" element={<DotNet />} />
      <Route path="/sales/dot-net-certification-training" element={<DotNet />} />
      <Route path="/sales/java-certification-training" element={<DotNet />} />
      <Route path='/sales/thank-you' element={<ThankYouPage />} />
      <Route path="*" element={<div className="text-center py-20 text-4xl">404 - Page Not Found</div>} />
    </Routes>
  )
}

export default App