import { Button } from "@/components";
import { ICar } from "@/interfaces/Car";
import { GoTrash } from "react-icons/go";

type ItemProps = {
    car: ICar;
    onRemove: (car: ICar) => void;
};

const Item = ({ car, onRemove }: ItemProps) => {
    return (
        <li className="flex items-center justify-between p-2 border-b border-red-200">
            {car.name}
            <div>
                <Button type="dager" onClick={() => onRemove(car)} icon={<GoTrash />} />
            </div>
        </li>
    );
};

export default Item;
