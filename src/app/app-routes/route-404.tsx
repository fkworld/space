import { Result } from 'antd'
import { FC } from 'react'

export const Route404: FC = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="你访问了一个不存在的页面，请检查网址输入是否正确，或者联系开发团队。"
    />
  )
}
