import { useState, useRef, useContext } from "react";
import { $_lib_fetchData } from "@/lib/apiHandler";
import GptContext from "./GptContext";
import Image from "next/image";
const GptImages = () => {
  const { model } = useContext(GptContext);
  const typing: any = useRef(null);
  const imageSize: any = useRef(null);
  const imageCount: any = useRef(null);
  const [images, setImages] = useState<any>([]);
  const [isPending, setIsPending] = useState<boolean>(false);
  const handleEnter = (e: any) => {
    if (e.keyCode === 13) generateImage();
  };
  const generateImage = async () => {
    const text = typing.current.value;
    const size = imageSize.current.value;
    const count = imageCount.current.value;

    if (text.trim().length === 0) return;
    setIsPending(true);
    setImages([]);
    const res = await $_lib_fetchData("/images/generations", "post", {
      prompt: text,
      n: Number(count),
      size,
    });
    if (res.status === 200) {
      setImages(res.data.data);
    }
    setIsPending(false);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-10">
        <div className="flex justify-start items-center">
          <span className="min-w-[120px] text-xs">Image Size</span>
          <select
            defaultValue="256x256"
            name=""
            id=""
            ref={imageSize}
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="256x256">256x256</option>
            <option value="512x512">512x512</option>
            <option value="1024x1024">1024x1024</option>
          </select>
        </div>

        <div className="flex justify-start items-center">
          <span className="min-w-[120px] text-xs">Number of images</span>
          <select
            defaultValue="1"
            name=""
            id=""
            ref={imageCount}
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
      <div className="flex mt-5">
        <input
          type="text"
          className="w-full  p-2 outline-none"
          ref={typing}
          onKeyDown={handleEnter}
          placeholder="ask a question"
        />
        <button
          className="bg-emerald-700 py-1 px-3 text-xs rounded-sm text-white hover:bg-emerald-600 min-w-[150px]"
          onClick={generateImage}
        >
          Generate
        </button>
      </div>
      <div className="relative border mt-5">
        <div className="p-5 bg-blue-50/80 min-h-[100px]  text-blue-800 whitespace-break-spaces break-all">
          <ul className="flex flex-wrap items-center justify-start">
            {images.map((image: any, index: number) => (
              <li key={index} className="flex justify-center items-center m-3">
                <img
                  src={image.url}
                  alt="image"
                  className="w-full h-full object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
        {isPending && (
          <div
            role="status"
            className="flex justify-center items-center absolute top-0 w-full h-full"
          >
            <svg
              aria-hidden="true"
              className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default GptImages;
