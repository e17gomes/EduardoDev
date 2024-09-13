import React from 'react';

type LogoType = {
  desk: () => JSX.Element;
  mobile: () => JSX.Element;
};

const Logo: LogoType = {
  desk: () => (
    <div className="bg-gradient-to-br from-indigo-600 via-blue-400 to-gray-800 w-7 flex items-center justify-center rounded-full">
      <p className="font-extrabold text-xl text-white/90">E</p>
    </div>
  ),
  mobile: () => (
    <div className="bg-gradient-to-br from-indigo-600 via-blue-400 to-gray-800 w-8 flex items-center justify-center rounded-full">
      <p className="font-extrabold text-2xl text-white/90">E</p>
    </div>
  )
};

export default Logo;