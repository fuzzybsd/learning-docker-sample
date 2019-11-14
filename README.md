
$ docker build -t learning-docker-sample:latest ./app 

$ docker images
learning-docker-sample                     latest              3af09382c9d6        2 minutes ago       66.9MB

$ docker run -itd -p 80:3000 3af09382c9d6

$ docker container ls
400c2da412c2        3af09382c9d6        "docker-entrypoint.s…"   About a minute ago   Up About a minute            0.0.0.0:80->3000/tcp   competent_margulis

