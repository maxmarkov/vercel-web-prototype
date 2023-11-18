# React Web App Template Deployed on Vercel

This project serves as a template for deploying a simple React web application. The app features a header, footer, sidebar, and a main body component. The primary goal of this project is to provide a starting point for learning how React works and how to deploy a web app on the Vercel platform.

## Deployment Options

### Docker Deployment

The best way to deploy the app is using Docker.

1. **Build a docker image:**

```docker build -t react-app-image .```

2. **Run the docker container (exposing port 3000)**:

```docker run -p 3000:3000 react-app-image```

3. **Open the Web App in Your Browser**:

Open [http://localhost:3000](http://localhost:3000) to access the application running in your local docker container.

4. **Stop the docker container**:

To stop the container, show all running containers:

```docker ps```

Then, stop the container using its Container ID:

```docker stop <container ID>```

### Local deployment

You can also run the app locally for development and production builds.

1. **Run the app in development mode**:

```npm start```

This command starts the app in development mode, allowing you to view and test it on [http://localhost:3000](http://localhost:3000).

2. **Build the app for production**:

```npm run build```

This command compiles the app and creates a production-ready build in the `build` folder.

3. **View the production build**:

After building the app, you can serve it using a web server of your choice.

For example, to serve it using serve, you can install it globally:

```npm install -g serve```

Then, navigate to the build folder and run:

```serve -s build```

Visit the provided URL in your browser to view the production build.