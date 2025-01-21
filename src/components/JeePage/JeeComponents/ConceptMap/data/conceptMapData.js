// src/data/conceptMapData.js
export const nodes = [
    // Subjects
    { id: 'physics', name: 'Physics', type: 'subject' },
    { id: 'chemistry', name: 'Chemistry', type: 'subject' },
    { id: 'mathematics', name: 'Mathematics', type: 'subject' },
  
    // Physics Topics
    { id: 'mechanics', name: 'Mechanics', type: 'topic', parentId: 'physics' },
    { id: 'thermodynamics', name: 'Thermodynamics', type: 'topic', parentId: 'physics' },
    { id: 'waves', name: 'Waves & Oscillations', type: 'topic', parentId: 'physics' },
    { id: 'electrodynamics', name: 'Electrodynamics', type: 'topic', parentId: 'physics' },
    { id: 'optics', name: 'Optics', type: 'topic', parentId: 'physics' },
    { id: 'modern', name: 'Modern Physics', type: 'topic', parentId: 'physics' },
    { id: 'units', name: 'Units & Dimensions', type: 'topic', parentId: 'physics' },
  
    // Chemistry Topics
    { id: 'physical', name: 'Physical Chemistry', type: 'topic', parentId: 'chemistry' },
    { id: 'inorganic', name: 'Inorganic Chemistry', type: 'topic', parentId: 'chemistry' },
    { id: 'organic', name: 'Organic Chemistry', type: 'topic', parentId: 'chemistry' },
  
    // Mathematics Topics
    { id: 'algebra', name: 'Algebra', type: 'topic', parentId: 'mathematics' },
    { id: 'calculus', name: 'Calculus', type: 'topic', parentId: 'mathematics' },
    { id: 'coordinate', name: 'Coordinate Geometry', type: 'topic', parentId: 'mathematics' },
    { id: 'trigonometry', name: 'Trigonometry', type: 'topic', parentId: 'mathematics' },
  ];
  
  // Create basic subject-topic links
  const subjectTopicLinks = nodes
    .filter(node => node.type === 'topic')
    .map(node => ({
      source: node.parentId,
      target: node.id,
      value: 2,
    }));
  
  // Create inter-topic relationships
  const interTopicLinks = [
    // Physics - Mathematics relationships
    { source: 'mechanics', target: 'calculus', value: 1 },
    { source: 'mechanics', target: 'coordinate', value: 1 },
    { source: 'waves', target: 'trigonometry', value: 1 },
    { source: 'electrodynamics', target: 'calculus', value: 1 },
    { source: 'optics', target: 'trigonometry', value: 1 },
    
    // Physics - Chemistry relationships
    { source: 'thermodynamics', target: 'physical', value: 1 },
    { source: 'modern', target: 'physical', value: 1 },
    { source: 'units', target: 'physical', value: 1 },
    
    // Chemistry - Mathematics relationships
    { source: 'physical', target: 'calculus', value: 1 },
    { source: 'physical', target: 'algebra', value: 1 },
    
    // Additional cross-subject connections
    { source: 'waves', target: 'physical', value: 1 },
    { source: 'coordinate', target: 'optics', value: 1 },
    { source: 'algebra', target: 'modern', value: 1 },
  ];
  
  export const links = [...subjectTopicLinks, ...interTopicLinks];