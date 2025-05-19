import * as motion from 'motion/react-client';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="h-screen flex items-center justify-center bg-gradient-to-br from-primary-light to-secondary-light">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center"
            >
                <h1 className="ppnm-b-48 text-black mb-4">Welcome to My Portfolio</h1>
                <p className="ppnm-m-20 text-black mb-8">Creative developer crafting beautiful experiences</p>
                {/* <Button
                    variant="contained"
                    color="primary"
                    endIcon={<ArrowForwardIcon />}
                    className="bg-primary-main hover:bg-primary-dark"
                >
                    Learn More
                </Button> */}
            </motion.div>
        </section>
    );
};

export { Hero };
