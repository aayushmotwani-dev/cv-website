const fs = require('fs');

let html = fs.readFileSync('c:/Users/aayus/OneDrive/Desktop/My personal cv website/index.html', 'utf8');

const tsdEntry = `    {
      when: {en: "Jun 2020 – Jul 2022 · Part-time", de: "Jun 2020 – Jul 2022 · Teilzeit"},
      org: "TSD Corporation Limited",
      role: {en: "Digital Marketing Intern", de: "Praktikant Digital Marketing"},
      loc: {en: "Remote", de: "Remote"},
      bullets: [
        {en: "Analysed campaign data and produced Excel reports for client projects.", de: "Analyse von Kampagnendaten und Erstellung von Excel-Berichten für Kundenprojekte."}
      ],
      tags: [
        "Digital Marketing", 
        {en: "Data Analysis", de: "Datenanalyse"}, 
        "Excel"
      ]
    },`;

const tkEntry = `,
    {
      when: {en: "Dec 2018 – Feb 2019", de: "Dez 2018 – Feb 2019"},
      org: "Techniker Krankenkasse (TK)",
      role: {en: "Customer Advisor", de: "Kundenberater"},
      loc: {en: "Germany", de: "Deutschland"},
      bullets: [
        {en: "Handled sales for Techniker Krankenkasse.", de: "Zuständig für den Vertrieb der Techniker Krankenkasse."}
      ],
      tags: [
        {en: "Sales", de: "Vertrieb"},
        {en: "Customer Service", de: "Kundenservice"}
      ]
    }`;

// 1. Replace FH Aachen with TSD
html = html.replace(/\{\s*when:\s*\{en:\s*"Oct 2023 – Mar 2024"[\s\S]*?DaVinci Resolve"\}\s*\]\s*\},/, tsdEntry);

// 2. Append TK at the end of the experience array
html = html.replace(/(\s*)\}\s*\]\s*,\s*education:/, `    }${tkEntry}\n  ],\n  education:`);

fs.writeFileSync('c:/Users/aayus/OneDrive/Desktop/My personal cv website/index.html', html);
console.log("Updated experience array!");
