import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px; 
`;

export const Icon = styled(Link)`
    color: #F4F4F9;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: semi-bold 600;
    text-decoration: none;
    font-family: 'Playfair Display',
    serif;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`;

export const Container = styled.div`
    color: #F4F4F9;
    background: #12355B;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const ContactWrap = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

`;

export const ContactRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2';

    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1 col1' 'col2 col2'
    }
`;

export const Column1 = styled.div`
    margin-bottom: 5px;
    padding: 0 15px;
    grid-area: col1;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const Topline = styled.p`
    color: #776D5A;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    font-family: 'Playfair Display', serif;
    color: #fff;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 15px;
    font-size: 18px;
    line-height: 24px;
    color: #fff;

`;

export const Column2 = styled.div`
    margin-bottom: 5px;
    padding: 0 15px;
    grid-area: col2;
`;

export const FormContent = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Form = styled.form`
    width: 100%;
    margin: 0 10px 0;
    padding-right: 0;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 10px 0;
    padding-right: 0;
`;
