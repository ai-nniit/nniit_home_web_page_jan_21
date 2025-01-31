// // src/components/ConceptMap.jsx
// import React, { useEffect, useRef, useState } from 'react';
// import * as d3 from 'd3';
// import { nodes, links } from './data/conceptMapData';

// const ConceptMap = () => {
//   const svgRef = useRef(null);
//   const [selectedNode, setSelectedNode] = useState(null);

//   useEffect(() => {
//     if (!svgRef.current) return;

//     const width = 1000;
//     const height = 800;

//     // Clear existing SVG content
//     d3.select(svgRef.current).selectAll("*").remove();

//     const svg = d3.select(svgRef.current)
//       .attr('width', width)
//       .attr('height', height)
//       .attr('viewBox', [0, 0, width, height]);

//     // Create force simulation
//     const simulation = d3.forceSimulation(nodes)
//       .force('link', d3.forceLink(links).id(d => d.id).distance(150))
//       .force('charge', d3.forceManyBody().strength(-2000))
//       .force('center', d3.forceCenter(width / 2, height / 2))
//       .force('collision', d3.forceCollide().radius(80));

//     // Create links
//     const link = svg.append('g')
//       .selectAll('line')
//       .data(links)
//       .join('line')
//       .attr('stroke', d => d.value === 2 ? '#999' : '#ff9999')
//       .attr('stroke-opacity', d => d.value === 2 ? 0.6 : 0.4)
//       .attr('stroke-width', d => d.value === 2 ? 2 : 1)
//       .attr('stroke-dasharray', d => d.value === 2 ? '' : '5,5');

//     // Create nodes
//     const node = svg.append('g')
//       .selectAll('g')
//       .data(nodes)
//       .join('g')
//       .call(d3.drag()
//         .on('start', dragstarted)
//         .on('drag', dragged)
//         .on('end', dragended))
//       .on('click', (event, d) => {
//         setSelectedNode(selectedNode === d.id ? null : d.id);
//       });

//     // Add circles to nodes
//     node.append('circle')
//       .attr('r', d => d.type === 'subject' ? 60 : 45)
//       .attr('fill', d => {
//         switch (d.type) {
//           case 'subject': return '#4299e1';
//           case 'topic': return '#48bb78';
//           default: return '#ed8936';
//         }
//       })
//       .attr('stroke', '#fff')
//       .attr('stroke-width', 2);

//     // Add labels to nodes
//     node.append('text')
//       .text(d => d.name)
//       .attr('x', 0)
//       .attr('y', 0)
//       .attr('text-anchor', 'middle')
//       .attr('dominant-baseline', 'middle')
//       .attr('fill', 'white')
//       .style('font-size', d => d.type === 'subject' ? '16px' : '14px')
//       .style('font-weight', 'bold')
//       .style('pointer-events', 'none')
//       .call(wrap, 90);

//     // Highlight connected nodes and links on hover
//     node.on('mouseover', function(event, d) {
//       const connectedNodeIds = new Set(links
//         .filter(l => l.source.id === d.id || l.target.id === d.id)
//         .flatMap(l => [l.source.id, l.target.id]));

//       node.style('opacity', n => connectedNodeIds.has(n.id) ? 1 : 0.3);
//       link
//         .style('opacity', l => 
//           (l.source.id === d.id || l.target.id === d.id) ? 1 : 0.1);
//     })
//     .on('mouseout', function() {
//       node.style('opacity', 1);
//       link.style('opacity', 1);
//     });

//     // Update positions on each tick
//     simulation.on('tick', () => {
//       nodes.forEach(d => {
//         d.x = Math.max(60, Math.min(width - 60, d.x));
//         d.y = Math.max(60, Math.min(height - 60, d.y));
//       });

//       link
//         .attr('x1', d => d.source.x)
//         .attr('y1', d => d.source.y)
//         .attr('x2', d => d.target.x)
//         .attr('y2', d => d.target.y);

//       node
//         .attr('transform', d => `translate(${d.x},${d.y})`);
//     });

//     // Drag functions
//     function dragstarted(event) {
//       if (!event.active) simulation.alphaTarget(0.3).restart();
//       event.subject.fx = event.subject.x;
//       event.subject.fy = event.subject.y;
//     }

