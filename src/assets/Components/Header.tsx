import React, { Component } from "react";
import { Map } from 'lucide-react'




function Header() {


  render() {
    return (
      <div className="bg-slate-800 text-white py-2 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-beetwen items-center text-sm">
          <MapPin />

        </div>
      
      </div>
    );
  }
}

export default Header;