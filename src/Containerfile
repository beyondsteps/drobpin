# 베이스 이미지 설정
FROM registry.access.redhat.com/ubi8/nodejs-16:latest

# 작업 디렉토리 설정
WORKDIR /opt/app-root/src

# 소스 코드 복사
COPY . .

# 종속성 설치
RUN npm install

# 빌드
RUN npm run build

# 포트 설정
EXPOSE 3000

# 애플리케이션 실행
CMD ["npm", "start"]
