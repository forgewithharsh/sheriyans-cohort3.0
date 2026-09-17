import { useState } from "react";
import "./App.css";

const dummyUrls = [
  {
    _id: "1",
    originalUrl:
      "https://www.amazon.in/M-G-R-J%C2%AE-Protector-MX-Master-2S/dp/B08BZHSPB4/ref=pd_bxgy_d_sccl_1/522-8935436-9000610?pd_rd_w=m4T6k&content-id=amzn1.sym.142c0d31-3594-485b-b879-def9251f61c0&pf_rd_p=142c0d31-3594-485b-b879-def9251f61c0&pf_rd_r=W1CBRDVG34QYVECA6383&pd_rd_wg=D3PO8&pd_rd_r=647e6d3b-1732-4845-9f47-c7691e2022e9&pd_rd_i=B08BZHSPB4&psc=1",
    shortCode: "tIV2JJ",
    clicks: 2,
  },
  {
    _id: "2",
    originalUrl:
      "https://www.amazon.in/M-G-R-J%C2%AE-Protector-MX-Master-2S/dp/B08BZHSPB4/ref=pd_bxgy_d_sccl_1/522-8935436-9000610?pd_rd_w=m4T6k&content-id=amzn1.sym.142c0d31-3594-485b-b879-def9251f61c0&pf_rd_p=142c0d31-3594-485b-b879-def9251f61c0&pf_rd_r=W1CBRDVG34QYVECA6383&pd_rd_wg=D3PO8&pd_rd_r=647e6d3b-1732-4845-9f47-c7691e2022e9&pd_rd_i=B08BZHSPB4&psc=1",
    shortCode: "tIV2JJ",
    clicks: 6,
  },
  {
    _id: "3",
    originalUrl:
      "https://www.amazon.in/M-G-R-J%C2%AE-Protector-MX-Master-2S/dp/B08BZHSPB4/ref=pd_bxgy_d_sccl_1/522-8935436-9000610?pd_rd_w=m4T6k&content-id=amzn1.sym.142c0d31-3594-485b-b879-def9251f61c0&pf_rd_p=142c0d31-3594-485b-b879-def9251f61c0&pf_rd_r=W1CBRDVG34QYVECA6383&pd_rd_wg=D3PO8&pd_rd_r=647e6d3b-1732-4845-9f47-c7691e2022e9&pd_rd_i=B08BZHSPB4&psc=1",
    shortCode: "tIV2JJ",
    clicks: 9,
  },
];

function App() {
  const [urls, setUrls] = useState(dummyUrls);
  const [inputValue, setInputValue] = useState("");
  const [currentUrl, setCurrentUrl] = useState(null);

  return (
    <main className="p-10 flex flex-col gap-4">
      <div className="w-full max-w-4xl p-2"></div>
      <div className="w-full max-w-4xl p-2"></div>
      <div className="w-full max-w-4xl p-2">
        {urls.map((url) => {
          return (
            <div className="border border-neutral-200 p-2 flex gap-8 justify-evenly">
              <p>{url.shortCode}</p>
              <p className="truncate">{url.originalUrl}</p>
              <div className="flex gap-2">
                <button className="p-2 rounded bg-orange-600 text-white">
                  COPY
                </button>
                <button className="p-2 rounded bg-orange-600 text-white">
                  DELETE
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default App;
