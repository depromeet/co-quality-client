import React from 'react'

type Props = {
  children: React.ReactNode
}

/**
 * 이곳에 레이아웃을 구현해주세요.
 */
const Layout: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>
}

export default Layout
