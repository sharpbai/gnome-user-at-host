/*Derived from Simple-Username.  https://extensions.gnome.org/extension/807/simple-name/*/
const St = imports.gi.St;
const Main = imports.ui.main;
const GLib = imports.gi.GLib;

let label;

function enable() {
    label = new St.Button({reactive: false,
                           can_focus: false,
                           track_hover: false,
                           style: 'color: white;',
                           label: GLib.get_user_name() + '@' + GLib.get_host_name()});
    Main.panel._rightBox.insert_child_at_index(label, 0);
}

function disable() {
    Main.panel._rightBox.remove_child(label);
    label.destroy();
    label = null;
}
