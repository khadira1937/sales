"use client";

import { useState } from "react";

import { pricingSection } from "@/content/home-page";

export default function PricingSection() {
  const [connections, setConnections] = useState(1);

  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-bg-overlay"></div>
      <div className="section-container">
        <h2 className="section-title white">{pricingSection.title}</h2>
        <h3 className="pricing-subtitle">{pricingSection.subtitle}</h3>

        <div className="plans-section">
          <div className="connection-toggle">
            {[1, 2].map((connectionCount) => (
              <button
                key={connectionCount}
                type="button"
                id={`toggle-${connectionCount}`}
                className={`toggle-btn${connections === connectionCount ? " active" : ""}`}
                onClick={() => setConnections(connectionCount)}
              >
                {connectionCount} Connection{connectionCount > 1 ? "s" : ""}
              </button>
            ))}
          </div>

          <div className="plans-grid" id="plans-grid">
            {pricingSection.plans.map((plan) => (
              <div
                key={plan.plan}
                className={`plan-card${plan.premium ? " premium" : ""}`}
                data-plan={plan.plan}
              >
                <h4 className="plan-title" data-base-text={plan.title}>
                  {plan.title}
                </h4>
                <div className="plan-price">
                  <div className="past-price">
                    <span
                      className="past-amount"
                      data-past1={plan.pastPrice[1]}
                      data-past2={plan.pastPrice[2]}
                    >
                      {plan.pastPrice[connections]}
                    </span>
                  </div>
                  <span className="currency">&pound;</span>
                  <span
                    className="amount"
                    data-price1={plan.price[1]}
                    data-price2={plan.price[2]}
                  >
                    {plan.price[connections]}
                  </span>
                </div>
                <a
                  className="plan-btn"
                  data-href1="#pricing"
                  data-href2="#pricing"
                  href="#pricing"
                >
                  Get Started
                </a>
                <ul className="plan-features">
                  {pricingSection.features.map((feature) => (
                    <li key={`${plan.plan}-${feature}`}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
