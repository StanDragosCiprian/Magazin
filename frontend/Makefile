IMAGE_NAME = frontend
DESTINATION = .
.PHONY: init run

init:
	docker build -t frontend .
	docker create --name frontend frontend .
	docker cp frontend:/app/frontend/. .
	docker rm frontend

run:
	docker run -it --rm -p 3001:3001 -v ".:/app/frontend" -v "/app/frontend/node_modules" frontend npm run start
