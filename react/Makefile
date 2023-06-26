IMAGE_NAME = frontend
DESTINATION = .
.PHONY: init run

init:
	docker build -t $(IMAGE_NAME) .
	docker create --name $(IMAGE_NAME) $(IMAGE_NAME)
	docker cp $(IMAGE_NAME):/app/frontend/. $(DESTINATION)
	docker rm $(IMAGE_NAME)

run:
	docker run -it --rm -p 3001:3001 -v "$(DESTINATION):/app/frontend" -v "/app/frontend/node_modules" $(IMAGE_NAME) npm run start
