import { ActionIcon, CopyButton, NumberInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import Color from "color";
import type { FC } from "react";
import { useState } from "react";

export const Transformer: FC = () => {
  const [color, setColor] = useState<Color>(new Color("#00000080"));

  const form = useForm({
    initialValues: {
      colorString: color.hexa(),
      colorAlpha: color.alpha(),
    },
  });

  const colorTargets: Array<{ title: string; value: string }> = [
    {
      title: "rgb",
      value: `rgb(${color.red()},${color.green()},${color.blue()})`,
    },
    {
      title: "rgba",
      value: `rgba(${color.red()},${color.green()},${color.blue()},${color.alpha().toFixed(2)})`,
    },
    { title: "hex", value: color.hex() },
    { title: "hexa", value: color.hexa() },
    { title: "opacity", value: color.alpha().toFixed(2) },
  ];

  function submitColorString(colorString: string) {
    try {
      const newColor = new Color(colorString);
      setColor(newColor);
      form.setFieldValue("colorAlpha", newColor.alpha());
    } catch (error) {
      form.setFieldError("colorString", (error as Error).message);
    }
  }

  return (
    <div className="flex flex-col gap-16">
      <TextInput
        {...form.getInputProps("colorString")}
        className="w-256"
        label="color"
        onBlur={(e) => {
          submitColorString(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            submitColorString(e.currentTarget.value);
          }
        }}
      />

      <NumberInput
        {...form.getInputProps("colorAlpha")}
        className="w-128"
        decimalScale={2}
        fixedDecimalScale
        label="alpha"
        max={1}
        min={0}
        step={0.1}
        onChange={(value) => {
          setColor(color.alpha(Number(value)));
          form.setFieldValue("colorAlpha", Number(value));
        }}
      />

      <div
        className="h-64 w-64"
        style={{ backgroundColor: color.hexa() }}
      />

      {colorTargets.map((item) => (
        <div key={item.title}>
          <div>{item.title}</div>
          <div>{item.value}</div>
          <CopyButton value={item.value}>
            {({ copied, copy }) => (
              <ActionIcon
                color={copied ? "teal" : "gray"}
                variant="subtle"
                onClick={copy}
              >
                {copied ? <IconCheck /> : <IconCopy />}
              </ActionIcon>
            )}
          </CopyButton>
        </div>
      ))}
    </div>
  );
};
