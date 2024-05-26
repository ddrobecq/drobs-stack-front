import { Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Stack>
      <Typography variant='body1'>
        Get started by editing&nbsp;
        <code >app/page.tsx</code>
      </Typography>
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
