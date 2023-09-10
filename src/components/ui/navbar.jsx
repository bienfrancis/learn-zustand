import Button from "./button";
import Searchbar from "./searchbar";
import Avatar from "./avatar";
import Notification from "./notification";
const Navbar = () => {
  const droplist = [
    {
      label: "test1test1test1",
      link: "/",
    },
    {
      label: "test2",
      link: "/",
    },
    {
      label: "test3",
      link: "/",
    },
  ];

  return (
    <div className="flex justify-between items-center py-5">
      <Searchbar placeholder="Search" />
      <div className="flex justify-between gap-8 items-center">
        <Button label="Add New Property" className="px-5" />
        <Notification dropDownData={droplist} />
        <Avatar />
      </div>
    </div>
  );
};

export default Navbar;
