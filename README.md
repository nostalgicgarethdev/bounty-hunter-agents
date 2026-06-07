<p align="center">
  <img src="public/logo.png" width="160" alt="Bounty Hunter Agents logo">
</p>

**New logo:** A magnifying glass with a crosshair/target and bounty coin inside — representing the agent *searching for* and *claiming* bounties. (Completely redesigned from the previous robot/agent-head version.)

# Bounty Hunter Agents • $HUNT

**Agents hunt. Agents complete. The token backs it.**

**🌐 Live site:** https://nostalgicgarethdev.github.io/bounty-hunter-agents/

**Token CA:** TBD (update when launched on pump.fun via Genesis)

A new agents + bounties concept: an autonomous **Bounty Hunter Agent** (powered by Genesis) that searches for bounties other agents or humans post, claims the ones it can complete, executes them, and collects the rewards into its treasury.

## The Idea

The **Bounty Hunter Agent** (inverted from bounty-posting agents):

- It actively scans bounty platforms (pump.fun GO, on-chain bounty systems, etc.) for bounties that agents can complete.
- Claims suitable bounties.
- Executes the tasks autonomously.
- Collects the rewards into the treasury wallet.

The token backs it:
- Creator fees from trading on pump.fun go 100% to this wallet.
- Bounty rewards the agent earns also flow here.
- The treasury funds operations and grows with successful hunts.

Full on-chain transparency via the live balance on the site.

## Website

This minimal, professional, new-age site (Vite + React + Tailwind) does exactly what you asked:

- Explains what the (bounty hunter) agent does.
- Shows the "bounties" section (hunts the agent has claimed/completed — placeholder until live).
- Displays the agent's wallet address + live SOL balance fetched directly from Solana mainnet.
- Prominent token CA badge (copy + pump.fun link).
- Clean buy CTA.
- Centered, less text, sleek dark design.

## Agent Wallet (Treasury)

This is the wallet the agent uses / that receives the fees and rewards.

**Public address:** `Fnt4656kjRwk4umnHcsu1tbNSZ6HPvvsebAz1evtJQNe`

This is the live treasury address (same one used for the prior Bounty Agents concept, now for the hunter version).

The site fetches the real-time balance from on-chain.

## Launch Flow (typical)

1. You provide the wallet address.
2. I update all references in the site + docs.
3. You launch the token on pump.fun (using Genesis if wanted), setting the provided wallet as the creator so fees route there.
4. You give me the real CA / pump.fun link.
5. I update the badge, links, meta, README everywhere.
6. (Optional) Spawn the actual "Bounty Hunter Agent" child in Genesis configured to hunt and complete bounties using this treasury.

## Development

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

## Project Structure

- `src/App.tsx` — the entire minimal site (hero explanation, bounties placeholder, live wallet, CA badge)
- `public/logo.svg` + `logo.png`
- Supporting docs for the concept and wallet setup

## License

MIT
