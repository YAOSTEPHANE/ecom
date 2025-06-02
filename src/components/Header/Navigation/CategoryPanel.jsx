import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IoCloseSharp } from "react-icons/io5";
import Button from "@mui/material/Button";
import { FaRegPlusSquare } from "react-icons/fa";


const CategoryPanel = (props) => {
  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <h3 className="p-3 text-[18px] font-[500] flex items-center justify-between">
        Par Catégories{" "}
        <IoCloseSharp
          onClick={toggleDrawer(false)}
          className="cursor-pointer text-[20px]"
        />
      </h3>

      <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center relative">
            <Button className="w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]">Beauté</Button>
            <FaRegPlusSquare className="absolute top-[10px] right-[15px]" />
            <ul className="submenu absolute top-[100%] left-[0%] w-full">
                <li className="list-none relative">Parfums</li>
            </ul>
            <ul className="submenu">
                <li className="list-none relative">Maquillage</li>
            </ul>
            <ul className="submenu">
                <li className="list-none relative">Beauté Homme</li>
            </ul>
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <>
      <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default CategoryPanel;
