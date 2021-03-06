
document.addEventListener('DOMContentLoaded', () => {
  const mobileLink = document.querySelector('.dropdown-mobile-toggle > button');
  const mobileDropdown = document.querySelector('.mobile-dropdown');
  const desktopLink = document.querySelector('.dropdown-desktop-toggle > button');
  const desktopDropdown = document.querySelector('.desktop-dropdown');

  function addListenerMulti(el, s, fn) {
    s.split(' ').forEach(e => el.addEventListener(e, fn, false));
  }

  function toggleAriaExpanded(element) {
    if (element.getAttribute('aria-expanded') === 'true') {
      element.setAttribute('aria-expanded', 'false');
    } else {
      element.setAttribute('aria-expanded', 'true');
    }
  }

  function dropdownPicker(trigger, dropdown) {
    addListenerMulti(trigger, 'click keypress', function (event) {
      const eventType = event.type;

      event.preventDefault();
      if (eventType === 'click' || (eventType === 'keypress' && event.which === 13)) {
        this.parentNode.classList.toggle('focused');
        dropdown.classList.toggle('display-none');
        toggleAriaExpanded(this);
      }
    });
  }

  if (desktopLink) dropdownPicker(desktopLink, desktopDropdown);
  if (mobileLink) dropdownPicker(mobileLink, mobileDropdown);
});
