// import { motion } from 'framer-motion';
// import { ResponsiveRadar } from '@nivo/radar';
// import { ResponsiveLine } from '@nivo/line';
// import { ResponsiveSankey } from '@nivo/sankey';
// import { questions } from '../data/questions';

// import React, { useState, useEffect } from 'react';
// //import { ResponsiveSankey } from '@nivo/sankey';

// const SankeyChart = ({ sankeyData }) => {
//   const [highlightIndex, setHighlightIndex] = useState(0);

//   useEffect(() => {
//     const totalNodes = sankeyData.nodes.length;
//     const interval = setInterval(() => {
//       setHighlightIndex((prevIndex) => (prevIndex + 1) % totalNodes);
//     }, 2000);

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, [sankeyData.nodes.length]);

//   const customNodeColor = (node) =>
//     node.index === highlightIndex ? 'rgba(255, 99, 71, 1)' : node.color; // Highlight color

//   const customLinkColor = (link) =>
//     link.source.index === highlightIndex || link.target.index === highlightIndex
//       ? 'rgba(255, 99, 71, 0.7)'
//       : link.color;

// const calculateCategoryScore = (answers, category) => {
//   const categoryAnswers = answers.filter(answer =>
//     questions.find(q => q.id === answer.questionId)?.category === category
//   );

//   return (
//     (categoryAnswers.reduce((acc, curr) => acc + curr.selectedOption.value, 0) /
//       (categoryAnswers.length * 100)) *
//     100
//   );
// };

// export const AnalyticsView = ({ answers }) => {
//   const conceptualScore = calculateCategoryScore(
//     answers,
//     'Conceptual Understanding and Application'
//   );
//   const strategyScore = calculateCategoryScore(
//     answers,
//     'Study Strategies and Revision'
//   );
//   const performanceScore = calculateCategoryScore(
//     answers,
//     'Performance and Time Management'
//   );

//   const radarData = [
//     {
//       category: 'Conceptual Understanding',
//       userScore: conceptualScore,
//       'Top 1%': 95,
//       'Top 10%': 85,
//       Average: 70,
//     },
//     {
//       category: 'Study Strategies',
//       userScore: strategyScore,
//       'Top 1%': 98,
//       'Top 10%': 88,
//       Average: 75,
//     },
//     {
//       category: 'Performance',
//       userScore: performanceScore,
//       'Top 1%': 96,
//       'Top 10%': 86,
//       Average: 72,
//     },
//   ];

//   const lineData = [
//     {
//       id: 'Your Progress',
//       data: [
//         { x: 'Week 1', y: conceptualScore },
//         { x: 'Week 4', y: strategyScore },
//         { x: 'Week 8', y: performanceScore },
//       ],
//     },
//     {
//       id: 'Top 1%',
//       data: [
//         { x: 'Week 1', y: 95 },
//         { x: 'Week 4', y: 98 },
//         { x: 'Week 8', y: 96 },
//       ],
//     },
//     {
//       id: 'Top 10%',
//       data: [
//         { x: 'Week 1', y: 85 },
//         { x: 'Week 4', y: 88 },
//         { x: 'Week 8', y: 86 },
//       ],
//     },
//   ];

//   const sankeyData = {
//     nodes: [
//       { id: 'start', label: 'Starting Point' },
//       { id: 'consistent', label: 'Consistent Practice' },
//       { id: 'inconsistent', label: 'Inconsistent Practice' },
//       { id: 'success', label: 'High Performance' },
//       { id: 'average', label: 'Average Performance' },
//       { id: 'struggle', label: 'Need Improvement' },
//     ],
//     links: [
//       { source: 'start', target: 'consistent', value: 100 },
//       { source: 'start', target: 'inconsistent', value: 100 },
//       { source: 'consistent', target: 'success', value: 80 },
//       { source: 'consistent', target: 'average', value: 20 },
//       { source: 'inconsistent', target: 'average', value: 30 },
//       { source: 'inconsistent', target: 'struggle', value: 70 },
//     ],
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="w-full max-w-6xl mx-auto p-4 sm:p-4 bg-white rounded-xl shadow-lg"
//     >
//       <h2 className="text-2xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8">
//         Your Personalized Analysis
//       </h2>

//       <div className="space-y-8 sm:space-y-3">