//     function dragged(event) {
//       event.subject.fx = event.x;
//       event.subject.fy = event.y;
//     }

//     function dragended(event) {
//       if (!event.active) simulation.alphaTarget(0);
//       event.subject.fx = null;
//       event.subject.fy = null;
//     }

//     // Text wrapping function
//     function wrap(text, width) {
//       text.each(function() {
//         const text = d3.select(this);
//         const words = text.text().split(/\s+/).reverse();
//         let word;
//         let line = [];
//         let lineNumber = 0;
//         const lineHeight = 1.1;
//         const y = text.attr('y');
//         const dy = parseFloat(text.attr('dy') || '0');
//         let tspan = text.text(null).append('tspan').attr('x', 0).attr('y', y).attr('dy', dy + 'em');
        
//         while (word = words.pop()) {
//           line.push(word);
//           tspan.text(line.join(' '));
//           if (tspan.node().getComputedTextLength() > width) {
//             line.pop();
//             tspan.text(line.join(' '));
//             line = [word];
//             tspan = text.append('tspan').attr('x', 0).attr('y', y).attr('dy', ++lineNumber * lineHeight + dy + 'em').text(word);
//           }
//         }
//       });
//     }

//     return () => {
//       simulation.stop();
//     };
//   }, [selectedNode]);

//   return (
//     <div className="w-full bg-white">
//     <div className="w-full h-[350px] bg-white">
//       <svg ref={svgRef} className="w-full h-full bg-white"></svg>
//     </div>
//     {/* CTA Section */}
//     <section className="flex flex-col items-center justify-center bg-white -mt-3 text-white">
//                   <h2 className="text-2xl text-black font-bold mb-4 text-center">
//                  "Master the relationships between key concepts! Click below for an in-depth exploration of inter-linking concepts."
//                   </h2>
//           </section>
//       <button className="relative bg-orange-500 text-white font-bold text-sm py-2 px-6 rounded-r-full flex items-center hover:bg-orange-600">
//         <span className="absolute left-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2}
//             stroke="orange"
//             className="w-4 h-4"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M8 4l8 8-8 8"
//             />
//           </svg>
//         </span>
//         <span className="ml-8">LEARN MORE</span>
//       </button>
//     </div>
//   );
// };

// export default ConceptMap;



