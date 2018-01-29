/**
 * Math Solver Math Content Type
 */

 var H5P = H5P || {};

 /**
  * Math Solver Math Exercises module
  * @param  {H5P.jQuery} $ jQuery used by H5P Core
  * @return {function}   MathSolver constructor
  */
 H5P.MathSolver = (function($) {
   /**
    * MathSolver constructor
    * @param       {object} options Object with current data and configurations
    * @param       {integer} id      Unique identifier
    * @constructor
    */
   function MathSolver (options, id) {
     this.options = options;
     this.id = id;
   }

   /**
    * Returns title
    * @return {string} Title text
    */
   MathSolver.prototype.getTitle = function() {
     return this.options.title;
   };

   /**
    * Returns description
    * @return {string} Description text
    */
   MathSolver.prototype.getDescription = function() {
     return this.options.description;
   };

   /**
    * Checks if description is set and not empty
    * @return {boolean} Description is set or not
    */
   MathSolver.prototype.hasDescription = function() {
     var description = this.getDescription() || '';
     description = description.trim();

     return description && description.length > 0;
   };

   /**
    * Returns exercise type
    * @return {string} Exercise type
    */
   MathSolver.prototype.getType = function() {
     return this.options.type;
   };

   /**
    * Returns number of attempts
    * @return {integer} Number of attempts
    */
   MathSolver.prototype.getAttempts = function() {
     return this.options.attempts;
   };

   /**
    * Creates and fills container with content
    * @param  {object} $container Container node
    * @return {void}
    */
   MathSolver.prototype.attach = function($container) {
     var self = this;
     self.$container = $container;

     $container.addClass('h5p-math-solver');
     $('<h3>', {
       'class': 'h5p-math-solver-title',
       'text': self.getTitle()
     }).appendTo($container);

     if (self.hasDescription()) {
       $('<div>', {
         'class': 'h5p-math-solver-description',
         'html': self.getDescription()
       }).appendTo($container);
     }

     // TODO These two are not required and should be replaced with exercise itself
       // see oppevara-grid-checker for hints
     $('<div>', {
       'class': 'h5p-math-solver-type',
       'text': self.getType()
     }).appendTo($container);
     $('<div>', {
       'class': 'h5p-math-solver-attempts',
       'text': self.getAttempts()
     }).appendTo($container);
   };

   return MathSolver;
 })(H5P.jQuery);
