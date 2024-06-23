import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'TTLaundryGothicB';
    @media screen and (max-width: 2100px) {
        font-size: 14px;
	}
    @media screen and (max-width: 1650px) {
        font-size: 12px;
	}
    @media screen and (max-width: 1200px) {
        font-size: 10px;
    }
    @media screen and (max-width: 750px) {
        font-size: 8px;
    }
}

@font-face {
    font-family: 'TTLaundryGothicB';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2403-2@1.0/TTLaundryGothicB.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}
`;

export default GlobalStyle;
