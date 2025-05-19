import * as motion from 'motion/react-client';
import { Card, CardContent, Typography, Button } from '@mui/material';

const projects = [
    { title: 'Project One', description: 'A modern web app built with Next.js' },
    { title: 'Project Two', description: 'E-commerce platform with animations' },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="ppnm-b-36 text-black mb-8 text-center">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            {/* <Card>
                                <CardContent>
                                    <Typography className="ppnm-b-24 mb-2">{project.title}</Typography>
                                    <Typography className="ppnm-m-16 mb-4">{project.description}</Typography>
                                    <Button variant="outlined" color="primary">
                                        View Project
                                    </Button>
                                </CardContent>
                            </Card> */}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { Projects };
