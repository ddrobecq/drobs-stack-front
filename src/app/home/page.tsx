'use client';
import React from 'react';
import { Stack, Typography } from "@mui/material";

export default function Home(): React.ReactNode {
	return (
		<Stack direction={'column'} spacing={2} >
			<Typography variant='h5'>
        Home
			</Typography>
		</Stack>
	);
}
