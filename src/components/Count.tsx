import { useCounterState } from '../store/useCounterState';

const Count = () => {
  const { count, inc, dec, reset } = useCounterState();

  const resetStorage = () => {
    // 스토리지 초기화 하기
    useCounterState.persist.clearStorage();
  };
  return (
    <div>
      <p>Count App</p>
      <p>{count}</p>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <button onClick={reset}>초기화</button>
      <button onClick={resetStorage}>스토리지초기화</button>
    </div>
  );
};

export default Count;
