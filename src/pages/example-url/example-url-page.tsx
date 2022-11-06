import { ArrowRightOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd'
import { FC, useState } from 'react'

import { clearUrl, parseUrlComplex, parseUrlSimple, syncUrlComplex, syncUrlSimple } from '@/utils'

export const ExampleUrlPage: FC = () => {
  const [simpleUrlObject, setSimpleUrlObject] = useState<Record<string, string>>({})
  const [complexUrlObject, setComplexUrlObject] = useState<Record<string, unknown>>({})

  return (
    <div>
      <h1>Example: url</h1>
      <h2>simpleUrlObject</h2>
      <p>
        simpleUrlObject 指的是 value 均为 string 类型的 object。类型签名可以写作{' '}
        {'Record<string, string>'}。其 parse 和 stringify 的内在逻辑都是使用浏览器标准的
        URLSearchParams。
      </p>
      <Space>
        <Button onClick={() => syncUrlSimple({ a: '1', b: 'true', c: '2,3,4' })}>
          sync simple url
        </Button>
        <ArrowRightOutlined />
        <Button onClick={() => setSimpleUrlObject(parseUrlSimple())}>parse simple url</Button>
        <ArrowRightOutlined />
        <Button danger onClick={() => clearUrl()}>
          clear url
        </Button>
      </Space>
      <pre>{JSON.stringify(simpleUrlObject, null, 2)}</pre>
      <h2>complexUrlObject</h2>
      <p>
        complexUrlObject 指的是 value 可以为任意类型的 object。类型签名可以写作{' '}
        {'Record<string, unknown>'}。其 parse 和 stringify 的内在逻辑是是用 JSON.parse 和
        JSON.stringify。
      </p>
      <Space>
        <Button onClick={() => syncUrlComplex({ a: 1, b: true, c: [2, 3, 4] })}>
          sync complex url
        </Button>
        <ArrowRightOutlined />
        <Button onClick={() => setComplexUrlObject(parseUrlComplex())}>parse complex url</Button>
        <ArrowRightOutlined />
        <Button danger onClick={() => clearUrl()}>
          clear url
        </Button>
      </Space>
      <pre>{JSON.stringify(complexUrlObject, null, 2)}</pre>
    </div>
  )
}
