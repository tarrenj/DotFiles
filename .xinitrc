sxhkd -c ~/.config/sxhkd/sxhkdrc &

xsetroot -cursor_name left_ptr

# xset +fp /usr/share/fonts/local
# xset fp rehash

panel &
xautolock -time 3 -locker lock &

exec bspwm
