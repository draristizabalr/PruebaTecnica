#!/bin/bash

sudo apt-get install -y xterm

# Abre un nuevo terminal de Bash
xterm -hold -e "./script/bash/iniciarFrontEnd.sh; exec bash"
xterm -hold -e "./script/bash/iniciarBackEnd.sh; exec bash"