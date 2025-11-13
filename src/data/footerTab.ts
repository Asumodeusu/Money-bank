interface FooterType {
  id: string;
  icon: string;
  label: string;
  path?: string;
}

export const tabs: FooterType[] = [
  { id: 'home', icon: "/svg/Icon/45.svg", label: 'Home' },
  { id: 'search', icon: "/svg/Icon/44.svg", label: 'Search', path: '/Search' },
  { id: 'message', icon: "/svg/Icon/42.svg", label: 'Message' },
  { id: 'setting', icon: "/svg/Icon/43.svg", label: 'Setting' },
];