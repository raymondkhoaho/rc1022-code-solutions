/* exported truncate */
/* result = string cut at length + ellipses
input: index length to cut string and string
slice string at input length and concatenate ...
return string */

function truncate(length, string) {
  return string.slice(0, length) + '...';
}
