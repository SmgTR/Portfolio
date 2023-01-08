const size = {
  mobile: '0px',
  tablet: '768px',
  smallDesktop: '1400px',
  desktop: '1024px'
};
export const device = {
  mobile: `@media (max-width: ${size.tablet})`,
  tablet: `@media (min-width: ${size.tablet}) and (max-width: ${size.desktop})`,
  smallDesktop: `@media (min-width: ${size.desktop}) and (max-width: ${size.smallDesktop})`,
  desktop: `@media (min-width: ${size.desktop})`,
  tabletDesktop: `@media (min-width: ${size.tablet})`,
  mobileTablet: `@media (max-width: ${size.desktop})`,
  mobilePortrait: `@media (max-width: ${size.tablet}) and (orientation: portrait)`,
  hoverOnPointerDevices: `@media (hover: hover) and (pointer: fine)`
};
