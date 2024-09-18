#!/bin/bash
# Called from /home/tcsugarfoot/.config/mainline/autostart/mainline-notify.desktop at logon.
# This file is over-written and executed again whenever settings are saved in mainline-gtk

# on reboot or login, forget previous showings and show again once
[[ $1 == --autostart ]] && rm -f "/home/tcsugarfoot/.config/mainline/notification_id" "/home/tcsugarfoot/.config/mainline/notification_seen.major" "/home/tcsugarfoot/.config/mainline/notification_seen.minor"
TMP=${XDG_RUNTIME_DIR:-/tmp}
N=${0//\//_}
F="${TMP}/${N}.${$}.p" # our pid file
G="${TMP}/${N}.+([0-9]).p" # globbing pattern for other pid files (requires extglob)
unset p s; typeset -i p s

# on exit, kill our child sleep process and delete our pid file
trap '((s)) && kill $s ;rm -f $F' 0

# clear previous state (kill previous instance)
echo -n "${DISPLAY} ${$}" > $F
shopt -s extglob
for f in $G ;do
	[[ -s $f ]] || continue  # no file found
	[[ $f -ot $F ]] || continue  # file is not older than our current one
	read d p x < $f  # read DISPLAY & PID
	[[ $d == ${DISPLAY} ]] || continue  # not our DISPLAY, not our desktop session
	((p>1)) || continue  # PID not sane
	# if we got this far, then we found a previous, now-obsolete instance of ourself
	# that needs to be killed and replaced with ourself
	rm -f $f  # delete the other pid file
	kill $p  # kill the other process
done
unset N f p d x

# run whatever the new state should be
# (code below changes depending on notification settings in the app)
# Notifications are disabled
exit 0
