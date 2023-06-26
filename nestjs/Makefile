IMAGE_NAME = backend
DESTINATION = .
.PHONY: init run

init:
	docker build -t $(IMAGE_NAME) .
	docker create --name $(IMAGE_NAME) $(IMAGE_NAME)
	docker cp $(IMAGE_NAME):/app/. $(DESTINATION)
	docker rm $(IMAGE_NAME)

run:
	docker run -it --rm -p 3000:3000 -v "$(DESTINATION):/app" -v "/app/node_modules" $(IMAGE_NAME) npm run start:dev
