import os

class Autostart :

    autostartFolderExist = False
    desktopScriptExist = False
    configPath = ""
    currentPath = os.getcwd()+"/"
    

    desktopScriptContent = "[Desktop Entry]\nExec=python3 "+__file__+"\nTerminal=true\nHidden=false"

    def __init__(self, username,scripts):
        path = "/home/"+username+"/.config/"
        self.scripts= scripts
        self.configPath = path
        self.autostartFolderExist = os.path.exists(path+"autostart")
        
        if self.autostartFolderExist:
            self.desktopScriptExist = os.path.exists(path+"autostart/autostart.desktop")
        else:
            self.createAutostartFolder(path)
        
        if self.desktopScriptExist == False:
            self.createDesktopFile()

    def exce(self):
        for script in self.scripts:
            try:
                os.system(script["exce"])
            except:
                try:
                    log = open("log.txt","a")
                    log.write(f"\n{script['name']} can`t execute")
                except:
                    print("can not create 'log.txt' file")
                finally:
                    log.close()
    def createAutostartFolder(self,path):
        if self.autostartFolderExist:
            print("'autostart' folder already exist")
        try:
            os.mkdir(path+"autostart")
            self.autostartFolderExist=True
            self.createDesktopFile()
        except:
            print("can not create 'autostart' folder")
            
    def createDesktopFile(self):
        if self.autostartFolderExist == False or self.desktopScriptExist == True:
            print("'autostart.display' file exist or the 'autostart' folder don´t exist")
            return
        print(self.configPath+"autostart/autostart.desktop")
        try:
            file = open(self.configPath+"autostart/autostart.desktop","w")
            file.write(self.desktopScriptContent)
        except:
            print("can not create 'autostart.desktop' file")
        finally:
            file.close()
        
scripts = [
    {
        "name":"home-server",
        "exce":"python3 /home/pi/Desktop/test.py",
        "terminal":True
    } ,
]

autostart = Autostart("pi",scripts)

autostart.exce()

