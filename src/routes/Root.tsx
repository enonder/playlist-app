import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

import { Outlet, useNavigate } from "react-router-dom";

const drawerWidth = 240;

export default function Root() {
  const navigate = useNavigate();
  const menu = [{ name: 'Home', path: '/', icon: <HomeRoundedIcon /> }, { name: 'Playlists', path: '/playlists', icon: <LibraryMusicRoundedIcon /> }]

  return (
    <Box sx={{ display: 'flex', gap: 5 }}>
      <CssBaseline />

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          {menu.map((menuItem) => (
            <ListItem key={menuItem.name} disablePadding onClick={() => navigate(menuItem.path)}>
              <ListItemButton>
                <ListItemIcon>
                  {menuItem.icon}
                </ListItemIcon>
                <ListItemText primary={menuItem.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}


