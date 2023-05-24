# RespberryPiAutostartDesktop
Respberry Autostart creater and starter

dieser kleine helper ist eine kleine klasse die z.b. in PI 4 eine .desktop Datei erzeugt in der /home/pi/.config/autostart
und gestartet wird.

ich bin noch nicht ganz fertig werde also in der zukunft immer wieder was dazu entwickeln 

aber kann benutzt werden um eine basis zu haben.

1) kleinen bug gibt es und zwar wenn der PI neustartet wird keine Terminal geöffnet aber ich glaube das liegt an der .desktop datei 
   in der .desktop Datie wird Terminal=true und Hidden=false gesetzt aber vlt funktioniert es nur bei meinen PI nicht 
   sollte irgendwer wissen warum dann würder ich mich freuen über eine Nachricht :)

Schritt1:
    ordner "js" oder "py" je nach dem ob man das in python oder javascript haben will irgendwo speichern 
    dann einmal ausführen das die autostart.desktop erzeugt werden kann 
    
    Javasript:
    """
    node /pfad-wo-gespeichert-wurder/autostart.js
    """
   
    Python:
    """
    python3 /pfad-wo-gespeichert-wurder/autostart.py
    """
    
    
 Schritt2:
    die auszuführenden scripts definieren
 
    Javasript:
    """
    scripts = [
      {
        name: "home-server",
        exce: "npm run dev --prefix /home/pi/Desktop/Next-Server/home-server",
        terminal: true
      }
    ]
    """
    
    Python:
    """
   scripts = [
      {
        "name":"home-server",
        "exce":"python 3 /home/pi/Desktop/test.py",
        "terminal":True
      }
  ]
    """


Schritt3:
      Neustarten
   
