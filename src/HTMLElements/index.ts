import { a } from './a';
import { area } from './area';
import { article } from './article';
import { aside } from './aside';
import { audio } from './audio';
import { base } from './base';
import { blockquote } from './blockquote';
import { body } from './body';
import { br } from './br';
import { button } from './button';
import { canvas } from './canvas';
import { col, colgroup } from './colAndColGroup';
import {
  address,
  abbr,
  b,
  bdi,
  bdo,
  cite,
  code,
  dfn,
  div,
  em,
  figure,
  i,
  kbd,
  mark,
  p,
  picture,
  pre,
  rp,
  rt,
  ruby,
  s,
  samp,
  small,
  span,
  strong,
  sub,
  sup,
  table,
  tfoot,
  thead,
  tr,
  u,
  wbr
} from './commonElementsWithAllRoles';
import {
  caption,
  datalist,
  dd,
  head,
  legend,
  main,
  nav,
  noscript,
  summary,
  tbody,
  template,
  title,
  _var
} from './commonElementsWithoutRoles';
import { data } from './data';
import { details } from './details';
import { dialog } from './dialog';
import { dl } from './dl';
import { dt } from './dt';
import { embed } from './embed';
import { fieldset } from './fieldset';
import { figcaption, footer, header } from './figcaptionAndFooterAndHeader';
import { form } from './form';
import {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6
} from './headingElement';
import { hr } from './hr';
import { html } from './html';
import { iframe } from './iframe';
import { img } from './img';
import { input } from './input';
import { label } from './label';
import { li } from './li';
import { link } from './link';
import { map } from './map';
import { menu } from './menu';
import { meta } from './meta';
import { meter } from './meter';
import {
  ins,
  del
} from './mod';
import { _object } from './object';
import { ol } from './ol';
import { optgroup } from './optgroup';
import { option } from './option';
import { output } from './output';
import { progress } from './progress';
import { q } from './q';
import { script } from './script';
import { section } from './section';
import { select } from './select';
import { slot } from './slot';
import { source } from './source';
import { style } from './style';
import { td } from './td';
import { textarea } from './textarea';
import { th } from './th';
import { time } from './time';
import { track } from './track';
import { ul } from './ul';
import { video } from './video';

export interface HTMLElements {
  a: a,
  area: area,
  article: article,
  aside: aside,
  audio: audio,
  base: base,
  blockquote: blockquote,
  body: body,
  br: br,
  button: button,
  canvas: canvas,
  col: col,
  colgroup: colgroup,
  address: address,
  abbr: abbr,
  b: b,
  bdi: bdi,
  bdo: bdo,
  cite: cite,
  code: code,
  dfn: dfn,
  div: div,
  em: em,
  figure: figure,
  i: i,
  kbd: kbd,
  mark: mark,
  p: p,
  picture: picture,
  pre: pre,
  rp: rp,
  rt: rt,
  ruby: ruby,
  s: s,
  samp: samp,
  small: small,
  span: span,
  strong: strong,
  sub: sub,
  sup: sup,
  table: table,
  tfoot: tfoot,
  thead: thead,
  tr: tr,
  u: u,
  wbr: wbr,
  caption: caption,
  datalist: datalist,
  dd: dd,
  head: head,
  legend: legend,
  main: main,
  nav: nav,
  noscript: noscript,
  summary: summary,
  tbody: tbody,
  template: template,
  title: title,
  data: data,
  details: details,
  dialog: dialog,
  dl: dl,
  dt: dt,
  embed: embed,
  fieldset: fieldset,
  figcaption: figcaption,
  footer: footer,
  header: header,
  form: form,
  h1: h1,
  h2: h2,
  h3: h3,
  h4: h4,
  h5: h5,
  h6: h6,
  hr: hr,
  html: html,
  iframe: iframe,
  img: img,
  input: input,
  label: label,
  li: li,
  link: link,
  map: map,
  menu: menu,
  meta: meta,
  meter: meter,
  ins: ins,
  del: del,
  object: object,
  ol: ol,
  optgroup: optgroup,
  option: option,
  output: output,
  progress: progress,
  q: q,
  script: script,
  section: section,
  select: select,
  slot: slot,
  source: source,
  style: style,
  td: td,
  textarea: textarea,
  th: th,
  time: time,
  track: track,
  ul: ul,
  video: video,
  var: _var,
}