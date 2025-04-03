type RelationshipType = 'typeOf' | 'partOf' | 'oppositeOf';
interface WordRelationship {
  word1: string;
  word2: string;
  relation: RelationshipType;
}
const relationships: WordRelationship[] = [
  { word1: 'car', word2: 'vehicle', relation: 'typeOf' },
  { word1: 'leaf', word2: 'tree', relation: 'partOf' },
  { word1: 'hot', word2: 'cold', relation: 'oppositeOf' },
  { word1: 'cold', word2: 'hot', relation: 'oppositeOf' }, // for symmetry
];

export const getRelationship = (wordA: string, wordB: string): RelationshipType | null => {
  const result = relationships.find(
    (rel) => rel.word1.toLowerCase() === wordA.toLowerCase() &&
      rel.word2.toLowerCase() === wordB.toLowerCase()
  );
  return result?.relation || null;
};
