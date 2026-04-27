---
title: Near-Zero Transaction Costs
description: When sending money costs €0.002 and takes 0.3 seconds, the economics of the single market change. Not incrementally — structurally.
tags: ["payments", "sepa", "transaction-costs", "single-market", "freelancers", "eu-reform"]
author: zentala
---

# Near-Zero Transaction Costs

Let me be specific about what "near-zero" means, because this phrase is used loosely
in policy documents and I find that counterproductive.

The ECB's TARGET Instant Payment Settlement platform settles a euro transfer between
banks for €0.002 per transaction — two hundredths of a euro cent. That is the
infrastructure cost. It exists now. It works now.

At the end-user level, it is more complicated. The 2024 Instant Payments Regulation
mandates that banks cannot charge more for an instant payment than for a standard
SEPA transfer. Most banks in the EU currently charge between €0 and €0.50 for
domestic SEPA transfers. Cross-border transfers within the eurozone are regulated
to cost the same as domestic ones under Regulation 924/2009.

So the question is not "can this be near-zero?" The answer to that is already yes.
The question is: "why isn't it near-zero for everyone, right now?"

## The Cost Structure Nobody Talks About

For consumers moving money between personal bank accounts, SEPA transfers are often
free or close to it. The problem is not consumer P2P payments. The problem is
business payments and merchant costs.

When a customer pays a Polish freelancer by card — the mechanism most EU clients
default to — the merchant (the freelancer) pays:

- **Interchange fee**: capped at 0.3% for consumer credit cards, 0.2% for debit
  under the EU Interchange Fee Regulation
- **Scheme fee**: Visa or Mastercard's cut, not capped
- **Acquirer fee**: the freelancer's payment processor takes its share
- **Currency conversion**: if the invoice is in euros but the freelancer's account
  is in PLN, there is another cost layer

Add these up and a Polish freelancer receiving payment from an Amsterdam client
might lose 1.5–2.5% of the invoice value before it lands in their account. On a
€3,000 monthly invoice, that is €45–75 every month, €540–900 per year, extracted
silently from the economic activity of the single market.

This is not a small number for someone starting out. It is a structural tax on
cross-border economic participation — disproportionately affecting exactly the people
the single market was supposed to empower.

## What "Near-Zero" Would Actually Unlock

I want to ground this in a concrete scenario rather than abstract percentages.

Imagine a Polish freelancer — a UX designer — with three regular clients: one in
Barcelona, one in Berlin, one in Amsterdam. She invoices roughly €4,000/month total.
Under the current system:

- Each client pays by bank transfer or card
- Processing fees across all three payments: €60–120/month
- Settlement lag (even with instant payments not yet universal): 1–3 days
- Reconciliation overhead: manually tracking three cross-border payments,
  sometimes with differing references and conversion delays

Under a fully operational Unified Payment Zone with near-zero costs and instant
settlement:

- Each client initiates a SEPA Instant transfer
- Money appears in her account within 10 seconds
- Total payment infrastructure cost: €0.006 (three transfers × €0.002)
- Reconciliation: instant, with clean transaction references

The freelancer gains back €720–1,440 per year in fees. She gains back mental
overhead — no more chasing delayed payments, no more three-day gaps before
she knows if a client actually paid. She gains access to her money in real time,
which matters if she has her own suppliers or tools to pay.

Multiply this across four million Polish workers who have emigrated to other EU
countries, across six million EU citizens who provide freelance services across
borders, and the aggregate recaptured economic value is significant.

## The Merchant Problem: Where the Fees Actually Live

The consumer experience of paying is largely invisible in terms of cost — it is
the merchant, the freelancer, the small business that absorbs the card network fees.
This is structurally odd: the entity with less bargaining power pays the highest
relative cost.

