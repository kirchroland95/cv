import React from 'react';

const Card = ({ title, features, hyperlink, buttonText, sourcecode }) => {
  return (
    <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white border">
      <p className="text-center text-4xl font-bold m-8">{title}</p>
      <div className="text-center font-medium">
        {features.map((feature, index) => (
          <p key={index} className="py-2 border-b mx-8">{feature}</p>
        ))}
        {sourcecode && <a href={sourcecode} target="_blank" rel="noopener noreferrer"><p className="py-2 border-b mx-8 text-[#007BFF] ">Source code</p></a>}
      </div>
      <form action={hyperlink} className='mx-auto'>
        <button type="submit"className="bg-[#00df9a] w-[200px] rounded-lg font-medium my-6 mx-auto px-6 py-3 text-black shadow-lg shadow-emerald-300">{buttonText}</button>
      </form>
    </div>
  );
};

export default Card;
