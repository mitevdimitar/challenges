const checkboxes = document.querySelectorAll('.item > input[type="checkbox"]');
  
    const onCheckboxClick = (e) => {
      const checked = e.target.checked;
      const shiftPressed = e.shiftKey;
      let lastChecked;
      if (checked && shiftPressed) {
        let isInbetween = false;
        
        checkboxes.forEach((checkbox) => {
          if (lastChecked === checkbox || checkbox.checked) {
            isInbetween = !isInbetween;
          }
          if (isInbetween) {
            checkbox.checked = true;
          }
          
        })
        
        
      }
      lastChecked = this;
    }

    checkboxes.forEach((checkbox) => checkbox.addEventListener('click', onCheckboxClick));
