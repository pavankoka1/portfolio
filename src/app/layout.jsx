import './globals.css';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata = {
    title: 'Portfolio',
    description: 'Personal portfolio with animations',
    manifest: '/manifest.json',
    themeColor: '#b4ef02',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            </head>
            <body>
                {/* Profile Picture */}
                <div className="fixed top-6 right-6 z-50 w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 shadow-lg backdrop-blur-sm">
                    <Image
                        src="/assets/icons/profile.jpeg"
                        alt="Profile"
                        width={64}
                        height={64}
                        className="object-cover"
                        priority
                    />
                </div>
                {children}
            </body>
        </html>
    );
}
