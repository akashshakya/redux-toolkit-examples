import React from 'react'

// useSelector to use the state
// useDispatch to dispatch the action
import { useSelector, useDispatch } from 'react-redux'

// importing action creator
import { increment, decrement } from './counterSlice'

export default function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();

    return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
