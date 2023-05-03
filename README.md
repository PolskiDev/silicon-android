### Silicon App Store
<img src="silicon-app.png" width="100px">  

**INFO**:   

Silicon App Store and Silicon ServerKit by Gabriel Margarido.


Silicon is an alternative App Store for Android based on Cydia and Sileo available for iOS on jailbroken devices. Silicon aims to do the same for Android, using online repositories URLs for pulling packages from the internet to install on your android device.

Everyone can publish your own APKs on Silicon, by turning your Silicon repository available using **Silicon ServerKit**. You can add multiple URLs to sources, separating them by semi-column.

### Silicon App Store source-code
Silicon is a web-based platform, it's source-code is available inside `silicon-user-1.20.0` folder, and it's entry point is `silicon-user-1.20.0/index.html`. Silicon uses PHP and MySQL in the back-end and HTML, CSS, Javascript on the front-end to download packages and use `localStorage` to store URL sources. 



### Configuring your own Silicon Repository


**HOW TO DO:**

- Upload `silicon-server` to the root of your `public_html` or `www` folder on your host.

*Remember: The URL should be: http://www.yourhost.com/silicon-server

- Add "http://www.yourhost.com/silicon-server" to "Sources" section on Silicon,  
by typing the repository URL and touching on "Add source".

(You can add multiple servers by using semicolumn ";"  
For instance: http://www.repo1.com/silicon-server;http://www.repo2.com/silicon-server)


*Gabriel Margarido - May 2nd 2023*
