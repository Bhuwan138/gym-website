import { Button, TextInput } from "@mantine/core";

const Subscribe = () => {
    return (
        <div className="mt-20 mx-10 sm:mx-02 p-4 rounded-xl flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4">

            <div className="text-2xl sm:text-4xl w-full sm:w-[50%] font-semibold text-center sm:text-left text-mine-shaft-100">
                Ready To Level Up <span className="text-fuchsia-pink-400">Your Body</span> With Us
            </div>


            <div className="flex  gap-4 md:flex-row flex-col bg-mine-shaft-700 rounded-xl items-center w-full sm:w-auto px-3 py-2">
                <TextInput
                    placeholder="Your@gmail.com"
                    variant="unstyled"
                    size="lg"
                    className="[&_input]:text-mine-shaft-100 [&_input::placeholder]:text-mine-shaft-300 w-full sm:w-auto"
                />
                <Button
                    variant="filled"
                    size="md"
                    className="!rounded-lg w-full sm:w-auto"
                >
                   Subscribe
                </Button>
            </div>
        </div>
    );
};

export default Subscribe;
