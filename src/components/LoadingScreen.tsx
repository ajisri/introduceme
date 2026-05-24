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
    const { resolvedTheme } = useTheme();
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
                uIntensity: { value: 1.5 }, // Intensitas api awal dinaikkan
                uWind: { value: 0.1 }
            },
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            side: THREE.DoubleSide
        });

        // Main Campfire (Satu api yang sangat masif, sedikit off-center)
        const fireGeo = new THREE.PlaneGeometry(8, 7, 48, 48);
        const fireMesh = new THREE.Mesh(fireGeo, fireMaterial);
        fireMesh.position.set(1.5, -2.5, -1.0); // Sedikit digeser ke kanan belakang
        fireMesh.scale.set(2.5, 2.5, 2.5); // Skala super raksasa
        scene.add(fireMesh);

        // Secondary fires (Tersebar acak, berantakan, menjangkau pinggir layar)
        const secondaryFireData = [
            { x: -4.5, y: -3.0, z: -0.5, scale: 1.4 },  // Kiri pinggir besar
            { x: 5.5, y: -2.8, z: -1.5, scale: 1.2 },   // Kanan jauh pinggir
            { x: -7.0, y: -2.3, z: -2.0, scale: 1.6 },  // Ekstrem kiri
            { x: 7.5, y: -2.2, z: -2.5, scale: 1.5 },   // Ekstrem kanan
            { x: -1.5, y: -3.5, z: 0.5, scale: 0.6 },   // Di depan agak kecil
            { x: 3.5, y: -3.2, z: 0.2, scale: 0.8 },    // Kanan depan
            { x: -3.0, y: -3.8, z: 1.0, scale: 0.5 },   // Paling depan ujung
            { x: 0.2, y: -3.5, z: 0.0, scale: 0.9 }     // Tengah kecil
        ];

        const secondaryFires: THREE.Mesh[] = [];
        secondaryFireData.forEach(data => {
            const mat = fireMaterial.clone();
            const mesh = new THREE.Mesh(fireGeo.clone(), mat);
            mesh.scale.set(data.scale, data.scale, 1);
            mesh.position.set(data.x, data.y, data.z);
            scene.add(mesh);
            secondaryFires.push(mesh);
        });

        // =====================================================================
        // SPARKS - Small Embers (Diperbanyak drastis agar lebih membara)
        // =====================================================================
        const sparkCount = 200; // Ditambah lagi agar menutupi kekosongan layar
        const sparkGeo = new THREE.BufferGeometry();
        const sparkPositions = new Float32Array(sparkCount * 3);
        const sparkSizes = new Float32Array(sparkCount);
        const sparkLifetimes = new Float32Array(sparkCount);
        const sparkSeeds = new Float32Array(sparkCount);

        for (let i = 0; i < sparkCount; i++) {
            sparkPositions[i * 3] = (Math.random() - 0.5) * 18; // Sebaran X sangat lebar (edge to edge)
            sparkPositions[i * 3 + 1] = -4.0 + Math.random() * 2.0; // Mulai dari lantai
            sparkPositions[i * 3 + 2] = (Math.random() - 0.5) * 4.0; // Kedalaman Z
            sparkSizes[i] = 0.2 + Math.random() * 0.8;
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
            uniforms: { uTime: { value: 0 }, uIntensity: { value: 1.5 } },
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
        // SMOKE - Full Screen Cover (Asap putih menebal layaknya uap panas kena hujan)
        // =====================================================================
        const smokeColor = "#ffffff"; // Selalu putih sesuai permintaan

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
        const state = { fire: 1.5, wind: 0.1, sparksIntensity: 1.5 };

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

        // Diubah untuk mensimulasikan api yang mengecil saat tersiram hujan
        const fireMeshes = [fireMesh, ...secondaryFires];
        
        tl.to({}, { duration: 1.0 }) // Initial fire focus
            .to(state, { wind: 0.8, duration: 1.5, ease: "power1.inOut" }, 1.0)
            
            // 1. Hujan mulai turun membasahi
            .to(rainMaterial.uniforms.uOpacity, { value: 0.6, duration: 1.5, ease: "power1.in" }, 1.5)
            
            // 2. Api pelan-pelan mengecil secara fisik (scale) dan meredup
            .to(fireMeshes.map(m => m.scale), { 
                x: 0.1, y: 0.1, z: 0.1, 
                duration: 2.5, 
                ease: "power2.inOut" 
            }, 2.0)
            .to(state, { fire: 0.3, sparksIntensity: 0.2, duration: 2.0, ease: "power1.in" }, 2.0)
            
            // 3. Uap asap muncul drastis sebagai reaksi api tersiram hujan
            .to(smokeMaterial.uniforms.uOpacity, { value: 0.8, duration: 3.0, ease: "power2.out" }, 2.0)
            .to(smokeMaterial.uniforms.uRise, { value: 1.2, duration: 3.0, ease: "power1.out" }, 2.0)
            
            // 4. Api benar-benar padam
            .to(state, { fire: 0.0, sparksIntensity: 0.0, duration: 0.5 }, 4.0)
            
            // 5. Asap tebal memenuhi layar (Whiteout) sebelum masuk ke website
            .to(smokeMaterial.uniforms.uOpacity, { value: 1.0, duration: 1.5, ease: "power1.in" }, 4.5)
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
            <div className="absolute bottom-8 left-8 z-10 flex flex-col gap-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.4em] opacity-80 text-swiss-red">
                    [ API_CONNECTION : ESTABLISHED ]
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40 text-white">
                    {dict.loading.init}
                </span>
            </div>
        </div>
    );
}
