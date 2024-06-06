# Use the official Debian base image
FROM ubuntu:latest

# Set environment variables
ENV DEBIAN_FRONTEND=noninteractive

# Update the package list and install basic packages
RUN apt-get update && \
    apt-get install -y \
    build-essential \
    curl \
    wget \
    git \
    vim \
    zsh \
    eza \
    bat \
    neovim \
    sudo \
    ca-certificates \
    software-properties-common \
    python3-pip

 #Install Node.js LTS
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - && \
    apt-get install -y nodejs

# Install pnpm version 8.9.0
RUN npm install -g pnpm@8.9.0

# Create a non-root user and add to sudoers
RUN useradd -m -s /bin/zsh ronald-debian && \
    echo 'ronald-debian ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

# Switch to the non-root user
#USER ronald-debian
USER root
WORKDIR /home/ronald-debian

# Ensure the directory is empty before cloning the repository..
RUN rm -rf /home/ron/ronald-debian/ronfiles

# Clone the ronfiles repository
RUN git clone https://github.com/ronaldlat/ronfiles.git /home/ronald-debian/ronfiles

# Set up the nvim configuration
RUN  mkdir -p $HOME/.config/nvim && \
    cp  -fr /home/ronald-debian/ronfiles/nvim/* $HOME/.config/nvim/

USER root
RUN zsh
#RUN zsh -c 'curl -s https://raw.githubusercontent.com/zap-zsh/zap/master/install.zsh | zsh -- --branch release-v1 -k'
RUN bash /home/ronald-debian/ronfiles/tools/setup.sh
RUN rm ~/.zshrc

# Set up zsh and source .zshrc
RUN ln -fs /home/ronald-debian/ronfiles/.zshrc $HOME/.zshrc

# Clean up as root user
USER root
RUN apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Set the default command to zsh as non-root user
#USER ronald-debian
CMD ["zsh", "-l"]

