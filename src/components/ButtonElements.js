import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#93B7BE' : '#776D5A')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#fff' : '#0C090D')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#E63946' : '#E63946')};
    }
`;  