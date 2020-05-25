import styled, {css} from 'styled-components';

interface FormProps{
    hasError: boolean;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`;

export const ErrorTag = styled.p`
    margin-top: 10px;
    font-weight: bold;
    font-size: 17px;
    color: rgb(201, 48, 48);
`;

export const Form = styled.form<FormProps>`
    padding-top: 20px;

    input{
        padding: 10px;
        border: 3px solid black;
        border-radius: 4px;
        width: 300px;
        color: #333;

        ${(props) => props.hasError && css`border-color: #c53030`};
    }

    button{
        margin-left: 5px;
        border-radius: 2px;
        padding: 10px;
        background: #38c75e;
        font-weight: bold;
        font-size: 15px;
    }
`;

