import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import DataCurrent from '../pages/dateCurrent';
import Sign from '../pages/sign';
import CounterPeople from '../pages/counterPeople';

export default function AppRoutes(){
    return (
        <BrowserRouter>
            <>
                <nav>
                    <ul>
                        <li><Link to='/exercicio-1'>Exercício 1</Link></li>
                        <li><Link to='/exercicio-2'>Exercício 2</Link></li>
                        <li><Link to='/exercicio-3'>Exercício 3</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='/' element={<DataCurrent/>} />
                    <Route path='/exercicio-1' element={<DataCurrent/>} />
                    <Route path='/exercicio-2' element={<Sign/>} />
                    <Route path='/exercicio-3' element={<CounterPeople/>} />
                </Routes>
            </>
        </BrowserRouter>
    );
}