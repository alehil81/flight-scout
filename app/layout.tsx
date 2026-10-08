import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'Flight Scout · Your next escape',description:'Explore flights from Reno, Sacramento, San Francisco and Oakland.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
