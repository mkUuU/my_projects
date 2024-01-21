function payWithMPesa() {
    // Get the amount from a form input
    var amount = document.getElementById('amount').value;
  
    // Make an AJAX request to your server-side code to initiate the payment
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/pay_with_mpesa');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
      if (xhr.status === 200) {
        // Payment successful
        localStorage.setItem('paid', 'true');
  
        // Display the link
        var link = JSON.parse(xhr.responseText).link;
        alert('Payment successful. Your link is: ' + link);
  
        // Open the link in a new window
        window.open(link);
      } else {
        alert('Error processing payment');
      }
    };
    xhr.send('amount=' + amount);
  }