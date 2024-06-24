import Head from "next/head";
import Navbar from "../components/Navbar";
import { Button, TextField, Typography } from "@mui/material";

export default function Contact() {
    return (
        <div>
            <Head>
                <title>Contact - LPM</title>
            </Head>

            <Navbar selected="contact" />

            <div className="mx-auto flex flex-col justify-center">
                <Typography className="text-center font-medium tracking-wider mt-24 animate-bounce" variant="h1" component="h2">
                    Contact Us
                </Typography>

                <TextField className="mt-12 mx-auto max-w-3xl"
                    required
                    id="outlined-required"
                    label="Email Address"
                    fullWidth={true}
                />

                <TextField className="mt-6 mx-auto max-w-3xl"
                    required
                    id="outlined-required"
                    label="Full Name"
                    fullWidth={true}
                />

                <TextField className="mt-6 mx-auto max-w-3xl"
                    required
                    id="outlined-required"
                    label="Subject"
                    fullWidth={true}
                />

                <TextField className="mt-6 mx-auto max-w-3xl"
                    required
                    id="outlined-required"
                    label="Content"
                    multiline={true}
                    fullWidth={true}
                />

                <Button variant="contained" className="mt-6 mb-10 mx-auto w-96">Submit</Button>
            </div>

            <div className="w-full" >
                <div className="mt-8 h-0.5 w-full bg-black opacity-5" />
                <h5 className="mt-4 pb-4 text-black opacity-80 text-center tracking-widest">© 2021 Lycée Pilote Monastir, All rights reserved.</h5>
            </div>
        </div>
    )
}