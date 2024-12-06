import React from 'react';
import { Phone, Mail } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="mt-12 pt-8 border-t border-gray-200 space-y-4">
      <div className="flex items-center gap-2 text-gray-700">
        <Phone className="w-5 h-5" />
        <span className="font-medium">TOLL FREE: 1800-120-456-456</span>
      </div>
      
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <Phone className="w-4 h-4" />
        <span>91 988-660-2456 (9 AM to 9:30 PM on all days)</span>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-600">
        <Mail className="w-4 h-4" />
        <a 
          href="mailto:vcare@vedantu.com" 
          className="hover:text-gray-900 transition-colors"
        >
          vcare@nniit.com
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
