import styled from 'styled-components';
import {darken} from 'polished';

interface propsButton{
    color: string;
}

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 25px 50px;
    margin: 15px 0;

    @media(max-width: 1024px){
        grid-template-columns: repeat(3, 1fr);
    }

    @media(max-width: 768px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 500px){
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Users = styled.div`
    display: flex;
    flex-direction: column;
    width: 280px;
    height: 410px;
    margin-top: 25px;
    border-radius: 4px;
    background: #fff;
    color: #000;

    img{
        height: 135px;
        width: 135px;
        border-radius: 4px 35% 35% 0;
    }

    strong{
        color: #333;
        padding: 0 5px;
    }

    span{
        font-size: 14px;
        color: #555;
    }

    ul{
        margin-top: 25px; 

        li{
            :nth-child(2n -1){
                background: rgb(199, 196, 196);
            }

            width: 100%;
            padding: 5px;
            display: flex;
            text-align: center;
        }
    }
`;

export const UserHeader = styled.div`
    display: flex;

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
`;

export const Button = styled.button<propsButton>`
    padding: 5px;
    width: 40px;
    border-radius: 4px;
    background: ${props => props.color};

    :hover{
        background: ${props => darken(0.06, props.color)};
    }

    a{
        color: #fff;
        text-decoration: none;
    }
`;

export const WrapperButton = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 10px;
    margin: auto 0;
`;
