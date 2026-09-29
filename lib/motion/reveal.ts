/** Shared homepage scroll entrance tokens (transform + opacity only). */
export const REVEAL = {
  sectionStart: "top 78%",
  blockStart: "top 82%",
  ease: "power4.out",
  duration: 1,
  lift: 44,
  liftSoft: 28,
} as const

export function scrollEnter(
  trigger: Element | string,
  start: string = REVEAL.sectionStart
) {
  return {
    trigger,
    start,
    once: true,
    invalidateOnRefresh: true,
  } as const
}

export const fromHidden = {
  y: REVEAL.lift,
  autoAlpha: 0,
  duration: REVEAL.duration,
  ease: REVEAL.ease,
} as const

export const fromHiddenSoft = {
  y: REVEAL.liftSoft,
  autoAlpha: 0,
  duration: REVEAL.duration * 0.85,
  ease: REVEAL.ease,
} as const
