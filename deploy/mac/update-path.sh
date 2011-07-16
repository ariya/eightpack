#!/bin/sh

if [ -f ~/.bash_profile ]; then
    echo 'export PATH=~/eightpack/bin:$PATH' >> ~/.bash_profile
else
    touch ~/.profile
    echo 'export PATH=~/eightpack/bin:$PATH' >> ~/.profile
fi
