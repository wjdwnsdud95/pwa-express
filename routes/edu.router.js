import express from 'express';
import db from '../app/models/index.js';
import { Op } from 'sequelize';
import dayjs from 'dayjs';
const { sequelize, Employee } = db;

const eduRouter = express.Router();

eduRouter.get('/api/edu', async (request, response, next) => {
  try {
    
    let result = null;
    
    // // 평문으로 실행하고 싶을 경우
    // const fireDate = request.query.date;
    // const sql = `SELECT * FROM employees WHERE fire_at >= ? `;

    // result = await sequelize.query(
    //   sql,
    //   {
    //     replacements: [fireDate],
        // type: sequelize.QueryTypes.SELECT
    //   }
    // );

    // ------------------------------------
    // Model 메소드
    // ------------------------------------
    // findAll(): 전체 조회(조건 설정 가능)(배열 형식으로 가져옴)
    // SELECT emp_id, name, birth FROM employees WHERE emp_id BETWEEN 50 AND 100;
    // result = await Employee.findAll({
    //   attributes: ['empId', 'name', 'birth'], // 조회할 컬럼 지정(SELECT 절)
    //   where: {
    //     empId: {
    //       [Op.between]: [50, 100]
    //     }
    //   }
    // });

    // ------------------------------------
    // findOne(): 조건에 맞는 첫번째 레코드 조회(오브젝트 형식으로 가져옴)
    // result = await Employee.findOne({
    //   attributes: ['empId', 'name', 'birth'], // 조회할 컬럼 지정(SELECT 절)
    //   where: {
    //     empId: {
    //       [Op.between]: [50, 100]
    //     }
    //   }
    // });

    // ------------------------------------
    // findByPK(id, options): PK 기준 단일 레코드 조회
    // SELECT * FROM employees WHERE emp_id = 50000
    // result = await Employee.findByPk(50000, {
    //   attributes: ['empId', 'name'],
    // });

    // ------------------------------------
    // count(options), sum(field, options), max(field, options), min(field, options), avg(field, options)
    // SELECT COUNT(*) FROM employees WHERE deleted_at IS NULL;
    // result = await Employee.count({
    //   paranoid: false,
    // });
    // result = await Employee.max('empId');

    // ------------------------------------
    // create(values, options): 새 래코드 생성
    // result = await Employee.create({
    //   name: '테스트',
    //   birth: '2000-01-01',
    //   hireAt: dayjs().format('YYYY-MM-DD'),
    //   gender: 'F',
    // });
    
    // ------------------------------------
    // update(values, options): 기존 레코드 수정(영향받은 레코드 수 반환)
    // UPDATE employees SET name = "준영" WHERE emp_id = 100009;
    //   result = await Employee.update(
    //     {
    //       name: '준영'
    //     }
    //     ,{
    //       where: {
    //         empId: {
    //           [Op.gte]: 100000
    //         }
    //       }
    //     }
    // );

    // ------------------------------------
    // save(): 모델 인스턴스를 기반으로 레코드 생성 및 수정
    // 레코드 수정
    // const employee = await Employee.findByPk(100000);
    // employee.name = '정준영';
    // employee.birth = '1995-05-17';
    // result = await employee.save();

    // 레코드 생성
    // const employee = await Employee.build(); // 빈 모델 객체 인스턴스
    // employee.name = '또치';
    // employee.birth = '1980-01-01';
    // employee.gender = 'F';
    // employee.hireAt = dayjs().format('YYYY-MM-DD');
    // result = await employee.save();

    // ------------------------------------
    // destroy(options): 조건에 맞는 레코드 삭제
    // result = await Employee.destroy({
    //   where: {
    //     empId: 100000
    //   }
    //   // ,force: true // 모델이 `paranoid: true`일 경우에도 물리적 삭제를 위한 옵션
    // });

    // ------------------------------------
    // restore(options): Soft Delete 된 레코드를 복원
    // result = await Employee.restore({
    //   where: {
    //     empId: 100000
    //   }
    // });

    // ------------------------------------
    // 이름이 '강가람'이고, 성별이 여자인 사원 정보 조회(AND로 연결)
    // result = await Employee.findAll({
    //   attributes: ['empId', 'name', 'gender'],
    //   where: {
    //     name: '강가람',
    //     gender: 'F',
    //   }
    // });

    // 이름이 '강가람' 또는 '신서연'인 사원 조회(OR로 연결)
    // result = await Employee.findAll({
    //   attributes: ['empId', 'name', 'gender'],
    //   where: {
    //     [Op.or]: [
    //       { name: '강가람' },
    //       { name: '신서연' }
    //     ],
    //   }
    // });

    // 성별이 여자이고, 이름이 '강가람' 또는 '신서연'
    // result = await Employee.findAll({
    //   attributes: ['empId', 'name', 'gender'],
    //   where: {
    //     gender: 'F',
    //     [Op.or]: [
    //       { name: '강가람' },
    //       { name: '신서연' },
    //     ]
    //   }
    // });

    // ------------------------------------
    // between, in, like, is null, is not null
    // result = await Employee.findAll({
    //   where: {
    //     // empId: {
    //     //   // [Op.between]: [1, 100]
    //     //   // [Op.notBetween]: [1, 100]
    //     //   [Op.in]: [1, 2, 3]
    //     //   // [Op.notIn]: [1, 2, 3]
    //     // },
    //     name: {
    //       [Op.like]: '%가람'
    //       // [Op.iLike]: '%가람' // 대소문자 무시
    //     },
    //     fireAt: {
    //       // null 조건
    //       [Op.is]: null
    //       // [Op.not]: null
    //     }
    //   }
    // });

    // ------------------------------------
    // oderby, limit, offset
    // result = await Employee.findAll({
    //   where: {
    //     empId: {
    //       [Op.gte]: 10000
    //     }
    //   },
    //   order: [
    //     ['name', 'ASC'],
    //     ['birth', 'DESC'],
    //   ],
    //   limit: 10,
    //   offset: 10,
    // });

    // ------------------------------------
    // groupby, having
    result = await Employee.findAll({
      attributes: [
        'gender',
        [sequelize.fn('COUNT', sequelize.col('*')), 'cnt_gender']
      ],
      group: ['gender'],
      having: sequelize.literal('cnt_gender >= 40000'),
    });


    return response.status(200).send({
      msg: '정상 처리',
      data: result,
    });
  }
  catch(error) {
    next(error);
  }
});

export default eduRouter;