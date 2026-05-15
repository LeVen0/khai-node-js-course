# Use the official nginx image as the base image.
FROM nginx

# Remove default nginx files from the image.
RUN rm -rf /usr/share/nginx/html/*

# Copy project files into the nginx html directory.
COPY ./index.html /usr/share/nginx/html

# Expose port 80, the standard port for nginx.
EXPOSE 80

# Start nginx in the foreground when the container runs.
CMD ["nginx", "-g", "daemon off;"]
