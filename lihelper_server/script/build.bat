d:
cd D:\server\apache-tomcat-6.0.35\bin
call shutdown.bat

cd D:\server\apache-tomcat-6.0.35\webapps
rd lihelper /s /q
del lihelper.war

cd D:\work\other_thing\lihelper\lihelper_code\lihelper_server
call mvn package install -Dmaven.test.skip=true
ping 127.0.0.1 -n 50>nul
call copy D:\work\other_thing\lihelper\lihelper_code\lihelper_server\target\lihelper.war D:\server\apache-tomcat-6.0.35\webapps
cd D:\server\apache-tomcat-6.0.35\bin
startup.bat

