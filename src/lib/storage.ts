export const save = (k: string, v: any) => localStorage.setItem(k, JSON.stringify(v))
export const load = (k: string) => {
  const v = localStorage.getItem(k)
  if (!v) return null
  try { return JSON.parse(v) } catch { return null }
}
export const remove = (k: string) => localStorage.removeItem(k)
