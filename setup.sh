poetry install
poetry run ./manage.py migrate
poetry run ./manage.py shell -c "from django.contrib.auth.models import User; User.objects.create_superuser('admin', 'admin@example.com', 'admin')"
cd js
yarn