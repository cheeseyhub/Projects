#!/bin/bash

#change to directory
cd   ../$1
#New Folder Name
mkdir  $2;
#Entering the folder
cd $2;
#Basic Files html css and js
cp ../../scripts/Basic_for_web_development/* .
