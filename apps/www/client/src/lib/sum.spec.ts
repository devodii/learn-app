import { sum } from "./sum";

describe('Sum function test', () => { 
    it('should sum numbers correcly', () => {
        expect(sum(1, 2)).not.toBe(4)
    })
 })