# Docker_build_image_Send_to_ECR
# Create the index.js file & Dockerfile 
# AWS ECR create the repository ( private or public as per requirement)

Retrieve an authentication token and authenticate your Docker client to your registry.
Use the AWS CLI:

# aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws/a8t9z7e7
Note: If you receive an error using the AWS CLI, make sure that you have the latest version of the AWS CLI and Docker installed.
Build your Docker image using the following command. For information on building a Docker file from scratch see the instructions here . You can skip this step if your image is already built:

# docker build -t exposeapp-webapp .
After the build completes, tag your image so you can push the image to this repository:

# docker tag exposeapp-webapp:latest public.ecr.aws/a8t9z7e7/exposeapp-webapp:latest
Run the following command to push this image to your newly created AWS repository:

# docker push public.ecr.aws/a8t9z7e7/exposeapp-webapp:latest

NOte: If awscli package not installed on docker machaine, then need to install awscli package 
# sudo apt  install awscli
Then configure the aws configure 
# aws configure 
provide the access key and secret key and zone 
( create one IAM user account and take the access key and secert key )

#Thank you 
