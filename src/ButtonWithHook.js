import React, { useState } from "react";

function ButtonWithHook() {
    const [count, setCount] = useState(0);

    return (
    <button onClick={() => setCount(count + 1)}>Functional component with useState Hook {count}</button>
    );
}

export default ButtonWithHook;