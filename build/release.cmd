@echo off

if exist deploy (
	rmdir deploy /S /Q
)

mkdir deploy\src

%JAVA_HOME%\bin\java -Dfile.encoding=UTF-8 -jar "../../argos-sdk/tools/JSBuilder/JSBuilder2.jar" -v -p "build/release.jsb2" -d "."
if %errorlevel% neq 0 exit /b %errorlevel% 