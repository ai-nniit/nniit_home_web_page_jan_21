import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const NetworkGraph = ({ data }) => {
  const svgRef = useRef(null);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect();
        const height = Math.min(window.innerHeight * 0.8, width * 0.75);
        setDimensions({ width, height });
      }
    };

    window.addEventListener('resize', updateDimensions);
    updateDimensions();

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return;

    const width = dimensions.width;
    const height = dimensions.height;

    const scaleX = d3.scaleLinear().domain([0, 800]).range([0, width]);
    const scaleY = d3.scaleLinear().domain([0, 600]).range([0, height]);

    const baseNodeSize = Math.min(width, height) / 20;
    const getNodeSize = (size) => (size / 50) * baseNodeSize;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("background", "#0A1628");

    svg.selectAll("*").remove();

    d3.select(".network-graph-tooltip").remove();

    const tooltip = d3.select("body")
      .append("div")
      .attr("class", "network-graph-tooltip")
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

    const colorsByGroup = {
      1: "#FF3366",
      2: ["#00B4D8", "#00B4D8", "#00B4D8", "#00B4D8", "#00B4D8", "#00B4D8", "#00B4D8", "#00B4D8"],
      3: ["#06D6A0", "#06D6A0", "#06D6A0", "#06D6A0", "#06D6A0", "#06D6A0", "#06D6A0", "#06D6A0"]
    };

    const defs = svg.append("defs");
    const gradient = defs.append("linearGradient")
      .attr("id", "linkGradient")
      .attr("gradientUnits", "userSpaceOnUse");

    gradient.append("stop").attr("offset", "0%").attr("stop-color", "#4361EE");
    gradient.append("stop").attr("offset", "100%").attr("stop-color", "#F72585");

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
      .attr("stroke-width", Math.max(2, width / 400))
      .attr("fill", "none")
      .style("filter", "drop-shadow(0 0 3px rgba(255, 255, 255, 0.3))");

    const nodes = g.append("g")
      .selectAll("circle")
      .data(data.nodes)
      .join("circle")
      .attr("class", "node")
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .attr("r", (d) => getNodeSize(d.size))
      .attr("fill", (d) => {
        if (d.group === 1) return colorsByGroup[1];
        const groupColors = colorsByGroup[d.group];
        return groupColors[Math.floor(Math.random() * groupColors.length)];
      })
      .attr("stroke", "#ffffff")
      .attr("stroke-width", Math.max(1, width / 800))
      .style("filter", "drop-shadow(0 0 10px rgba(0, 0, 0, 0.5))")
      .style("cursor", "pointer")
      .on("click", (event, d) => zoomToNode(d))
      .on("mouseover", (event, d) => {
        highlightConnections(d);
        tooltip
          .style("visibility", "visible")
          .html(`<strong style="color: #4CC9F0">${d.id}</strong><br><br>${data.conceptQuestions[d.id]}`)
          .style("left", `${event.pageX + 10}px`)
          .style("top", `${event.pageY - 10}px`);
      })
      .on("mousemove", (event) => {
        tooltip.style("left", `${event.pageX + 10}px`).style("top", `${event.pageY - 10}px`);
      })
      .on("mouseout", () => {
        resetHighlight();
        tooltip.style("visibility", "hidden");
      });

    const labels = g.append("g")
      .selectAll("text")
      .data(data.nodes)
      .join("text")
      .attr("class", "label")
      .attr("x", (d) => d.x + 5)
      .attr("y", (d) => d.y + 5)
      .attr("fill", "#ffffff")
      .style("font-size", `${Math.max(10, width / 80)}px`)
      .style("font-weight", "600")
      .style("text-shadow", "2px 2px 4px rgba(0,0,0,0.8)")
      .text((d) => d.id);

    function getConnectedNodes(nodeId) {
      const connected = new Set();
      data.links.forEach(link => {
        if (link.source === nodeId) connected.add(link.target);
        if (link.target === nodeId) connected.add(link.source);
      });
      return connected;
    }

    function highlightConnections(d) {
      const connectedNodes = getConnectedNodes(d.id);
      nodes.style("opacity", 0.2);
      links.style("opacity", 0.1);
      labels.style("opacity", 0.2);

      nodes.filter(node => node.id === d.id || connectedNodes.has(node.id))
        .style("opacity", 1)
        .style("filter", "drop-shadow(0 0 15px rgba(255, 255, 255, 0.3))");

      links.filter(link => link.source === d.id || link.target === d.id)
        .style("opacity", 1)
        .style("stroke-width", Math.max(3, width / 300));

      labels.filter(node => node.id === d.id || connectedNodes.has(node.id))
        .style("opacity", 1);
    }

    function resetHighlight() {
      nodes.style("opacity", 1).style("filter", "drop-shadow(0 0 10px rgba(0, 0, 0, 0.5))");
      links.style("opacity", 1).style("stroke-width", Math.max(2, width / 400));
      labels.style("opacity", 1);
    }

    function zoomToNode(node) {
      const scale = 2;
      const translateX = width / 2 - scale * node.x;
      const translateY = height / 2 - scale * node.y;

      svg.transition().duration(750).call(
        zoom.transform,
        d3.zoomIdentity.translate(translateX, translateY).scale(scale)
      );
    }

    const defaultNode = data.nodes.find(n => n.group === 2);
    if (defaultNode) {
      highlightConnections(defaultNode);
      const nodeBBox = nodes.filter(n => n.id === defaultNode.id).node()?.getBBox();
      const svgRect = svg.node()?.getBoundingClientRect();
      if (nodeBBox && svgRect) {
        tooltip
          .style("visibility", "visible")
          .html(`<strong style="color: #4CC9F0">${defaultNode.id}</strong><br><br>${data.conceptQuestions[defaultNode.id]}`)
          .style("left", `${svgRect.left + nodeBBox.x + nodeBBox.width + 10}px`)
          .style("top", `${svgRect.top + nodeBBox.y}px`);
      }
    }

    return () => d3.select(".network-graph-tooltip").remove();
  }, [dimensions, data]);

  return (
    <div className="relative w-full h-full min-h-[400px] hidden md:block ">
      <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-lg z-10">
        <div className="flex flex-col gap-2">
          <div className="border-t border-white/20 pt-1">
            <h3 className="text-white text-sm font-semibold mb-1">Legend</h3>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF3366]"></div>
                <span className="text-white text-xs">Core Subject</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#00B4D8]"></div>
                <span className="text-white text-xs">Concepts</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#06D6A0]"></div>
                <span className="text-white text-xs">Related Topics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      <div ref={containerRef} className="w-full h-full min-h-[400px] overflow-hidden">
        <svg ref={svgRef} className="w-full h-full"></svg>
      </div>
    </div>
  );
};

export default NetworkGraph;
