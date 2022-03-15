import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import store from './store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
