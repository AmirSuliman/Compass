import { ChartColumnBig, Mail, NotebookTabs } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Tabs = () => {
  const [activeButton, setActiveButton] = useState('/user/inbox');
  const navigate = useNavigate();

  const handleNavigate = (to) => {
    navigate(to);
    setActiveButton(to);
  };

  return (
    <nav className="flex gap-4 flex-wrap [&_button]:border-none [&_button]:text-sm [&_button]:font-medium">
      <button
        onClick={() => {
          handleNavigate('/user/analytics');
        }}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
          activeButton === '/user/analytics'
            ? '!bg-Yellow text-black'
            : 'bg-light-gray text-medium-gray'
        }`}
      >
        <ChartColumnBig />
        Analytics
      </button>
      <button
        onClick={() => {
          handleNavigate('/user/inbox');
        }}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
          activeButton === '/user/inbox'
            ? '!bg-Yellow text-black'
            : 'bg-light-gray text-medium-gray'
        }`}
      >
        <Mail />
        Inbox
      </button>
      <button
        onClick={() => {
          handleNavigate('/user/planning');
        }}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
          activeButton === '/user/planning'
            ? '!bg-Yellow text-black'
            : 'bg-light-gray text-medium-gray'
        }`}
      >
        <NotebookTabs />
        Planning
      </button>
    </nav>
  );
};
export default Tabs;
