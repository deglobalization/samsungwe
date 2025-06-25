import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin: 2rem 0;
  padding: 1rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Index = () => {
  return (
    <div className="page-container">
      <h1>삼성WE내과 | 삼성WE내과의원</h1>
      
      <Image
          src="images/mosa8XjNkd.png"
          alt=""
          title=""
          style={{...}}
        />
<Image
          src="images/mosatLRh8V.png"
          alt=""
          title=""
          style={{...}}
        />
    </div>
  );
};

export default Index;
