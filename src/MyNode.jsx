import { Component } from "react";

export default class MyNode extends Component {
  render() {
    const myInputRef = this.props.inputRef(this);
    const onClick = () => {
      myInputRef.current.focus()
    };
    return (
      <div>
        <button onClick={onClick}>Focus</button>
        <input className="input" ref={(ref) => myInputRef.current = ref} />
      </div>
    );
  }
}
