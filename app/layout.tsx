import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"RUNNING.6015 — Sneakers & Running",description:"Sélection sneakers et running. Commande rapide via Snapchat."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}</body></html>}