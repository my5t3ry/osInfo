// This is just a sample app. You can structure your Neutralinojs app code as you wish.
// This example app is written with vanilla JavaScript and HTML.
// Feel free to use any frontend framework you like :)

function showInfo() {
    document.getElementById('info').innerHTML = `
        ${NL_OS}
        `;
}


function setTray() {
    if (NL_MODE != "window") {
        console.log("INFO: Tray menu is only available in the window mode.");
        return;
    }
    let tray = {
        icon: "/resources/icons/trayIcon.png",
        menuItems: [
            {id: "VERSION", text: "Get version"},
            {id: "SEP", text: "-"},
            {id: "QUIT", text: "Quit"}
        ]
    };
    Neutralino.os.setTray(tray);
}

function onTrayMenuItemClicked(event) {
    switch (event.detail.id) {
        case "VERSION":
            Neutralino.os.showMessageBox("Version information",
                `Neutralinojs server: v${NL_VERSION} | Neutralinojs client: v${NL_CVERSION}`);
            break;
        case "QUIT":
            Neutralino.app.exit();
            break;
    }
}

function onWindowClose() {
    Neutralino.app.exit();
}

Neutralino.init();

Neutralino.events.on("trayMenuItemClicked", onTrayMenuItemClicked);
Neutralino.events.on("windowClose", onWindowClose);


let cmd = NL_OS === 'Linux' ? NL_CWD + '/resources/neo/linux/neofetch --stdout' : NL_CWD + '/resources/neo/win/run --stdout';
console.log(Neutralino.os.execCommand(cmd).then(value => {
    console.log(value['stdOut'])
    document.getElementById('info').innerHTML = `
    <pre>

        ${value['stdOut']}
</pre>

        `;
}))

