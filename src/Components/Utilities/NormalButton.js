import React from 'react';

const NormalButton = ({classes, children, handler}) => {
    return (
      <button className={`btn px-8 text-white pt-1 rounded-[30px] hover:bg-slate-600  ${classes}`}>{children}</button>
    );
};

export default NormalButton;