if status is-interactive
    # Commands to run in interactive sessions can go here
end

set -gx PATH ~/intelFPGA/20.1/modelsim_ase/bin/ $PATH

neofetch

alias nala="sudo nala"
alias vsim="vsim &> /dev/null &; disown"
alias vim="hx"
alias suvim="sudo hx"
alias ls="ls -lash --color=auto"
alias discord="flatpak run com.discordapp.Discord &> /dev/null &; disown; exit"
alias quartus="./intelFPGA_lite/20.1/quartus/bin/quartus &> /dev/null &; disown"
alias searchWifi="sudo iwlist wlp0s20f3 scan | grep "ESSID""
