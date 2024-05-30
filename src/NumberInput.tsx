import {NumberInput as MantineNumberINput, NumberInputProps as MantineNumberInputProps} from "@mantine/core";
import React from "react";

interface NumberInputProps extends MantineNumberInputProps {
    onUpdate: (value: number) => void;
}

export const NumberInput = (props: NumberInputProps) => {

    const onChange = (value: string | number) => props.onUpdate(+value)

    return <MantineNumberINput onChange={onChange} allowNegative={false} hideControls allowDecimal={false} {...props}/>

}
