export function areSetsEqual(a: number[], b: number[]): boolean {
    if (a.length !== b.length) return false
    const setA = new Set(a)
    const setB = new Set(b)
    for (const val of setA) {
      if (!setB.has(val)) return false
    }
    return true
  }