import {NumberInput as MantineNumberInput, NumberInputProps as MantineNumberInputProps} from "@mantine/core";
import React from "react";

interface NumberInputProps extends MantineNumberInputProps {
    onUpdate: (value: number) => void;
}

export const NumberInput = (props: NumberInputProps) => {

    const onChange = (value: string | number) => props.onUpdate(+value)

    return <MantineNumberInput className="border-2 border-gray-400 w-fit rounded" onChange={onChange} allowNegative={false} hideControls allowDecimal={false} {...props}/>

}
