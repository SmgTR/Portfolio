import styled from 'styled-components';
import { Colors } from '../components/base/Colors';

export const ContactWrapper = styled.div`
  padding: 12rem 0;
  background: ${Colors.PrimaryTextColor};
  min-height: 50vh;
  color: ${Colors.DarkColor};
  display: flex;
  // justify-content: center;
  align-items: center;
  flex-direction: column;

  -webkit-user-select: text;
  -moz-user-select: -moz-text;
  -ms-user-select: text;
  user-select: text;

  & .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }

  & .contact a:not(:first-child) {
    margin-top: 2.4rem;
  }

  & i {
    color: ${Colors.DarkColor};
  }
`;
