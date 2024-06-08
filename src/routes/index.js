import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import SignDateCurrent from '../pages/sign-dateCurrent';
import CounterPeople from '../pages/counterPeople';
import Activity3 from '../pages/activity-3';
import Activity4 from '../pages/activity-4';
import Activity5 from '../pages/activity-5';

export default function AppRoutes(){
    return (
        <BrowserRouter>
            <>
                <nav>
                    <ul>
                        <li><Link to='/exercicio-1'>Exercício 1</Link></li>
                        <li><Link to='/exercicio-2'>Exercício 2</Link></li>
                        <li><Link to='/exercicio-3'>Exercício 3</Link></li>
                        <li><Link to='/exercicio-4'>Exercício 4</Link></li>
                        <li><Link to='/exercicio-5'>Exercício 5</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='/' element={<SignDateCurrent/>} />
                    <Route path='/exercicio-1' element={<SignDateCurrent/>} />
                    <Route path='/exercicio-2' element={<CounterPeople/>} />
                    <Route path='/exercicio-3' element={<Activity3/>} />
                    <Route path='/exercicio-4' element={<Activity4/>} />
                    <Route path='/exercicio-5' element={<Activity5/>} />
                </Routes>
            </>
        </BrowserRouter>
    );
}