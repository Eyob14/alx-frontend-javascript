export default function cleanSet(set, startString) {
  const array = [...set];
  const ans = [];
  array.forEach((value) => {
    if (typeof startString === 'string' && startString !== '' && value.startsWith(startString)
    ) {
      const res = value.slice(startString.length);
      ans.push(res);
    }
  });
  return ans.join('-');
}
