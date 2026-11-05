const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config()
const { obterToken } = require('../helpers/autenticacao.js')
const postTransferencias = require('../fixtures/postTranferencias.json')

describe('Tranferências', () => {
  describe('POST /transferencias', () => {
    // Capturar o token para realizar autenticação utilizando beforeEach para ser feito em todos os casos de teste
    let token
    
    beforeEach(async () => {
      token = await obterToken('julio.lima', '123456')
    })
    
    it('Deve retornar sucesso com 201 quando o valor da transferência for igual ou acima de R$10,00', async () => {
      const bodyTransferencias = { ...postTransferencias}

      const resposta = await request(process.env.BASE_URL)
        .post('/transferencias')
        .set('Content-type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send(bodyTransferencias);
      expect(resposta.status).to.be.equal(201);
      console.log(resposta.body);
    });

    it('Deve retornar falha com o código 422 quando o valor da transfência for abaixo do valor de R$10,00', async () => {
      const bodyTransferencias = { ...postTransferencias}
      bodyTransferencias.valor = 7

      const resposta = await request(process.env.BASE_URL)
        .post('/transferencias')
        .set('Content-type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send(bodyTransferencias);
      expect(resposta.status).to.be.equal(422);
    });
  });
});
