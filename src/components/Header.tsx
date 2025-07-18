import React from 'react';
import { Target, Bell } from 'lucide-react';

const Header = () => {
  return (
    <header className="glass sticky top-0 z-40 border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-glow-blue transition-all duration-300 transform hover:scale-110 animate-float">
                <Target className="text-white" size={22} />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">SuperCoach AI</h1>
              <p className="text-xs text-gray-500 -mt-1">Your AI-Powered Learning Companion</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-3 text-gray-600 hover:text-gray-900 hover:bg-white/50 backdrop-blur-sm rounded-xl transition-all duration-200 transform hover:scale-110 group">
              <Bell size={20} className="group-hover:animate-bounce-gentle" />
              <span className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse shadow-lg">
                3
              </span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </button>
            
            <div className="relative group">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm cursor-pointer hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-glow-green">
                C
              </div>
              <div className="absolute top-full right-0 mt-2 w-48 glass rounded-xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="text-sm font-medium text-gray-900">Coach Admin</div>
                <div className="text-xs text-gray-600 mt-1">coach@supercoach.ai</div>
                <div className="mt-3 pt-3 border-t border-white/30">
                  <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">View Profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;