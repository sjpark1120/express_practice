# Express Practice

Express.js 백엔드 학습 프로젝트

## 프로젝트 구조

```
express_practice/
├── index.js                  # 앱 진입점, 서버 설정
├── db.js                     # SQLite 데이터베이스 연결 설정
│
├── routes/
│   └── posts.js              # URL 라우팅 정의 (/posts)
│
├── controllers/
│   └── posts.controller.js   # 요청/응답 처리, 파라미터 파싱
│
├── services/
│   └── posts.service.js      # 비즈니스 로직, 유효성 검사
│
├── repositories/
│   └── posts.repository.js   # 데이터베이스 접근, CRUD 처리
│
├── sql/
│   └── posts.sql.js          # SQL 쿼리문 모음
│
├── middlewares/
│   └── error.middleware.js   # 에러 핸들링 미들웨어
│
└── db/
    └── init.js               # 데이터베이스 테이블 초기화 스크립트
```

## 레이어 구조

```
Request → Route → Controller → Service → Repository → Database
                                                ↓
Response ← Route ← Controller ← Service ← Repository ← Database
```

| 레이어     | 역할                                     |
| ---------- | ---------------------------------------- |
| Route      | URL과 HTTP 메서드에 따라 Controller 연결 |
| Controller | 요청 파라미터 추출, 응답 형식 처리       |
| Service    | 비즈니스 로직, 입력값 검증               |
| Repository | 데이터베이스 쿼리 실행                   |

## 실행 방법

```bash
# 의존성 설치
npm install

# 서버 실행
npm start
```

http://localhost:3000 에서 확인

## API 명세

| Method | Endpoint   | 설명             |
| ------ | ---------- | ---------------- |
| GET    | /posts     | 전체 게시글 조회 |
| GET    | /posts/:id | 특정 게시글 조회 |
| POST   | /posts     | 게시글 생성      |
| PUT    | /posts/:id | 게시글 수정      |
| DELETE | /posts/:id | 게시글 삭제      |

## 기술 스택

- Node.js
- Express.js
- SQLite3
