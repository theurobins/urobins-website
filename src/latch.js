// A scroll threshold with hysteresis. `forward` fires once the scroll passes `at()`; `backward`
// only once it has come back above `at() - back()`. Timed moments (text beats, card steps) used to
// re-fire whenever a slow scroll hovered around their trigger line; the dead band stops that.
// ScrollTrigger still fires onLeave/onLeaveBack when a fast scroll crosses both lines in one frame.
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function latch({ at, back, forward, backward, init }) {
  return ScrollTrigger.create({
    start: () => Math.max(0, at() - back()),
    end: () => at(),
    onLeave: () => forward(),
    onLeaveBack: () => backward(),
    // on refresh, settle to whichever side of the line the scroll is on, without animating
    onRefresh: (self) => { if (init) init(self.scroll() >= self.end); },
  });
}
