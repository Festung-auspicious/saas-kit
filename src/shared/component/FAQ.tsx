import React from "react";

// Add Your FAQ here
const faqData = [
  {
    question: "How long do I have access to Shiply after purchase?",
    answer: "Once you purchase Shiply, you have lifetime access to it. There are no recurring fees or expiration dates.",
  },
  {
    question: "Can I get a refund if I'm not satisfied with Shiply?",
    answer: "Shiply is yours forever after purchase, and as such, we do not offer refunds. We believe in the quality of our product and suggest reviewing all available information before purchasing.",
  },
  {
    question: "What exactly is Shiply?",
    answer: "Shiply is a boilerplate for Next.js designed to help developers deploy SaaS applications faster. It provides a robust starting point with essential configurations and integrations.",
  },
  {
    question: "What do I receive when I purchase Shiply?",
    answer: "Upon purchasing Shiply, you will receive access to a GitHub repository containing the Shiply boilerplate and comprehensive documentation to guide you through the setup and customization process.",
  },
  {
    question: "Is there support available if I encounter issues with Shiply?",
    answer: "Yes, we provide support through our dedicated help desk where you can submit any queries or issues. Our team is committed to assisting you in making the most out of Shiply.",
  }
];


const FAQ = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center max-w-7xl gap-x-40 p-8 mx-auto">
      <div>
        <h2 className="text-2xl font-bold mb-4 py-4">Frequently Asked Questions</h2>
        <h2 className="text-1xl text-primary mb-4 py-4">I hope this helps! Let me know if you need any more assistance.</h2>
      </div>
      <div className="">
        {faqData.map((faq, index) => (
            <div
              key={index}
          >
            <div
              key={index}
              tabIndex={0}
              className="collapse collapse-plus bg-base-100 focus:text-accent"
            >
              <div className="collapse-title text-xl font-medium">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p className="mt-2 text-base-content text-opacity-90">
                  {faq.answer}
                </p>
              </div>
            </div>
            { index !== faqData.length-1 &&<div className="divider"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
