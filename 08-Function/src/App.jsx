import ButtonClick from './components/ButtonClick';
import ChangeEvent from './components/ChangeEvent';
import ParentChild from './components/ParentChild';
import PassingArguments from './components/PassingArguments';
import UpdatingState from './components/UpdatingState';
import UseCallBack from './components/UseCallBack';
import UseEffect from './components/UseEffect';

const App = () => {

  return (
    <div>
      <ButtonClick />
      <PassingArguments />
      <UpdatingState />
      <ChangeEvent />
      <UseEffect />
      <ParentChild />
      <UseCallBack />
    </div>
  )
}

export default App