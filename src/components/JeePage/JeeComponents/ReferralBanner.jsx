import React, { useState } from 'react';
import { Gift, Share2, UserPlus, Copy } from 'lucide-react';
import { FaWhatsapp, FaLinkedin, FaInstagram, FaTelegram, FaEnvelope } from 'react-icons/fa';
import referralimg from '../../../assets/Referral_image.png'

function ReferralBanner() {
  const [copied, setCopied] = useState(false);
  const referralLink = 'https://nniit.com/sign-up/src=referral';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-10 min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-8 md:p-16 opacity-90 ">
      <div className="text-center mb-4">
        <h1 className="text-lg md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient">
          Refer & Win: Get 1-Month Premium Free!
        </h1>
        <p className="text-gray-900 -mt-1 text-xs md:text-sm">Every successful referral gives you an instant reward worth a one-month course, valued at 45,000!</p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-3">
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-pink-100/50 opacity-50"></div>
          <div className="relative">
            <h3 className="flex justify-center text-lg md:text-xl font-bold text-gray-800 mb-4 md:mb-6">How It Works</h3>
            {[ 
              { icon: UserPlus, title: 'Sign Up', desc: 'Create your account', gradient: 'from-blue-500 to-purple-500' },
              { icon: Share2, title: 'Refer Friends', desc: 'Share your unique link', gradient: 'from-purple-500 to-pink-500' },
              { icon: Gift, title: 'Win Rewards', desc: '₹2,500 + Premium Access', gradient: 'from-pink-500 to-rose-500' }
            ].map((step, index) => (
              <div key={index} className="relative group flex items-start gap-3 p-3 md:p-4 rounded-xl transition-all duration-300 hover:bg-white/60">
                <div className={`shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${step.gradient} rounded-xl flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <step.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs md:text-sm font-semibold text-purple-600">Step {index + 1}</span>
                    <div className="h-px flex-1 bg-purple-200"></div>
                  </div>
                  <h3 className="text-md md:text-lg font-bold text-gray-800 mt-1">{step.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative space-y-6 md:space-y-8 mt-8 md:mt-32">
          <div className="bg-white/80 rounded-xl p-4 md:p-6 shadow-lg relative">
            <h3 className="flex justify-center text-lg md:text-xl font-bold text-gray-800 mb-4 md:mb-8">
              Your Referral Link
            </h3>
            <div className="flex flex-col md:flex-row gap-2 mb-4">
              <input
                type="text"
                value={referralLink}
                readOnly
                className="flex-1 bg-white border border-gray-200 rounded-lg px-3 py-2 text-gray-700"
              />
              <button
                onClick={copyToClipboard}
                className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
              >
                {copied ? "Copied!" : "Copy"}
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { icon: FaWhatsapp, label: "WhatsApp", color: "bg-green-600", link: `https://wa.me/?text=${encodeURIComponent(referralLink)}` },
                { icon: FaLinkedin, label: "LinkedIn", color: "bg-blue-700", link: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(referralLink)}` },
                { icon: FaInstagram, label: "Instagram", color: "bg-pink-500", link: "https://www.instagram.com/" },
                { icon: FaEnvelope, label: "Email", color: "bg-red-500", link: `mailto:?subject=Join%20Now&body=${encodeURIComponent(referralLink)}` },
                { icon: FaTelegram, label: "Telegram", color: "bg-blue-500", link: `https://t.me/share/url?url=${encodeURIComponent(referralLink)}` },
              ].map((platform, index) => (
                <a
                  key={index}
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${platform.color} hover:opacity-90 p-2 rounded-full transition-transform duration-300 hover:scale-110`}
                >
                  <platform.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
            <div className="absolute hidden md:block -top-48 right-24 w-56 h-64 -z-50">
              <img src={referralimg} alt="Decorative" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReferralBanner;
