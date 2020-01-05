<template>
  <div class="q-pa-md">
    <h2 class="text-center">Help :: Using the Cashier Application</h2>
    <section class="container">
      <header class="text-center">
        <h5 class="q-my-md">Creating a Spread Sheet</h5>
      </header>
      <article class="text-body1">
          <p>Before you begin using the application you would need to create a <strong>Google Spread Sheet</strong> of the items with their prices. The spredsheet should be a single sheet with the first row representing the column names <strong>Product ID</strong>,<strong>Product Item</strong> and <strong>Cost</strong>.</p>
          <p>Your product id SHOULD be a unique, randomized make up of atleast 4 alpha-numeric characters. The product price should be entered as number <strong>WITHOUT</strong> the currency symbol.</p>
          <p>Once you have completed the spreadsheet. You would need to share the document with the application. To do this click the <strong>"Share"</strong> button and copy the document's url.</p>
      </article>
    </section>
    <section class="container">
      <header class="text-center">
        <h5 class="q-my-md">Application Instructions</h5>
      </header>
      <article class="text-body1">
          <p>To start using the application You would need to provide your email address and the sharable URL to the document.</p>
          <p>Once you have provided the necessary information. Tap the login button and you would proceed to the application's interface. The application has the following features:-</p>
          <ul>
            <li>Searchable list of product items with their cost.</li>
            <li>Cash items list display on selected items.</li>
            <li>The ability to calculate discount on cost per selected item.</li>
            <li>A History of all cashed/ paid transactions for one day.</li>
          </ul>
          <p>To cash/ calculate customers item(s), search/ scroll for the item in the list and simply select the line item. Once selected the item will be added to the cash item list display and the total cost immediately calculated. Selecting and item will default the quantity to cash for at 1. To increase the quantity, just select the quantity from the number pad and tap the <strong>"Add"</strong> button. This will update the quantity and re-calculate the total amount to cash for.</p>
          <p>To add a discount, select the amount from the number pad and also the <strong>%</strong> symbol <strong>BEFORE</strong> pressing the <strong>Add</strong> button. This will </p>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>