//       <div className="-space-y-28">
//   {/* Radar Chart */}
//   <div className="bg-white rounded-lg p-4 sm:p-6">
//     <h3 className="text-lg sm:text-xl font-semibold mb-4">
//       Conceptual Understanding Radar
//     </h3>
//     <div className="h-[350px] sm:h-[400px] md:h-[500px]">
//       <ResponsiveRadar
//         data={radarData}
//         keys={['userScore', 'Top 1%', 'Top 10%', 'Average']}
//         indexBy="category"
//         maxValue={100}
//         margin={{
//           top: 50,
//           right: window.innerWidth < 640 ? 40 : 80,
//           bottom: 30,
//           left: window.innerWidth < 640 ? 40 : 80,
//         }}
//         curve="linearClosed"
//         borderWidth={2}
//         borderColor={{ from: 'color' }}
//         gridLevels={5}
//         gridShape="circular"
//         gridLabelOffset={36}
//         enableDots={true}
//         dotSize={window.innerWidth < 640 ? 8 : 10}
//         dotColor={{ theme: 'background' }}
//         dotBorderWidth={2}
//         dotBorderColor={{ from: 'color' }}
//         enableDotLabel={window.innerWidth >= 640}
//         dotLabel="value"
//         dotLabelYOffset={-12}
//         colors={{ scheme: 'nivo' }}
//         fillOpacity={0.25}
//         blendMode="multiply"
//         animate={true}
//         motionConfig="gentle"
//         legends={[
//           {
//             anchor: window.innerWidth < 640 ? 'bottom' : 'top-left',
//             direction: window.innerWidth < 640 ? 'row' : 'column',
//             translateX: window.innerWidth < 640 ? 0 : -50,
//             translateY: window.innerWidth < 640 ? 40 : -40,
//             itemWidth: window.innerWidth < 640 ? 60 : 80,
//             itemHeight: 20,
//             itemTextColor: '#999',
//             symbolSize: window.innerWidth < 640 ? 10 : 12,
//             symbolShape: 'circle',
//             effects: [
//               {
//                 on: 'hover',
//                 style: {
//                   itemTextColor: '#000',
//                 },
//               },
//             ],
//           },
//         ]}
//       />
//     </div>
//   </div>

//   {/* Line Chart */}
//   <div className="bg-white rounded-lg p-4 sm:p-6">
//     <h3 className="text-lg sm:text-xl font-semibold mb-2">
//       Progress Over Time
//     </h3>
//     <div className="h-[400px] sm:h-[450px] md:h-[500px]">
//       <ResponsiveLine
//         data={lineData}
//         margin={{
//           top: 50,
//           right: window.innerWidth < 640 ? 40 : 110,
//           bottom: window.innerWidth < 640 ? 60 : 50,
//           left: window.innerWidth < 640 ? 50 : 60,
//         }}
//         xScale={{ type: 'point' }}
//         yScale={{ type: 'linear', min: 0, max: 100 }}
//         axisTop={null}
//         axisRight={null}
//         axisBottom={{
//           tickSize: 5,
//           tickPadding: 5,
//           tickRotation: window.innerWidth < 640 ? -45 : 0,
//           legend: 'Timeline',
//           legendOffset: 36,
//           legendPosition: 'middle',
//         }}
//         axisLeft={{
//           tickSize: 5,
//           tickPadding: 5,
//           tickRotation: 0,
//           legend: 'Score',
//           legendOffset: -40,
//           legendPosition: 'middle',
//         }}
//         pointSize={window.innerWidth < 640 ? 8 : 12}
//         pointColor={{ theme: 'background' }}
//         pointBorderWidth={2}
//         pointBorderColor={{ from: 'serieColor' }}
//         pointLabelYOffset={-12}
//         useMesh={true}
//         legends={[
//           {
//             anchor: window.innerWidth < 640 ? 'bottom' : 'bottom-right',
//             direction: window.innerWidth < 640 ? 'row' : 'column',
//             translateX: window.innerWidth < 640 ? 0 : 100,
//             translateY: window.innerWidth < 640 ? 60 : 0,
//             itemsSpacing: window.innerWidth < 640 ? 2 : 0,
//             itemDirection: 'left-to-right',
//             itemWidth: 80,
//             itemHeight: 20,
//             itemOpacity: 0.75,
//             symbolSize: window.innerWidth < 640 ? 10 : 12,
//             symbolShape: 'circle',
//             symbolBorderColor: 'rgba(0, 0, 0, .5)',
//             effects: [
//               {
//                 on: 'hover',
//                 style: {
//                   itemBackground: 'rgba(0, 0, 0, .03)',
//                   itemOpacity: 1,
//                 },
//               },
//             ],
//           },
//         ]}
//       />
//     </div>
//   </div>
  
