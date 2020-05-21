const path = require('path')

const {app, BrowserWindow} = require('electron')   

app.allowRendererProcessReuse = true;
function createWindow () {   
  // Create the browser window.     
win = new BrowserWindow({width: 800, height: 600}) 
       
// and load the index.html of the app.  // development mode 
win.loadURL('http://localhost:3001/')

//===production mode===
// win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`) 

  
}      
app.on('ready', createWindow);