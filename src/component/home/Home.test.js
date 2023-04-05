import { render, screen } from '@testing-library/react';
import sum from '../sum';

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  });

test("adding postive number is not zero",()=>{
    for(var a=1; a>10; a++){
        for(var b=1; b>10; b++){
            expect(a+b).not.toBe(0)
        }
    }
}) 

test("value is grater than",()=>{
    const value = 2 + 2;
    console.log(value)
    expect(value).toBeGreaterThan(2);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5)
    expect(value).toBeLessThanOrEqual(4);
    expect(value).toBe(4)
    expect(value).toEqual(4)
});

test("adding floting number",()=>{
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.3)
});

// string matcher
test("there is no I in team",()=>{
    expect('team').not.toMatch(/I/); 
})

test("check stop exits in string",()=>{
    expect('Christoph').toMatch(/stop/)
})


// array and itrable
const shoppingList = [
    "milk",
    "bags",
    "glass"
]
test("array test",()=>{
    expect(shoppingList).toContain("milk");
})
