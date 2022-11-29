import styled from '@emotion/styled';
import { Link } from 'react-router-dom';


export const MovieListContainer = styled.ul`
  padding-left: 15px;
`;

export const MovieItem = styled.li`
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const LinkTitle = styled(Link)`
 font-size: 15px;
 color: black;

 :hover {
    color: blue;
 }
`;