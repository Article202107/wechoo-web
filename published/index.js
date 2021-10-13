window.onload = () => {
  // start scroll
  var doc = document.documentElement;
  var w = window;

  var curScroll = (prevScroll = w.scrollY || doc.scrollTop);
  var curDirection = (prevDirection = 0);

  /**
   * How it works
   *
   * 1. create scroll event listener.
   *
   * 2. create a function to check scroll position on each scroll event,
   * and compare curScroll and preScroll values to find the scroll direction
   *
   * scroll up = 1, scroll down = 2, initial = 0
   *
   * then, set the direction value to curDirection
   *
   * compare curDirection and prevDirection
   *
   * if they are different, call another position to show or hide the header
   *
   * example:
   *
   * step 1: user scrolls down: curDirection 2, prevDirection 0 > hide header
   * step 2: user scrolls down again: curDirection 2, prevDirection 2 > do nothing (already hidden)
   * step 3: user scrolls up: curDirection 1, prevDirection 2, > show the header
   */

  var header = document.getElementById('navbar-header');

  var checkScroll = function () {
    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) {
      // scrolled down
      curDirection = 2;
    } else {
      // scrolled up
      curDirection = 1;
    }

    if (curDirection !== prevDirection) {
      toggleHeader();
    }

    prevDirection = curDirection;
    prevScroll = curScroll;
  };

  var toggleHeader = function () {
    if (curDirection === 2) {
      header.classList.add('hide');
    } else if (curDirection === 1) {
      header.classList.remove('hide');
    }
  };

  window.addEventListener('scroll', checkScroll);
  // end scroll

  const compareItemClicked = () => {
    window.location.href = './components/detail/detail.html';
  };

  var compareItems = document.getElementsByClassName('compare')[0];

  compareItems.addEventListener('click', compareItemClicked);
};
