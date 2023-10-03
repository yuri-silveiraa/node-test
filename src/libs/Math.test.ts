import { Math } from './Math'

it('should sum two numbers correctly', () => {
    const response = Math.sum(5,10)
    expect(response).toBe(15) 
})

it('should subtract two numbers correctly', () => {
    const response = Math.sub(4,2)
    expect(response).toBe(2) 
})

it('should multiply two numbers correctly', () => {
    const response = Math.mut(4,2)
    expect(response).toBe(8) 
})

it('should divide two numbers correctly', () => {
    const response = Math.div(4,2)
    expect(response).toBe(2)
    
    const response2 = Math.div(4,0)
    expect(response2).toBe(false)
})
