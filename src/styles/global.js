import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        /* color pallete */
        --color-primary:     #D00000;
        --color-primary-2:   #DC2F02;
        --color-secondary:   #FFBA08;
        --color-secondary-2: #FAA307;
        --color-white:       #FFFFFF;
        --color-whitesmoke:  #F1F3F5;
        --color-grey-4:      #BDBDBD;
        --color-grey-100:    #E0E0E0;
        --color-grey-300:    #828282;
        --color-black:       #252525;
        --color-grey-fade:   #E0E0E0DF;

        /* gradient */
        --gradient-grey-white: linear-gradient(to bottom,  #E0E0E0 0%, #E0E0E0 87%, #FFFFFF 100%);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
	    font-size: 100%;
    }

    ul {
        list-style: none;
    }

    input {
        font-family: inherit;
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyle;
