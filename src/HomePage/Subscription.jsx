
import {Button, TextInput} from "@mantine/core";

const Subscribe=()=>{
    return(<div className="mt-20  mx-10 p-4 rounded-xl flex  justify-around ">
        <div className="text-4xl  w-[40%] font-semibold text-center text-mine-shaft-100 mb-2">Ready To Level Up    <span
            className="text-fuchsia-pink-400">Your Body</span> With US
        </div>
        <div className="flex gap-4 bg-mine-shaft-700 rounded-xl items-center  px-3">
            <TextInput
                placeholder="Your@gmail.com"
                variant='unstyled'
                size='lg'
                className="[&_input]:text-mine-shaft-100  [&_input::placeholder]:text-mine-shaft-300 "
            />
            <Button variant="filled"  size='md' className="!rounded-lg" >Subscribe</Button>
        </div>

    </div>)
}
export default Subscribe