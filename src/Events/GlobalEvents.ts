import { TypedOnErrorEventHandler } from "./TypedEventHandlers/TypedOnErrorEventHandler";
import {
  TypedAnimationEvent,
  TypedDragEvent,
  TypedEvent,
  TypedFocusEvent,
  TypedFormDataEvent,
  TypedMouseEvent,
  TypedKeyboardEvent,
  TypedPointerEvent,
  TypedProgressEvent,
  TypedSubmitEvent,
  TypedTouchEvent,
  TypedTransitionEvent,
  TypedWheelEvent,
  TypedUIEvent,
  TypedSecurityPolicyViolationEvent,
} from "./TypedEvents";
import { TypedInputEvent } from "./TypedEvents/TypedInputEvent";

export interface GlobalEvents<T extends Element> {
  /**
   * Fires when the user aborts the download.
   * @param ev The event.
   */
  onabort?: (ev: TypedUIEvent<T>) => any;
  onanimationcancel?: (ev: TypedAnimationEvent<T>) => any;
  onanimationend?: (ev: TypedAnimationEvent<T>) => any;
  onanimationiteration?: (ev: TypedAnimationEvent<T>) => any;
  onanimationstart?: (ev: TypedAnimationEvent<T>) => any;
  onauxclick?: (ev: TypedMouseEvent<T>) => any;
  onbeforeinput?: (ev: TypedInputEvent<T>) => any;
  /**
   * Fires when the object loses the input focus.
   * @param ev The focus event.
   */
  onblur?: (ev: TypedFocusEvent<T>) => any;
  oncancel?: (ev: TypedFocusEvent<T>) => any;
  /**
   * Occurs when playback is possible, but would require further buffering.
   * @param ev The event.
   */
  oncanplay?: (ev: TypedEvent<T>) => any;
  oncanplaythrough?: (ev: TypedEvent<T>) => any;
  /**
   * Fires when the contents of the object or selection have changed.
   * @param ev The event.
   */
  onchange?: (ev: TypedEvent<T>) => any;
  /**
   * Fires when the user clicks the left mouse button on the object
   * @param ev The mouse event.
   */
  onclick?: (ev: TypedMouseEvent<T>) => any;
  onclose?: (ev: TypedEvent<T>) => any;
  /**
   * Fires when the user clicks the right mouse button in the client area, opening the context menu.
   * @param ev The mouse event.
   */
  oncontextmenu?: (ev: TypedMouseEvent<T>) => any;
  oncuechange?: (ev: TypedEvent<T>) => any;
  /**
   * Fires when the user double-clicks the object.
   * @param ev The mouse event.
   */
  ondblclick?: (ev: TypedMouseEvent<T>) => any;
  /**
   * Fires on the source object continuously during a drag operation.
   * @param ev The event.
   */
  ondrag?: (ev: TypedDragEvent<T>) => any;
  /**
   * Fires on the source object when the user releases the mouse at the close of a drag operation.
   * @param ev The event.
   */
  ondragend?: (ev: TypedDragEvent<T>) => any;
  /**
   * Fires on the target element when the user drags the object to a valid drop target.
   * @param ev The drag event.
   */
  ondragenter?: (ev: TypedDragEvent<T>) => any;
  /**
   * Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.
   * @param ev The drag event.
   */
  ondragleave?: (ev: TypedDragEvent<T>) => any;
  /**
   * Fires on the target element continuously while the user drags the object over a valid drop target.
   * @param ev The event.
   */
  ondragover?: (ev: TypedDragEvent<T>) => any;
  /**
   * Fires on the source object when the user starts to drag a text selection or selected object.
   * @param ev The event.
   */
  ondragstart?: (ev: TypedDragEvent<T>) => any;
  ondrop?: (ev: TypedDragEvent<T>) => any;
  /**
   * Occurs when the duration attribute is updated.
   * @param ev The event.
   */
  ondurationchange?: (ev: TypedEvent<T>) => any;
  /**
   * Occurs when the media element is reset to its initial state.
   * @param ev The event.
   */
  onemptied?: (ev: TypedEvent<T>) => any;
  /**
   * Occurs when the end of playback is reached.
   * @param ev The event
   */
  onended?: (ev: TypedEvent<T>) => any;
  /**
   * Fires when an error occurs during object loading.
   * @param ev The event.
   */
  onerror?: TypedOnErrorEventHandler<T>;
  /**
   * Fires when the object receives focus.
   * @param ev The event.
   */
  onfocus?: (ev: TypedFocusEvent<T>) => any;
  onformdata?: (ev: TypedFormDataEvent<T>) => any;
  ongotpointercapture?: (ev: TypedPointerEvent<T>) => any;
  oninput?: (ev: TypedEvent<T>) => any;
  oninvalid?: (ev: TypedEvent<T>) => any;
  /**
   * Fires when the user presses a key.
   * @param ev The keyboard event
   */
  onkeydown?: (ev: TypedKeyboardEvent<T>) => any;
  /**
   * Fires when the user presses an alphanumeric key.
   * @param ev The event.
   * @deprecated
   */
  onkeypress?: (ev: TypedKeyboardEvent<T>) => any;
  /**
   * Fires when the user releases a key.
   * @param ev The keyboard event
   */
  onkeyup?: (ev: TypedKeyboardEvent<T>) => any;
  /**
   * Fires immediately after the browser loads the object.
   * @param ev The event.
   */
  onload?: (ev: TypedEvent<T>) => any;
  /**
   * Occurs when media data is loaded at the current playback position.
   * @param ev The event.
   */
  onloadeddata?: (ev: TypedEvent<T>) => any;
  /**
   * Occurs when the duration and dimensions of the media have been determined.
   * @param ev The event.
   */
  onloadedmetadata?: (ev: TypedEvent<T>) => any;
  /**
   * Occurs when Internet Explorer begins looking for media data.
   * @param ev The event.
   */
  onloadstart?: (ev: TypedEvent<T>) => any;
  onlostpointercapture?: (ev: TypedPointerEvent<T>) => any;
  /**
   * Fires when the user clicks the object with either mouse button.
   * @param ev The mouse event.
   */
  onmousedown?: (ev: TypedMouseEvent<T>) => any;
  onmouseenter?: (ev: TypedMouseEvent<T>) => any;
  onmouseleave?: (ev: TypedMouseEvent<T>) => any;
  /**
   * Fires when the user moves the mouse over the object.
   * @param ev The mouse event.
   */
  onmousemove?: (ev: TypedMouseEvent<T>) => any;
  /**
   * Fires when the user moves the mouse pointer outside the boundaries of the object.
   * @param ev The mouse event.
   */
  onmouseout?: (ev: TypedMouseEvent<T>) => any;
  /**
   * Fires when the user moves the mouse pointer into the object.
   * @param ev The mouse event.
   */
  onmouseover?: (ev: TypedMouseEvent<T>) => any;
  /**
   * Fires when the user releases a mouse button while the mouse is over the object.
   * @param ev The mouse event.
   */
  onmouseup?: (ev: TypedMouseEvent<T>) => any;
  /**
   * Occurs when playback is paused.
   * @param ev The event.
   */
  onpause?: (ev: TypedEvent<T>) => any;
  /**
   * Occurs when the play method is requested.
   * @param ev The event.
   */
  onplay?: (ev: TypedEvent<T>) => any;
  /**
   * Occurs when the audio or video has started playing.
   * @param ev The event.
   */
  onplaying?: (ev: TypedEvent<T>) => any;
  onpointercancel?: (ev: TypedPointerEvent<T>) => any;
  onpointerdown?: (ev: TypedPointerEvent<T>) => any;
  onpointerenter?: (ev: TypedPointerEvent<T>) => any;
  onpointerleave?: (ev: TypedPointerEvent<T>) => any;
  onpointermove?: (ev: TypedPointerEvent<T>) => any;
  onpointerout?: (ev: TypedPointerEvent<T>) => any;
  onpointerover?: (ev: TypedPointerEvent<T>) => any;
  onpointerup?: (ev: TypedPointerEvent<T>) => any;
  /**
   * Occurs to indicate progress while downloading media data.
   * @param ev The event.
   */
  onprogress?: (ev: TypedProgressEvent<T>) => any;
  /**
   * Occurs when the playback rate is increased or decreased.
   * @param ev The event.
   */
  onratechange?: (ev: TypedEvent<T>) => any;
  /**
   * Fires when the user resets a form.
   * @param ev The event.
   */
  onreset?: (ev: TypedEvent<T>) => any;
  onresize?: (ev: TypedUIEvent<T>) => any;
  /**
   * Fires when the user repositions the scroll box in the scroll bar on the object.
   * @param ev The event.
   */
  onscroll?: (ev: TypedEvent<T>) => any;
  onsecuritypolicyviolation?: (ev: TypedSecurityPolicyViolationEvent<T>) => any;
  /**
   * Occurs when the seek operation ends.
   * @param ev The event.
   */
  onseeked?: (ev: TypedEvent<T>) => any;
  /**
   * Occurs when the current playback position is moved.
   * @param ev The event.
   */
  onseeking?: (ev: TypedEvent<T>) => any;
  /**
   * Fires when the current selection changes.
   * @param ev The event.
   */
  onselect?: (ev: TypedEvent<T>) => any;
  onselectionchange?: (ev: TypedEvent<T>) => any;
  onselectstart?: (ev: TypedEvent<T>) => any;
  onslotchange?: (ev: TypedEvent<T>) => any;
  /**
   * Occurs when the download has stopped.
   * @param ev The event.
   */
  onstalled?: (ev: TypedEvent<T>) => any;
  onsubmit?: (ev: TypedSubmitEvent<T>) => any;
  /**
   * Occurs if the load operation has been intentionally halted.
   * @param ev The event.
   */
  onsuspend?: (ev: TypedEvent<T>) => any;
  /**
   * Occurs to indicate the current playback position.
   * @param ev The event.
   */
  ontimeupdate?: (ev: TypedEvent<T>) => any;
  ontoggle?: (ev: TypedEvent<T>) => any;
  ontouchcancel?: (ev: TypedTouchEvent<T>) => any;
  ontouchend?: (ev: TypedTouchEvent<T>) => any;
  ontouchmove?: (ev: TypedTouchEvent<T>) => any;
  ontouchstart?: (ev: TypedTouchEvent<T>) => any;
  ontransitioncancel?: (ev: TypedTransitionEvent<T>) => any;
  ontransitionend?: (ev: TypedTransitionEvent<T>) => any;
  ontransitionrun?: (ev: TypedTransitionEvent<T>) => any;
  ontransitionstart?: (ev: TypedTransitionEvent<T>) => any;
  /**
   * Occurs when the volume is changed, or playback is muted or unmuted.
   * @param ev The event.
   */
  onvolumechange?: (ev: TypedEvent<T>) => any;
  /**
   * Occurs when playback stops because the next frame of a video resource is not available.
   * @param ev The event.
   */
  onwaiting?: (ev: TypedEvent<T>) => any;
  onwebkitanimationend?: (ev: TypedEvent<T>) => any;
  onwebkitanimationiteration?: (ev: TypedEvent<T>) => any;
  onwebkitanimationstart?: (ev: TypedEvent<T>) => any;
  onwebkittransitionend?: (ev: TypedEvent<T>) => any;
  onwheel?: (ev: TypedWheelEvent<T>) => any;
}
