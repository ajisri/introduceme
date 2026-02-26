"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useTheme } from "next-themes";
import * as THREE from "three";
import { useLanguage } from "@/context/LanguageContext";

// =============================================================================
// LOADING SCREEN - Cinematic Fire → Smoke → Hero Reveal
// 
// Animation Sequence:
// 1. Fire burns (campfire style, not wavy)
// 2. Rain starts, fire dims
// 3. Fire dies completely
// 4. White/black smoke rises and fills screen
// 5. Hero section revealed directly (no intermediate background)
// =============================================================================

// -----------------------------------------------------------------------------
// SIMPLEX NOISE (Stefan Gustavson) - Industry Standard for GPU Noise
// -----------------------------------------------------------------------------
const noiseChunk = `
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
                i.z + vec4(0.0, i1.z, i2.z, 1.0))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0))
              + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}
`;

// -----------------------------------------------------------------------------
// FIRE SHADERS - Campfire Style (Burning Wood Look)
// Less wavy, more pointed, natural campfire appearance
// -----------------------------------------------------------------------------
const fireVertexShader = `
varying vec2 vUv;
uniform float uTime;
uniform float uWind;

void main() {
    vUv = uv;
    vec3 pos = position;
    
    // Gentle sway, not wavy like water reflection
    float heightInfluence = smoothstep(0.0, 1.0, vUv.y);
    
    // Single gentle sway motion
    pos.x += sin(uTime * 0.8 + pos.y * 1.5) * 0.08 * heightInfluence;
    pos.x += uWind * heightInfluence * 1.2;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

const fireFragmentShader = `
varying vec2 vUv;
uniform float uTime;
uniform float uIntensity;
${noiseChunk}

void main() {
    vec2 uv = vUv;
    
    // Rising fire noise - natural, organic movement
    float n1 = snoise(vec3(uv.x * 2.5, uv.y * 1.5 - uTime * 0.4, uTime * 0.08));
    float n2 = snoise(vec3(uv.x * 5.0, uv.y * 3.0 - uTime * 0.7, uTime * 0.12));
    float n3 = snoise(vec3(uv.x * 10.0, uv.y * 6.0 - uTime * 1.2, uTime * 0.2));
    
    float noise = n1 * 0.5 + n2 * 0.35 + n3 * 0.15;
    noise = noise * 0.5 + 0.5;
    
    // Warm campfire colors - rich and deep
    vec3 darkCore = vec3(0.2, 0.0, 0.0);
    vec3 deepRed = vec3(0.7, 0.08, 0.0);
    vec3 fireOrange = vec3(1.0, 0.35, 0.02);
    vec3 hotYellow = vec3(1.0, 0.75, 0.25);
    vec3 whiteHot = vec3(1.0, 0.95, 0.8);
    
    vec3 color = mix(darkCore, deepRed, smoothstep(0.15, 0.35, noise));
    color = mix(color, fireOrange, smoothstep(0.35, 0.55, noise));
    color = mix(color, hotYellow, smoothstep(0.6, 0.8, noise));
    color = mix(color, whiteHot, smoothstep(0.85, 1.0, noise));
    
    // Natural fire shape - radial-like falloff for NO hard boundaries
    float centerDist = abs(uv.x - 0.5);
    
    // Smooth horizontal falloff that gets narrower at the top
    float falloffWidth = mix(0.45, 0.1, pow(uv.y, 0.8));
    float horizontalFade = 1.0 - smoothstep(falloffWidth * 0.5, falloffWidth, centerDist);
    
    // Vertical fade - ensures it dies before reaching the top edge
    float verticalFade = 1.0 - smoothstep(0.4, 0.95, uv.y);
    
    // Combined mask - purely multiplicative to ensure edges are zero
    float mask = horizontalFade * verticalFade;
    
    // Flickering flame tips using noise
    float flicker = snoise(vec3(uv.x * 6.0, uv.y * 3.0 - uTime * 2.5, uTime * 0.5));
    flicker = smoothstep(0.2, 0.9, flicker) * (1.0 - uv.y);
    
    // Hot glowing base
    float baseGlow = smoothstep(0.4, 0.0, uv.y) * 1.2;
    
    // Final alpha calculation - EVERYTHING is multiplied by mask/edge fade
    float alpha = (noise * 0.7 + flicker * 0.3 + baseGlow * 0.5) * mask;
    alpha *= uIntensity;
    alpha = clamp(alpha, 0.0, 1.0);
    
    // Add glow effect - also constrained by mask
    float glow = exp(-centerDist * 5.0) * verticalFade * 0.4 * uIntensity;
    color += vec3(1.0, 0.4, 0.1) * glow * mask;
    
    gl_FragColor = vec4(color, alpha);
}
`;

// -----------------------------------------------------------------------------
// SPARKS - Small Embers Rising
// -----------------------------------------------------------------------------
const sparksVertexShader = `
attribute float size;
attribute float lifetime;
attribute float seed;
varying float vLifetime;
varying float vSeed;
uniform float uTime;
uniform float uIntensity;

