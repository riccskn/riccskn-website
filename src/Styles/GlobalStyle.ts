import styled, {createGlobalStyle} from "styled-components";

export default createGlobalStyle`

    * {
      margin: 0;
      padding: 0;
    }
    
    html {
      background: #000;
      color: white;
    }
    
    ::selection {
      color: black;
      background: white;
    }

`



