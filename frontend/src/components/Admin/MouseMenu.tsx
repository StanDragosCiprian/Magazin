import { useState } from "react";
import { Menu, MenuItem } from "@mui/material";

interface IMouseChild {
  children: JSX.Element[];
}

export const MouseMenu: React.FC<IMouseChild> = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [switchToTable, setSwitchToTable] = useState<boolean>();
  const [menuPosition, setMenuPosition] = useState<{
    top: number;
    left: number;
  }>({
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

  const handleIsComponents = (IsComponents: string) => {
    setSwitchCondition(IsComponents);
    setAnchorEl(null);
  };
  const [displayChildren] = useState<string[]>(["clothes", "tv", " New Clothes", "New Tv"]);
  const [switchCondition, setSwitchCondition] = useState<string>("clothes");
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
        <MenuItem onClick={() => handleIsComponents("clothes")}>
          Clothes
        </MenuItem>
        <MenuItem onClick={() => handleIsComponents("tv")}>Tv</MenuItem>
        <MenuItem onClick={() => handleIsComponents(" New Clothes")}>
          New Clothes
        </MenuItem>
        <MenuItem onClick={() => handleIsComponents("New Tv")}>New Tv</MenuItem>
      </Menu>
      {displayChildren.map(
        (disChild, id) => disChild === switchCondition && children[id]
      )}

    </div>
  );
};
