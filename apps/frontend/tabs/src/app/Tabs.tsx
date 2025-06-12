import { useState } from "react";
import TabsStyles from "./tabs.module.scss";

type TabData = {
  title: string;
  content: string;
};

type TabsProps = {
  data: TabData[];
};

export default function Tabs({ data }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <div>
        {data.map((tab, index) => {
          return (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={activeTab === index ? TabsStyles.active : ""}
            >
              {tab.title}
            </button>
          );
        })}
      </div>
      <div>
        {data.map((tab, index) => {
          if (activeTab === index) {
            return (
              <div key={index}>
                <p>{tab.content}</p>
              </div>
            );
          } else {
            return null
          }
        })}
      </div>
    </div>
  );
}
