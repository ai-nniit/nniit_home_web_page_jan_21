// import React from 'react';

// const FooterColumn = ({ title, links }) => {
//   return (
//     <div className="space-y-4">
//       <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
//       <ul className="space-y-2">
//         {links.map((link, index) => (
//           <li key={`${title}-${index}`}>
//             <a
//               href="#"
//               className="text-gray-600 hover:text-gray-900 hover:underline transition-colors"
//               onClick={(e) => {
//                 e.preventDefault();
//                 console.log(`Clicked: ${link}`);
//               }}
//             >
//               {link}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FooterColumn;


import React from 'react';

const FooterColumn = ({ title, links }) => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
      <ul className="space-y-2 sm:space-y-3">
        {links.map((link, index) => (
          <li key={`${title}-${index}`}>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 hover:underline transition-colors text-base sm:text-lg"
              onClick={(e) => {
                e.preventDefault();
                console.log(`Clicked: ${link}`);
              }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
