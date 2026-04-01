import { seoContent } from "@/content/home-page";

import FaqAccordion from "@/components/home/FaqAccordion";

function SeoTable({ table, emphasizeFirstCell = false }) {
  return (
    <div className="seo-table-wrap">
      <table>
        <thead>
          <tr>
            {table.headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row.join("-")}>
              {row.map((cell, index) => (
                <td key={`${row[0]}-${index}`}>
                  {emphasizeFirstCell && index === 0 ? <strong>{cell}</strong> : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SeoSection() {
  return (
    <section className="seo-section" id="faq">
      <div className="section-container">
        <div className="seo-content">
          <h2>{seoContent.title}</h2>
          <p>{seoContent.intro}</p>

          <h3>{seoContent.performanceHeading}</h3>
          <ul>
            {seoContent.performanceList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3>{seoContent.cableComparisonHeading}</h3>
          <SeoTable table={seoContent.cableComparisonTable} />

          <h3>{seoContent.subscriptionHeading}</h3>
          {seoContent.subscriptionOptions.map((option) => (
            <p key={option.label}>
              <strong>{option.label}</strong> {option.text}
            </p>
          ))}

          <h3>{seoContent.maximiseHeading}</h3>
          <ol>
            {seoContent.maximiseList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>

          <h3>{seoContent.providerComparisonHeading}</h3>
          <SeoTable table={seoContent.providerComparisonTable} emphasizeFirstCell />

          <FaqAccordion items={seoContent.faqItems} />

          <h3>{seoContent.conclusionHeading}</h3>
          <p>{seoContent.conclusion}</p>
        </div>
      </div>
    </section>
  );
}
