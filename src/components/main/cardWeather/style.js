import styled, { css } from "styled-components"
import { Theme } from "../../../Theme"

const textStyle = css`
    text-align: center;
    font-size: 1rem;
`
export const CardWeatherStyle = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background-color: ${Theme.color.purple};
    box-shadow: 0px 4px 4px ${Theme.color.blackShadow};
`

export const CardImageStyle = styled.img`
    width:3.75rem;
    height:3.75rem;

`
export const CardTitleStyle = styled.h2`
    ${textStyle}
    font-weight:500;
`

export const DegreesWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap:.5rem;
    margin-top: 1rem;
`

export const CardTextStyle = styled.p`
    ${textStyle}
    color:${props => props.second ? Theme.color.gray : Theme.color.white };
`

