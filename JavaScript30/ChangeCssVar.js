const colorPicker = document.querySelector("#base");
    colorPicker.addEventListener('change', changeColor);

    function changeColor(e) {
      const newColor = e.target.value
      document.documentElement.style
        .setProperty('--base', newColor);
    }

    const spacingRange = document.querySelector("#spacing");
    spacingRange.addEventListener('change', changeSpacing);

    function changeSpacing(e) {
      const newSpacing = `${e.target.value}px`;
      document.documentElement.style
        .setProperty('--spacing', newSpacing);
    }
