export function getcurrentMonth(){
    let now = new Date()
    return `${now.getFullYear()}-${now.getMonth()}`
}