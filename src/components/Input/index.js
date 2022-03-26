import React from "react";

import { Input } from "./styles";

const TextBox = React.forwardRef((props,ref) => {

    return <Input ref={ref} type={"text"} placeholder={"XXX-9999"} maxLength={7} pattern="[a-zA-Z0-9]" >{props.children}</Input>
})

export default TextBox