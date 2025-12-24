import './App.css'
import NavBar from './NavBar'
import Home from './Home'
import Solutions from './Solutions'
import Fall2020 from './Fall2020'
import Spring2021 from './Spring2021'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Fall2020Question2 from './Fall2020Question2'
import Fall2020Question5 from './Fall2020Question5'
import Fall2020Question7 from './Fall2020Question7'
import Spring2021Question1 from './Spring2021Question1'
import Spring2021Question2 from './Spring2021Question2'
import Spring2021Question5 from './Spring2021Question5'
import Spring2021Question6 from './Spring2021Question6'
import Spring2021Question7 from './Spring2021Question7'
import Contact from './Contact'
import Notes from './Notes'
import Sorting from './Sorting'
import BubbleSort from './BubbleSort'
import SelectionSort from './SelectionSort'
import InsertionSort from './InsertionSort'
import QuickSort from './QuickSort'
import PageNotFound from './PageNotFound'
import HeapSort from './HeapSort'

function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar/>

      <main>
     
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/solutions" element={<Solutions/>} />
        <Route path="/solutions/fall-2020" element={<Fall2020/>} />
        <Route path="/solutions/fall-2020/question-2" element={<Fall2020Question2/>} />
        <Route path="/solutions/fall-2020/question-5a" element={<Fall2020Question5/>} />
        <Route path="/solutions/fall-2020/question-7" element={<Fall2020Question7/>} />

        <Route path="/solutions/spring-2021" element={<Spring2021/>} />
        <Route path="/solutions/spring-2021/question-1" element={<Spring2021Question1/>} />
        <Route path="/solutions/spring-2021/question-2" element={<Spring2021Question2/>} />
        <Route path="/solutions/spring-2021/question-5" element={<Spring2021Question5/>} />
        <Route path="/solutions/spring-2021/question-6" element={<Spring2021Question6/>} />
        <Route path="/solutions/spring-2021/question-7" element={<Spring2021Question7/>} />


        <Route path="/contact" element={<Contact/>} />
        <Route path="/notes" element={<Notes/>} />
        <Route path="/notes/sorting" element={<Sorting/>} />
        <Route path="/notes/sorting/bubble" element={<BubbleSort/>} />
        <Route path="/notes/sorting/selection" element={<SelectionSort/>} />
        <Route path="/notes/sorting/insertion" element={<InsertionSort/>} />
        <Route path="/notes/sorting/quick" element={<QuickSort/>} />
        <Route path="/notes/sorting/heap" element={<HeapSort/>} />

        <Route path="*" element={<PageNotFound/>} />
        
      </Routes>
      </main>

      </BrowserRouter>
    </>
  )
}

export default App