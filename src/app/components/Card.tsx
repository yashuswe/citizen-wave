import Image from 'next/image';
import React from 'react';

interface CardProps {
  imageUrl: any;
  title: string;
  description: string;
  className?: string; 
  titleColor?: string; 
  descriptionColor?: string; 
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description, className, titleColor, descriptionColor }) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div className="w-full max-w-2xl shadow-xl rounded-2xl p-4 border transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="flex flex-col md:flex-row justify-around gap-11 items-center">
          <div className="flex-shrink-0">
            <Image
              src={imageUrl}
              alt={title}
              className="rounded-2xl w-32 h-32 object-cover"
            />
          </div>
          <div>
            <h1 className={`font-extrabold text-3xl ${titleColor}`}>{title}</h1>
            <p className={`font-semibold text-sm mt-4 ${descriptionColor}`}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
