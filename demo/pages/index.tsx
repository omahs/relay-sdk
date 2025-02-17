import { NextPage } from 'next'
import Link from 'next/link'

const Index: NextPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        gap: 12,
        padding: 24,
        flexDirection: 'column',
        alignItems: 'flex-start'
      }}
    >
      <h2>SDK Write Actions</h2>
      <nav style={{ display: 'flex', gap: 15 }}>
        <Link href="/sdk/actions/call">Call</Link>
        <Link href="/sdk/actions/bridge">Bridge</Link>
        <Link href="/sdk/actions/swap">Swap</Link>
      </nav>
      <h2>SDK Read Actions</h2>
      <nav style={{ display: 'flex', gap: 15 }}>
        <Link href="/sdk/actions/getSolverCapacity">getSolverCapacity</Link>
        <Link href="/sdk/actions/getCallQuote">getCallQuote</Link>
        <Link href="/sdk/actions/getBridgeQuote">getBridgeQuote</Link>
        <Link href="/sdk/actions/getSwapQuote">getSwapQuote</Link>
      </nav>
    </div>
  )
}

export default Index
