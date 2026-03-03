"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useTheme } from "next-themes";
import * as THREE from "three";
import { useLanguage } from "@/context/LanguageContext";
import {
    fireVertexShader,
    fireFragmentShader,
    sparksVertexShader,
    sparksFragmentShader,
    rainVertexShader,
    rainFragmentShader,
    smokeVertexShader,
    smokeFragmentShader
} from "@/lib/shaders/loading-shaders";

/**
 * LOADING SCREEN - Cinematic Fire → Smoke → Hero Reveal
 * Refactored for better maintainability by externalizing shader code.
 */
export default function LoadingScreen({ setIsDoneAction }: { setIsDoneAction: () => void }) {
    const { theme, resolvedTheme } = useTheme();
    const { dict } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const canvas3dRef = useRef<HTMLCanvasElement>(null);

    // Use resolvedTheme for accurate theme detection
    const isDark = resolvedTheme === "dark";

    useEffect(() => {
        if (!canvas3dRef.current) return;

        // =====================================================================
        // THREE.JS SCENE SETUP
        // =====================================================================
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({
            canvas: canvas3dRef.current,
            alpha: true,
            antialias: true,
            powerPreference: "high-performance"
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // =====================================================================
        // FIRE - Main Campfire (Large geometry for no visible boundaries)
        // =====================================================================
        const fireMaterial = new THREE.ShaderMaterial({
            vertexShader: fireVertexShader,
            fragmentShader: fireFragmentShader,
            uniforms: {
                uTime: { value: 0 },
                uIntensity: { value: 1.0 },
                uWind: { value: 0.0 }
            },
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            side: THREE.DoubleSide
        });

        // Larger geometry to ensure no visible frame/boundaries
        const fireGeo = new THREE.PlaneGeometry(8, 7, 48, 48);
        const fireMesh = new THREE.Mesh(fireGeo, fireMaterial);
        fireMesh.position.set(0, -2.5, 0);
        scene.add(fireMesh);

        // Secondary smaller fires
        const secondaryFireData = [
            { x: -2.8, y: -3.2, scale: 0.3 },
            { x: 2.5, y: -3.3, scale: 0.25 },
            { x: -1.2, y: -3.0, scale: 0.2 }
        ];

        const secondaryFires: THREE.Mesh[] = [];
        secondaryFireData.forEach(data => {
            const mat = fireMaterial.clone();
            const mesh = new THREE.Mesh(fireGeo.clone(), mat);
            mesh.scale.set(data.scale, data.scale, 1);
            mesh.position.set(data.x, data.y, -0.2);
            scene.add(mesh);
            secondaryFires.push(mesh);
        });

        // =====================================================================
        // SPARKS - Small Embers
        // =====================================================================
        const sparkCount = 25;
        const sparkGeo = new THREE.BufferGeometry();
        const sparkPositions = new Float32Array(sparkCount * 3);
        const sparkSizes = new Float32Array(sparkCount);
        const sparkLifetimes = new Float32Array(sparkCount);
        const sparkSeeds = new Float32Array(sparkCount);

        for (let i = 0; i < sparkCount; i++) {
            sparkPositions[i * 3] = (Math.random() - 0.5) * 4;
            sparkPositions[i * 3 + 1] = -3.0 + Math.random() * 1.0;
            sparkPositions[i * 3 + 2] = (Math.random() - 0.5) * 1.0;
            sparkSizes[i] = 0.2 + Math.random() * 0.6;
            sparkLifetimes[i] = 0.3 + Math.random() * 0.7;
            sparkSeeds[i] = Math.random();
        }

        sparkGeo.setAttribute('position', new THREE.BufferAttribute(sparkPositions, 3));
        sparkGeo.setAttribute('size', new THREE.BufferAttribute(sparkSizes, 1));
        sparkGeo.setAttribute('lifetime', new THREE.BufferAttribute(sparkLifetimes, 1));
        sparkGeo.setAttribute('seed', new THREE.BufferAttribute(sparkSeeds, 1));

        const sparkMaterial = new THREE.ShaderMaterial({
            vertexShader: sparksVertexShader,
            fragmentShader: sparksFragmentShader,
            uniforms: { uTime: { value: 0 }, uIntensity: { value: 1.0 } },
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        const sparkSystem = new THREE.Points(sparkGeo, sparkMaterial);
        scene.add(sparkSystem);

        // =====================================================================
        // RAIN
        // =====================================================================
        const rainCount = 2000;
        const rainGeo = new THREE.BufferGeometry();
        const rainPositions = new Float32Array(rainCount * 3);
        const rainSizes = new Float32Array(rainCount);
        const rainVelocities = new Float32Array(rainCount);

        for (let i = 0; i < rainCount; i++) {
            rainPositions[i * 3] = (Math.random() - 0.5) * 20;
            rainPositions[i * 3 + 1] = Math.random() * 15 - 5;
            rainPositions[i * 3 + 2] = (Math.random() - 0.5) * 10;
            rainSizes[i] = 1.0 + Math.random() * 1.5;
            rainVelocities[i] = 0.3 + Math.random() * 0.5;
        }

        rainGeo.setAttribute('position', new THREE.BufferAttribute(rainPositions, 3));
        rainGeo.setAttribute('size', new THREE.BufferAttribute(rainSizes, 1));

        const rainMaterial = new THREE.ShaderMaterial({
            vertexShader: rainVertexShader,
            fragmentShader: rainFragmentShader,
            uniforms: { uOpacity: { value: 0.0 } },
            transparent: true,
            depthWrite: false
        });

        const rainSystem = new THREE.Points(rainGeo, rainMaterial);
        scene.add(rainSystem);

        // =====================================================================
        // SMOKE - Full Screen Cover (Theme-Aware Color)
        // Smoke color matches the hero background for seamless transition
        // =====================================================================
        const smokeColor = isDark ? "#0a0a0a" : "#ffffff";

        const smokeMaterial = new THREE.ShaderMaterial({
            vertexShader: smokeVertexShader,
            fragmentShader: smokeFragmentShader,
            uniforms: {
                uTime: { value: 0 },
                uOpacity: { value: 0.0 },
                uRise: { value: 0.0 },
                uColor: { value: new THREE.Color(smokeColor) }
            },
            transparent: true,
            depthWrite: false
        });

        const smokeGeo = new THREE.PlaneGeometry(20, 16, 32, 32);
        const smokeMesh = new THREE.Mesh(smokeGeo, smokeMaterial);
        smokeMesh.position.z = 2.5;
        scene.add(smokeMesh);

        // =====================================================================
        // ANIMATION TIMELINE
        // Fire → Rain → Fire Dies → Smoke Fills → Reveal Hero
        // =====================================================================
        const state = { fire: 1.0, wind: 0.0, sparksIntensity: 1.0 };

        const tl = gsap.timeline({
            onComplete: () => {
                // When smoke fully covers, fade out loading screen to reveal hero directly
                // The smoke color matches hero background, so transition is seamless
                gsap.to(containerRef.current, {
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.inOut",
                    onComplete: () => {
                        if (containerRef.current) {
                            containerRef.current.style.display = 'none';
                        }
                        setIsDoneAction();
                    }
                });
            }
        });

        // Balanced Cinematic Sequence (total ~6.0s) 
        // Optimized for LCP via background rendering in ClientLayout
        tl.to({}, { duration: 0.8 }) // Initial fire focus
            .to(state, { wind: 0.3, duration: 0.8, ease: "power1.inOut" }, 0.5)
            .to(rainMaterial.uniforms.uOpacity, { value: 0.3, duration: 1.0, ease: "power1.in" }, 0.8)
            .to(state, { fire: 0.2, wind: 0.6, duration: 1.0, ease: "power1.in" }, 1.5)
            .to(state, { sparksIntensity: 0.1, duration: 0.6 }, 1.8)
            .to(state, { fire: 0.0, sparksIntensity: 0.0, duration: 0.8, ease: "power2.in" }, 2.5)
            .to(smokeMaterial.uniforms.uOpacity, { value: 1.0, duration: 1.2, ease: "power1.in" }, 2.8)
            .to(smokeMaterial.uniforms.uRise, { value: 1.2, duration: 4.0, ease: "power1.out" }, 2.8)
            .to(rainMaterial.uniforms.uOpacity, { value: 0.0, duration: 1.0, ease: "power1.out" }, 5.0);

        // =====================================================================
        // RENDER LOOP
        // =====================================================================
        let frameId: number;
        const animate = (time: number) => {
            const t = time * 0.001;

            fireMaterial.uniforms.uTime.value = t;
            fireMaterial.uniforms.uIntensity.value = state.fire;
            fireMaterial.uniforms.uWind.value = state.wind;

            secondaryFires.forEach((mesh, i) => {
                const mat = mesh.material as THREE.ShaderMaterial;
                mat.uniforms.uTime.value = t + i * 0.2;
                mat.uniforms.uIntensity.value = state.fire * 0.8;
                mat.uniforms.uWind.value = state.wind * 0.9;
            });

            sparkMaterial.uniforms.uTime.value = t;
            sparkMaterial.uniforms.uIntensity.value = state.sparksIntensity;

            smokeMaterial.uniforms.uTime.value = t;

            // Rain physics
            if (rainMaterial.uniforms.uOpacity.value > 0.01) {
                const positions = rainGeo.attributes.position.array as Float32Array;
                for (let i = 0; i < rainCount; i++) {
                    positions[i * 3 + 1] -= rainVelocities[i];
                    if (positions[i * 3 + 1] < -7) positions[i * 3 + 1] = 10;
                }
                rainGeo.attributes.position.needsUpdate = true;
            }

            renderer.render(scene, camera);
            frameId = requestAnimationFrame(animate);
        };

        frameId = requestAnimationFrame(animate);

        // Resize handler
        const handleResize = () => {
            if (!canvas3dRef.current) return;
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener('resize', handleResize);
            tl.kill();
            renderer.dispose();
            fireMaterial.dispose();
            fireGeo.dispose();
            secondaryFires.forEach(mesh => {
                (mesh.material as THREE.ShaderMaterial).dispose();
                mesh.geometry.dispose();
            });
            sparkMaterial.dispose();
            sparkGeo.dispose();
            smokeMaterial.dispose();
            smokeGeo.dispose();
            rainMaterial.dispose();
            rainGeo.dispose();
        };
    }, [setIsDoneAction, isDark, resolvedTheme]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[9999] pointer-events-auto flex items-center justify-center"
            style={{ backgroundColor: '#000000' }}
        >
            <canvas ref={canvas3dRef} className="absolute inset-0" />
            <div className="absolute bottom-8 left-8 z-10">
                <span className="font-mono text-[9px] uppercase tracking-[0.4em] opacity-50 text-white">
                    {dict.loading.init}
                </span>
            </div>
        </div>
    );
}
