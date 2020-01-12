#!/bin/bash
aws s3 sync . s3://dghighfill-step-calc --exclude ".git/*" --exclude README.md --exclude deploy.sh
