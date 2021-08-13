export APPNAME=acme-weather-api
oc delete project $APPNAME
oc new-project $APPNAME
oc new-app -f ./hello-node-template.json \
    -p NAME=$APPNAME