The EU addressed this in 2015 with the Interchange Fee Regulation — capping the
per-transaction fee that flows back to the cardholder's bank. But scheme fees
(Visa and Mastercard's own take) are not capped. Processing fees charged by
payment service providers are not capped. The result is that even after regulation,
small merchants pay 1–2.5% on every card transaction.

The digital euro — if it achieves broad enough adoption — could bypass this
structure entirely. A payment made directly in digital euros through a sovereign
payment rail would not carry interchange fees. The ECB has been explicit that
the digital euro will not charge scheme fees. This is the economic argument for the
digital euro that I find most compelling — not the technology, not the blockchain
question, but the merchant fee elimination.

The challenge is adoption. China's e-CNY experience demonstrates that a technically
superior payment system does not automatically displace incumbents with better UX
and network effects. WeChat Pay and Alipay were already near-zero-cost and instant
for Chinese users. European users are in a different position — card payments are
genuinely more expensive for merchants here — which gives the digital euro a clearer
value proposition. But the adoption chicken-and-egg problem is real.

## The Remittance Dimension

Cross-border payments within the EU are one thing. Remittances from EU residents to
family outside the EU are another category with even higher costs.

The average global remittance cost is still around 6% as of 2024, despite significant
progress over the past decade. For Polish workers sending money to Ukraine — which has
become more economically relevant since 2022 — the corridor has improved but still
carries meaningful fees. For Romanian workers sending money home, similar dynamics apply.

SEPA Instant does not cover non-SEPA countries. The digital euro would not cover them
either, at least not in the initial design. Cross-border CBDC interoperability requires
a separate layer of infrastructure — what the BIS calls "multilateral platforms" or
"interlinking fast payment systems." This is where the real technical and political
complexity lives, and where the EU's current roadmap is least developed.

I mention this because the "near-zero" promise is most valuable for exactly the people
who most need it — workers whose families are in economically adjacent but non-EU
countries — and this is precisely where the current design does not yet deliver.

## The Infrastructure Argument, Restated Simply

I keep coming back to the same analogy: roads.

Nobody argues that roads should charge per kilometer and extract 1.5% of your journey
value as a fee to a US infrastructure company. Roads are public goods. They enable
economic activity. They are built and maintained with public money because the aggregate
economic value they create is orders of magnitude larger than the cost of building them.

Payment infrastructure is the same category of thing. Money moves through it like goods
move through roads. When it is slow and expensive, every transaction is taxed. When it
is fast and free, economic activity accelerates in ways that are hard to measure but
structurally real.

The EU has an electricity single market. It has a transport single market. It does not
yet have a functioning payment single market in the sense that money moves as freely and
cheaply between member states as it does within them. This is a gap — a gap that
benefits private intermediaries and no one else.

## What €0 and 0.3 Seconds Means for a Polish Freelancer

I started this page with infrastructure costs. I want to end with something more personal.

I am part of a generation of Polish professionals who grew up in the EU, who work across
EU borders, and for whom the "single market" is not an abstraction — it is the daily
reality of invoicing clients in different countries, receiving payments in different
currencies, and losing money to systems that should not exist in a properly functioning
economic union.

When sending money from Warsaw to Barcelona costs €0 and takes 0.3 seconds, something
concrete changes. Not just for me. For every freelancer, every small business, every
family sending support across a border.

It means payment risk disappears — you know instantly whether you were paid, not after
three days of uncertainty. It means working capital improves — you can pay your own
suppliers or tools as soon as you receive payment, not days later. It means the
administrative overhead of cross-border work collapses — no more reconciling mysterious
bank charges, no more currency conversion markups buried in exchange rates.

It means that the single market functions the way its architects claimed it would.

That is not a small thing. That is the whole point.

The infrastructure needed to achieve this is largely built. The SEPA Instant framework
exists. The TIPS platform runs at €0.002 per transaction. The regulatory mandate for
universal adoption was passed in 2024. The digital euro is on a trajectory to eliminate
merchant fees from sovereign payment rails by 2029.

What remains is enforcement, adoption, and political will to treat this as the
infrastructure priority it is — rather than leaving it to be solved by private
intermediaries who profit from the gap.

The [previous page](/book/unified-payment-zone) covers the infrastructure architecture.
This page is about what it costs when we fail to build it — and what it unlocks when
we do.
