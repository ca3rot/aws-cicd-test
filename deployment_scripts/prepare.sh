#!/usr/bin/env bash

# I want to make sure that the directory is clean and has nothing left over from
# previous deployments. The servers auto scale so the directory may or may not
# exist.
rm -rf /home/ec2-user/aws-cicd-test/app.js
rm -rf /home/ec2-user/aws-cicd-test/routes/*
rm -rf /home/ec2-user/aws-cicd-test/package.json
