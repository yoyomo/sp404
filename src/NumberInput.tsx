import { NumberInput as MantineNumberInput, NumberInputProps as MantineNumberInputProps } from "@mantine/core";

interface NumberInputProps extends MantineNumberInputProps {
    onUpdate: (value: number) => void;
}

export const NumberInput = (props: NumberInputProps) => {

    const onChange = (value: string | number) => props.onUpdate(+value)

    return <MantineNumberInput className="" onChange={onChange} allowNegative={false} hideControls allowDecimal={false} {...props} />

}
