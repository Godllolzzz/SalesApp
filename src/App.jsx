import { Route, Routes } from 'react-router-dom'
import CourseCard from './components/CourseCard'
import Header from './components/Header'
import MembershipCard from './components/MembershipCard'
import DotNet from './containers/DotNet'

function App() {

  return (
    // <Routes>
    //   <Route path="/sales" element={<DotNet />} />
    //   <Route path="/sales/dot-net-certification-training" element={<DotNet />} />
    //   <Route path="/sales/java-certification-training" element={<DotNet />} />
    //   {/* <Route path="/offer/offer/:courseName" element={<ThankYou />} /> */}
    //   <Route path="*" element={<div>404 - Page Not Found</div>} />
    // </Routes>
    <DotNet />

  )
}

export default App
