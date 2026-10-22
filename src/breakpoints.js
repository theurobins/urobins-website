// The phone layout's media query, shared by every script; the CSS phone blocks repeat the same list.
// A phone is up to 760px wide, or a touch screen at most 500px tall: a phone turned to landscape
// (844x390, 932x430) stays a phone, so a rotation never crosses the breakpoint, while a laptop or
// desktop with a mouse never matches the second half however short its window is.
export const PHONE = '(max-width: 760px), (pointer: coarse) and (max-height: 500px)';
// the exact complement of PHONE (the pointer is one of fine, coarse or none), for matchMedia branches
const notPhone = (extra = '') => ['(pointer: fine)', '(pointer: none)', '(min-height: 501px)']
  .map((c) => `(min-width: 761px)${extra} and ${c}`).join(', ');
export const NOT_PHONE = notPhone();
// tablets (761-980px, any pointer, taller than a phone): the desktop layout, unpinned
export const TABLET = notPhone(' and (max-width: 980px)');
// laptops and desktops: the pinned layout
export const DESKTOP = notPhone(' and (min-width: 981px)');
// a phone on its side (wide and at most 500px tall): the CSS block of the same name lays the stages out
// side by side
export const PHONE_LAND = '(max-width: 760px) and (max-height: 500px) and (orientation: landscape), ' +
  '(pointer: coarse) and (max-height: 500px) and (orientation: landscape)';
export const isPhone = () => window.matchMedia(PHONE).matches;
