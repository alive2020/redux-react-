import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import { bindActionCreators} from 'redux';
import { actionCreators } from './store/index'

function App() {
  const accountState = useSelector(state => state.account);
  const dispatch = useDispatch();
  const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch);
  // console.log(accountState);
  return (
    <div className="App">
      <h1>{accountState}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>withdraw</button>

    </div>
  );
}

export default App;
