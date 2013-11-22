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
function makeGenerator() {
  var $that = this;
  var $arguments = arguments;
  var $state = 7;
  var $storedException;
  var $finallyFallThrough;
  var msg;
  var $G = {
    GState: 0,
    current: undefined,
    yieldReturn: undefined,
    innerFunction: function($yieldSent, $yieldAction) {
      while (true) switch ($state) {
        case 7:
          if (true) {
            $state = 0;
            break;
          } else {
            $state = 8;
            break;
          }
        case 0:
          this.current = undefined;
          $state = 1;
          return true;
        case 1:
          if ($yieldAction == 1) {
            $yieldAction = 0;
            throw $yieldSent;
          }
          $state = 3;
          break;
        case 3:
          msg = $yieldSent;
          $state = 5;
          break;
        case 5:
          log(msg);
          $state = 7;
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
var generator = makeGenerator();
generator.next();
log('ping');
generator.next('pong');
log('ping');
generator.next('pong');
log('ping');
generator.next('pong');
log('ping');