import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const NetworkGraph = () => {
  const svgRef = useRef(null);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  // Update dimensions on window resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect();
        // Set height based on aspect ratio (adjust as needed)
        const height = Math.min(window.innerHeight * 0.8, width * 0.75);
        setDimensions({ width, height });
      }
    };

    window.addEventListener('resize', updateDimensions);
    updateDimensions(); // Initial dimension setup

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return;

    const width = dimensions.width;
    const height = dimensions.height;

    // Scale node positions based on viewport size
    const scaleX = d3.scaleLinear()
      .domain([0, 800]) // Original width
      .range([0, width]);
    
    const scaleY = d3.scaleLinear()
      .domain([0, 600]) // Original height
      .range([0, height]);

    // Define concept questions for each node
    const conceptQuestions = {
      "Chemistry": "What are the fundamental branches of chemistry and how do they interconnect?",
      "Thermochemistry": "How does energy flow in chemical reactions affect temperature changes?",
      "Electrochemistry": "How do electron transfers drive chemical reactions?",
      "Chemical Bonding": "What forces hold atoms together in molecules?",
      "States of Matter": "How do intermolecular forces affect physical states?",
      "Chemical Kinetics": "What factors influence the rate of chemical reactions?",
      "Mole Concept": "How do we quantify particles in chemical reactions?",
      "Periodic Table": "What patterns exist in element properties across periods and groups?",
      "Ionic Equilibrium": "How do ions affect solution equilibrium?",
      "Thermodynamics": "How is energy transferred and transformed in chemical systems?",
      "Equilibrium": "What determines the direction and extent of chemical reactions?",
      "Coordinate Compounds": "How do ligands bond with central metal atoms?",
      "Solid States": "How are atoms arranged in crystalline structures?",
      "Solutions": "How do solutes and solvents interact at molecular level?",
      "Stoichiometry": "How do we balance chemical equations and calculate quantities?",
      "Organic Chemistry": "How do carbon compounds form and react?"
    };

    // Scale node sizes based on viewport
    const baseNodeSize = Math.min(width, height) / 20;
    const getNodeSize = (size) => (size / 50) * baseNodeSize;

    const data = {
      nodes: [
        { id: "Chemistry", group: 1, size: getNodeSize(50), x: scaleX(400), y: scaleY(300) },
        { id: "Thermochemistry", group: 2, size: getNodeSize(30), x: scaleX(200), y: scaleY(200) },
        { id: "Electrochemistry", group: 2, size: getNodeSize(30), x: scaleX(600), y: scaleY(200) },
        { id: "Chemical Bonding", group: 2, size: getNodeSize(30), x: scaleX(200), y: scaleY(400) },
        { id: "States of Matter", group: 2, size: getNodeSize(30), x: scaleX(600), y: scaleY(400) },
        { id: "Chemical Kinetics", group: 2, size: getNodeSize(30), x: scaleX(400), y: scaleY(500) },
        { id: "Mole Concept", group: 2, size: getNodeSize(30), x: scaleX(300), y: scaleY(100) },
        { id: "Periodic Table", group: 2, size: getNodeSize(30), x: scaleX(500), y: scaleY(100) },
        { id: "Ionic Equilibrium", group: 2, size: getNodeSize(30), x: scaleX(700), y: scaleY(300) },
        { id: "Thermodynamics", group: 3, size: getNodeSize(20), x: scaleX(150), y: scaleY(250) },
        { id: "Equilibrium", group: 3, size: getNodeSize(20), x: scaleX(650), y: scaleY(250) },
        { id: "Coordinate Compounds", group: 3, size: getNodeSize(20), x: scaleX(250), y: scaleY(450) },
        { id: "Solid States", group: 3, size: getNodeSize(20), x: scaleX(550), y: scaleY(450) },
        { id: "Solutions", group: 3, size: getNodeSize(20), x: scaleX(650), y: scaleY(450) },
        { id: "Stoichiometry", group: 3, size: getNodeSize(20), x: scaleX(250), y: scaleY(50) },
        { id: "Organic Chemistry", group: 3, size: getNodeSize(20), x: scaleX(750), y: scaleY(350) },
      ],
      links: [
        { source: "Chemistry", target: "Thermochemistry" },
        { source: "Chemistry", target: "Electrochemistry" },
        { source: "Chemistry", target: "Chemical Bonding" },
        { source: "Chemistry", target: "States of Matter" },
        { source: "Chemistry", target: "Chemical Kinetics" },
        { source: "Chemistry", target: "Mole Concept" },
        { source: "Chemistry", target: "Periodic Table" },
        { source: "Chemistry", target: "Ionic Equilibrium" },
        { source: "Thermochemistry", target: "Thermodynamics" },
        { source: "Electrochemistry", target: "Equilibrium" },
        { source: "Chemical Bonding", target: "Coordinate Compounds" },
        { source: "States of Matter", target: "Solid States" },
        { source: "States of Matter", target: "Solutions" },
        { source: "Chemical Kinetics", target: "Equilibrium" },
        { source: "Chemical Kinetics", target: "Electrochemistry" },
        { source: "Mole Concept", target: "Stoichiometry" },
        { source: "Periodic Table", target: "Coordinate Compounds" },
        { source: "Ionic Equilibrium", target: "Organic Chemistry" },
      ],
    };

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("background", "#0A1628"); // Darker blue background for better contrast

    svg.selectAll("*").remove();

    // TOOLTIP SETUP
    // 1. First, remove any existing tooltips to prevent duplicates
    d3.select(".network-graph-tooltip").remove();

    // 2. Create new tooltip div with a specific class for easier selection
    const tooltip = d3.select("body")
      .append("div")
      .attr("class", "network-graph-tooltip") // Specific class name
      .style("position", "absolute")
      .style("visibility", "hidden")
      .style("background-color", "rgba(10, 22, 40, 0.95)")
      .style("color", "white")
      .style("padding", "12px")
      .style("border-radius", "8px")
      .style("font-size", "14px")
      .style("max-width", "300px")
      .style("box-shadow", "0 4px 20px rgba(0, 0, 0, 0.3)")
      .style("border", "1px solid rgba(255, 255, 255, 0.1)")
      .style("pointer-events", "none")
      .style("z-index", "1000");

    const g = svg.append("g");

    const zoom = d3.zoom().on("zoom", (event) => {
      g.attr("transform", event.transform);
    });

    svg.call(zoom);

    // Modern, accessible color palette with hierarchical structure
    const colorsByGroup = {
      1: "#FF3366", // Primary node (bright pink-red)
      2: [ // Secondary nodes (vibrant, contrasting colors)
        "#00B4D8", // Cyan
        "#4361EE", // Blue
        "#4CC9F0", // Light blue
        "#7209B7", // Purple
        "#F72585", // Pink
        "#4895EF", // Sky blue
        "#560BAD", // Deep purple
        "#480CA8"  // Royal purple
      ],
      3: [ // Tertiary nodes (complementary colors)
        "#06D6A0", // Teal
        "#FFB703", // Gold
        "#FB5607", // Orange
        "#FF006E", // Hot pink
        "#8338EC", // Violet
        "#3A0CA3", // Indigo
        "#7209B7", // Purple
        "#F72585"  // Pink
      ]
    };

    // Enhanced link colors with gradient definition
    const defs = svg.append("defs");
    
    const gradient = defs.append("linearGradient")
      .attr("id", "linkGradient")
      .attr("gradientUnits", "userSpaceOnUse");

    gradient.append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "#4361EE");

    gradient.append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "#F72585");

    // Draw curved links with enhanced visibility
    const links = g.append("g")
      .selectAll("path")
      .data(data.links)
      .join("path")
      .attr("class", "link")
      .attr("d", (d) => {
        const source = data.nodes.find((node) => node.id === d.source);
        const target = data.nodes.find((node) => node.id === d.target);
        if (!source || !target) {
          console.error("Invalid source/target:", d);
          return null;
        }
        const midX = (source.x + target.x) / 2;
        const midY = (source.y + target.y) / 2 - 50;
        return `M${source.x},${source.y} Q${midX},${midY} ${target.x},${target.y}`;
      })
      .attr("stroke", "url(#linkGradient)")
      .attr("stroke-width", Math.max(2, width / 400)) // Responsive stroke width
      .attr("fill", "none")
      .style("filter", "drop-shadow(0 0 3px rgba(255, 255, 255, 0.3))");

    // Draw nodes with enhanced colors and effects
    const nodes = g.append("g")
      .selectAll("circle")
      .data(data.nodes)
      .join("circle")
      .attr("class", "node")
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .attr("r", (d) => d.size)
      .attr("fill", (d) => {
        if (d.group === 1) return colorsByGroup[1];
        const groupColors = colorsByGroup[d.group];
        return groupColors[Math.floor(Math.random() * groupColors.length)];
      })
      .attr("stroke", "#ffffff")
      .attr("stroke-width", Math.max(1, width / 800)) // Responsive stroke width
      .style("filter", "drop-shadow(0 0 10px rgba(0, 0, 0, 0.5))")
      .style("cursor", "pointer")
      .on("click", (event, d) => zoomToNode(d))
      // TOOLTIP INTERACTION HANDLERS
      .on("mouseover", (event, d) => {
        highlightConnections(d);
        // Show tooltip with formatted content
        tooltip
          .style("visibility", "visible")
          .html(`<strong style="color: #4CC9F0">${d.id}</strong><br><br>${conceptQuestions[d.id]}`)
          .style("left", `${event.pageX + 10}px`)
          .style("top", `${event.pageY - 10}px`);
      })
      .on("mousemove", (event) => {
        // Update tooltip position as mouse moves
        tooltip
          .style("left", `${event.pageX + 10}px`)
          .style("top", `${event.pageY - 10}px`);
      })
      .on("mouseout", () => {
        // Hide tooltip and reset highlights
        resetHighlight();
        tooltip.style("visibility", "hidden");
      });

    // Add enhanced labels with better visibility
    const labels = g.append("g")
      .selectAll("text")
      .data(data.nodes)
      .join("text")
      .attr("class", "label")
      .attr("x", (d) => d.x + 5)
      .attr("y", (d) => d.y + 5)
      .attr("fill", "#ffffff")
      .style("font-size", `${Math.max(10, width / 80)}px`) // Responsive font size
      .style("font-weight", "600")
      .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.8)")
      .text((d) => d.id);

    function getConnectedNodes(nodeId) {
      const connected = new Set();
      data.links.forEach(link => {
        if (link.source === nodeId) {
          connected.add(link.target);
        }
        if (link.target === nodeId) {
          connected.add(link.source);
        }
      });
      return connected;
    }

    function highlightConnections(d) {
      const connectedNodes = getConnectedNodes(d.id);
      
      // Dim unconnected elements
      nodes.style("opacity", 0.2);
      links.style("opacity", 0.1);
      labels.style("opacity", 0.2);

      // Highlight connected elements
      nodes.filter(node => node.id === d.id || connectedNodes.has(node.id))
        .style("opacity", 1)
        .style("filter", "drop-shadow(0 0 15px rgba(255, 255, 255, 0.3))");

      links.filter(link => 
        link.source === d.id || 
        link.target === d.id
      )
        .style("opacity", 1)
        .style("stroke-width", Math.max(3, width / 300));

      labels.filter(node => node.id === d.id || connectedNodes.has(node.id))
        .style("opacity", 1);
    }

    function resetHighlight() {
      nodes
        .style("opacity", 1)
        .style("filter", "drop-shadow(0 0 10px rgba(0, 0, 0, 0.5))");
      links
        .style("opacity", 1)
        .style("stroke-width", Math.max(2, width / 400));
      labels.style("opacity", 1);
    }

    function zoomToNode(node) {
      const scale = 2;
      const translateX = width / 2 - scale * node.x;
      const translateY = height / 2 - scale * node.y;

      svg.transition()
        .duration(750)
        .call(
          zoom.transform,
          d3.zoomIdentity.translate(translateX, translateY).scale(scale)
        );
    }

    // Set initial hover state on the Electrochemistry node
    const defaultNode = data.nodes.find(n => n.id === "Electrochemistry");
    if (defaultNode) {
      highlightConnections(defaultNode);
      // Show tooltip for the default node
      const nodeBBox = nodes.filter(n => n.id === "Electrochemistry").node().getBBox();
      const svgRect = svg.node().getBoundingClientRect();
      tooltip
        .style("visibility", "visible")
        .html(`<strong style="color: #4CC9F0">${defaultNode.id}</strong><br><br>${conceptQuestions[defaultNode.id]}`)
        .style("left", `${svgRect.left + nodeBBox.x + nodeBBox.width + 10}px`)
        .style("top", `${svgRect.top + nodeBBox.y}px`);
    }

    // Cleanup function to remove tooltip when component unmounts
    return () => {
      d3.select(".network-graph-tooltip").remove();
    };
  }, [dimensions]); // Re-render when dimensions change

  return (
    <div className="relative w-full h-full min-h-[400px]">
      {/* Controls Panel */}
      <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-lg z-10">
        <div className="flex flex-col gap-2">
          <div className="border-t border-white/20 pt-1">
            <h3 className="text-white text-sm font-semibold mb-1">Legend</h3>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF3366]"></div>
                <span className="text-white text-xs">Core Concepts</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#00B4D8]"></div>
                <span className="text-white text-xs">Secondary Concepts</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#06D6A0]"></div>
                <span className="text-white text-xs">Related Topics</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Instructions Panel */}
      <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-sm p-3 rounded-lg shadow-lg z-10 max-w-xs">
        <h3 className="text-white text-sm font-semibold mb-2">How to Use</h3>
        <ul className="text-white/90 text-xs space-y-2">
          <li>• Hover over nodes to see concept questions</li>
          <li>• Click a node to zoom in and focus</li>
          <li>• Drag to pan around the graph</li>
          <li>• Use mouse wheel or buttons to zoom</li>
          <li>• Connections highlight on hover</li>
        </ul>
      </div>

      {/* Main Graph Container */}
      <div ref={containerRef} className="w-full h-full min-h-[400px] overflow-hidden">
        <svg ref={svgRef} className="w-full h-full"></svg>
      </div>
    </div>
  );
};

export default NetworkGraph;