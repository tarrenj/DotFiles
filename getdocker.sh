#!/usr/bin/env bash

# A bad script to get docker, docker-compose, and the docker-compose autocompleation for me.
# This is only to speed up some builds I'm currently doing, if anyone finds this I recommend you look up the official documentation
#  and do it that way, this may be years out of date....

# Make sure I'm being run with sudo
if [ "$EUID" -ne 0 ]; then
    echo "sudo !! you dolt!"
    exit 1
fi

# Get rid of any trash
apt-get remove docker docker-engine docker.io

# Because it said to.
apt-get update

# Install some deps
apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common

# Get the signing key
curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -


# Add the repo
apt-add-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"

# Install docker-ce!
apt-get update
apt-get install -y docker-ce

# Docker group stuff
groupadd docker
usermod -aG docker $USER


# Docker-compose!!

# Get it
curl -L "https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

# Make it executable
chmod +x /usr/local/bin/docker-compose

# Get the autocompleation stuff
curl -L https://raw.githubusercontent.com/docker/compose/1.23.2/contrib/completion/bash/docker-compose -o /etc/bash_completion.d/docker-compose



echo "Now test docker-compose with docker-compose --version"
echo "--------------"
echo "If on ZSH, get zsh autocompleation here: https://docs.docker.com/compose/completion/"
