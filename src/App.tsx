import { ArrowRight, ExternalLink } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Connection, PublicKey } from '@solana/web3.js'

const HUNTER_AGENT_WALLET = 'Fnt4656kjRwk4umnHcsu1tbNSZ6HPvvsebAz1evtJQNe';

function App() {
  const [balance, setBalance] = useState<string | null>(null)
  const [loadingBalance, setLoadingBalance] = useState(true)

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const connection = new Connection('https://api.mainnet-beta.solana.com')
        const pubkey = new PublicKey(HUNTER_AGENT_WALLET)
        const balLamports = await connection.getBalance(pubkey)
        const balSol = (balLamports / 1_000_000_000).toFixed(4)
        setBalance(balSol)
      } catch (err) {
        console.error('Failed to fetch balance:', err)
        setBalance('N/A')
      }
      setLoadingBalance(false)
    }
    fetchBalance()
  }, [])

  return (
    <div className="min-h-screen bg-[#09090b] text-[#a1a1aa]">
      {/* Navbar */}
      <nav className="border-b border-[#27272a] bg-[#09090b]/95 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src={`${import.meta.env.BASE_URL}logo-v2.svg`} alt="Bounty Hunter Agents" className="w-9 h-9" />
            <div className="hidden sm:block">
              <div className="font-semibold text-white tracking-tight">Bounty Hunter Agents</div>
              <div className="text-[10px] text-[#71717a] -mt-1.5">$HUNT</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#bounties" className="hover:text-white transition-colors">Bounties</a>
            <a href="#wallet" className="hover:text-white transition-colors">Wallet</a>
          </div>

          <a 
            href="https://pump.fun/FfnM3eTAaYawRJzsQpaQPvvXi6kcsWcVJViDCNsXpump" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-2xl bg-[#a5b4fc] text-[#1e1b4b] font-medium text-sm hover:bg-white transition-all"
          >
            Buy $HUNT on pump.fun <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </nav>

      {/* Hero - Explain what the agent does */}
      <div className="max-w-3xl mx-auto px-6 pt-16 pb-20 text-center">
        <div className="flex justify-center mb-8">
          <img src={`${import.meta.env.BASE_URL}logo-v2.svg`} alt="Bounty Hunter Agents" className="w-20 h-20" />
        </div>

        <h1 className="text-5xl md:text-6xl font-semibold tracking-[-2px] text-white mb-6">
          The Bounty Hunter Agent
        </h1>

        <p className="text-xl text-[#a1a1aa] max-w-md mx-auto mb-6">
          Funded entirely by $HUNT creator fees. This single autonomous agent searches for bounties that agents can complete, claims and executes them, and grows the treasury with rewards.
        </p>

        {/* Prominent Token CA badge */}
        <div className="max-w-md mx-auto mb-8">
          <div className="inline-flex items-center gap-2 bg-[#111113] border border-[#27272a] rounded-full px-4 py-1.5 text-sm">
            <span className="text-[#71717a]">Token CA</span>
            <code 
              onClick={(e) => {
                navigator.clipboard.writeText('FfnM3eTAaYawRJzsQpaQPvvXi6kcsWcVJViDCNsXpump');
                const el = e.currentTarget;
                const orig = el.textContent;
                el.textContent = 'Copied!';
                setTimeout(() => { if (el) el.textContent = orig; }, 1500);
              }}
              className="font-mono text-[#6366f1] cursor-pointer hover:underline select-all break-all"
            >
              FfnM3eTAaYawRJzsQpaQPvvXi6kcsWcVJViDCNsXpump
            </code>
            <a 
              href="https://pump.fun/FfnM3eTAaYawRJzsQpaQPvvXi6kcsWcVJViDCNsXpump" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#6366f1] hover:text-white"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="text-[10px] text-[#71717a] mt-1.5">on pump.fun</div>
        </div>

        <a 
          href="https://pump.fun/FfnM3eTAaYawRJzsQpaQPvvXi6kcsWcVJViDCNsXpump" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#a5b4fc] text-[#1e1b4b] font-medium px-8 py-3.5 rounded-2xl text-base hover:bg-white transition"
        >
          Buy $HUNT on pump.fun <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Bounties / Hunts created by the agent */}
      <div id="bounties" className="max-w-4xl mx-auto px-6 py-12 border-t border-[#27272a]">
        <div className="text-center mb-8">
          <div className="text-[#6366f1] text-xs tracking-[3px] mb-2">BOUNTIES</div>
          <h2 className="text-white text-3xl tracking-tight">Hunted &amp; Completed by the Agent</h2>
        </div>

        <div className="text-center py-12 text-[#a1a1aa] text-sm border border-[#27272a] rounded-2xl bg-[#0a0a0c]">
          Bounties the agent discovers, claims, and completes will appear here live after launch.
        </div>
      </div>

      {/* Agent Wallet - fees + rewards in the wallet */}
      <div id="wallet" className="max-w-4xl mx-auto px-6 py-12 border-t border-[#27272a]">
        <div className="text-center mb-8">
          <div className="text-[#6366f1] text-xs tracking-[3px] mb-2">AGENT WALLET</div>
          <h2 className="text-white text-3xl tracking-tight">Fees + Rewards in the Treasury</h2>
          <div className="mt-2 font-mono text-xs text-[#a1a1aa] break-all">
            {HUNTER_AGENT_WALLET}
          </div>
          <div className="text-[10px] text-[#71717a] mt-1">(This address receives 100% of $HUNT creator fees + bounty rewards earned by the agent)</div>
        </div>

        <div className="text-center mt-4 text-sm text-[#a1a1aa]">
          Current balance: <span className="font-mono text-white">{loadingBalance ? '...' : `${balance} SOL`}</span> (live from on-chain)
        </div>
      </div>

      {/* Simple CTA */}
      <div className="border-t border-[#27272a] py-12 bg-[#111113] text-center">
        <a 
          href="https://pump.fun/FfnM3eTAaYawRJzsQpaQPvvXi6kcsWcVJViDCNsXpump" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#a5b4fc] text-[#1e1b4b] font-medium px-8 py-3.5 rounded-2xl text-base hover:bg-white transition"
        >
          Buy $HUNT on pump.fun <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <footer className="py-8 text-center text-xs text-[#71717a] border-t border-[#27272a]">
        From the <a href="https://nostalgicgarethdev.github.io/genesis" target="_blank" rel="noopener noreferrer" className="text-[#6366f1]">Genesis</a> agent launchpad.
      </footer>
    </div>
  )
}

export default App
