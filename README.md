### webhook-service-nodeJS

Webhook application built in nodeJS with slack hook notification support for receiving events. This can also support database implementation for hook data storage if preferred.

#### Table Of Contents

- [Prerequisites](#prerequisites)
- [How To Get Started](#how-to-get-started)
- [How To Test](#how-to-test)

#### Prerequisites

To get started with this application,

- You need to have a basic knowledge of JavaScript and NodeJS.

- You also need to have a slack workspace to set up a slack channel and webhook url to recieve and post webhook data/messages to the slack channel. You can follow this [Link](https://slack.com/get-started#/create) to sign up on slack and create a workspace.

- You need to have node (version 8 and above) and npm (5 and above) installed. Luckily for us, node is usually preinstalled with npm.

- You can follow this [Link](https://nodejs.org/en/) to install the LTS version of node for your preferred Operating System.

- You need to have git installed to clone and interact with this app locally. Please follow this [Link](https://git-scm.com/) to install git on your Operating System.

#### How To Get Started

Kindly follow the instruction below to get started.

- Step 1: Open your terminal/cmd window locally.
- Step 2: Navigate to your preferred project folder using the cd command with the path to your preferred project folder.
- Step 3: Enter this command to clone the project folder, `git clone https://github.com/MaestroJolly/webhook-service-nodejs.git` or use this command `git clone git@github.com:MaestroJolly/webhook-service-nodejs.git` if you prefer ssh.
- Step 4: Next change directory into the project folder using this command `cd webhook-service-nodejs`.
- Step 5: Enter this command to install the required dependencies `npm i` or `npm install`.
- Step 6: Go to this [Link](https://api.slack.com/apps), follow the instructions on the page to create your slack webhook url to accept and post the webhook data on your preferred slack channel.
- Step 7: Copy the webhook url generated by slack and navigate to the project directory.
- Step 8: You will see a file `.env.sample`, rename the file to `.env`, then paste the webhook url as the value of `SLACKHOOKURL`. You can also set the values of the `PORT` and `NODE_ENV` env variables. If none is set, they would default to `3333` and `development` respectively.
- Step 9: Enter this command to start the app in development mode `npm run start:dev` or `npm start` to start the app in production mode. You should see `info: app is running on {{Your preferred port}}`.

#### How To Test

- You can now test the application either locally to confirm the application is working as expected by entering this url in your browser `http://localhost:{{Your preferred port}}` or by using this url to test a deployed version [Link](https://webhook-handler.glitch.me/).

- To test the hook url, Set this endpoint as your webhook url to start accepting hook data. `http://localhost:{{Your preferred port}}/events`.

#### Credits

- [Slack](https://slack.com).
- [Glitch](https://glitch.me).
