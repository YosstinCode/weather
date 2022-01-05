import styled from "styled-components"
import { Theme } from "../../../Theme"


export const SearchPlaceButtonStyled = styled.button`
    padding: 0.625rem 0.98rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.17375rem;
    background-color: ${Theme.color.gray};
    color:${Theme.color.white};
    box-shadow: 0px 4px 4px ${Theme.color.blackShadow};
    border:none;
`