.PHONY: build
build:
	docker compose build web

.PHONY: up
up:
	docker compose up -d

.PHONY: start
start:
	docker compose up

.PHONY: stop
stop:
	docker compose stop

.PHONY: restart
restart:
	docker compose restart web

.PHONY: down
down:
	docker compose down

.PHONY: logs
logs:
	docker compose logs -f web

.PHONY: shell
shell:
	docker compose exec web sh

.PHONY: clean
clean: down
	docker compose rm -fsv
	docker volume prune -f

.PHONY: verify
verify:
	@echo "Verifying container health..."
	@while [ $$(docker inspect --format '{{json .State.Health.Status}}' nxt02) != '"healthy"' ]; do \
		echo "Waiting for health check..."; \
		sleep 10; \
	done; \
	echo "Container is healthy!"
