# Silicon Server RepoKit
###### By Gabriel Margarido
  
  
Server homepage:
http://yourhost.com/silicon-server
  
Publishing/Login page:
http://yourhost.com/silicon-server/login
  
  
  
  
  
**How to configurate**
  
(0.0) Open "sqlConn.php" on a code editor and change default
database presets to the corresponding presets of your external server database.

(0.1) Create a database named "Silicon" onto your MySQL database,
and define its username and password (paste it's URL inside $host - "sqlConn.php":8)
  
  
(1) Create Main Table:
http://yourhost.com/silicon-server/index.php
  
(2) Create Users Table:
http://yourhost.com/silicon-server/login/first-access.php
  
  
(3.1) Go to login page:
http://yourhost.com/silicon-server/login
  
(3.2) Default username and passcode
User: root
Passcode: alpine
  
  
(4) Change root passcode
http://yourhost.com/silicon-server/login/change-passcode.html
  
    Old password: alpine
    New password:  __[It's your choice]__
    Username: root
  
  
  
  
**How to add sources to Silicon**
1. Open Silicon App
2. Click on "Sources"
3. Paste: http://gabrielmargarido.org/silicon-server
4. And click on "Add source"
  
  
*To add multiple sources, use semicolumn (;)
Example:   http://repo.example.com;http://cake.example.com;http://666.example.com;