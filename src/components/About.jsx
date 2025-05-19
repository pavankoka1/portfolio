import * as motion from 'motion/react-client';
import { Card, CardContent, Typography } from '@mui/material';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-100">
            {/* <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="ppnm-b-36 text-black mb-8 text-center">About Me</h2>
                    <Card className="max-w-2xl mx-auto">
                        <CardContent>
                            <Typography className="ppnm-m-18 text-gray-700">
                                I'm a passionate developer with expertise in Next.js, Tailwind CSS, and modern web
                                technologies. I love creating intuitive and visually stunning applications.
                            </Typography>
                        </CardContent>
                    </Card>
                </motion.div>
            </div> */}
        </section>
    );
};

export { About };
