// -----------------------------------------------------------------------------
// SIMPLEX NOISE (Stefan Gustavson) - Industry Standard for GPU Noise
// -----------------------------------------------------------------------------
export const noiseChunk = `
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
// FIRE SHADERS
// -----------------------------------------------------------------------------
export const fireVertexShader = `
varying vec2 vUv;
uniform float uTime;
uniform float uWind;

void main() {
    vUv = uv;
    vec3 pos = position;
    float heightInfluence = smoothstep(0.0, 1.0, vUv.y);
    pos.x += sin(uTime * 0.8 + pos.y * 1.5) * 0.08 * heightInfluence;
    pos.x += uWind * heightInfluence * 1.2;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

export const fireFragmentShader = `
varying vec2 vUv;
uniform float uTime;
uniform float uIntensity;
${noiseChunk}

void main() {
    vec2 uv = vUv;
    float n1 = snoise(vec3(uv.x * 2.5, uv.y * 1.5 - uTime * 0.4, uTime * 0.08));
    float n2 = snoise(vec3(uv.x * 5.0, uv.y * 3.0 - uTime * 0.7, uTime * 0.12));
    float n3 = snoise(vec3(uv.x * 10.0, uv.y * 6.0 - uTime * 1.2, uTime * 0.2));
    float noise = n1 * 0.5 + n2 * 0.35 + n3 * 0.15;
    noise = noise * 0.5 + 0.5;
    
    vec3 darkCore = vec3(0.2, 0.0, 0.0);
    vec3 deepRed = vec3(0.7, 0.08, 0.0);
    vec3 fireOrange = vec3(1.0, 0.35, 0.02);
    vec3 hotYellow = vec3(1.0, 0.75, 0.25);
    vec3 whiteHot = vec3(1.0, 0.95, 0.8);
    
    vec3 color = mix(darkCore, deepRed, smoothstep(0.15, 0.35, noise));
    color = mix(color, fireOrange, smoothstep(0.35, 0.55, noise));
    color = mix(color, hotYellow, smoothstep(0.6, 0.8, noise));
    color = mix(color, whiteHot, smoothstep(0.85, 1.0, noise));
    
    float centerDist = abs(uv.x - 0.5);
    float falloffWidth = mix(0.45, 0.1, pow(uv.y, 0.8));
    float horizontalFade = 1.0 - smoothstep(falloffWidth * 0.5, falloffWidth, centerDist);
    float verticalFade = 1.0 - smoothstep(0.4, 0.95, uv.y);
    float mask = horizontalFade * verticalFade;
    
    float flicker = snoise(vec3(uv.x * 6.0, uv.y * 3.0 - uTime * 2.5, uTime * 0.5));
    flicker = smoothstep(0.2, 0.9, flicker) * (1.0 - uv.y);
    float baseGlow = smoothstep(0.4, 0.0, uv.y) * 1.2;
    float alpha = (noise * 0.7 + flicker * 0.3 + baseGlow * 0.5) * mask;
    alpha *= uIntensity;
    alpha = clamp(alpha, 0.0, 1.0);
    
    float glow = exp(-centerDist * 5.0) * verticalFade * 0.4 * uIntensity;
    color += vec3(1.0, 0.4, 0.1) * glow * mask;
    gl_FragColor = vec4(color, alpha);
}
`;

// -----------------------------------------------------------------------------
// SPARKS
// -----------------------------------------------------------------------------
export const sparksVertexShader = `
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

export const sparksFragmentShader = `
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
// RAIN
// -----------------------------------------------------------------------------
export const rainVertexShader = `
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

export const rainFragmentShader = `
varying float vAlpha;

void main() {
    vec2 coord = gl_PointCoord - vec2(0.5);
    if(abs(coord.x) > 0.1 || abs(coord.y) > 0.5) discard;
    float alpha = (1.0 - smoothstep(0.0, 0.1, abs(coord.x))) * (1.0 - smoothstep(0.3, 0.5, abs(coord.y)));
    gl_FragColor = vec4(0.85, 0.92, 1.0, vAlpha * alpha * 0.5);
}
`;

// -----------------------------------------------------------------------------
// SMOKE
// -----------------------------------------------------------------------------
export const smokeVertexShader = `
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export const smokeFragmentShader = `
varying vec2 vUv;
uniform float uTime;
uniform float uOpacity;
uniform float uRise;
uniform vec3 uColor;
${noiseChunk}

void main() {
    vec2 uv = vUv;
    float n1 = snoise(vec3(uv * 2.0, uTime * 0.1)) * 0.5;
    float n2 = snoise(vec3(uv * 4.0 + 5.0, uTime * 0.15)) * 0.3;
    float n3 = snoise(vec3(uv * 8.0, uTime * 0.2)) * 0.2;
    float smoke = n1 + n2 + n3;
    float riseEdge = uRise * 1.3;
    float edgeNoise = snoise(vec3(uv.x * 3.0, uTime * 0.2, 0.0)) * 0.1;
    float mask = 1.0 - smoothstep(riseEdge - 0.2, riseEdge + 0.05, uv.y - edgeNoise);
    float density = 0.9 + smoke * 0.1;
    float finalAlpha = mask * uOpacity * density;
    if(uRise >= 1.2) {
        finalAlpha = uOpacity;
    }
    gl_FragColor = vec4(uColor, clamp(finalAlpha, 0.0, 1.0));
}
`;
