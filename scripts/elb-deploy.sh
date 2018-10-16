#!/bin/bash

set -e

# Integrate PC & Mobile to one platform folder
cd dist/
cp -rf ../.ebextensions/ ./
cp  -f ../package.json ./
cp  -f ../config/ecosystem.config.js ./
cp -f ../.npmrc ./
zip -r dist-platform.zip ./
mv dist-platform.zip ../
cd ../
# Finish dist-platform compress

# Set zip file name to dist-platform.zip
ZIP_FILE="dist-platform.zip"

# Zip up everything with the exception of node_modules (including dist)
ts=`date +%s`
S3_OBJECT_KEY="$S3_KEY/$ts-$ZIP_FILE"
# Copy the app to S3
aws s3 cp "$ZIP_FILE" "s3://$S3_BUCKET/$S3_OBJECT_KEY"

BRANCH=${CI_COMMIT_REF_NAME}

# Create a new version in eb
echo "Creating ElasticBeanstalk Application Version ..."
aws elasticbeanstalk create-application-version \
  --application-name "$EB_APP_NAME" \
  --version-label "$EB_APP_NAME-$ts" \
  --description "$EB_APP_NAME-$ts" \
  --source-bundle S3Bucket="$S3_BUCKET",S3Key="$S3_OBJECT_KEY" --auto-create-application

# Update to that version
echo "Updating ElasticBeanstalk Application Version ..."
aws elasticbeanstalk update-environment \
  --application-name "$EB_APP_NAME" \
  --environment-name "$EB_APP_ENV" \
  --version-label "$EB_APP_NAME-$ts"

echo "Done! Deployed version $EB_APP_NAME-$ts"

exit 0
