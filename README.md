# Documentation

This project is a school project realised in classroom of bigdata.

It allows to split a ".csv" file and save it in a mongodb database.

## Installation and requirements
To use the project, clone it on your computer.

Execute the next command line to install necessary modules for the proper functioning of the application
> npm install

Then, you need to download the file to split available **[here](https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/)**.

## Split files

To split file, you must nammed your file as "file.csv" and execute this command line
> node split.js

## Insert files in database and start the app

To insert files in database, you should begin _pm2_ processus.
> pm2 start index.js
