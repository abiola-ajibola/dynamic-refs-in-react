import { useRef } from "react";


export default function SingleRefNode() {
  const myRef = useRef(null);
  const onClick = () => {
    myRef.current.focus();
  };
  return (
    <div>
      <button onClick={onClick}>Focus</button>
      <input className="input" ref={myRef} />
    </div>
  );
}
