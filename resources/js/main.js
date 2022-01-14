Neutralino.init();

let cmd = NL_OS === 'Linux'
    ? NL_CWD + '/resources/neo/linux/neofetch --stdout'
    : NL_CWD + '/resources/neo/win/run --stdout';
console.log(Neutralino.os.execCommand(cmd).then(value => {
    console.log(value['stdOut'])
    document.getElementById('info').innerHTML = `
    <pre>
    ${value['stdOut']}
    </pre>`;
}))

