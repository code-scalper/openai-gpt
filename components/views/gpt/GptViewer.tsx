import { useEffect, useRef } from "react";
import { $_lib_fetchData } from "@/lib/apiHandler";
const GptViewer = () => {
  const mounted = useRef(false);

  const testGpt = async () => {
    const res = await $_lib_fetchData("/models");
  };

  const chatCompletion = async () => {
    const res = await $_lib_fetchData("/chat/completions", "post", {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Say this is a test!" }],
      temperature: 0.7,
    });
  };

  const handleButton = (action: string) => {
    switch (action) {
      case "completions":
        chatCompletion();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (mounted.current === false) {
      testGpt();
    }

    mounted.current = true;
  }, []);

  const BUTTONS = [{ label: "Chat Completion", action: "completions" }];

  return (
    <div>
      <ul className="p-5 ">
        {BUTTONS.map(({ label, action }, index) => (
          <li key={index}>
            <button
              className="bg-emerald-700 p-2 text-xs rounded-sm text-white hover:bg-emerald-600"
              onClick={() => handleButton(action)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GptViewer;
