import {
  NumberInput as MantineNumberInput,
  NumberInputProps as MantineNumberInputProps,
} from "@mantine/core";

interface NumberInputProps extends MantineNumberInputProps {
  onUpdate: (value: number) => void;
}

export const NumberInput = ({ onUpdate, ...props }: NumberInputProps) => {
  const onChange = (value: string | number) => onUpdate(+value);

  return (
    <MantineNumberInput
      className=""
      onChange={onChange}
      allowNegative={false}
      hideControls
      allowDecimal={false}
      {...props}
    />
  );
};
