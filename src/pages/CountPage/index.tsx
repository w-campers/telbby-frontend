import React, { FC } from 'react';

import { useCountValue, useSetCount } from '@/atoms/countState';
import Navigation from '@/components/Navigation';

const CountPage: FC = () => {
  const count = useCountValue();
  const setCount = useSetCount();

  const onPlus = () => setCount(count + 1);
  const onMinus = () => setCount(count - 1);

  return (
    <>
      <Navigation />
      <h1>Count</h1>
      <h2>{count}</h2>

      <div>
        <button type="button" onClick={onPlus}>
          +
        </button>
        <button type="button" onClick={onMinus}>
          -
        </button>
      </div>
    </>
  );
};

export default CountPage;
