import React from 'react';

const SectionHeader = ({firstext, scondtext, thirdtext}) => {
    return (
      <div className='flex flex-col justify-center items-center'>
        <h3 className="text-[1.5rem] text-[#f507f5]">{firstext}</h3>
        <h3 className="text-[2.5rem] text-white leading-8">{scondtext}</h3>
        <p className="text-[#a09393a8]">{thirdtext}</p>
      </div>
    );
};

export default SectionHeader;