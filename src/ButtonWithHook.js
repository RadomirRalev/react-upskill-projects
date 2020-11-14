import React, { useState } from "react";

function ButtonWithHook() {
    const [count, setCount] = useState(0);

    return (
    <button onClick={() => setCount(count + 1)}>This is the hook count {count}</button>
    );
}

export default ButtonWithHook;