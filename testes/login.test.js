const request = require("supertest");
const { expect } = require("chai");
const postLogin = require('../fixtures/postLogin.json')
require('dotenv').config()

describe('Teste de Login', () => {
  describe('POST /login', () => {
    it('Deve retornar 200 com o token em string quando usar credenciais válidas', async () => {
      const bodyLogin = { ...postLogin}
      
      const resposta = await request(process.env.BASE_URL)
        .post('/login')
        .set('Content-Type', 'application/json')
        .send(bodyLogin);

      expect(resposta.status).to.be.equal(200);
      expect(resposta.body.token).to.be.a("string");
    });
  });
});
