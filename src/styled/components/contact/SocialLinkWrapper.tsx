import styled from 'styled-components';

import { Colors } from '../base/Colors';

export const SocialLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4rem;

  & a:first-child {
    margin-right: 2.4rem;
  }

  & a {
    font-size: 3.8rem;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    &:visited {
      color: ${Colors.DarkColor};
    }

    &:hover {
      color: ${Colors.MainColor};
    }
  }
`;
