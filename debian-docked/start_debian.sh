#!/bin/bash

# Define the Docker image name
image_name="debian-dock"
dockerfile_path="."

# Define the container name
container_name="mydebian"


# Function to check if Docker image exists
function docker_image_exists {
	sudo docker images -q $image_name > /dev/null 2>&1
	return $?
}

# Check if the Docker image exists
if ! docker_image_exists; then
	echo "Docker image $image_name not found. Building the image..."
	# sudo docker build -t $image_name $dockerfile_path
	sudo docker build -t $image_name $docker_file_path
fi

# Check if the container is already running
if [ "$(sudo docker ps -q -f name=$container_name)" ]; then
	echo "Container $container_name is already running. Attaching to it..."
	#sudo docker exec -it $container_name /bin/zsh
	sudo docker attach  $container_name 
else
	# Check if the container exists but is not running
	if [ "$(sudo docker ps -a -q -f name=$container_name)" ]; then
		echo "Starting existing container $container_name..."
		sudo docker start $container_name
		echo "Attaching to the started container..."
		#sudo docker exec -it $container_name /bin/zsh
		sudo docker attach  $container_name 
	else
		# Prompt for volume path input with a default value
		read -p "Enter the volume path to map (default is 'workspaces'): " volume_path
		volume_path=${volume_path:-workspaces}
		# Run a new Docker container with the specified volume mapping and custom name
		echo "Running new Docker container with name $container_name..."
		sudo docker run -it --name $container_name -v "/${volume_path}:/home/ronald-debian/workspace" "${image_name}" /bin/zsh
	fi
fi
