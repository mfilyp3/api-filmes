import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --grey: #9ea1a7;
    }
    *   {
        margin: 0;
        padding: 0;
        box-sizing: border-box;  
    }


    body, html, #root {
        height: 100%;
        
    }

    ::-webkit-scrollbar {
        background: ${(props) => props.theme.colors.primary};
        height: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: white;
        border-radius: 10px;
    }
    body {
        background: ${(props) => props.theme.colors.bgColor};
        font-family: 'Montserrat', sans-serif;
        overflow: hidden;
    }

`

export { GlobalStyles };