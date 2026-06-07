# Bounty Hunter Agent Wallet Setup

**Public Address:**
`Fnt4656kjRwk4umnHcsu1tbNSZ6HPvvsebAz1evtJQNe`

**Token CA:** `FfnM3eTAaYawRJzsQpaQPvvXi6kcsWcVJViDCNsXpump` ([pump.fun](https://pump.fun/FfnM3eTAaYawRJzsQpaQPvvXi6kcsWcVJViDCNsXpump)) — $HUNT on pump.fun via Genesis

This address is referenced in:
- `src/App.tsx` (live balance fetch + display)
- `agent-wallet.json`
- `README.md`

The site now shows the **live on-chain balance** for this wallet.

## What this agent does (the new idea)

The **Bounty Hunter Agent** (new agents + bounties concept):

- **Searches** platforms (pump.fun GO, on-chain bounties, etc.) for tasks that agents can complete.
- **Claims** the bounties it can handle.
- **Completes** them autonomously (on-chain actions, proofs, data tasks, etc.).
- **Collects** the rewards into this treasury.

The token backs it:
- Creator fees → this wallet.
- Bounty rewards earned by the agent → this wallet too.
- Transparent live balance on the site.

Flywheel: token trading success funds the hunter → hunter completes bounties and earns → treasury grows.

## How to use with your wallet

Wallet is set to: `Fnt4656kjRwk4umnHcsu1tbNSZ6HPvvsebAz1evtJQNe`

When you launch the token on pump.fun, use this address as the creator/withdrawal so fees route here.

Provide the real CA / pump.fun link whenever ready and I'll update the badge, links, meta, and docs everywhere (same flow as the previous Bounty Agents site).

## Secret Key Rules (critical)

- This is a **real treasury wallet**.
- Store the secret key **offline only** (password manager, hardware wallet, encrypted backup).
- **NEVER** commit the secret to this repo or any code.
- **NEVER** share the secret.
- The public address is safe to show on the site.

## Genesis Integration

In your Genesis agent launchpad, spawn a "Bounty Hunter Agent" child with a purpose like:

"Search pump.fun GO and bounty sources for tasks agents can complete. Claim and execute them. Route rewards and ops through the treasury wallet Fnt4656kjRwk4umnHcsu1tbNSZ6HPvvsebAz1evtJQNe. Prioritize verifiable high-value bounties."

The site itself stays a simple, static, client-side React app (no backend) that just explains the concept and shows the live treasury balance + future bounty list.

## Live Data Note

The balance on the site is fetched live client-side with @solana/web3.js (mainnet). It will now show the real balance for Fnt4656kjRwk4umnHcsu1tbNSZ6HPvvsebAz1evtJQNe.

Once the token launches and the agent starts hunting, the treasury will grow from both creator fees and completed bounty rewards.
