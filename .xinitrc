sxhkd -c ~/.config/sxhkd/sxhkdrc &
panel &

xsetroot -cursor_name left_ptr

xset +fp /usr/share/fonts/local
xset fp rehash

exec bspwm

