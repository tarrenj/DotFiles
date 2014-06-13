sxhkd -c ~/.config/sxhkd/sxhkdrc &

xsetroot -cursor_name left_ptr

# xset +fp /usr/share/fonts/local
# xset fp rehash

panel &
xautolock -time 2 -locker lock &
# xbattbar-acpi -a -b 1 -s 1 -C blue -V top -H left
exec bspwm
