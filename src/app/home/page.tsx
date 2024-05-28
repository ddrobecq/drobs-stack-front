'use client';

import { Stack, Typography } from "@mui/material";
import SettingsTheme from "@/theme/settings";

export default function Home(): React.ReactNode {
  return (
    <Stack direction={'column'} spacing={2} >
      <Typography variant='h5'>
        Demo component to switch between light and dark theme
      </Typography>
      <SettingsTheme />
      <Typography variant='caption'>
        Your choice is saved in the local storage under the key <code>themeMode</code>
      </Typography>
      <Typography variant='h5'>
        Get started to implement your web app by editing&nbsp;<code >app/page.tsx</code>
      </Typography>
    </Stack>
  );
}
