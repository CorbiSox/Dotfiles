#!/bin/bash

# Define a log file for error messages
LOG_FILE="$HOME/monitor_setup.log"

# Clear the previous log file
> "$LOG_FILE"

# Function to log errors
log_error() {
  echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" >> "$LOG_FILE"
}

# Get the number of connected monitors
monitor_count=$(xrandr --listactivemonitors 2>>"$LOG_FILE" | grep "Monitors:" | awk '{print $2}')

# Check if monitor count was retrieved
if [ -z "$monitor_count" ]; then
  log_error "Failed to retrieve monitor count."
  exit 1
fi

# Act based on monitor count
if [ "$monitor_count" -eq 2 ]; then
  # Dual monitors setup

  # Update Xft.dpi
  if ! sed -i '/Xft\.dpi/c\Xft.dpi: 96' ~/.Xresources 2>>"$LOG_FILE"; then
    log_error "Failed to update Xft.dpi for dual monitors."
  fi

  # Set xrandr display configurations
  if ! xrandr --output DP-1 --mode 3440x1440 --dpi 110 --rate 84.96 --pos 0x0 --output eDP-1 --mode 1680x1050 --dpi 178 --pos 3440x390 2>>"$LOG_FILE"; then
    log_error "Failed to set xrandr configuration for dual monitors."
  fi

# Set background for dual background
  if ! nitrogen --restore 2>>"$LOG_FILE"; then
    log_error "Failed to set background for two monitors."
  fi
  
# add polybar to dual screens
  polybar-msg cmd quit
  echo "---" | tee -a /tmp/polybar1.log /tmp/polybar2.log
  polybar top-primary &
  polybar top-secondary &
  
elif [ "$monitor_count" -eq 1 ]; then
  # Single monitor setup

  # Update Xft.dpi
  if ! sed -i '/Xft\.dpi/c\Xft.dpi: 110' ~/.Xresources 2>>"$LOG_FILE"; then
    log_error "Failed to update Xft.dpi for a single monitor."
  fi

  # Set xrandr display configurations
  if ! xrandr --output eDP-1 --mode 2560x1600 --dpi 178 2>>"$LOG_FILE"; then
    log_error "Failed to set xrandr configuration for a single monitor."
  fi

  # Set background for single background
  if ! nitrogen --set-zoom-fill ~/Pictures/Backgrounds/racerPop.jpeg 2>>"$LOG_FILE"; then
    log_error "Failed to set background for single monitor."
  fi

# add polybar to single screen
  polybar-msg cmd quit
  echo "---" | tee -a /tmp/polybar1.log /tmp/polybar2.log
  polybar top &

else
  log_error "No monitors detected or unhandled monitor count: $monitor_count."
  exit 1
fi

# Merge .Xresources settings
if ! xrdb -merge -I"$HOME" ~/.Xresources 2>>"$LOG_FILE"; then
  log_error "Failed to merge .Xresources."
fi