import { Inter } from 'next/font/google';
import './globals.css';
import Image from 'next/image';
import { metadata } from './metadata';

const inter = Inter({ subsets: ['latin'] });

export { metadata };

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            </head>
            <body className={inter.className}>
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
