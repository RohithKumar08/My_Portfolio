function showPage(pageId) {
  var pages = document.querySelectorAll('.page');
  pages.forEach(function(page) {
      if (page.id === pageId) {
          page.style.display = 'block';
      } else {
          page.style.display = 'none';
      }
  });
}

  var form = document.getElementById("my-form");

    async function handleSubmit(event) {
      event.preventDefault();
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
            form.reset()
            alert("Thanks for your submission!");
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
                alert(data["errors"].map(error => error["message"]).join(", "));
            } else {
                alert("Oops! There was a problem in submitting your form");
            }
          })
        }
      }).catch(error => {
        alert("Oops! There was a problem in submitting your form");
      });
    }
    form.addEventListener("submit", handleSubmit);
  