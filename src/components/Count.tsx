import { useCounterState } from '../store/useCounterState';

const Count = () => {
  const { count, inc, dec, reset } = useCounterState();
  return (
    <div>
      <p>Count App</p>
      <p>{count}</p>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <button onClick={reset}>초기화</button>
    </div>
  );
};

export default Count;
