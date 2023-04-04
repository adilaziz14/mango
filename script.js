// replace the link with your actual Rafay login page link
let rafay_login_link = 'https://console.rafay.dev/#/login';

// open the Rafay login page in a new tab or window
window.open(rafay_login_link, '_blank');

// wait for the new tab or window to load
setTimeout(function() {

  // switch to the new tab or window
  driver.switchTo().window(driver.getWindowHandles()[1]);

  // wait for the email input field to become available
  let email_input = driver.wait(until.elementLocated(By.name('email')), 20000);

  // enter the email and hit the next button
  email_input.sendKeys('aadilazizkhan14@gmail.com');
  let next_button = driver.findElement(By.xpath("//button[@type='submit']"));
  next_button.click();

  // wait for the password input field to become available
  let password_input = driver.wait(until.elementLocated(By.id('password')), 20000);

  // enter the password and submit the login form
  password_input.sendKeys('Adil@14jan');
  let login_button = driver.findElement(By.xpath("//button[@type='submit']"));
  login_button.click();

  // wait for the dashboard page to load
  //driver.wait(until.titleIs('Rafay Console'), 5000);

  // do something on the dashboard page
  // ...

  // close the new tab or window
  driver.close();

  // switch back to the original tab or window
  driver.switchTo().window(driver.getWindowHandles()[0]);

}, 5000);

