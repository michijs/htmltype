import { a } from './a';
import { animate } from './animate';
import { animateMotion } from './animateMotion';
import { animateTransform } from './animateTransform';
import { circle } from './circle';
import { clipPath } from './clipPath';
import { defs } from './defs';
import { desc } from './desc';
import { ellipse } from './ellipse';
import { feBlend } from './feBlend';
import { feColorMatrix } from './feColorMatrix';
import { feComponentTransfer } from './feComponentTransfer';
import { feComposite } from './feComposite';
import { feConvolveMatrix } from './feConvolveMatrix';
import { feDiffuseLighting } from './feDiffuseLighting';
import { feDisplacementMap } from './feDisplacementMap';
import { feDistantLight } from './feDistantLight';
import { feFlood } from './feFlood';
import {
  feFuncA,
  feFuncB,
  feFuncG,
  feFuncR
} from './feFunc';
import { feGaussianBlur } from './feGaussianBlur';
import { feImage } from './feImage';
import { feMerge } from './feMerge';
import { feMergeNode } from './feMergeNode';
import { feMorphology } from './feMorphology';
import { feOffset } from './feOffset';
import { fePointLight } from './fePointLight';
import { feSpecularLighting } from './feSpecularLighting';
import { feSpotLight } from './feSpotLight';
import { feTile } from './feTile';
import { feTurbulence } from './feTurbulence';
import { filter } from './filter';
import { foreignObject } from './foreignObject';
import { g } from './g';
import { image } from './image';
import { line } from './line';
import { linearGradient } from './linearGradient';
import { marker } from './marker';
import { mask } from './mask';
import { metadata } from './metadata';
import { mpath } from './mpath';
import { path } from './path';
import { pattern } from './pattern';
import { polygon } from './polygon';
import { polyline } from './polyline';
import { radialGradient } from './radialGradient';
import { rect } from './rect';
import { script } from './script';
import { set } from './set';
import { stop } from './stop';
import { style } from './style';
import { svg } from './svg';
import { _switch } from './switch';
import { _symbol } from './symbol';
import { text } from './text';
import { textPath } from './textPath';
import { title } from './title';
import { tspan } from './tspan';
import { use } from './use';
import { view } from './view';


export interface SVGElements {
  a: a,
  animate: animate,
  animateMotion: animateMotion,
  animateTransform: animateTransform,
  circle: circle,
  clipPath: clipPath,
  defs: defs,
  desc: desc,
  ellipse: ellipse,
  feBlend: feBlend,
  feColorMatrix: feColorMatrix,
  feComponentTransfer: feComponentTransfer,
  feComposite: feComposite,
  feConvolveMatrix: feConvolveMatrix,
  feDiffuseLighting: feDiffuseLighting,
  feDisplacementMap: feDisplacementMap,
  feDistantLight: feDistantLight,
  feFlood: feFlood,
  feFuncA: feFuncA,
  feFuncB: feFuncB,
  feFuncG: feFuncG,
  feFuncR: feFuncR,
  feGaussianBlur: feGaussianBlur,
  feImage: feImage,
  feMerge: feMerge,
  feMergeNode: feMergeNode,
  feMorphology: feMorphology,
  feOffset: feOffset,
  fePointLight: fePointLight,
  feSpecularLighting: feSpecularLighting,
  feSpotLight: feSpotLight,
  feTile: feTile,
  feTurbulence: feTurbulence,
  filter: filter,
  foreignObject: foreignObject,
  g: g,
  image: image,
  line: line,
  linearGradient: linearGradient,
  marker: marker,
  mask: mask,
  metadata: metadata,
  mpath: mpath,
  path: path,
  pattern: pattern,
  polygon: polygon,
  polyline: polyline,
  radialGradient: radialGradient,
  rect: rect,
  script: script,
  set: set,
  stop: stop,
  style: style,
  svg: svg,
  switch: _switch,
  symbol: _symbol,
  text: text,
  textPath: textPath,
  title: title,
  tspan: tspan,
  use: use,
  view: view,
}