import React from 'react';
import { Link } from 'react-router';

const Choice = () => {
  return (
    <div className="min-h-screen bg-base-200 p-8">
      <h1 className="text-4xl font-bold text-center mb-12">Choose Your Resume Format</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Modern Template */}
        <Link to="/generate-resume?template=RTemplate1">
          <div className="card bg-base-100 hover:shadow-2xl transition-shadow duration-300 h-full">
            <figure className="px-4 pt-4">
              <img 
                src="https://marketplace.canva.com/EAFzfwx_Qik/4/0/1131w/canva-blue-simple-professional-cv-resume-T9RPR4DPdiw.jpg" 
                alt="Modern Resume Template" 
                className="rounded-xl h-[600px] w-full object-cover"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title justify-center text-2xl">Modern Template</h2>
              <p>Clean and contemporary design with a sidebar layout</p>
            </div>
          </div>
        </Link>

        {/* Classic Template */}
        <Link to="/generate-resume?template=RTemplate2">
          <div className="card bg-base-100 hover:shadow-2xl transition-shadow duration-300 h-full">
            <figure className="px-4 pt-4">
              <img 
                src="https://marketplace.canva.com/EAFzfwx_Qik/4/0/1131w/canva-blue-simple-professional-cv-resume-T9RPR4DPdiw.jpg" 
                alt="Classic Resume Template" 
                className="rounded-xl h-[600px] w-full object-cover"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title justify-center text-2xl">Classic Template</h2>
              <p>Traditional single-column layout with elegant styling</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Choice;