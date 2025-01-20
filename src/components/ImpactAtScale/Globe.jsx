import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Globe = () => {
  const globeRef = useRef();

  useEffect(() => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      globeRef.current.clientWidth / globeRef.current.clientHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      globeRef.current.clientWidth,
      globeRef.current.clientHeight
    );
    globeRef.current.appendChild(renderer.domElement);

    // Add a light source
    const light = new THREE.PointLight(0xffffff, 1, 0);
    light.position.set(10, 10, 10);
    scene.add(light);

    // Add the globe
    const geometry = new THREE.SphereGeometry(5, 64, 64); // Globe size and detail
    const texture = new THREE.TextureLoader().load('/download.png'); // Adjust the path to your globe texture
    const material = new THREE.MeshStandardMaterial({ map: texture });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Position the camera
    camera.position.z = 12;

    // Add controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.rotateSpeed = 0.5;
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;

    // Handle auto-rotation
    let autoRotate = true;
    function rotateGlobe() {
      if (autoRotate) {
        globe.rotation.y += 0.002; // Adjust for rotation speed
      }
    }

    // Add event listeners for interactivity
    const handleMouseDown = () => (autoRotate = false);
    const handleMouseUp = () => (autoRotate = true);

    globeRef.current.addEventListener('mousedown', handleMouseDown);
    globeRef.current.addEventListener('mouseup', handleMouseUp);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      rotateGlobe();
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resizing
    const handleResize = () => {
      const width = globeRef.current.clientWidth;
      const height = globeRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      // Cleanup on component unmount
      globeRef.current.removeEventListener('mousedown', handleMouseDown);
      globeRef.current.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={globeRef}
      className="w-full h-[500px] relative overflow-hidden"
    ></div>
  );
};

export default Globe;
