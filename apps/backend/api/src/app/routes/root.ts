import { FastifyInstance, FastifyRequest } from 'fastify';
import { getRelationship } from '../services/getRelationship';

interface IPostUser {
  word1: string,
  word2: string
}

export default async function (fastify: FastifyInstance) {
  fastify.get('/', async function () {
    return { message: 'Hello API' };
  });

  fastify.post('/', async function (req: FastifyRequest<{ Body: IPostUser }>, reply) {
    console.log('request', req.body)
    const { word1, word2 }: IPostUser = req.body
    return { relationship: getRelationship(word1, word2) };
  });
}
