import Card from "@/app/components/Card";
import React from "react";
import survey from "../../../../public/assets/surveys.png";
import booth from "../../../../public/assets/booth.png";
import digital from "../../../../public/assets/digital.png";
import reputation from "../../../../public/assets/reputation.png";
import Title from "@/app/components/Title";

const Services = () => {
  return (
    <div className="px-4">
        <Title id="services" text="Our Services"/>
 <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          imageUrl={survey}
          title="Surveys and Data Analysis"
          titleColor="text-[#00b2fc]"
          descriptionColor="text-[gray]"
          description="Gain deep insights into voter behavior and preferences with our comprehensive surveys and data analysis services. We help you understand the electorate better, enabling you to craft targeted strategies that resonate with your audience."
        />
        <Card
          imageUrl={booth}
          title="Booth Management Solutions"
          titleColor="text-[#01c99b]"
          descriptionColor="text-[gray]"
          description="Optimize your booth operations with our advanced management solutions. Ensure smooth and efficient handling of voter turnout, reduce wait times, and enhance the overall voting experience to secure more votes."
        />
        <Card
          imageUrl={reputation}
          title="Offline and Online Reputation Management"
          titleColor="text-[#FF605F]"

          descriptionColor="text-[gray]"
          description="Maintain a positive image both online and offline with our reputation management services. We monitor and manage your public perception, address negative feedback proactively, and highlight your achievements to build a strong, favorable reputation."
        />
        <Card
                  imageUrl={digital}
          title="Digital Campaigning Services"
          descriptionColor="text-[gray]"
          titleColor="text-[orange]"
          description="Leverage the power of digital platforms to reach a wider audience. Our digital campaigning services include social media management, content creation, and targeted advertising to maximize your online presence and engage with voters effectively."
        />
      </div>
    </div>
    </div>
   
  );
};

export default Services;
