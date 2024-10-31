#!/bin/bash

# Get the currently active workspace's monitor
current_monitor=$(i3-msg -t get_workspaces | jq -r '.[] | select(.focused==true).output')

# Print the current monitor (for debugging purposes)
echo "Current Monitor: $current_monitor"

# Define your gap settings based on the monitor
if [[ "$current_monitor" == "eDP-1" ]]; then
    # If the workspace is on eDP-1, set specific gaps
    echo "Applying gaps for eDP-1"
    i3-msg gaps outer current set 5
    i3-msg gaps inner current set 15
    i3-msg gaps top current set 30
    i3-msg gaps bottom current set 30
fi

  

