import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight, Star } from 'lucide-react';

const ClaimYourSpot = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 51,
    seconds: 47
  });

  const [notification, setNotification] = useState({ 
    name: '', 
    message: '', 
    show: false 
  });
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [usedNames, setUsedNames] = useState(new Set());
  const [messages, setMessages] = useState([]);
  
  const indianNames = [
    'Aarav', 'Aditi', 'Arjun', 'Diya', 'Ishaan', 'Kavya', 
    'Neha', 'Pranav', 'Riya', 'Rohan', 'Sanya', 'Vihaan',
    'Ananya', 'Aditya', 'Tanvi', 'Kabir', 'Zara', 'Vivaan',
    'Aisha', 'Reyansh', 'Mira', 'Krishna', 'Samar', 'Kiara',
    'Aarav', 'Aditi', 'Arjun', 'Diya', 'Ishaan', 'Kavya', 
    'Neha', 'Pranav', 'Riya', 'Rohan', 'Sanya', 'Vihaan',
    'Advik', 'Anaya', 'Aryan', 'Bhavya', 'Charvi', 'Darsh', 
    'Eshan', 'Ira', 'Jiya', 'Kiaan', 'Lavanya', 'Mahir', 
    'Myra', 'Nirvaan', 'Ojas', 'Pari', 'Reyansh', 'Samaira', 
    'Tanmay', 'Tisha', 'Uday', 'Viaan', 'Yash', 'Zara',  
    'Ahaan', 'Aarna', 'Aayush', 'Chaitra', 'Daksh', 'Eva', 
    'Hridaan', 'Jivin', 'Kiara', 'Lakshya', 'Moksh', 'Naitik', 
    'Oviya', 'Prisha', 'Rudra', 'Shaurya', 'Trisha', 'Ved', 
    'Yuvan', 'Ahana', 'Akhil', 'Anvika', 'Aradhya', 'Ashvik', 
    'Brinda', 'Chetan', 'Dev', 'Eesha', 'Gaurav', 'Hansika', 
    'Ishita', 'Jatan', 'Karthik', 'Krisha', 'Liana', 'Mann', 
    'Navya', 'Omkar', 'Pihu', 'Qaira', 'Ranbir', 'Sanvika', 
    'Tarak', 'Urmila', 'Vivaan', 'Yuvika', 'Zayan', 'Adhira', 
    'Bhargav', 'Chinmay', 'Dhruv', 'Ekansh', 'Falguni', 'Garv', 
    'Harsh', 'Ishanvi', 'Jash', 'Krishiv', 'Luv', 'Mishti',
    'Aarohi', 'Ansh', 'Atharv', 'Bhavesh', 'Chirag', 'Devansh', 
    'Eshita', 'Fiza', 'Girish', 'Harini', 'Ishir', 'Jiyaan', 
    'Keshav', 'Lalit', 'Maitreyi', 'Nandan', 'Oshin', 'Pranaya', 
    'Raghav', 'Sahil', 'Tanuj', 'Utsav', 'Vanya', 'Yaksh', 
    'Zehan', 'Aditi', 'Bhavik', 'Charan', 'Divya', 'Ekisha', 
    'Fateh', 'Gyan', 'Hardik', 'Inaya', 'Jasleen', 'Kriti', 
    'Lohit', 'Mahika', 'Niyati', 'Ojasvi', 'Pratyush', 'Rhea', 
    'Samar', 'Tanya', 'Utkarsh', 'Vedika', 'Yug', 'Zohra',
    'Aarav', 'Aditi', 'Arjun', 'Diya', 'Ishaan', 'Kavya', 
    'Neha', 'Pranav', 'Riya', 'Rohan', 'Sanya', 'Vihaan',
    'Ananya', 'Aditya', 'Tanvi', 'Kabir', 'Zara', 'Vivaan',
    'Aisha', 'Reyansh', 'Mira', 'Krishna', 'Samar', 'Kiara',
    'Aarav', 'Aditi', 'Arjun', 'Diya', 'Ishaan', 'Kavya', 
    'Neha', 'Pranav', 'Riya', 'Rohan', 'Sanya', 'Vihaan',
    'Advik', 'Anaya', 'Aryan', 'Bhavya', 'Charvi', 'Darsh', 
    'Eshan', 'Ira', 'Jiya', 'Kiaan', 'Lavanya', 'Mahir', 
    'Myra', 'Nirvaan', 'Ojas', 'Pari', 'Reyansh', 'Samaira', 
    'Tanmay', 'Tisha', 'Uday', 'Viaan', 'Yash', 'Zara',  
    'Ahaan', 'Aarna', 'Aayush', 'Chaitra', 'Daksh', 'Eva', 
    'Hridaan', 'Jivin', 'Kiara', 'Lakshya', 'Moksh', 'Naitik', 
    'Oviya', 'Prisha', 'Rudra', 'Shaurya', 'Trisha', 'Ved', 
    'Yuvan', 'Ahana', 'Akhil', 'Anvika', 'Aradhya', 'Ashvik', 
    'Brinda', 'Chetan', 'Dev', 'Eesha', 'Gaurav', 'Hansika', 
    'Ishita', 'Jatan', 'Karthik', 'Krisha', 'Liana', 'Mann', 
    'Navya', 'Omkar', 'Pihu', 'Qaira', 'Ranbir', 'Sanvika', 
    'Tarak', 'Urmila', 'Vivaan', 'Yuvika', 'Zayan', 'Adhira', 
    'Bhargav', 'Chinmay', 'Dhruv', 'Ekansh', 'Falguni', 'Garv', 
    'Harsh', 'Ishanvi', 'Jash', 'Krishiv', 'Luv', 'Mishti',
    'Aarohi', 'Ansh', 'Atharv', 'Bhavesh', 'Chirag', 'Devansh', 
    'Eshita', 'Fiza', 'Girish', 'Harini', 'Ishir', 'Jiyaan', 
    'Keshav', 'Lalit', 'Maitreyi', 'Nandan', 'Oshin', 'Pranaya', 
    'Raghav', 'Sahil', 'Tanuj', 'Utsav', 'Vanya', 'Yaksh', 
    'Zehan', 'Aditi', 'Bhavik', 'Charan', 'Divya', 'Ekisha', 
    'Fateh', 'Gyan', 'Hardik', 'Inaya', 'Jasleen', 'Kriti', 
    'Lohit', 'Mahika', 'Niyati', 'Ojasvi', 'Pratyush', 'Rhea', 
    'Samar', 'Tanya', 'Utkarsh', 'Vedika', 'Yug', 'Zohra'
  ];

  const notificationMessages = [
    'Enrolled JEE Long Term Course', 
    'Joined Crash Course for IIT-JEE', 
    'Enrolled NEET Long Term Course',
    'Enrolled course for IPMAT',
    'Enrolled Crash Course for NEET'
  ];

  const getUniqueRandomName = () => {
    const availableNames = indianNames.filter(name => !usedNames.has(name));
    if (availableNames.length === 0) {
      setUsedNames(new Set());
      return indianNames[Math.floor(Math.random() * indianNames.length)];
    }
    const randomName = availableNames[Math.floor(Math.random() * availableNames.length)];
    setUsedNames(prev => new Set([...prev, randomName]));
    return randomName;
  };

  useEffect(() => {
    // Initialize messages
    const initialMessages = Array(50).fill(null).map(() => 
      `${getUniqueRandomName()} booked a demo just now`
    );
    setMessages(initialMessages);

    // Timer for rotating messages
    const messageTimer = setInterval(() => {
      const newName = `${getUniqueRandomName()} booked a demo just now`;
      setMessages(prev => {
        const newMessages = [...prev.slice(1), newName];
        // Reset activeIndex when it reaches the end
        if (activeIndex >= prev.length - 2) {
          setActiveIndex(0);
        } else {
          setActiveIndex(prev => prev + 1);
        }
        return newMessages;
      });
    }, 3000);

    // Other timers...
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.hours === 0 && prevTime.minutes === 0 && prevTime.seconds === 0) {
          clearInterval(timer);
          return prevTime;
        }

        let newHours = prevTime.hours;
        let newMinutes = prevTime.minutes;
        let newSeconds = prevTime.seconds - 1;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }

        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
      });
    }, 1000);

    const notificationTimer = setInterval(() => {
      const randomName = getUniqueRandomName();
      const randomMessage = notificationMessages[Math.floor(Math.random() * notificationMessages.length)];
      setNotification({ 
        name: randomName, 
        message: randomMessage, 
        show: true 
      });

      setTimeout(() => {
        setNotification(prev => ({ ...prev, show: false }));
      }, 3000);
    }, 8000);

    return () => {
      clearInterval(timer);
      clearInterval(messageTimer);
      clearInterval(notificationTimer);
    };
  }, []);

  const formatNumber = (num) => num.toString().padStart(2, '0');

  return (
    <>
      {/* Notification */}
      <div 
        className={`fixed top-4 right-4 z-[9999] transition-all duration-500 ${
          notification.show ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg border border-indigo-100 flex items-center gap-2 max-w-[280px]">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-indigo-600">New Enrollment!</span>
            <span className="text-xs text-gray-600">
              {notification.name} {notification.message}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white flex items-center justify-center p-2 -mt-8">
        <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl max-w-md">
          <div className="relative bg-white/40 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-lg">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-violet-400 to-indigo-400" />
            <div className="space-y-4">
              <div className="text-center space-y-2">
                <div className="inline-flex items-center gap-1 bg-indigo-500/10 px-3 -mt-1 py-1 rounded-full">
                  <Star className="w-3 h-3 text-indigo-600" />
                  <span className="text-xs font-medium text-indigo-600">EXCLUSIVE OFFER</span>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent mt-4">
                  What's Stopping You from Learning from IIT Experts – for FREE?
                </h3>
                <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-400 bg-clip-text text-transparent mt-4">
                  No commitments—just learning
                </h2>
              </div>

              {/* Countdown Timer */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                {[
                  { value: timeLeft.hours, label: 'HRS' },
                  { value: timeLeft.minutes, label: 'MIN' },
                  { value: timeLeft.seconds, label: 'SEC' }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="relative group bg-white/50 backdrop-blur-sm rounded-2xl p-3 border-2 border-amber-400 hover:border-amber-500 transition-colors duration-300 shadow-[0_0_15px_rgba(251,191,36,0.3)]"
                  >
                    <div className="absolute inset-0 rounded-2xl pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:border-[2px] before:border-transparent before:border-t-amber-400 before:border-r-amber-500 before:border-b-amber-400 before:border-l-amber-500 before:animate-rotate-line" />
                    <div className="text-3xl font-bold text-indigo-800 text-center font-mono">
                      {formatNumber(item.value)}
                    </div>
                    <div className="text-[10px] font-medium text-indigo-600 text-center mt-1 tracking-wider">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Live Updates Section with smooth carousel animation */}
              <div className="border border-gray-200 rounded-lg p-2 bg-white/50">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    <div className="flex items-center bg-red-600 text-white text-[10px] px-1 py-0.5 rounded">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse mr-1" />
                      LIVE
                    </div>
                  </div>
                  <div className="h-5 w-full overflow-hidden">
                    <div 
                      className="transition-transform duration-500 ease-in-out"
                      style={{
                        transform: `translateY(-${activeIndex * 24}px)`,
                        willChange: 'transform',
                      }}
                    >
                      {messages.map((message, index) => (
                        <div
                          key={`${message}-${index}`}
                          className="h-6 flex items-center text-indigo-600 text-xs font-medium"
                        >
                          {message}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-center">
                <div className="relative inline-block">
                  <h3 className="text-[25px] font-bold">
                    <span className="text-transparent text-2xl bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">Limited Time Only – 50% </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">
                      Discount Available On Your First Course
                    </span>
                  </h3>
                </div>
                <p className="text-indigo-600 text-[15px]">
                  Don't Let Doubts Hold Back!
                </p>
              </div>
              
              <button className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-4 py-3 transition-all duration-300 hover:from-violet-600 hover:to-indigo-600">
                <div className="relative flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5 text-white" />
                  <span className="font-semibold text-white">Secure Your Spot</span>
                  <ArrowRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </button>

              <div className="pt-4 border-t border-indigo-100">
                <div className="flex items-center justify-between text-[14px] text-xs text-indigo-600">
                  <span>• 10,000+ Students</span>
                  <span>• Limited Seats</span>
                  <span>• Expert Mentors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClaimYourSpot;