import React from 'react';
import { MdCircle } from "react-icons/md";
import { GoDatabase } from "react-icons/go";

export const RepositoryCard = ({ name, language, size, visibility, updated }) => (
    <div className="p-4 border-t border-strokeColor hover:bg-bgWhiteVariant">
      <div className="flex items-center justify-between">
        <div>
          <div className='flex items-center gap-2'>
          <h3 className="text-lg font-medium text-TextBlack">{name}</h3>
          <span className="px-2 text-sm rounded-full bg-blueLightColor/10 text-secondaryColor border border-blueLightColor">
          {visibility}
        </span>
        </div>
          <div className="flex items-center gap-8 mt-2 text-sm text-textDarkGray">
            <div className='flex items-center gap-1'>
              <span>{language}</span>
              <MdCircle size={10} className='text-blueDarkColor'/>
            </div>
            <div className='flex items-center gap-1'>
              <GoDatabase size={14}/>
              <span>{size}</span>
            </div>
            <span>Updated {updated}</span>
          </div>
        </div>
      </div>
    </div>
  );