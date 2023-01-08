import { FC } from 'react';
import HamburgerMenu from '../components/ui/HamburgerMenu';
import { NavigationWrapper } from '../styled/containers/NavigationWrapper';

const Navigation: FC = ({}) => {
  return (
    <NavigationWrapper>
      <h3>Tomasz Rusnak</h3>
      <nav>{/* <HamburgerMenu /> */}</nav>
    </NavigationWrapper>
  );
};

export default Navigation;
