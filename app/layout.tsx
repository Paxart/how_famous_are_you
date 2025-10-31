export const metadata: Metadata = {
  title: "How Famous Are You",
  description: "Genera tu imagen I ❤️ personalizada y compártela en Farcaster",
  other: {
    "fc:miniapp": JSON.stringify({
      version: "1",
      imageUrl: "https://how-famous-are-you.vercel.app/og.png",
      button: {
        title: "Genera el tuyo",
        action: {
          type: "launch_miniapp",
          url: "https://how-famous-are-you.vercel.app/",
        },
      },
    }),
  },
};
