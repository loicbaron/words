import { getRelationship } from "./getRelationship";

describe('getRelationship', () => {
  it('should return typeOf', () => {
    expect(getRelationship('car', 'vehicle')).toEqual('typeOf')
  })
  it('should return oppositeOf', () => {
    expect(getRelationship('hot', 'cold')).toEqual('oppositeOf')
  })
  it('should return partOf', () => {
    expect(getRelationship('leaf', 'tree')).toEqual('partOf')
  })
})
