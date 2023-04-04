---
youtube_id: GMOtt5mai5A
duration: "6:11"
group: "Fundamentals of Adobe Commerce Development"
title: "How to Add a New Table to a Database"
thumbnail: "fundamentals/thumbs/add-table.png"
menu_order: 0
github_link:
---

Adobe Commerce has a special mechanism which allows you to create database tables, modify existing ones,and even add some data into them(like setup data, which has to be added when a module is installed).
This mechanism allows those changes to be transferable between different installations.

The key concept is that,instead of doing manual SQL operations that you have to do again and again when reinstalling the system, developers create an install (or upgrade) script that contains the data.
The script will be executed every time a module is installed.

Adobe Commerce has four types of such scripts: InstallSchema, InstallData, UpgradeSchema and UpgradeData.
The install scripts are executed only once, while the upgrade scripts are executed every time the module's version get changed.

To look at all four script types, we’ll complete the following greeting page tasks:

* Create a `greeting_message` table with the columns greeting_id and message.
* Add two records: “Happy New Year”, “Happy Holidays”.
* Next, modify the table by adding another field, “season”, to which we add the records “Happy Thanksgiving” and “Fall'”.
* Update the types for the first and second records.

The steps we need to take to accomplish these tasks are:

1. Create a new module.
2. Create an InstallSchema script.
3. Create an InstallData script.
4. Add a new module and verify that a table with the data was created.
5. Create an UpgradeSchema script.
6. Create an UpgradeData script.
7. Run the upgrade scripts and verify that the table has changed.

Let’s go through each step.

