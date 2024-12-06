import React from 'react';
import { Building2 } from 'lucide-react'; // Ensure lucide-react is installed: `npm install lucide-react`

const logos = [
  { name: 'Mercedes-Benz', icon: Building2 },
  { name: 'Roblox', icon: Building2 },
  { name: 'Royal Caribbean', icon: Building2 },
  { name: 'Lumen', icon: Building2 },
  { name: 'Doodle', icon: Building2 },
  { name: 'Dropbox', icon: Building2 },
  { name: 'HCS', icon: Building2 },
];

const CompanyLogos = () => {
  return (
    <div className="w-full mt-6 border-t border-white/10">
      <div className="flex items-center justify-between px-2 py-4 gap-4 overflow-hidden">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center text-white/40 hover:text-white/60 transition-colors"
          >
            <logo.icon className="w-6 h-6 mr-10" />
            <span className="text-sm font-medium">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;
