# Object Versioning Reconstruction

## Introduction

This project takes a CSV file of N-rows for the following objects:
ObjectA: {property1, property2, property3}

ObjectB: {property1, property2, property3}

.

..

...

ObjectZ: {property1, property2, property3}

```

object_id | object_type | timestamp | object_changes
:-------: | :---------: | :--------: | :------------
 1        |  ObjectA    |  412351252 | {property1: "value", property3: "value"}
 1        |  ObjectB    |  456662343 | {property1: "value"}
 1        |  ObjectA    |  467765765 | {property1: "altered value", property2: "value"}
 2        |  ObjectA    |  451232123 | {property2: "value"}
...       |  ...        |  ...       | ...

```

The CSV columns are:

 - **object_id:** is a unique identifier per-object type.
 - **object_type:** denotes the object type.
 - **timestamp:** needs no explaination
 - **object_changes:** the properties changed for specified object at **timestamp**.

The app will allow users to upload the CSV file and then query the system about the states of objects at specific timestamp.

## App Components

This app has two parts. This is the backend. The frontend has been deployed here: [https://renchchua.github.io/object-version-recon-front/](https://renchchua.github.io/object-version-recon-front/). The frontend repo is here:[https://github.com/RenchChua/object-version-recon-front](https://github.com/RenchChua/object-version-recon-front)

## Deploying the backend

The backend is not deployed. This is because the backend saves the file that has been uploaded. I do not know how how to deploy to Heroku and allow saving of files on Heroku servers.

These are the steps to deploy the backend:

  - Clone the repo onto local
  - Install the node packages by typing "npm install"
  - Start the backend server by typing "nodemon app.js"

## Using the app

After getting the backend server up and running, head over to the deployed frontend. The frontend repo contains a test CSV file in the public folder. At the deployed frontend, upload the test CSV file. The object types in the test CSV file will then appear as options that you can choose. Once you choose the object type you want to query, the options for timestamps will appear. Choose the timestamp you want to query. The object states of the object and timestamp selected will be returned.

## Limitations and further work

The app works... to some extent. Here are the limitations:

  - The backend isn't deployed live. I would need to level up on my devops skills to learn how to upload files onto live servers (e.g. Heroku or AWS).
  - The backend server only works once. After uploading one file, the backend server freezes up. To upload another file, you would need to restart the server. I am not sure why that happens. The readstream has ended, you can still upload more files, but the backend server just doesn't return the json object to the frontend.
