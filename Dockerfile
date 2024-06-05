# Use the official Debian base image
FROM debian:latest

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
    neovim \
    zsh \
    sudo \
    ca-certificates \
    software-properties-common \
    python3-pip

# Install Node.js 18
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# Install pnpm version 8.9.0
RUN npm install -g pnpm@8.9.0

# Create a non-root user and add to sudoers
RUN useradd -m -s /bin/zsh ronald-debian && \
    echo 'ronald-debian ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

# Switch to the non-root user
USER ronald-debian
WORKDIR /home/ronald-debian

# Ensure the directory is empty before cloning the repository
RUN rm -rf /home/ron/ronald-debian/ronfiles
# Clone the ronfiles repository
RUN git clone https://github.com/ronaldlat/ronfiles.git /home/ronald-debian/ronfiles

# Set up the nvim configuration
RUN mkdir -p /home/ronald-debian/.config/nvim && \
    cp -r /home/ronald-debian/ronfiles/nvim/* /home/ronald-debian/.config/nvim/

#install zapzsh
#USER root
#RUN zsh -c 'curl -s https://raw.githubusercontent.com/zap-zsh/zap/master/install.zsh | zsh -- --branch release-v1'
RUN bash /home/ronald-debian/ronfiles/tools/setup.sh

# Set up zsh and source .zshrc
RUN ln -fs /home/ronald-debian/ronfiles/.zshrc /home/ronald-debian/.zshrc
#RUN chsh  $(which zsh)

# Clean up as root user
USER root
RUN apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Set the default command to zsh as non-root user
USER ronald-debian
CMD ["zsh"]

