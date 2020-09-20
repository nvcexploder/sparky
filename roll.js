function makeDie(sides) {
    var die = function() {
      return 1 + Math.random() * sides | 0;
    };
  
    die.times = function(count) {
      var rolls = [];
      for (var i = 0; i < count; i++) {
        rolls.push(this());
      }
      return rolls;
    };
  
    return die;
  }
  
  var dice = {
    d4: makeDie(4),
    d6: makeDie(6),
    d8: makeDie(8),
    d10: makeDie(10),
    d12: makeDie(12),
    d20: makeDie(20),
    roll: function(expression) {
      var self = this,
        rolls = [];
  
      expression.toLowerCase().replace(/(\d+)(d\d+)?/g, function(_, count, die) {
        if (die) {
          rolls = rolls.concat(self[die].times(+count));
        } else {
          rolls.push(+count);
        }
      });
  
      return rolls.reduce(function(sum, roll) {
        return sum + roll;
      });
    }
  };

module.exports=dice