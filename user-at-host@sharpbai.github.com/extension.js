/*Derived from Simple-Username.  https://extensions.gnome.org/extension/807/simple-name/*/
import St from 'gi://St';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import GLib from 'gi://GLib';
import {Extension} from 'resource:///org/gnome/shell/extensions/extension.js';

export default class UserAtHostExtension extends Extension {

    constructor(metadata) {
        super(metadata);
        this._label = null
    }

    enable() {
        this._label = new St.Button({reactive: false,
            can_focus: false,
            track_hover: false,
            label: GLib.get_user_name() + '@' + GLib.get_host_name()});
        Main.panel._rightBox.insert_child_at_index(this._label, 0);    
    }

    disable() {
        Main.panel._leftBox.remove_child(this._label);
        this._label.destroy();
        this._label = null;
    }
}
