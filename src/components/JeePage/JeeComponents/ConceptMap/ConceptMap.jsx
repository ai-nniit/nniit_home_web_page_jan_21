// src/components/ConceptMap.jsx
import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { nodes, links } from './data/conceptMapData';

const ConceptMap = () => {
  const svgRef = useRef(null);
  const [selectedNode, setSelectedNode] = useState(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 1000;
    const height = 800;

    // Clear existing SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [0, 0, width, height]);

    // Create force simulation
    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id(d => d.id).distance(150))
      .force('charge', d3.forceManyBody().strength(-2000))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(80));

    // Create links
    const link = svg.append('g')
      .selectAll('line')
      .data(links)
      .join('line')
      .attr('stroke', d => d.value === 2 ? '#999' : '#ff9999')
      .attr('stroke-opacity', d => d.value === 2 ? 0.6 : 0.4)
      .attr('stroke-width', d => d.value === 2 ? 2 : 1)
      .attr('stroke-dasharray', d => d.value === 2 ? '' : '5,5');

    // Create nodes
    const node = svg.append('g')
      .selectAll('g')
      .data(nodes)
      .join('g')
      .call(d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended))
      .on('click', (event, d) => {
        setSelectedNode(selectedNode === d.id ? null : d.id);
      });

    // Add circles to nodes
    node.append('circle')
      .attr('r', d => d.type === 'subject' ? 60 : 45)
      .attr('fill', d => {
        switch (d.type) {
          case 'subject': return '#4299e1';
          case 'topic': return '#48bb78';
          default: return '#ed8936';
        }
      })
      .attr('stroke', '#fff')
      .attr('stroke-width', 2);

    // Add labels to nodes
    node.append('text')
      .text(d => d.name)
      .attr('x', 0)
      .attr('y', 0)
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('fill', 'white')
      .style('font-size', d => d.type === 'subject' ? '16px' : '14px')
      .style('font-weight', 'bold')
      .style('pointer-events', 'none')
      .call(wrap, 90);

    // Highlight connected nodes and links on hover
    node.on('mouseover', function(event, d) {
      const connectedNodeIds = new Set(links
        .filter(l => l.source.id === d.id || l.target.id === d.id)
        .flatMap(l => [l.source.id, l.target.id]));

      node.style('opacity', n => connectedNodeIds.has(n.id) ? 1 : 0.3);
      link
        .style('opacity', l => 
          (l.source.id === d.id || l.target.id === d.id) ? 1 : 0.1);
    })
    .on('mouseout', function() {
      node.style('opacity', 1);
      link.style('opacity', 1);
    });

    // Update positions on each tick
    simulation.on('tick', () => {
      nodes.forEach(d => {
        d.x = Math.max(60, Math.min(width - 60, d.x));
        d.y = Math.max(60, Math.min(height - 60, d.y));
      });

      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      node
        .attr('transform', d => `translate(${d.x},${d.y})`);
    });

    // Drag functions
    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    // Text wrapping function
    function wrap(text, width) {
      text.each(function() {
        const text = d3.select(this);
        const words = text.text().split(/\s+/).reverse();
        let word;
        let line = [];
        let lineNumber = 0;
        const lineHeight = 1.1;
        const y = text.attr('y');
        const dy = parseFloat(text.attr('dy') || '0');
        let tspan = text.text(null).append('tspan').attr('x', 0).attr('y', y).attr('dy', dy + 'em');
        
        while (word = words.pop()) {
          line.push(word);
          tspan.text(line.join(' '));
          if (tspan.node().getComputedTextLength() > width) {
            line.pop();
            tspan.text(line.join(' '));
            line = [word];
            tspan = text.append('tspan').attr('x', 0).attr('y', y).attr('dy', ++lineNumber * lineHeight + dy + 'em').text(word);
          }
        }
      });
    }

    return () => {
      simulation.stop();
    };
  }, [selectedNode]);

  return (
    // <div className="w-auto h-[400px] flex justify-center items-center bg-gray-900">
      <svg ref={svgRef} className="w-full h-full bg-white rounded-lg shadow-lg "></svg>
    // </div>
  );
};

export default ConceptMap;