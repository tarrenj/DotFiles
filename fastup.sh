#!/usr/bin/env bash
#set -ex

# A dumb script to speed up setup of things

/usr/bin/sudo /usr/bin/apt -y install git vim zsh tmux nmap build-essential curl wget cmake sshuttle python3 python3-dev python3-pip alacritty shred tcpdump ngrep

# Flat/easy dot files
cp ~/builds/dotfiles/.tmux.conf ~/.tmux.conf
cp ~/builds/dotfiles/.alacritty.conf ~/.alacritty.conf

# Git config (with SSH signing key)
cp ~/builds/dotfiles/.gitconfig ~/.gitconfig
#SSH_PUB=$(/usr/bin/ssh-add -L)
#/usr/bin/sed -i '' "s/<PUB>/$(ssh-add -L)/g" ~/.gitconfig
echo ""
echo ""
echo "----WARNING!!: add public ssh key to ~/.gitconfig!!!"
echo "Press any key to continue"
read

# Install vundle and vim plugins
/usr/bin/git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
cp ~/builds/dotfiles/.vimrc ~/.vimrc
/usr/bin/vim +PluginInstall +qall
cp ~/builds/dotfiles/ycm_global_extra_conf.py ~/.vim/ycm_global_extra_conf.py
cd ~/.vim/bundle/YouCompleteMe
/usr/bin/python3 install.py #--go-completer

# OMZ
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
cp ~/builds/dotfiles/custom.zsh-theme ~/.oh-my-zsh/themes/
cp ~/builds/dotfiles/.zshrc ~/.zshrc
echo ""
echo ""
echo "----WARNING!!: verify username in ~/.zshrc (line 11)!!!"
echo "Press any key to continue"
read

# Setup custom repos
## Brave
/usr/bin/sudo /usr/bin/curl -fsSLo /usr/share/keyrings/brave-browser-archive-keyring.gpg https://brave-browser-apt-release.s3.brave.com/brave-browser-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/brave-browser-archive-keyring.gpg arch=amd64] https://brave-browser-apt-release.s3.brave.com/ stable main"|sudo tee /etc/apt/sources.list.d/brave-browser-release.list

## 1Password
curl -sS https://downloads.1password.com/linux/keys/1password.asc | sudo gpg --dearmor --output /usr/share/keyrings/1password-archive-keyring.gpg
echo 'deb [arch=amd64 signed-by=/usr/share/keyrings/1password-archive-keyring.gpg] https://downloads.1password.com/linux/debian/amd64 stable main' | sudo tee /etc/apt/sources.list.d/1password.list
/usr/bin/sudo /usr/bin/mkdir -p /etc/debsig/policies/AC2D62742012EA22/
/usr/bin/curl -sS https://downloads.1password.com/linux/debian/debsig/1password.pol | sudo tee /etc/debsig/policies/AC2D62742012EA22/1password.pol
/usr/bin/sudo /usr/bin/mkdir -p /usr/share/debsig/keyrings/AC2D62742012EA22
/usr/bin/curl -sS https://downloads.1password.com/linux/keys/1password.asc | sudo gpg --dearmor --output /usr/share/debsig/keyrings/AC2D62742012EA22/debsig.gpg

## Sublime
wget -qO - https://download.sublimetext.com/sublimehq-pub.gpg | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/sublimehq-archive.gpg > /dev/null
echo "deb https://download.sublimetext.com/ apt/stable/" | sudo tee /etc/apt/sources.list.d/sublime-text.list

# Install packages
/usr/bin/sudo /usr/bin/apt update
/usr/bin/sudo /usr/bin/apt -y install sublime-text 1password brave-browser


# Grab docker with (bad) convinence script
/usr/bin/bash lazydockerplus.sh

