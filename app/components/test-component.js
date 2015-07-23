import Ember from 'ember';

export default Ember.Component.extend({
  exampleValue: window.EmberEnvVarsProd.EXAMPLE_VAR
});
