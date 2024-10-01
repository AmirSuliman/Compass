#!/bin/bash

# Stage all changes
git add .

# Ask for commit message
echo "Enter commit message: "
read commitMessage

# Commit changes with the entered message
git commit -m "$commitMessage"

# Push changes to the current branch
git push origin jawad
