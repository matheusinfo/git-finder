import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        border: 0;
        box-sizing: border-box;
    }

    body{
        background: black;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button{
        font-family: 'Roboto', sans-serif;
        color: #fff;
    }

    button{
        cursor: pointer;
    }

    li{
        list-style: none;
    }
`;