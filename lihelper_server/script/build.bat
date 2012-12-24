@echo off
cd "d:\work\java\lihelper"
mvn package install && copy D:\work\java\lihelper\target\lihelper.war D:\server\apache-tomcat-7.0.34\webapps
