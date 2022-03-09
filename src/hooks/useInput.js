const { useState } = require("react");

function useImput(){
    const [value, setValue] = useState("");

    const onChange = (e) => {
        setValue(e.target.value);
    };
    return {value, onChange};
}

export default useImput