export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) return [];
  const ans = [];
  for (const obj of arr) {
    ans.push(obj.id);
  }
  return ans;
}
