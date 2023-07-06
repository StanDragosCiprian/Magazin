import { useState } from "react";
import { Menu, MenuItem } from "@mui/material";

interface IMouseChild {
  children: JSX.Element[];
}

export const MouseMenu: React.FC<IMouseChild> = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [switchToTable, setSwitchToTable] = useState<boolean>();
  const [menuPosition, setMenuPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    if (event.currentTarget instanceof HTMLElement) {
      setAnchorEl(event.currentTarget);
    }
    setMenuPosition({ top: event.clientY, left: event.clientX });
  };

  const handleIsComponents = (IsComponents: boolean) => {
    setSwitchToTable(IsComponents);
    setAnchorEl(null);
  };

  return (
    <div onContextMenu={handleContextMenu}>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleIsComponents}
        anchorReference="anchorPosition"
        anchorPosition={menuPosition}
      >
        <MenuItem onClick={() => handleIsComponents(true)}>Clothes</MenuItem>
        <MenuItem onClick={() => handleIsComponents(false)}>Tv</MenuItem>
      </Menu>
      {switchToTable ? children[0] : children[1]}
    </div>
  );
};