//   <div className="bg-white rounded-lg p-4 sm:p-6 mt-0">
//       <h3 className="text-lg sm:text-xl font-semibold mb-4">
//         Performance Flow Analysis
//       </h3>
//       <div className="h-[300px] sm:h-[400px] md:h-[500px]">
//         <ResponsiveSankey
//           data={sankeyData}
//           margin={{
//             top: 40,
//             right: window.innerWidth < 640 ? 50 : 160,
//             bottom: window.innerWidth < 640 ? 80 : 40,
//             left: window.innerWidth < 640 ? 30 : 50,
//           }}
//           align="justify"
//           colors={customNodeColor}
//           nodeOpacity={1}
//           nodeThickness={window.innerWidth < 640 ? 12 : 18}
//           nodeInnerPadding={3}
//           nodeSpacing={window.innerWidth < 640 ? 12 : 24}
//           nodeBorderWidth={0}
//           nodeBorderColor={{ from: 'color', modifiers: [['darker', 0.8]] }}
//           linkOpacity={0.5}
//           linkHoverOthersOpacity={0.1}
//           enableLinkGradient={true}
//           linkColor={customLinkColor}
//           labelPosition="outside"
//           labelOrientation={window.innerWidth < 640 ? 'vertical' : 'horizontal'}
//           labelPadding={window.innerWidth < 640 ? 8 : 16}
//           legends={[
//             {
//               anchor: window.innerWidth < 640 ? 'bottom' : 'bottom-right',
//               direction: window.innerWidth < 640 ? 'row' : 'column',
//               translateX: window.innerWidth < 640 ? 0 : 140,
//               translateY: window.innerWidth < 640 ? 70 : 0,
//               itemWidth: 80,
//               itemHeight: 20,
//               itemTextColor: '#999',
//               symbolSize: 14,
//               effects: [
//                 {
//                   on: 'hover',
//                   style: {
//                     itemTextColor: '#000',
//                   },
//                 },
//               ],
//             },
//           ]}
//         />
//       </div>
//     </div>
// </div>

        
//       </div>
//     </motion.div>
//   );
// };


import { motion } from 'framer-motion';
import { ResponsiveRadar } from '@nivo/radar';
import { ResponsiveLine } from '@nivo/line';
import { ResponsiveSankey } from '@nivo/sankey';
import { questions } from '../data/questions';
import React, { useState, useEffect } from 'react';

