import React, { createContext, useState, useMemo } from "react";

interface GptContextInterface {
  isMobile: boolean;
  setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
  model: string;
  setModel: React.Dispatch<React.SetStateAction<string>>;
}

const GptContextState = {
  isMobile: false,
  setIsMobile: () => {},
  model: "gpt-3.5-turbo-0301",
  setModel: () => {},
};
const GptContext = createContext<GptContextInterface>(GptContextState);

interface ProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

export const GptProvider = ({ children }: ProviderProps) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [model, setModel] = useState<string>("gpt-3.5-turbo-0301");
  //   const currentModel = useMemo(() => {
  //     return model === "" ? "Not Selected" : model;
  //   }, [model]);

  return (
    <GptContext.Provider
      value={{
        isMobile,
        setIsMobile,
        model,
        setModel,
      }}
    >
      {children}
    </GptContext.Provider>
  );
};

export default GptContext;
