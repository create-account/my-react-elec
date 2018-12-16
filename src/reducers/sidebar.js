const sidebar = (show=false, action) => {
    if ('TOGGLE_SIDEBOX' === action.type) {
        return !show;
    }

    return show;
}

export default sidebar;