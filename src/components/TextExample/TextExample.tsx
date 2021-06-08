import { ReactNode } from 'react'

interface TextExampleProps {
  children: ReactNode
}

export const TextExample = ({ children }: TextExampleProps) => {
  return <h1>{children}</h1>
}
