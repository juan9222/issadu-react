import {useRef, useState} from 'react';
// Two arguments, the value and is prop
export default function useAsyncReference(value, isProp = false) {
    const ref = useRef(value);
    const [, forceRender] = useState(false);
  
    function updateState(newState) {
      ref.current = newState;
      forceRender(s => !s);
    }
  
    if (isProp) {
      ref.current = value;
      return ref;
    }
  
    return [ref, updateState];
}