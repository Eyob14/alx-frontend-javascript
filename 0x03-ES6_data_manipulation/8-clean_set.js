export default function cleanSet(set, startString) {
  const array = [...set];
  const ans = [];
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }
  array.forEach((value) => {
    if (value.startsWith(startString)
    ) {
      const res = value.slice(startString.length);
      ans.push(res);
    }
  });
  return ans.join('-');
}
