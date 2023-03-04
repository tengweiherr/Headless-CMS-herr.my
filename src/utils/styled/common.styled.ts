import styled from "styled-components"
import COLOR from "./color"

export const TextContainer = styled.div.attrs(props=>({
    className: 'text-container justify-content-center pb-2 w-100 ' + ( props.className ? props.className : '' )
}))`
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    overflow: hidden;
`

export const Button = styled.a.attrs(props=>({
    className: '' + ( props.className ? props.className : '' )
}))`
    border: solid 2px ${COLOR.BLACK};
    padding: 8px 20px !important;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
    border-radius: 2px;
    cursor: pointer;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;

    &:hover {
        border: solid 2px ${COLOR.WHITE};
        color: ${COLOR.WHITE};
        color: white !important;
        background: -webkit-linear-gradient(45deg, ${COLOR.GRADIENT_1} 30%, ${COLOR.GRADIENT_2} 100%);
    }

    &.cyan {
        border-color: ${COLOR.BLACK};
        color: ${COLOR.BLACK};
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
    }

    &.cyan:hover {
        color: white !important;
        background: -webkit-linear-gradient(45deg, ${COLOR.GRADIENT_1} 30%, ${COLOR.GRADIENT_2} 100%);
    }
`

export const ButtonContainer = styled.div`
    display: flex;

    & a {
        margin-right: 1rem;
    }

    & a:last-child {
        margin-right: 0;
    }
`

export const SeperateLineContainer = styled.div.attrs(props=>({
    className: 'seperate-line',
    width: props.style?.width || '25%'
}))`
    width: 100%;

    span {
        display: inline;
    }

    hr {
        width: ${props=>props.style?.width||'25%'};
        height: 3px !important;
        color: #e8ece6;
        background-color: #e8ece6;
        opacity: 1;
    }
`

export const Section = styled.section.attrs(props=>({
    className: 'container ' + (props.className ? props.className : '')
}))`
`

export const PageTitle = styled.h3.attrs(props=>({
    className: 'display-3' + (props.className ? props.className : '')
}))`
    font-weight: 600;
    background: -webkit-linear-gradient(45deg, ${COLOR.GRADIENT_1} 0%, ${COLOR.GRADIENT_2} 60%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

export const PageSubtitle = styled.h6.attrs(props=>({
    className: 'pt-2' + (props.className ? props.className : '')
}))`
    font-weight: 400;
    color: ${COLOR.DARK_GREY};
`