
------------------------------------
MySQL Database Connection Utility
------------------------------------

Open the ProcessFormDB.php file into your HTML or simple text editor (if you're using GoLive, ignore the warning that no encoding information was found). Then change the server, database, username and password settings to match the values needed for your server. If you don't already know these settings, you'll need to contact your web host. Make sure to enter the values between the double quotation marks...

$mysql_database = "your database name";
$mysql_hostname = "your host name, usually localhost";
$mysql_user = "your MySQL username";
$mysql_password = "your MySQL password";

IMPORTANT:

For better security, upload the file into a directory on your server that's a level higher than your web root folder. Or, your web host may have a cgi-bin (or similar) folder that prevents normal web browsing. This is to keep unwanted viewers from finding out your MySQL connection information in case PHP is not running as it should be.

Many servers have a cgi-bin folder one level above the folder where your HTML web files go. There's also often an "alias" or "shortcut" in your main web folder to get to this same cgi-bin directory for easier access. This is usually the best place to upload such files.

In the ProcessForm.php file, you'll need to specify the path to get to your ProcessFormDB.php file in the $mysql_access_file setting. This path is best entered as an absolute path from the root level of your server (not the web root). If there's an alias to your cgi-bin folder in the web root directory, you can usually also use a relative path from the script file.

If you need more information, contact your web host or post a question on our support forum here...

http://www.mindpalette.com/forum

