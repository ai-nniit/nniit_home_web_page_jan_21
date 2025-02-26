import React, { useState, useEffect, useRef } from 'react';
import { User, MessageCircle, Send, Bot } from 'lucide-react';

const EducationChatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatStage, setChatStage] = useState('initial');
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [currentMessage, setCurrentMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: "Hey, I am here to help you out with preparation for JEE, NEET, and other competitive examinations!", 
      sender: 'bot',
      avatar: '🤖'
    }
  ]);
  const messagesEndRef = useRef(null);

  const options = [
    { 
      text: 'Important Dates', 
      icon: '📞',
      description: 'Personalized academic guidance'
    },
    { 
      text: 'Admit Card', 
      icon: '📚',
      description: 'Comprehensive JEE exam insights'
    },
    { 
      text: 'Mock Test', 
      icon: '🎯',
      description: 'Proven strategies for success'
    },
    { 
      text: 'Get Free Counselling', 
      icon: '👨‍🏫',
      description: 'Expert IIT mentorship'
    },
    { 
      text: 'One on One leearning', 
      icon: 'ℹ️',
      description: 'Additional resources'
    }
  ];

  // Simulate bot typing and response
  const simulateBotResponse = (message) => {
    setIsTyping(true);
    
    setTimeout(() => {
      const responses = {
        'Get Free Counselling': "Our counseling team is ready to guide you!",
        'Know about JEE': "JEE is a crucial engineering entrance exam in India.",
        'JEE Preparation Tips': "Consistent study and smart preparation are key.",
        'One-on-One Learning': "Personalized learning with top IIT experts.",
        'More Information': "We have comprehensive resources for you."
      };

      const botResponse = responses[message] || "Let me help you with that!";

      setMessages(prev => [
        ...prev, 
        { 
          text: botResponse, 
          sender: 'bot',
          avatar: '🤖'
        }
      ]);
      
      setIsTyping(false);
    }, 1500);  // Simulates typing delay
  };

  const handleOptionSelect = (option) => {
    const newMessages = [
      ...messages, 
      { 
        text: option.text, 
        sender: 'user',
        avatar: '👤'
      }
    ];
    setMessages(newMessages);
    simulateBotResponse(option.text);
    
    setTimeout(() => {
      const namePromptMessage = { 
        text: 'Before I answer your query, can I know your name?', 
        sender: 'bot',
        avatar: '🤖'
      };
      setMessages(prev => [...prev, namePromptMessage]);
      setChatStage('askName');
    }, 2000);
  };

  const handleNameSubmit = () => {
    if (userName.trim()) {
      const newMessages = [
        ...messages, 
        { 
          text: userName, 
          sender: 'user',
          avatar: '👤'
        }
      ];
      setMessages(newMessages);

      setTimeout(() => {
        const phonePrompt = { 
          text: `Nice to meet you, ${userName}! Can I know your phone number?`, 
          sender: 'bot',
          avatar: '🤖'
        };
        setMessages(prev => [...prev, phonePrompt]);
        setChatStage('askPhone');
      }, 1000);
    }
  };

  const handlePhoneSubmit = () => {
    if (userPhone.trim()) {
      const newMessages = [
        ...messages, 
        { 
          text: userPhone, 
          sender: 'user',
          avatar: '👤'
        }
      ];
      setMessages(newMessages);

      setTimeout(() => {
        const confirmMessage = { 
          text: 'Our expert will contact you and clarify all your doubt sessions.', 
          sender: 'bot',
          avatar: '🤖'
        };
        setMessages(prev => [...prev, confirmMessage]);
        setChatStage('completed');
      }, 1500);
    }
  };

  const handleMessageSend = () => {
    if (currentMessage.trim()) {
      const newMessages = [
        ...messages, 
        { 
          text: currentMessage, 
          sender: 'user',
          avatar: '👤'
        }
      ];
      setMessages(newMessages);
      setCurrentMessage('');

      // Simulated bot response
      simulateBotResponse(currentMessage);
    }
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-16 right-7 z-40">
      {/* Chatbot Trigger Button */}
      <button 
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-2 rounded-full shadow-3xl hover:scale-110 transition-transform duration-300 animate-pulse"
      >
        <MessageCircle size={38} />
      </button>

      {/* Chatbot Window */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-6 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-t-2xl flex items-center">
  <Bot className="mr-3" size={24} />
  <div className="flex items-center">
    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
    <span className="font-semibold">NNIIT Counseller</span>
  </div>
  <button 
    onClick={() => setIsChatOpen(false)} 
    className="ml-auto hover:bg-white/20 rounded-full p-1"
  >
    ✕
  </button>
</div>

          {/* Chat Messages */}
          <div className="flex-grow overflow-y-auto p-4 space-y-3 max-h-80 bg-gray-50">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex items-start space-x-2 ${
                  msg.sender === 'bot' ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="text-2xl">{msg.avatar}</div>
                <div 
                  className={`p-3 rounded-2xl max-w-[80%] ${
                    msg.sender === 'bot' 
                      ? 'bg-white text-gray-800 shadow-md' 
                      : 'bg-blue-500 text-white shadow-md'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-start space-x-2">
                <div className="text-2xl">🤖</div>
                <div className="bg-white p-3 rounded-2xl flex space-x-1 items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Option Buttons */}
          {chatStage === 'initial' && (
            <div className="p-4 grid grid-cols-3 gap-2 bg-gray-100">
              {options.map((option, index) => (
                <button 
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                  className="bg-white border border-blue-200 text-blue-600 hover:bg-blue-50 p-2 rounded-lg text-xs text-center transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                >
                  <div className="text-lg mb-1">{option.icon}</div>
                  <div className="font-semibold">{option.text}</div>
                  <div className="text-xs text-gray-500 mt-1">{option.description}</div>
                </button>
              ))}
            </div>
          )}

          {/* Input Stages */}
          {(chatStage === 'askName' || chatStage === 'askPhone' || chatStage === 'completed') && (
            <div className="p-4 bg-gray-100 flex space-x-2">
              <input 
                type={chatStage === 'askPhone' ? 'tel' : 'text'}
                value={chatStage === 'askName' ? userName : userPhone}
                onChange={(e) => 
                  chatStage === 'askName' 
                    ? setUserName(e.target.value) 
                    : setUserPhone(e.target.value)
                }
                placeholder={
                  chatStage === 'askName' 
                    ? "Enter your name" 
                    : "Enter your phone number"
                }
                className="flex-grow p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-300 transition-all"
              />
              <button 
                onClick={
                  chatStage === 'askName' 
                    ? handleNameSubmit 
                    : handlePhoneSubmit
                }
                className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EducationChatbot;











