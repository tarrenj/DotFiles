#!/usr/bin/env bash

set -ex

# A dumb script to speed up setup of things

sudo apt install git vim zsh tmux nmap build-essential curl wget cmake python3-dev

# Flat/easy dot files
cp ~/builds/dotfiles/.tmux.conf ~/.tmux.conf

# Git config (with SSH signing key)
cp ~/builds/dotfiles/.gitconfig ~/.gitconfig
#SSH_PUB=$(/usr/bin/ssh-add -L)
#/usr/bin/sed -i '' "s/<PUB>/$(ssh-add -L)/g" ~/.gitconfig
echo "----WARNING!!: add public ssh key to ~/.gitconfig!!!"
echo ".gitconfig requires git >= 2.34. Current git version: " $(git --version)
echo ""
echo "Press any key to continue"
read

# Install vundle and vim plugins
git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
cp ~/builds/dotfiles/.vimrc ~/.vimrc
vim +PluginInstall +qall
cd ~/.vim/bundle/YouCompleteMe
python3 install.py #--go-completer
cp ~/builds/dotfiles/ycm_global_extra_conf.py ~/.vim/

# OMZ
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
cp ~/builds/dotfiles/custom.zsh-theme ~/.oh-my-zsh/themes/


# Brave
sudo curl -fsSLo /usr/share/keyrings/brave-browser-archive-keyring.gpg https://brave-browser-apt-release.s3.brave.com/brave-browser-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/brave-browser-archive-keyring.gpg arch=amd64] https://brave-browser-apt-release.s3.brave.com/ stable main"|sudo tee /etc/apt/sources.list.d/brave-browser-release.list
sudo apt update
sudo apt install -y brave-browser

