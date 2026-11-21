// Is the page drawn without a GPU? Then WebGL runs on a software rasteriser (SwiftShader, llvmpipe,
// WARP) and canvas and compositing work lands on the CPU too: PageSpeed's and Googlebot's headless
// Chrome, some VMs, blocklisted drivers. The hero swaps its shader for the CSS glass there, and the
// loader draws its canvas at a lower resolution, so neither blocks the page for seconds.
const SOFTWARE = /swiftshader|llvmpipe|softpipe|lavapipe|software|basic render/i;

export const rendererIsSoftware = (gl) => {
  const info = gl.getExtension('WEBGL_debug_renderer_info');
  return SOFTWARE.test(String(gl.getParameter(info ? info.UNMASKED_RENDERER_WEBGL : gl.RENDERER)));
};

let soft;
export function softwareRendering() {
  if (soft !== undefined) return soft;
  const probe = (attrs) => document.createElement('canvas').getContext('webgl', attrs);
  const release = (gl) => gl && gl.getExtension('WEBGL_lose_context')?.loseContext();
  const gl = probe({ failIfMajorPerformanceCaveat: true });
  if (gl) {
    soft = rendererIsSoftware(gl);
    release(gl);
  } else {
    // a context only without the caveat flag means the browser itself calls it slow; no WebGL at all
    // says nothing about the GPU, so the full scene stays
    const any = probe({});
    soft = !!any;
    release(any);
  }
  return soft;
}
