import { Button, Paper } from "@mantine/core";

const ImageCard = ({ data }) => {
    return (
        <Paper
            shadow="md"
            p="xl"
            radius="md"
            style={{
                backgroundImage: `url(${data.image})`,
                backgroundSize:"cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "500px",

                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                color: "white",
            }}
        >
            <div className="flex flex-col justify-center items-center gap-2">
                <div className="text-3xl font-semibold text-fuchsia-pink-600">{data.heading}</div>

                    <p className="text-7xl font-semibold ">{data.title}</p>
                    <p className={"text-xs text-mine-shaft-50 font-semibold tracking-wide mt-2"}>{data.text}</p>

                <Button variant="filled" className="!rounded-2xl mt-2">
                    Get Started
                </Button>
            </div>
        </Paper>
    );
};

export default ImageCard;
