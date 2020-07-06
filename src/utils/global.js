
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-font-smoothing: grayscale;
    };
    html {
        font-size: 62.5%;
        box-sizing: border-box;
        --color-main: ${props => props.theme.colors.main};
        --color-mainDark: ${props => props.theme.colors.mainDark};
        --color-mainLight: ${props => props.theme.colors.mainLight};
        --color-mainLighter: ${props => props.theme.colors.mainLighter};
        --color-text: ${props => props.theme.colors.textColor};
        --color-heading: ${props => props.theme.colors.headingColor};
        --color-white: ${props => props.theme.colors.whiteColor};
        --color-info: ${props => props.theme.colors.info};
        --color-success: ${props => props.theme.colors.success};
        --color-warning: ${props => props.theme.colors.warning};
        --color-danger: ${props => props.theme.colors.danger};

        --shadow: ${props => props.theme.colors.shadow};
    };
    body {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        line-height: 1.6;
    };
    a, input, textarea, button {
        outline: none;
        font-family: inherit;
        text-decoration : none;
    };
    p {
        font-family: 'Montserrat', sans-serif;
    }
`