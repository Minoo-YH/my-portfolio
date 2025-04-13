import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const WindBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Geometry for flowing waves
    const geometry = new THREE.PlaneGeometry(6, 4, 100, 100);

    // Shader material to control the wave animation and color gradient
    const material = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec2 vUv;
        uniform float time;
        void main() {
          vUv = uv;
          vec3 pos = position;
          
          // Create tighter and more controlled wave movement
          pos.z = 0.1 * sin(pos.x * 8.0 + time * 0.4) + 0.15 * cos(pos.y * 5.5 + time * 0.25);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform float time;
        void main() {
          // Smooth flow transition for fluid look
          float flow = 0.5 + 0.5 * sin((vUv.x + time * 0.2) * 6.0);
          
          // Use deeper blue shades to match your theme
          vec3 deepBlue = vec3(0.0, 0.3, 0.5); // Deeper blue for the main wave
          vec3 lightBlue = vec3(0.2, 0.5, 0.8); // Lighter blue for highlights
          
          // Gold accent for a luxurious touch
          vec3 gold = vec3(1.0, 0.8, 0.2); // Soft gold accent

          // Smoothly mix the colors (blue tones and gold)
          vec3 color = mix(deepBlue, lightBlue, flow);
          color = mix(color, gold, 0.15); // Gold mixed in subtly for elegance

          // Final soft glow with opacity for a flowing effect
          gl_FragColor = vec4(color, 0.5); // 50% opacity for a glowing effect
        }
      `,
      uniforms: {
        time: { value: 0 }
      },
      transparent: true
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Animation loop for continuous smooth movement
    const animate = () => {
      material.uniforms.time.value += 0.03; // Adjust speed of wave motion for smoother flow
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Resize handling to keep the background responsive
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default WindBackground;
