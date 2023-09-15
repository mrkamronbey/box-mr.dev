import styled, { createGlobalStyle } from "styled-components";

export const WrapperContainer = styled.div`
  max-width: 1230px;
  width: 100%;
  margin: 0 auto;
`;

export const BigContainer = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  position: relative;
`;
export const GlobalStyle = createGlobalStyle`
*{
  font-family:'Roboto Slab','Arial',serif;
  margin: 0;
  padding: 0;
}

  html{
    scroll-behavior:smooth !important;
  }
    
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background: #ffffff;
    box-sizing: border-box;
  }

  ul{
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  /* ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #5A79E5; 
    border-radius: 10px;
  }
   
 
  ::-webkit-scrollbar-thumb {
    background: #03544c; 
    border-radius: 10px;
  }
  
  
  ::-webkit-scrollbar-thumb:hover {
    background: #03544c;
  } */
`;
