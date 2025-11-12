import express from 'express';
// import pool from '../db/my-db.js';
import { eduUsersTest } from '../app/middlewares/edu/edu.middleware.js';
import db from '../app/models/index.js';
const { sequelize, Employee } = db;

const usersRouter = express.Router();

usersRouter.get('/', eduUsersTest, (request, response, next) => {
  response.status(200).send('전체 유저 정보 조회 완료');
});

// 유저 정보 조회
usersRouter.get('/:id', async (request, response, next) => {
  try {
    const id = parseInt(request.params.id);
    // ------------ 
    // Sequelize로 DB 연동
    // ------------ 

    const result = await Employee.findByPk(id);
    return response.status(200).send(result);

    // ------------ 
    // mysql2로 DB 연동
    // ------------ 
    // 쿼리 작성
    // Prepared Statment
    // const sql = `
    //   SELECT *
    //   FROM employees
    //   WHERE
    //     emp_id = ?
    // `;
    // const [result] = await pool.execute(sql, [id]);

    // return response.status(200).send(result);
  }
  catch(error) {
    next(error);
  }
});

// 유저 정보 수정
usersRouter.put('/:id', (request, response, next) => {
  response.status(200).send('유저 정보 수정 완료');
});

export default usersRouter;