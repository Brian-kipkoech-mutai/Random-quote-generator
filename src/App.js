import Quotepage from './compoents/Quotepage';
import './App.css';
 import { Provider } from 'react-redux';
 import store from './redux/store';

function App() {
  return (
     <Provider store={store}>
      
  
     <Quotepage/>
  
      
     </Provider>
      
  );
}

export default App;
