import styled from "styled-components";

export const ImageProfile = styled.img`
    
    width: 170px;
    margin-right: 100%;
    height: 170px;
    border-radius: 100px;
    animation: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;

    @keyframes floating {
      
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 15px); }
    100%   { transform: translate(0, -0px); }
      
   }

  @media (max-width: 768px) {
      width: 140px;
      height: 140px;
  }


`

export const TextName = styled.h1`

  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap');
  
    font-size: 40px;
    margin-top: 15px;
    font-family: 'Rubik', sans-serif;
    text-align: left;

  @media (max-width: 768px) {
   margin-left: 8px;
  }

`

export const TextDescription = styled.p`

  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap');
  
    font-size: 18px;
    white-space: nowrap;
    margin: 15px auto;
    margin-right: 100%;
    font-family: 'Rubik', sans-serif;

  @media (max-width: 768px) {
    width: 100%;
    white-space: pre-wrap;
    margin-left: 0;
    word-break: break-word;
    padding-right: 10px;
    font-size: 16px;
  }

`

export const LinksArea = styled.div`

   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;

  @media (max-width: 768px) {

    margin-top: 20px;
    margin-left: 8px;
    
  } 

`
