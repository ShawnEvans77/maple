import { Route, Routes } from 'react-router-dom'
import Fall2020Question2 from './Fall2020Question2'
let path:string = "/solutions/fall-2020/question-"

function Fall2020Routes() {
    return (
        <Route path={path.concat("2")} element={<Fall2020Question2/>} />
    )
}

export default Fall2020Routes