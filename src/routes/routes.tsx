import {Route, Routes} from  'react-router-dom'
import App from '../App'
import { HomePage } from '../pages/HomePage'

export function AppRputes(){

    return (

        <Routes>
            <Route path='/' element = {<HomePage />} />
            <Route path='/jogar' element = {<App />} />
        </Routes>

    )

}