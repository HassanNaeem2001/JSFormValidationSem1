function validate() {
    const inputs = document.getElementsByClassName('inputs');
    let allFieldsFilled = true;
    let emailVerified = false;
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value === '') {
        Toastify({
          text: "Field no " + (i + 1) + " is empty",
          gravity: "bottom",
          position: "right",
          duration: 3000,
          style: {
            background: "linear-gradient(to right, red, darkred)",
          },
        }).showToast();
        allFieldsFilled = false;
      } else {
        if (inputs[i].type === 'email') {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          emailVerified = emailRegex.test(inputs[i].value);
          if (!emailVerified) {
            Toastify({
              text: "Invalid Email Address",
              gravity: "bottom",
              position: "right",
              duration: 3000,
              style: {
                background: "linear-gradient(to right, red, darkred)",
              },
            }).showToast();
            allFieldsFilled = false;
          }
        } else if (inputs[i].type === 'password' && inputs[i].value.length < 8) {
            Toastify({
                text: "Password must be 8 characters long",
                gravity: "bottom",
                position: "right",
                duration: 3000,
                style: {
                  background: "linear-gradient(to right, red, darkred)",
                },
              }).showToast();
          allFieldsFilled = false;
        }
      }
    }
  
    if (emailVerified && allFieldsFilled) {
      Toastify({
        text: "Form has been submitted",
        gravity: "bottom",
        position: "right",
        duration: 3000,
        style: {
          background: "linear-gradient(to right, green, lightgreen)",
        },
      }).showToast();
      
    }
  }