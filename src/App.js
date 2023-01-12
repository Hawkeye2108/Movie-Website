import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import SingleMovie from './Routes/SingleMovie';
import Error from './Routes/Error'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movie/:id' element={<SingleMovie/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
  );
}

export default App;
