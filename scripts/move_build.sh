#!/bin/bash
sudo rm -rf /usr/share/nginx/html/*
sudo cp -r /tmp/portfolio/build/* /usr/share/nginx/html
