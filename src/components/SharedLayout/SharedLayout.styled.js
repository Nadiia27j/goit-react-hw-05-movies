import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.section`
 width: auto;
`;

export const Header = styled.header`
  padding: 15px 30px;
  box-shadow: 8px 3px 3px gray;
`;

export const Link = styled(NavLink)`
   padding: 10px 20px;
   color: black;
   font-size: 20px;
   text-decoration: none;
   :hover {
    color: blueviolet;
   }
`;