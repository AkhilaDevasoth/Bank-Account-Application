import Home from './components/Home';
import Login from './components/Login';
import Header from './components/Header';
import Signup from './components/Signup';
import { Route, Routes } from 'react-router';
import BankAccountList from './components/BankAccountList';
import AddBankAccount from './components/AddBankAccount';
import BankAccountInfo from './components/BankAccountInfo';

function App() {
  return (

    <div className='container-fluid'>
      <div className='row bg-warning'>
        <Header />

      </div>
      <div className='row'>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/list' element={<BankAccountList />}></Route>
          <Route path='/update/:id' element={<AddBankAccount />}></Route>
          <Route path='/info/:id' element={<BankAccountInfo />}></Route>
          <Route path='/add' element={<AddBankAccount />}></Route>
        </Routes>
      </div>

    </div>
  );
}
export default App;
