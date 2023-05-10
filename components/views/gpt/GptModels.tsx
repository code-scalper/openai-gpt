import { useState, useContext } from "react";
import { $_lib_fetchData } from "@/lib/apiHandler";
import GptContext from "./GptContext";
interface ModelInterface {
  id: string;
}
const GptModels = () => {
  const { model, setModel } = useContext(GptContext);
  const [models, setModels] = useState<ModelInterface[]>([]);
  const getModels = async () => {
    const res = await $_lib_fetchData("/models");
    setModels(res.data.data);
  };

  const handleModelClick = (id: string) => {
    console.log(id, "id");
    // setModel((prev) => {
    //   return id;
    // });
  };

  return (
    <div>
      <div className="flex justify-end">
        <button
          className="bg-emerald-700 p-2 text-xs rounded-sm text-white hover:bg-emerald-600"
          onClick={getModels}
        >
          Get GPT Models
        </button>
      </div>
      <div>
        <ul className="grid grid-cols-4 gap-2 text-xs">
          {models.map((model, index) => (
            <li
              key={index}
              className="px-2 p-1 bg-stone-100 hover:bg-emerald-200 cursor-pointer"
              onClick={() => handleModelClick(model.id)}
            >
              <p>{model.id}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GptModels;
