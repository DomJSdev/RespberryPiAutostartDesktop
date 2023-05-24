const { mkdirSync, existsSync, writeFileSync } = require("fs")
const childprocess = require('child_process')

class Autostart {

    autostartFolderExist = false
    desktopScriptExist = false
    currentScriptPath = __dirname
    desktopScriptContent = `[Desktop Entry]\nExec=node ${__filename}\nTerminal=true\nHidden=false`

    constructor(username) {
        this.configPath = `/home/${username}/.config`

        this.username = username
        this.autostartFolderPath = `${this.configPath}/autostart`
        this.DesktopFilePath = `${this.autostartFolderPath}/autostart.desktop`

        this.autostartFolderExist = existsSync(this.autostartFolderPath)
        this.desktopScriptExist = existsSync(this.DesktopFilePath)

        if (!this.autostartFolderExist) this.createAutostartFolder()
        if (this.autostartFolderExist && !this.desktopScriptExist) this.createAutostartFolder()
    }

    createAutostartFolder() {
        try {
            mkdirSync(this.autostartFolderPath)
            this.createDesktopFile()
        } catch (error) {
            console.log(error.message)
        }
    }

    createDesktopFile() {
        try {
            writeFileSync(this.DesktopFilePath, this.desktopScriptContent)
        } catch (error) {
            console.log(error.message)
        }
    }
    // at the moment the "executeFile" function is not used but in the future I will use it vor .py files
    executeFile(exce, file) {
        childprocess.execFile(exce, [file], (err, out, outErr) => { })
    }
    executeComand(cmd) {
        childprocess.exec(cmd, (err, out, outErr) => {
            console.log("-----------------------------------")
            if (err) return console.log('error: ', err)
            else if (outErr) return console.log('fatalerror: ', outErr)
            else if (out) return console.log('output: ', out)
        })
    }

    execute(scripts) {
        scripts.forEach((script) => {
            this.executeComand(script.exce)
        })
    }
}

// hier enter you sripts what you want to execute wenn the Desktop is loaded
// 1 thing I don`t know is if bash pips "||", "&&" and "|" is function with this 
scripts = [

    {
        name: "home-server",
        exce: "npm run dev --prefix /home/pi/Desktop/server",
        terminal: true
    },

]

// please enter your user folder name per default it is "/home/pi" so enter "pi" if it is your name enter your name 
const autostart = new Autostart("pi")

autostart.execute(scripts)
