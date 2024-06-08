import { Group, User } from "lucide-react";
import NavLinkItem from "./nav-link-item";

const itemsArray = [
  {
    title: "Home",
    icon: User,
    redirect: "#",
  },
  {
    title: "About Us",
    icon: Group,
    redirect: "#",
  },
  {
    title: "Find Mosque",
    icon: User,
    redirect: "#",
  },
];

const NavLinks = () => {
  return (
    <ul className="flex items-center justify-between gap-4">
      {itemsArray.map((item, index) => {
        return <NavLinkItem key={index} {...item} />;
      })}
    </ul>
  );
};

export default NavLinks;
