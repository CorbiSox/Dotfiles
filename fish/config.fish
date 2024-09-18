if status is-interactive
    # Commands to run in interactive sessions can go here
end

set -gx PATH ~/intelFPGA/20.1/modelsim_ase/bin/ $PATH

neofetch

alias nala="sudo nala"
alias vsim="vsim &> /dev/null &; disown"
alias edit="hx"
alias suedit="sudo hx"
alias ls="ls -lash --color=auto"
alias discord="flatpak run com.discordapp.Discord &> /dev/null &; disown; exit"
