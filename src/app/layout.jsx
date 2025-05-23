import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/common/Header';
import ScrollLayout from '@/components/layout/ScrollLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Koka',
    description: 'Portfolio',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header color="stroke-white" />
                <ScrollLayout>{children}</ScrollLayout>
            </body>
        </html>
    );
}
