import { Dispatch, SetStateAction } from 'react';

type CategoryTabProps = {
    currentTab: string;
    setCurrentTab: Dispatch<SetStateAction<string>>;
    tabList: string[];
};

export function CategoryTab({ currentTab, setCurrentTab, tabList }: CategoryTabProps) {
    return (
        <ul className="flex w-full mb-6 sm:w-auto overflow-x-auto sm:overflow-visible scrollbar-hide">
            <li className="flex gap-3 w-full">
                {tabList.map(tab => (
                    <button
                        key={tab}
                        className={`py-2 cursor-pointer
              ${currentTab === tab
                                ? 'text-black underline decoration-2 underline-offset-6'
                                : 'text-gray-500 hover:text-black'}
            `}
                        onClick={() => setCurrentTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </li>
        </ul>
    );
}
