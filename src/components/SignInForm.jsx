import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillPieChart } from "react-icons/ai";
import { FaGithub, FaBitbucket, FaGitlab } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import { IoKeyOutline } from "react-icons/io5";
import data from '../MockData/SignIn.json';

const iconMap = {
  FaGithub: <FaGithub size={20} />,
  FaBitbucket: <FaBitbucket size={20} className='text-secondaryColor' />,
  VscAzureDevops: <VscAzureDevops size={20} className='text-secondaryColor' />,
  FaGitlab: <FaGitlab size={20} className='text-[#E24329]' />,
  IoKeyOutline: <IoKeyOutline size={20} />
};

const SignInPage = () => {
  const [selectedOption, setSelectedOption] = useState('SAAS');
  const navigate = useNavigate();
  
  const stats = data.stats;
  const authButtonsData = data.authButtons;

  const handleSignIn = (provider) => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 p-8 flex-col justify-center items-center relative overflow-hidden bg-primaryWhite border-r border-strokeColor hidden md:flex">
        <div className="absolute bottom-0 left-0 w-72 h-72 opacity-10">
          <img src="/assets/CodeAntLogo.webp" alt="CodeAnt Background" className="w-full h-full" />
        </div>
        
        <div className="bg-primaryWhite rounded-3xl shadow-2xl mb-4 relative max-w-md">
          <div className="flex items-center gap-2 p-4 border-b border-b-strokeColor ">
            <img src="/assets/CodeAntLogo.webp" alt="CodeAnt AI" className="w-8 h-8" />
            <span className="font-bold text-lg">AI to Detect & Autofix Bad Code</span>
          </div>
          <div className="text-center p-2">
          <div className="grid grid-cols-3 gap-1 text-center mb-2">
            {stats.map(({ value, label }) => (
              <div key={label} className="p-2">
                <div className="font-semibold text-lg">{value}</div>
                <div className="text-sm text-textLightGrey">{label}</div>
              </div>
            ))}
          </div>
          </div>
        </div>

        <div className="bg-primaryWhite rounded-3xl py-4 px-10 shadow-2xl absolute z-20 max-w-md mt-64 ml-48">
          <div className="flex items-center gap-16 mb-4">
            <div className="bg-purpleColor/25 rounded-full p-3">
              <AiFillPieChart className='text-purpleColor w-8 h-8'/>
            </div>
            <div className="ml-auto">
              <div className="text-secondaryColor font-bold text-sm">↑ 14%</div>
              <div className="text-xs text-textLightGrey">This week</div>
            </div>
            </div>
            <div>
              <div className="text-sm text-textLightGrey">Issues Fixed</div>
              <div className="font-bold text-3xl text-darkColor">500K+</div>
            </div>
        </div>
      </div>

      
      <div className="flex-1 flex flex-col items-center justify-center p-8 bg-bgWhiteVariant">
        <div className="w-full max-w-2xl bg-primaryWhite rounded-2xl border border-strokeColor">
          <div className="text-center border-b border-strokeColor p-8">
            <div className='flex items-center justify-center mb-8'>
              <img src="/assets/Logo.webp" alt="CodeAnt AI" className="w-2/3 h-2/3 md:w-1/3 md:h-1/3" />
            </div>
            <h1 className="text-2xl md:text-3xl font-semibold mb-6">Welcome to CodeAnt AI</h1>
            
            <div className="w-full flex flex-row">
              {['SAAS', 'Self Hosted'].map((option) => (
                <button
                  key={option}
                  onClick={() => setSelectedOption(option)}
                  className={`p-2 md:px-4 md:py-3 w-full transition-colors rounded-lg ${
                    selectedOption === option
                      ? 'bg-blue-600 text-white'
                      : 'text-TextLightGrey hover:bg-gray-100 border border-strokeColor'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div className="text-center text-sm text-textLightGrey px-4 md:px-8 py-4 md:min-h-[250px]">
          <div className="gap-3 justify-center items-center flex flex-col">
            {authButtonsData[selectedOption].map(({ icon, text, provider }) => (
              <button
                key={provider}
                className="w-full md:w-3/4 flex items-center justify-center gap-2 p-3 border border-strokeColor rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => handleSignIn(provider)}
              >
                <span className="w-5 h-5 flex items-center justify-center">
                  {iconMap[icon]}
                </span>
                <span>{text}</span>
              </button>
            ))}
          </div>
          </div>
        </div>
        <p className="text-center text-sm text-textDarkGray mt-6">
            By signing up you agree to the{' '}
            <a href="#" className="font-bold">
              Privacy Policy
            </a>
            .
        </p>
      </div>
    </div>
  );
};

export default SignInPage;