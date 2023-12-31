import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    height: 80px;
    background: #000;
    display: flex;
    /* margin-top: -80px; */
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: relative;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 920px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    height: 80px;
    width: 100%;
    padding: 0 24px;
    padding-left: 1rem;
    max-width: 1100px;

`

export const NavLogo = styled(LinkR)`
    color: #01bf71;
    display: flex;
    justify-self: flex-start;
    margin-left: 24px;
    margin-right: 450px;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 920px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        padding: -40px;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    padding-left: 0;

`

export const NavItem = styled.li`
    height: 80px
    @media screen and (max-width: 920px) {
        display: none;
    }
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    font-weight: bold;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    @media screen and (max-width: 920px) {
        display: none;
    }
    &.active {
        border-bottom: 3px solid #01bf61;
    }
`
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    padding-right: 1rem;

    @media screen and (max-width: 920px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    width: 70px;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`