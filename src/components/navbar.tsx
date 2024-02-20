import '../App.css';

import { useState } from 'react';

const TabButtons = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const buttons = [
    { id: 'profile', label: 'Profile' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'settings', label: 'Settings' },
    { id: 'contacts', label: 'Contacts' },
  ];

  const handleTabClick = (tabId: any) => {
    setActiveTab(tabId);
  };

  return (
    // <div className="w-full mb-4 mr-0">
    //   <ul className="flex flex-wrap -mb-px text-sm font-medium text-center mr-[20px] " role="tablist">
    //     {buttons.map((button) => (
    //       <li key={button.id} className="me-2" role="presentation">
    //         <button
    //           className={`inline-block p-4 rounded-t-lg focus:outline-none ${
    //             activeTab === button.id
    //               ? 'text-purple-600 border-purple-600 border-b-2 '
    //               : 'text-gray-500 border-gray-100 hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:border-gray-700 dark:hover:text-gray-300'
    //           }`}
    //           id={`styled-${button.id}-tab`}
    //           data-tabs-target={`#styled-${button.id}`}
    //           type="button"
    //           role="tab"
    //           aria-controls={button.id}
    //           aria-selected={activeTab === button.id ? 'true' : 'false'}
    //           onClick={() => handleTabClick(button.id)}>
    //           {button.label}
    //         </button>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <div className="h-[70px] bg-slate-200 text-center">navbar</div>
  );
};

export default TabButtons;
