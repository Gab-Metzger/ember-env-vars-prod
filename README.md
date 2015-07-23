# ember-env-vars-prod
Example of ember cli illustrating an issue with env vars in production environment

To replicate the issue, do the following commands :
* `npm install && bower install`
* `ember build`
* `EXAMPLE_VAR=test ember serve -prod`
* You should see an error with a undefined EXAMPLE_VAR
