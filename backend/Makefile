IMAGE_NAME = backend
DESTINATION = .
.PHONY: init run

init:
	docker build -t backend .
	docker create --name backend backend
	docker cp backend:/app/. .
	docker rm backend

run:
	docker run -it --rm -p 3000:3000 -v ".:/app" -v "/app/node_modules" backend npm run start:dev
