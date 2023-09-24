#!/user/bin/env bash
#set -ex

# Another dumb script to install docker, docker-compose, and lazydocker

# Docker
/usr/bin/curl -fsSL https://get.docker.com | /usr/bin/bash
# Docker group
/usr/bin/sudo /usr/sbin/groupadd docker
/usr/bin/sudo /usr/sbin/usermod -aG docker $USER
# docker-compose
# # Install process should be updated to use docker plugin thing
/usr/bin/sudo /usr/bin/curl -SL https://github.com/docker/compose/releases/download/v2.22.0/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose
/usr/bin/sudo /usr/bin/chmod +x /usr/local/bin/docker-compose
/usr/bin/sudo /usr/bin/ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

# lazydocker
/usr/bin/curl https://raw.githubusercontent.com/jesseduffield/lazydocker/master/scripts/install_update_linux.sh | /usr/bin/bash

