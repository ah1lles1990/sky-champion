import { type EventNameEnd, type EventNameMove, type EventNameStart } from '../types/types'
import { isMobile } from './helper'

export const IS_MOBILE = isMobile()

export const EVENT_START: EventNameStart = IS_MOBILE ? 'touchstart' : 'mousedown'

export const EVENT_END: EventNameEnd = IS_MOBILE ? 'touchend' : 'mouseup'

export const EVENT_MOVE: EventNameMove = IS_MOBILE ? 'touchmove' : 'mousemove'
