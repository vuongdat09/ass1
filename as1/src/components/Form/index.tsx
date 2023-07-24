import { useState } from "react";
import { Button, Input } from "..";
import { AiOutlinePlus } from "react-icons/ai";
import { ICar } from "@/interfaces/Car";

type FormProps = {
    onAdd: (car: ICar) => void;
};

const Form = ({ onAdd }: FormProps) => {
    const [loading , setLoading] = useState<boolean>(false)

    const performAsyncTask = async () => {
        // Thực hiện công việc bất đồng bộ, ví dụ:
        await new Promise((resolve) => setTimeout(resolve, 2000));
    };
    const handleClick = async () => {
        setLoading(true);
        try {
          // Thực hiện công việc bất đồng bộ
          await performAsyncTask();
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
    
    const [valueInput, setValueInput] = useState<string>("");
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (valueInput !== "") {
            onAdd({
                id: Math.floor(Math.random() * 1000),
                name: valueInput,
            });
            const form = e.target as HTMLFormElement;
            form.reset();
            setValueInput("");
        }
    };
    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.target.value);
    };
    return (
        <form onSubmit={onSubmit} className="flex items-center justify-between p-3 mb-3 border-b">
            <Input onChange={onHandleChange}  />
            <Button  primary onClick={handleClick} > 
                {
                    loading ? "loading..." :<AiOutlinePlus /> 
                }
            </Button>
        </form>
    );
};

export default Form;