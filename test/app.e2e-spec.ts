import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/games/getAll', () => {
    return request(app.getHttpServer())
      .get('/games/getAll')
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('results');
        expect(res.body.results.length).toBeGreaterThan(10);
        expect(res.body.next.length).toBeGreaterThan(0);
      });
  });

  it('/games/getBySlug', () => {
    return request(app.getHttpServer())
      .get('/games/getBySlug?slug=grand-theft-auto-v')
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('results');
        expect(res.body.results.length).toEqual(1);
        expect(res.body.next.length).toBeGreaterThan(0);
        expect(res.body.results[0].name).toStrictEqual('Grand Theft Auto V');
      });
  });

  it('/games/getBySlug', () => {
    return request(app.getHttpServer())
      .get('/games/getBySlug?slug=nonsensenonsense')
      .expect(400);
  });

    it('/games/getBySlug', () => {
        return request(app.getHttpServer())
            .get('/games/getBySlug?slu')
            .expect(400);
    });
});
