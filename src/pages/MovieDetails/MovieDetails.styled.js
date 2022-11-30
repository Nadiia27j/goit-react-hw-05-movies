import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  padding: 16px 28px;
`;

export const LinkButton = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 15px;
  color: black;
  border: 2px solid black;
  border-radius: 50px;
  padding: 5px 8px;
  :hover {
    color: blueviolet;
  }
`;

export const AddInfo = styled.div`
  margin-top: 16px;
`;

export const AddInfoTitle = styled.p`
  font-size: 16px;
`;

export const AddInfoItem = styled.li`
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const AddInfoWrapper = styled.div`
  padding: 16px;
`;

export const AddInfoItemLink = styled(Link)`
  color: red;
  :hover {
    color: blueviolet;
  }
`;