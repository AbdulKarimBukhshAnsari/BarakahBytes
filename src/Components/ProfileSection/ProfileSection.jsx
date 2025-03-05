import React, { useEffect, useState } from "react";
import { Settings , LogOut , ImageIcon} from "lucide-react";



const ProfileSection = () => {
    // since re renders can occur , so we can use useEffect();
    const [data , setData] = useState({});

    useEffect(()=>{
      setData(JSON.parse(localStorage.getItem('data')))
    } , [])
    
      return (
      <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-8">
        <div className="h-40 bg-gradient-to-r from-red-500 to-gray-800 relative">
          <button className="absolute bottom-4 right-4 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full">
            <ImageIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="px-6 py-6 flex flex-col md:flex-row md:items-end gap-6 relative">
          <div className="absolute -top-16 left-6 w-24 h-24 rounded-full border-4 border-gray-800 bg-gray-800 overflow-hidden">
            <img
              src= {data.session.user.user_metadata.avatar_url}
              alt="User Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:ml-28 flex-grow">
            <h1 className="text-2xl font-bold text-white">{data.session.user.user_metadata.full_name}</h1>
            <p className="text-gray-400">{data.session.user.user_metadata.email}</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-gray-700 text-white py-2 px-4 flex items-center gap-2 rounded-lg">
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </button>
            <button className="border border-gray-500 text-gray-400 hover:text-red-500 hover:border-red-500 rounded-lg py-2 px-4 flex items-center gap-2">
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

export default ProfileSection;