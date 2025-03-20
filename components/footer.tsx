import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2025 Juan Castelblanco. All rights reserved. This project is a fork of the original project by ByteGrad.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, Vercel hosting.
      </p>
      <p className="text-xs mt-2">
        Made with love <span role="img" aria-label="green heart">💚</span>
      </p>
    </footer>
  );
}
