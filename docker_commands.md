1. To Check the docker images
>> docker images
2. to check the running container 
>> docker container ls
3. to stop an container
>> docker container stop <<container id>>
===========
Spring App(make sure you did mvn clean,package,test(if you have))
1. create a Dockerfile
2. run the bellow command
>> docker build -t <name_of_the_image:tag(dockerUsername/imagename:1.0) .
>> docker container run -d -p 8080:8080 <name of the image with tag name>
Docker File for Spring Boot
FROM openjdk:8-jdk-alpine
EXPOSE 8080
ADD target/*.jar app.jar
ENTRYPOINT ["sh", "-c", "java -jar /app.jar"]

Docker Image Of Angular App
=============================
1.ng build --prod
2. create file nginx.conf
3. creat Dockerfile
-------------
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/<application name> /usr/share/nginx/html
------------------
4.docker build -t <name of your app> .
5.docker run --name <name of your application> -d -p 8080:80 <name of your angular app>
  
  ========================
  to push it to hub.docker.com
  1. docker login
  2. docker push <image_name:tag>
  
  do remember the image name must be starting with your dockerhub user name
  if the user name is johnd then the image name should be starting with johnd/<>:tag


