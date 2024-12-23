import React, { useState } from 'react';
import { FiRefreshCw } from "react-icons/fi";
import { IoAddOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { RepositoryCard } from './RepositoryCard';
import Sidebar from './SideBar';
import data from '../MockData/Dashboard.json';

const Repositories = () => {
  const [selectedRepo, setSelectedRepo] = useState('UtkarshDhairyaPatel');
  const [searchTerm, setSearchTerm] = useState('');
  
  const repositories = data.repositories;
  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-bgWhiteVariant">
      
      <Sidebar selectedRepo={selectedRepo} setSelectedRepo={setSelectedRepo} />

      
      <div className="flex-1 overflow-auto ">
        <div className="m-auto md:m-4 md:border md:border-strokeColor rounded-2xl bg-bgWhiteVariant md:bg-primaryWhite h-full md:h-auto">
          <div className="flex flex-col mt-16 md:mt-0 justify-between items-start md:items-center mb-2 p-4 md:flex-row">
            <div className='mb-4 md:mb-0'>
              <h1 className="text-2xl text-TextBlack font-semibold">Repositories</h1>
              <p className="text-sm font-light text-TextDarkGray">33 total repositories</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-3 py-2 rounded-md bg-bgWhiteVariant border border-strokeColor hover:bg-gray-100">
                <FiRefreshCw size={20} />
                <span>Refresh All</span>
              </button>
              <button className="flex items-center gap-2 px-3 py-2 bg-blueDarkColor text-primaryWhite rounded-md hover:bg-blueDarkColor/90">
                <IoAddOutline size={20} />
                <span>Add Repository</span>
              </button>
            </div>
          </div>

          <div className="mb-6 px-4">
            <div className="relative text-textDarkGray">
              <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 " size={20} />
              <input
                type="text"
                placeholder="Search Repositories"
                className="w-full md:w-1/3 pl-10 pr-4 py-2 border border-strokeColor rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div>
          {filteredRepositories.map((repo) => (
              <RepositoryCard key={repo.name} {...repo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repositories;