// Add your custom JavaScript for storefront pages here.

/*
 * Keep clicks working on carousel items (products, brands, banners).
 *
 * Glide.js treats the very first mousemove/touchmove after a press as the
 * start of a swipe: it removes the href of every anchor inside the slider and
 * blocks the next click until the slide transition ends. A click where the
 * pointer moves a couple of pixels (mouse jitter, finger tap) therefore does
 * nothing and the user has to click twice. We swallow those tiny movements
 * before they reach Glide's listener on the `.glide` root, so a press only
 * becomes a swipe after a real drag.
 */
const CLICK_TOLERANCE_PX = 8
let pressStart = null

const getPoint = ev => {
  const touch = ev.touches && ev.touches[0]
  return touch
    ? { x: touch.pageX, y: touch.pageY }
    : { x: ev.pageX, y: ev.pageY }
}

const onPressStart = ev => {
  const $target = ev.target
  pressStart = $target && $target.closest && $target.closest('.glide')
    ? getPoint(ev)
    : null
}

const onPressMove = ev => {
  if (!pressStart) return
  const { x, y } = getPoint(ev)
  if (
    Math.abs(x - pressStart.x) < CLICK_TOLERANCE_PX &&
    Math.abs(y - pressStart.y) < CLICK_TOLERANCE_PX
  ) {
    // Still a click: do not let Glide see it as a swipe
    ev.stopPropagation()
  } else {
    // Real drag: hand the rest of the gesture over to Glide
    pressStart = null
  }
}

const onPressEnd = () => {
  pressStart = null
}

document.addEventListener('mousedown', onPressStart, true)
document.addEventListener('mousemove', onPressMove, true)
document.addEventListener('mouseup', onPressEnd, true)
document.addEventListener('touchstart', onPressStart, { capture: true, passive: true })
document.addEventListener('touchmove', onPressMove, { capture: true, passive: true })
document.addEventListener('touchend', onPressEnd, true)
document.addEventListener('touchcancel', onPressEnd, true)
