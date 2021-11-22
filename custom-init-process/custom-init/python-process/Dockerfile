FROM ubuntu:20.04

RUN apt-get update
RUN apt-get install -y python
COPY mypy.py /srv/

CMD ["python", "/srv/mypy.py"]

