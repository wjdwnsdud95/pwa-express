import express from 'express';

const usersRouter = express.Router();

usersRouter.get('/', (request, response, next) => {
  response.status(200).send('전체 유저 정보 조회 완료');
});

// 유저 정보 조회
usersRouter.get('/:id', (request, response, next) => {
  response.status(200).send('유저 정보 조회 완료');
});

// 유저 정보 수정
usersRouter.put('/:id', (request, response, next) => {
  response.status(200).send('유저 정보 수정 완료');
});

export default usersRouter;