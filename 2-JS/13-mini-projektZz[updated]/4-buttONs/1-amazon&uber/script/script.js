// Function for handling click event on cart button
const addButton = document.querySelector('.amazon-btn-js');

const addText = document.querySelector('.cart-text');

function addToCart() {
  if (addButton.innerHTML === 'Add to Cart') {
    addButton.innerHTML = 'Item added!!';
    addButton.classList.add('is-added');

    setTimeout(() => {
      addText.innerHTML = 'Item Successfully Added!!';

      setTimeout(() => {
        addText.innerHTML = '';
      }, 2000);
    }, 1000);
  } else {
    addButton.innerHTML = 'Add to Cart';
    addButton.classList.remove('is-added');

    setTimeout(() => {
      addText.innerHTML = 'Item Removed.';

      setTimeout(() => {
        addText.innerHTML = '';
      }, 2000);
    }, 1000);
  }
}

// Function for event handler when request is clicked
const request = document.querySelector('.request-btn-js');

const uberText = document.querySelector('.uber-text');

function requestNow() {
  if (request.innerHTML === 'Request now') {
    request.innerHTML = 'Done';
    request.classList.add('already-requested');

    setTimeout(() => {
      uberText.innerHTML = 'Request successful!!';

      setTimeout(() => {
        uberText.innerHTML = '';
      }, 2000);
    }, 1000);
  } else {
    request.innerHTML = 'Request now';
    request.classList.remove('already-requested');

    setTimeout(() => {
      uberText.innerHTML = 'Request cancelled.';

      setTimeout(() => {
        uberText.innerHTML = '';
      }, 2000);
    }, 1000);
  }
}

// Function for event handler for schedule button
const schedule = document.querySelector('.schedule-btn-js');

const scheduleText = document.querySelector('.schedule-text');

function scheduleUber() {
  if (schedule.innerHTML === 'Schedule for later') {
    schedule.innerHTML = 'Success';
    schedule.classList.add('uber-scheduled');

    setTimeout(() => {
      scheduleText.innerHTML = 'Ride scheduled successfully!!';

      setTimeout(() => {
        scheduleText.innerHTML = '';
      }, 1500);
    }, 1000);
  } else {
    schedule.innerHTML = 'Schedule for later';
    schedule.classList.remove('uber-scheduled');

    setTimeout(() => {
      scheduleText.innerHTML = 'Schedule cancelled.';

      setTimeout(() => {
        scheduleText.innerHTML = '';
      }, 1500);
    }, 1000);
  }
}

// Event handler for the test button on click
const test = document.querySelector('.test-btn-js');
const testText = document.querySelector('.test-text');

function checkTest() {
  if (test.innerHTML === 'Test') {
    test.innerHTML = 'Clicked!';
    test.classList.add('test-active');

    setTimeout(() => {
      testText.innerHTML = 'Button was clicked!';

      setTimeout(() => {
        testText.innerHTML = '';
      }, 1500);
    }, 800);

  } else {
    test.innerHTML = 'Test';
    test.classList.remove('test-active');

    setTimeout(() => {
      testText.innerHTML = 'Reset!';
      
      setTimeout(() => {
        testText.innerHTML = '';
      }, 1500);
    }, 800);
  }
}
