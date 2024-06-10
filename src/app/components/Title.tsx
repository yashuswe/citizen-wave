import React from 'react';

interface TitleProps {
  text: string;
  id: string;
}

const Title: React.FC<TitleProps> = ({ text, id }) => {
  return (
    <div id={id} className="my-12">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center">{text}</h1>
    </div>
  );
};

export default Title;
