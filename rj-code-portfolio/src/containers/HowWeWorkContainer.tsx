import React from 'react';
import HowWeWorkCard from "../components/ui/HowWeWorkCard";

export default function HowWeWorkContainer() {
  return (
    <section className="w-full py-12 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4 animate-slideDown">
          A transparent process
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto animate-fadeIn">
          Step by step, we&apos;ll turn your vision into reality
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="animate-cardSlideUp" style={{ animationDelay: '0ms' }}>
            <HowWeWorkCard
              stepNumber={1}
              icon="💬"
              title="Consultations"
              content="We start with a conversation to understand your needs, business goals, and expectations. Together, we define the project vision and scope."
            />
          </div>
          <div className="animate-cardSlideUp" style={{ animationDelay: '150ms' }}>
            <HowWeWorkCard
              stepNumber={2}
              icon="🛠️"
              title="Solution Proposal"
              content="We create a tailored solution that best fits your requirements. We present a detailed action plan, estimated timeline, and project cost."
            />
          </div>
          <div className="animate-cardSlideUp" style={{ animationDelay: '300ms' }}>
            <HowWeWorkCard
              stepNumber={3}
              icon="💻"
              title="Project Implementation"
              content="Once approved, we begin the implementation process. We use proven technologies and adhere to the highest coding standards. You'll be regularly updated on the progress."
            />
          </div>
          <div className="animate-cardSlideUp" style={{ animationDelay: '450ms' }}>
            <HowWeWorkCard
              stepNumber={4}
              icon="✅"
              title="Testing and Deployment"
              content="Before the final release, the project undergoes rigorous testing to ensure everything works flawlessly. We also assist you with deployment and product launch."
            />
          </div>
        </div>

        <div className="text-center mt-12 animate-fadeInUp" style={{ animationDelay: '600ms' }}>
          <p className="text-2xl text-gray-800 font-semibold mb-6">
            Ready to get started? Contact us and see how we can help you!
          </p>
        </div>
      </div>
    </section>
  );
}
