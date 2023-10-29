import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer">
        <h1>This is Footer</h1>
      </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`

.footer{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    border-top: 1px solid #575656;
}

`;

export default Footer
