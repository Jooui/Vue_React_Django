# Vue_React_Django

First start after cloning the repository.

We run `docker-compose up` (version 1.27) and wait for the containers to start.

Once we start we enter the django container and carry out the migrations
`python3 manage.py migrate`

We create a superuser
`python3 manage.py createsuperuser`

Co-authored-by: Vicente Andani <andanivicente@gmail.com>
Co-authored-by: Joel Revert <jrevertvila@gmail.com>
