import { useEffect, useRef, useState, useMemo, useContext } from "react";
import classNames from "classnames";
import GptContext, { GptProvider } from "./GptContext";
import ContentViewer from "@/components/viewer/ContentViewer";
import GptInfo from "./GptInfo";
import GptModels from "./GptModels";
import ChatCompletion from "./ChatCompletion";
import GptImages from "./GptImages";
import GptImageEdit from "./GptImageEdit";

const GptTester = () => {
  const { setModel } = useContext(GptContext);
  const mounted = useRef(false);

  // display control
  const [display, setDisplay] = useState<any>({
    models: false,
  });

  // models
  const [models, setModels] = useState([]);

  const handleDisplay = (target: string) => {
    setDisplay((prev: any) => {
      return { ...prev, [target]: !prev[target] };
    });
  };

  useEffect(() => {
    if (mounted.current === false) {
    }

    mounted.current = true;
  }, []);

  const DISPLAYS = [
    { label: "GPT Models", key: "models", component: GptModels },
    { label: "Chat Completion", key: "completion", component: ChatCompletion },
    { label: "Image generation", key: "image", component: GptImages },
    { label: "Image editing", key: "image-edit", component: GptImageEdit },
  ];

  const getViewerClass = (open: boolean) => {
    return classNames("bg-stone-50 p-5", {
      hidden: !open,
      block: open,
    });
  };

  return (
    <GptProvider>
      <div>
        <GptInfo />
        <div className="p-5">
          {DISPLAYS.map((item, index) => (
            <div key={index}>
              <div
                className="border p-2 px-5 flex justify-between"
                onClick={() => handleDisplay(item.key)}
              >
                <span>{item.label}</span>
                <span className="block  hover:text-emeral-700 cursor-pointer">
                  +
                </span>
              </div>

              <div className={getViewerClass(display[item.key])}>
                <ContentViewer content={item.component} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </GptProvider>
  );
};

export default GptTester;
