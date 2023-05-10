import { useContext } from "react";
import GptContext from "./GptContext";
const GptInfo = () => {
  const { model } = useContext(GptContext);
  return (
    <ul className="p-5 flex">
      <li className=" p-2 text-xs rounded-sm text-white   flex space-x-3">
        <span className="text-stone-400">Current Model</span>
        <span className="font-bold text-emerald-700">{model}</span>
      </li>
    </ul>
  );
};

export default GptInfo;
