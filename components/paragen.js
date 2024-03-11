import React from 'react';

const ParagraphGenerator = ({ data }) => {
    return (
      <div>
        {data.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    );
  };
  
  export default ParagraphGenerator;