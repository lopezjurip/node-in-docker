# Docker and Node.js

Build this image:

```sh
# Build and image named 'express-image' from the Dockerfile located here.
docker build --tag express-image .
```

Create a container with this image:

```sh
# Run a instance named 'express-container'.
docker run -p 5000:3000 --name express-container express-image
```

Now visit `http://localhost:5000`.

Notice the mapped the machine's port `5000` to the container's port `3000`. This is also possible to map port `80` to expose the container to the default HTTP port.
