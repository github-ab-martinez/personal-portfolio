export interface Quote {
  hash: string;
  name: string;
  quote: string;
  relation: string;
}

export const getQuotes = (): Quote[] => {
  return [
    {
      hash: "EricQuote",
      name: "Eric Armstrong",
      quote:
        "A.b. is not just a seasoned pro but also an adaptable, patient, and fantastic communicator. If you're looking for someone who can navigate the tech world with finesse while being a joy to work with, A.b. is your person.",
      relation: "Product Manager - BigCommerce",
    },
    {
      hash: "KevinQuote",
      name: "Kevin Carr",
      quote:
        "A.b. possesses a rare combination of technical competence and the ability to effectively communicate complex concepts. His mentorship played a pivotal role in my professional development, and I am truely grateful for the guidance he provided. ",
      relation: "Software Engineer II - BigCommerce",
    },
    {
      hash: "TommyQuote",
      name: "Tommy Ekstrand",
      quote:
        "A.b. is what I call 'humbitious', an equal combination of humble and ambitious. This balance, coupled with his undeniable talent, consistently delivered outstanding results. A.b. is a natural leader who excels in navigating challenges and guiding the team with his strong communication skills. His colleagues on the team not only respect him but also trust and willingly follow his lead.",
      relation: "Engineering Manager - BigCommerce",
    },
    {
      hash: "ChanceQuote",
      name: "Chance Navarrete",
      quote:
        "A.B. is dedicated to seeing his projects to the end, is calm under pressure, and is always willing to explain technical challenges to his non-technical colleagues. He was also instrumental in our adoption of new technology (Angular.js), and put a lot of time and effort into helping the rest of the team learn and troubleshoot their work.",
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
