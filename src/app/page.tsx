'use client';

import { Stack, Typography } from "@mui/material";
import useLocalStorage from "drobs-local-storage-react";
import Image from "next/image";

export default function Home() {
  const [name, setName] = useLocalStorage('key', 'John Doe');

  return (
    <Stack>
      <Typography variant='body1'>
        Get started by editing&nbsp;
        <code >app/page.tsx</code>
      </Typography>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div >
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </Stack>
  );
}
