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

 .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content:center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: ${(props) => props.theme.colors.primary};
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
        color: ${(props) => props.theme.colors.fontColor};
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
    b {
        margin: 5px;
    }

    h4 {
        color: ${props => props.theme.colors.fontColor};
        font-size: 32px ;
        margin-bottom: 1rem;
    }
    h1, h2, h3, h4, h5, h6{
        font-family: 'Quicksand', sans-serif;
    }

`

export { GlobalStyles };