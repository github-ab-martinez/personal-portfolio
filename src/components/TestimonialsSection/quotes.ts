export interface Quote {
  hash: string;
  name: string;
  quote: string;
  relation: string;
}

export const getQuotes = (): Quote[] => {
  return [
    {
      hash: "TommyQuote",
      name: "Tommy Ekstrand",
      quote:
        "A.b. is what I call 'humbitious', an equal combination of humble and ambitious. If you are in search of a Senior+ Software Engineer who not only drives team and product success but is also a pleasure to work with, I wholeheartedly recommend A.b.",
      relation: "Engineering Manager - BigCommerce",
    },
    {
      hash: "EricQuote",
      name: "Eric Armstrong",
      quote:
        "A.b. is the person on the team that you know can handle the most complex tasks. It's not just his expertise but also his remarkable ability to adapt and swiftly grasp new concepts. His capacity to learn and become proficient in unfamiliar areas is incredibly impressive.",
      relation: "Product Manager - BigCommerce",
    },
    {
      hash: "KevinQuote",
      name: "Kevin Carr",
      quote:
        "A.b. possesses a rare combination of technical competence and the ability to effectively communicate complex concepts. His mentorship played a pivotal role in my professional development, and I am truly grateful for the guidance he provided. ",
      relation: "Software Engineer II - BigCommerce",
    },
    {
      hash: "ChanceQuote",
      name: "Chance Navarrete",
      quote:
        "A.b. is dedicated to seeing his projects to the end, is calm under pressure, and is always willing to explain technical challenges to his non-technical colleagues. He was also instrumental in our adoption of new technology (Angular.js), and put a lot of time and effort into helping the rest of the team learn and troubleshoot their work.",
      relation: "Product Leader - Tk20",
    },
    {
      hash: "KristianQuote",
      name: "Kristian Manrique",
      quote:
        "He's the kind of developer a designer wishes to collaborate with because he approaches your ideas with a great attitude and works directly with you to bring great solutions to life. His knowledge and skills helped us work through technical constraints that ultimately led to better products for our under-served users.",
      relation: "Product Designer - Tk20",
    },
  ];
};
