FROM ubuntu:20.04
# Make sure you don't get hung up on Ubuntu questions during install
ARG DEBIAN_FRONTEND=noninteractive

#ENTRYPOINT ["bash","entrypoint.prod.sh"]

RUN apt-get update
RUN apt-get install -y python
RUN apt-get install -y golang

COPY python-process/sleep.py /srv/
COPY init-proc /srv/


# Run the init-proc as PID 1 with the actual process we want to 
# run as an argument to it
CMD ["/srv/init-proc", "/srv/sleep.py", "1"]

#CMD ["python", "/srv/sleep.py"]