const calculateCategoryScore = (answers, category) => {
  const categoryAnswers = answers.filter(answer =>
    questions.find(q => q.id === answer.questionId)?.category === category
  );

  if (categoryAnswers.length === 0) return 0;

  return (
    (categoryAnswers.reduce((acc, curr) => acc + curr.selectedOption.value, 0) /
      (categoryAnswers.length * 100)) *
    100
  );
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export const AnalyticsView = ({ answers = [] }) => {
  const { width } = useWindowSize();
  const isMobile = width < 640;

  const conceptualScore = calculateCategoryScore(
    answers,
    'Conceptual Understanding and Application'
  );
  const strategyScore = calculateCategoryScore(
    answers,
    'Study Strategies and Revision'
  );
  const performanceScore = calculateCategoryScore(
    answers,
    'Performance and Time Management'
  );

  const [highlightIndex, setHighlightIndex] = useState(0);

  const radarData = [
    {
      category: 'Conceptual Understanding',
      userScore: conceptualScore,
      'Top 1%': 95,
      'Top 10%': 85,
      Average: 70,
    },
    {
      category: 'Study Strategies',
      userScore: strategyScore,
      'Top 1%': 98,
      'Top 10%': 88,
      Average: 75,
    },
    {
      category: 'Performance',
      userScore: performanceScore,
      'Top 1%': 96,
      'Top 10%': 86,
      Average: 72,
    },
  ];

  const lineData = [
    {
      id: 'Your Progress',
      data: [
        { x: 'Week 1', y: conceptualScore },
        { x: 'Week 4', y: strategyScore },
        { x: 'Week 8', y: performanceScore },
      ],
    },
    {
      id: 'Top 1%',
      data: [
        { x: 'Week 1', y: 95 },
        { x: 'Week 4', y: 98 },
        { x: 'Week 8', y: 96 },
      ],
    },
    {
      id: 'Top 10%',
      data: [
        { x: 'Week 1', y: 85 },
        { x: 'Week 4', y: 88 },
        { x: 'Week 8', y: 86 },
      ],
    },
  ];

  const sankeyData = {
    nodes: [
      { id: 'start', label: 'Starting Point' },
      { id: 'consistent', label: 'Consistent Practice' },
      { id: 'inconsistent', label: 'Inconsistent Practice' },
      { id: 'success', label: 'High Performance' },
      { id: 'average', label: 'Average Performance' },
      { id: 'struggle', label: 'Need Improvement' },
    ],
    links: [
      { source: 'start', target: 'consistent', value: 100 },
      { source: 'start', target: 'inconsistent', value: 100 },
      { source: 'consistent', target: 'success', value: 80 },
      { source: 'consistent', target: 'average', value: 20 },
      { source: 'inconsistent', target: 'average', value: 30 },
      { source: 'inconsistent', target: 'struggle', value: 70 },
    ],
  };

  useEffect(() => {
    const totalNodes = sankeyData.nodes.length;
    const interval = setInterval(() => {
      setHighlightIndex((prevIndex) => (prevIndex + 1) % totalNodes);
    }, 2000);

    return () => clearInterval(interval);
  }, [sankeyData.nodes.length]);

  const customNodeColor = (node) =>
    node.index === highlightIndex ? 'rgba(255, 99, 71, 1)' : node.color;

  const customLinkColor = (link) =>
    link.source.index === highlightIndex || link.target.index === highlightIndex
      ? 'rgba(255, 99, 71, 0.7)'
      : link.color;

      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full max-w-6xl mx-auto p-4 sm:p-4 bg-white rounded-xl shadow-lg"
        >
          <h2 className="text-2xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8">
            Your Personalized Analysis
          </h2>
      
          {/* Horizontal Scrollable Container */}
          <div className="sm:block flex sm:space-y-4 space-x-4 overflow-x-scroll sm:overflow-x-visible scrollbar-hide">
            {/* Radar Chart */}
            <div className="bg-white rounded-lg p-4 sm:p-6 flex-shrink-0 w-full sm:w-full md:w-full">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">
                Conceptual Understanding Radar
              </h3>
              <div className="h-[350px] sm:h-[400px] md:h-[500px]">
                <ResponsiveRadar
                  data={radarData}
                  keys={['userScore', 'Top 1%', 'Top 10%', 'Average']}
                  indexBy="category"
                  maxValue={100}
                  margin={{
                    top: 50,
                    right: isMobile ? 40 : 80,
                    bottom: 30,
                    left: isMobile ? 40 : 80,
                  }}
                  curve="linearClosed"
                  borderWidth={2}
                  borderColor={{ from: 'color' }}
                  gridLevels={5}
                  gridShape="circular"
                  gridLabelOffset={36}
                  enableDots={true}
                  dotSize={isMobile ? 8 : 10}
                  dotColor={{ theme: 'background' }}
                  dotBorderWidth={2}
                  dotBorderColor={{ from: 'color' }}
                  enableDotLabel={!isMobile}
                  dotLabel="value"
                  dotLabelYOffset={-12}
                  colors={{ scheme: 'nivo' }}
                  fillOpacity={0.25}
                  blendMode="multiply"
                  animate={true}
                  motionConfig="gentle"
                  legends={[
                    {
                      anchor: isMobile ? 'bottom' : 'top-left',
                      direction: isMobile ? 'row' : 'column',
                      translateX: isMobile ? 0 : -50,
                      translateY: isMobile ? 40 : -40,
                      itemWidth: isMobile ? 60 : 80,
                      itemHeight: 20,
                      itemTextColor: '#999',
                      symbolSize: isMobile ? 10 : 12,
                      symbolShape: 'circle',
                      effects: [
                        {
                          on: 'hover',
                          style: {
                            itemTextColor: '#000',
                          },
                        },
                      ],
                    },
                  ]}
                />
              </div>
              <div className='block md:hidden '>
                  <p className=' font-poppins'>Swipe Left for More Analysis</p>
              </div>
            </div>
      
            {/* Line Chart */}
            <div className="bg-white rounded-lg p-4 sm:p-6 flex-shrink-0 w-full sm:w-full md:w-full">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Progress Over Time
              </h3>
              <div className="h-[400px] sm:h-[450px] md:h-[500px]">
                <ResponsiveLine
                  data={lineData}
                  margin={{
                    top: 50,
                    right: isMobile ? 40 : 110,
                    bottom: isMobile ? 60 : 50,
                    left: isMobile ? 50 : 60,
                  }}
                  xScale={{ type: 'point' }}
                  yScale={{ type: 'linear', min: 0, max: 100 }}
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: isMobile ? -45 : 0,
                    legend: 'Timeline',
                    legendOffset: 36,
                    legendPosition: 'middle',
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Score',
                    legendOffset: -40,
                    legendPosition: 'middle',
                  }}
                  pointSize={isMobile ? 8 : 12}
                  pointColor={{ theme: 'background' }}
                  pointBorderWidth={2}
                  pointBorderColor={{ from: 'serieColor' }}
                  pointLabelYOffset={-12}
                  useMesh={true}
                  legends={[
                    {
                      anchor: isMobile ? 'bottom' : 'bottom-right',
                      direction: isMobile ? 'row' : 'column',
                      translateX: isMobile ? 0 : 100,
                      translateY: isMobile ? 60 : 0,
                      itemsSpacing: isMobile ? 2 : 0,
                      itemDirection: 'left-to-right',
                      itemWidth: 80,
                      itemHeight: 20,
                      itemOpacity: 0.75,
                      symbolSize: isMobile ? 10 : 12,
                      symbolShape: 'circle',
                      symbolBorderColor: 'rgba(0, 0, 0, .5)',
                      effects: [
                        {
                          on: 'hover',
                          style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1,
                          },
                        },
                      ],
                    },
                  ]}
                />
              </div>
            </div>
      
            {/* Sankey Chart */}
            <div className="bg-white rounded-lg p-4 sm:p-6 flex-shrink-0 w-full sm:w-full md:w-full">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">
                Performance Flow Analysis
              </h3>
              <div className="h-[300px] sm:h-[400px] md:h-[500px]">
                <ResponsiveSankey
                  data={sankeyData}
                  margin={{
                    top: 40,
                    right: isMobile ? 50 : 160,
                    bottom: isMobile ? 80 : 40,
                    left: isMobile ? 30 : 50,
                  }}
                  align="justify"
                  colors={customNodeColor}
                  nodeOpacity={1}
                  nodeThickness={isMobile ? 12 : 18}
                  nodeInnerPadding={3}
                  nodeSpacing={isMobile ? 12 : 24}
                  nodeBorderWidth={0}
                  nodeBorderColor={{ from: 'color', modifiers: [['darker', 0.8]] }}
                  linkOpacity={0.5}
                  linkHoverOthersOpacity={0.1}
                  enableLinkGradient={true}
                  linkColor={customLinkColor}
                  labelPosition="outside"
                  labelOrientation={isMobile ? 'vertical' : 'horizontal'}
                  labelPadding={isMobile ? 8 : 16}
                  legends={[
                    {
                      anchor: isMobile ? 'bottom' : 'bottom-right',
                      direction: isMobile ? 'row' : 'column',
                      translateX: isMobile ? 0 : 140,
                      translateY: isMobile ? 70 : 0,
                      itemWidth: 80,
                      itemHeight: 20,
                      itemTextColor: '#999',
                      symbolSize: 14,
                      effects: [
                        {
                          on: 'hover',
                          style: {
                            itemTextColor: '#000',
                          },
                        },
                      ],
                    },
                  ]}
                />
              </div>
            </div>
          </div>
          <section className="flex flex-col items-center justify-center bg-white mt-1 sm:-mt-3 text-white">
                  <h2 className="text-2xl text-black font-bold mb-4 text-center">
                  "Unlock deeper insights and tailored sprints just for you! Click below to discover more and supercharge your learning."
                  </h2>
                  <button className="bg-green-500 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-green-600 transition duration-300 ease-in-out">
                    Explore Now
                  </button>
          </section>
        </motion.div>
        
      );
    }      