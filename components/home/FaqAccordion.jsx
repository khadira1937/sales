"use client";

import { useState } from "react";

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq-accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question} className="faq-item">
            <button
              type="button"
              className="faq-question"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span>{item.question}</span>
              <i className="fas fa-chevron-down" aria-hidden="true"></i>
            </button>
            <div className={`faq-answer${isOpen ? " open" : ""}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
