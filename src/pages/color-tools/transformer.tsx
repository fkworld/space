import { Button, Card, Form, Input, InputNumber, Typography } from 'antd';
import Color from 'color';
import { FC, useState } from 'react';

type FormValues = {
  color: string;
  opacity?: number;
};

export const Transformer: FC = () => {
  const [color, setColor] = useState<Color>(new Color('#00000080'));

  const colorTargets: Array<{ title: string; value: string | number }> = [
    { title: 'rgb', value: `rgb(${color.red()},${color.green()},${color.blue()})` },
    { title: 'rgba', value: `rgba(${color.red()},${color.green()},${color.blue()},${color.alpha().toFixed(1)})` },
    { title: 'hex', value: color.hex() },
    { title: 'hexa', value: color.hexa() },
    { title: 'opacity', value: color.alpha() },
  ];

  function onFinish(formValues: FormValues) {
    let newColor = new Color(formValues.color);
    if (formValues.opacity) {
      newColor = newColor.alpha(formValues.opacity);
    }
    setColor(newColor);
  }

  return (
    <div>
      <Typography.Title level={3}>Transformer</Typography.Title>
      <div className="flex gap-16px">
        <Card className="flex-1" title="color source">
          <Form<FormValues> layout="vertical" onFinish={onFinish}>
            <Form.Item<FormValues>
              extra="rgb/rgba/hex/hexa 字符串"
              label="color"
              name="color"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item<FormValues> extra="0-1，如果写了值，则会覆盖 color" label="opacity" name="opacity">
              <InputNumber max={1} min={0} />
            </Form.Item>
            <Form.Item className="text-right">
              <Button htmlType="submit" type="primary">
                submit
              </Button>
            </Form.Item>
          </Form>
        </Card>

        <Card className="flex-1" title="color target">
          <div className="min-h-100px flex flex-col gap-16px">
            <div className="h-50px w-50px" style={{ backgroundColor: color.hexa() }} />
            {colorTargets.map((item) => (
              <div key={item.title}>
                <div>{item.title}</div>
                <Typography.Text copyable>{item.value}</Typography.Text>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
