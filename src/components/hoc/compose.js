export const compose = (...funcs) => (component) => {
    return funcs.reduceRight((acc, fn)=> fn(acc), component)
}