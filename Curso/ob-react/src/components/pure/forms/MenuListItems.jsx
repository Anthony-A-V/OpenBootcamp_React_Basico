import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import { HomeIcon, SettingsIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const getIcon = (icon) => {
  switch (icon) {
    case 'HOME':
      return <HomeIcon />;
    case 'TASK':
      return <HomeIcon />;
    case 'SETTINGS':
      return <SettingsIcon />;
    default:
      return <HomeIcon />;
  }
};

const MenuListItems = ({ list }) => {
  const navigate = useNavigate();

  return (
    <List>
      {list.map(({ text, path, icon }, index) => {
        return (
          <ListItem key={index}>
            <ListItemButton onClick={() => navigate(path)}>
              <ListItemIcon>{getIcon(icon)}</ListItemIcon>
            </ListItemButton>
            <ListItemText primary={text}></ListItemText>
          </ListItem>
        );
      })}
    </List>
  );
};

export default MenuListItems;
