import { Avatar, Rating } from "@mantine/core";

const TestiMonalsCard = ({ item }) => {
    return (
        <div className="flex flex-col gap-3 w-full border border-fuchsia-400 rounded-lg px-4 py-3">
            <div key={item.name} className="flex gap-5 items-center">
                <Avatar src={`${item.avatar}.png`} alt={item.name} />
                <div>
                    <p className="text-mine-shaft-100 text-lg font-semibold">
                        {item.name}
                    </p>
                </div>
            </div>
            <div className="text-mine-shaft-200 text-sm">{item.review}</div>
            <Rating value={item.rating} readOnly className="mt-2" />
        </div>
    );
};

export default TestiMonalsCard;
