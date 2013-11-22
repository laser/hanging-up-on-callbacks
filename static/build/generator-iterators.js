var $__iterator = '@@iterator',
    $__returnThis = function() {
      return this;
    },
    $__Object = Object,
    $__defineProperty = $__Object.defineProperty,
    $__addIterator = function(object) {
      object[$__iterator] = $__returnThis;
      return $__defineProperty(object, $__iterator, {enumerable: false});
    },
    $__generatorWrap = function(generator) {
      return $__addIterator({
        next: function(x) {
          switch (generator.GState) {
            case 1:
              throw new Error('"next" on executing generator');
            case 3:
              throw new Error('"next" on closed generator');
            case 0:
              if (x !== undefined) {
                throw new TypeError('Sent value to newborn generator');
              }
            case 2:
              generator.GState = 1;
              if (generator.moveNext(x, 0)) {
                generator.GState = 2;
                return {
                  value: generator.current,
                  done: false
                };
              }
              generator.GState = 3;
              return {
                value: generator.yieldReturn,
                done: true
              };
          }
        },
        'throw': function(x) {
          switch (generator.GState) {
            case 1:
              throw new Error('"throw" on executing generator');
            case 3:
              throw new Error('"throw" on closed generator');
            case 0:
              generator.GState = 3;
              throw x;
            case 2:
              generator.GState = 1;
              if (generator.moveNext(x, 1)) {
                generator.GState = 2;
                return {
                  value: generator.current,
                  done: false
                };
              }
              generator.GState = 3;
              return {
                value: generator.yieldReturn,
                done: true
              };
          }
        }
      });
    };
function fibonacci() {
  var $that = this;
  var $arguments = arguments;
  var $state = 9;
  var $storedException;
  var $finallyFallThrough;
  var curr;
  var prev;
  var $G = {
    GState: 0,
    current: undefined,
    yieldReturn: undefined,
    innerFunction: function($yieldSent, $yieldAction) {
      while (true) switch ($state) {
        case 9:
          prev = 0, curr = 1;
          $state = 10;
          break;
        case 10:
          if (true) {
            $state = 4;
            break;
          } else {
            $state = 8;
            break;
          }
        case 4:
          prev = curr;
          $state = 5;
          break;
        case 5:
          curr = prev + curr;
          $state = 7;
          break;
        case 7:
          this.current = curr;
          $state = 1;
          return true;
        case 1:
          if ($yieldAction == 1) {
            $yieldAction = 0;
            throw $yieldSent;
          }
          $state = 10;
          break;
        case 8:
          $state = -2;
        case -2:
          return false;
        case -3:
          throw $storedException;
        default:
          throw "traceur compiler bug: invalid state in state machine: " + $state;
      }
    },
    moveNext: function($yieldSent, $yieldAction) {
      while (true) try {
        return this.innerFunction($yieldSent, $yieldAction);
      } catch ($caughtException) {
        $storedException = $caughtException;
        switch ($state) {
          default:
            this.GState = 3;
            $state = -2;
            throw $storedException;
        }
      }
    }
  };
  return $__generatorWrap($G);
}
var seq = fibonacci();
log(seq.next().value);
log(seq.next().value);
log(seq.next().value);
log(seq.next().value);
log(seq.next().value);
