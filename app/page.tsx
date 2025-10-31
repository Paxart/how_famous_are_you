"use client";

import { useEffect } from "react";
import { sdk } from "@farcaster/miniapp-sdk";

export default function Page() {
  useEffect(() => {
    // Esto le dice a Farcaster que la app ya está lista y quite la pantalla de carga
    sdk.actions.ready();
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-4">How Famous Are You</h1>
      <p className="text-lg text-gray-600">
        🎉 Mini App conectada correctamente con Farcaster
      </p>
    </main>
  );
}
