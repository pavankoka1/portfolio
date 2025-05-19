import * as motion from 'motion/react-client';
import { TextField, Button, Typography } from '@mui/material';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="ppnm-b-36 text-black mb-8 text-center">Get in Touch</h2>
                    <form className="max-w-lg mx-auto space-y-4">
                        {/* <TextField fullWidth label="Name" variant="outlined" className="ppnm-m-16" />
                        <TextField fullWidth label="Email" variant="outlined" className="ppnm-m-16" /> */}
                        {/* <TextField
                            fullWidth
                            label="Message"
                            variant="outlined"
                            multiline
                            rows={4}
                            className="ppnm-m-16"
                        /> */}
                        {/* <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="bg-primary-main hover:bg-primary-dark"
                        >
                            Send Message
                        </Button> */}
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export { Contact };
