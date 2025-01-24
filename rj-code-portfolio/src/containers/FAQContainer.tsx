import FAQCard from '../components/ui/FAQCard';

export default function FAQContainer() {
  return (
    <section className="w-full max-w-4xl bg-gray-50 mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Got questions? We have answers!</h2>
      </div>
      <div className="space-y-4">
        <FAQCard
          question="What kind of projects do you work on?"
          answer="We work on a wide range of IT projects, from web applications to complex backend systems. We specialize in technologies such as React, Next.js, Node.js, MongoDB, and TailwindCSS."
        />
        <FAQCard
          question="Can you work on an existing project?"
          answer="Yes, we offer support for developing existing applications, improving their performance, or adding new features."
        />
        <FAQCard
          question="How long does it take to complete a project?"
          answer="The project timeline depends on its complexity and requirements. Smaller projects typically take a few weeks, while larger ones can take several months."
        />
        <FAQCard
          question="Do you offer technical support after the project is completed?"
          answer="Yes, we provide technical support, maintenance, and possible updates after the project is deployed."
        />
        <FAQCard
          question="What technologies do you use?"
          answer={"We use modern technologies, such as:\n• Frontend: React, Next.js, Vite, TailwindCSS\n• Backend: Node.js, Express, MongoDB\n• Others: API integrations, Microsoft Graph"}
          preserveWhitespace={true}
        />
        <FAQCard
          question="How can I start working with you?"
          answer="Simply contact us through the contact form, and we will respond within 24 hours to discuss the project details."
        />
      </div>
      <div className="text-center mt-12">
        <p className="text-xl font-medium text-gray-700 mb-6">Didn&apos;t find the answer to your question?</p>
      </div>
    </section>
  );
}