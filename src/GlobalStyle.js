import { createGlobalStyle } from "styled-components";
import {Theme} from "./Theme";


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: ${Theme.font.Default};
    }
    
    html{
        font-size: 100%;
        box-sizing: border-box;  
        color:${Theme.color.white};
    }

    *,*::before,*::after{
        box-sizing: inherit;
    }

    body{
       /*  padding: 1rem 1rem 0 1rem; */
        background: ${Theme.color.purpleDark};
    }
`;