void main() {
    vLifetime = lifetime;
    vSeed = seed;
    vec3 pos = position;
    
    float age = mod(uTime * (0.6 + seed * 0.4) + lifetime * 6.0, 5.0);
    pos.y += age * (0.6 + seed * 0.3);
    pos.x += sin(uTime * 1.2 + seed * 8.0) * 0.25;
    pos.z += sin(age + seed * 4.0) * 0.15;
    
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    float sizeFade = 1.0 - smoothstep(0.0, 4.0, age);
    gl_PointSize = size * sizeFade * uIntensity * (180.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
}
`;

const sparksFragmentShader = `
varying float vLifetime;
varying float vSeed;

void main() {
    vec2 coord = gl_PointCoord - vec2(0.5);
    float dist = length(coord);
    float alpha = 1.0 - smoothstep(0.15, 0.5, dist);
    
    vec3 color = mix(vec3(1.0, 0.5, 0.1), vec3(1.0, 0.2, 0.05), vSeed);
    float glow = exp(-dist * 3.5) * 0.4;
    color += vec3(1.0, 0.6, 0.2) * glow;
    
    gl_FragColor = vec4(color, alpha * vLifetime * 0.6);
}
`;

// -----------------------------------------------------------------------------
// RAIN SHADERS
// -----------------------------------------------------------------------------
const rainVertexShader = `
attribute float size;
varying float vAlpha;
uniform float uOpacity;

void main() {
    vAlpha = uOpacity;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
}
`;

const rainFragmentShader = `
varying float vAlpha;

void main() {
    vec2 coord = gl_PointCoord - vec2(0.5);
    if(abs(coord.x) > 0.1 || abs(coord.y) > 0.5) discard;
    float alpha = (1.0 - smoothstep(0.0, 0.1, abs(coord.x))) * (1.0 - smoothstep(0.3, 0.5, abs(coord.y)));
    gl_FragColor = vec4(0.85, 0.92, 1.0, vAlpha * alpha * 0.5);
}
`;

// -----------------------------------------------------------------------------
// SMOKE SHADERS - Full Screen Coverage
// -----------------------------------------------------------------------------
const smokeVertexShader = `
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const smokeFragmentShader = `
varying vec2 vUv;
uniform float uTime;
uniform float uOpacity;
uniform float uRise;
uniform vec3 uColor;
${noiseChunk}

void main() {
    vec2 uv = vUv;
    
    // Soft billowing smoke
    float n1 = snoise(vec3(uv * 2.0, uTime * 0.1)) * 0.5;
    float n2 = snoise(vec3(uv * 4.0 + 5.0, uTime * 0.15)) * 0.3;
    float n3 = snoise(vec3(uv * 8.0, uTime * 0.2)) * 0.2;
    float smoke = n1 + n2 + n3;
    
    // Rising edge
    float riseEdge = uRise * 1.3;
    float edgeNoise = snoise(vec3(uv.x * 3.0, uTime * 0.2, 0.0)) * 0.1;
    float mask = 1.0 - smoothstep(riseEdge - 0.2, riseEdge + 0.05, uv.y - edgeNoise);
    
    float density = 0.9 + smoke * 0.1;
    float finalAlpha = mask * uOpacity * density;
    
    // Ensure complete coverage at full rise
    if(uRise >= 1.2) {
        finalAlpha = uOpacity;
    }
    
    gl_FragColor = vec4(uColor, clamp(finalAlpha, 0.0, 1.0));
}
`;

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
