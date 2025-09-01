interface NavigationItems {
  label: string;
  href?: string;
  hasDropdown?: boolean;
}

export const navigationItems: NavigationItems[] = [
  { label: "All Categories", hasDropdown: true },
  { label: "Become A Seller", href: "/seller" },
  { label: "Buyer", href: "/buyer" },
  { label: "Product Development & Manufacturing", href: "/manufacturing" },
];
