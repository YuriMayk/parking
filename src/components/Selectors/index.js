import React, { Children } from "react";

import { Button as Select } from "./styles";

function SelectButton (children) {

    return <Select type="button">{children}</Select>
}

export default SelectButton