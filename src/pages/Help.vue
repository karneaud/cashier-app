<template>
  <div class="q-pa-md">
    <q-toolbar>
      <q-btn dense flat icon="arrow_back" @click="(() => this.$router.push({ path: '/' }))" />
      <q-toolbar-title class="text-center text-h4">
        Help :: Using the Cashier Application
      </q-toolbar-title>
    </q-toolbar>
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
            <li>The ability to calculate discount on cost item total.</li>
            <li>A History of all cashed/ paid transactions for one day.</li>
          </ul>
          <h6 class="q-my-sm">Adding an Item to Cash</h6>
          <p>To cash/ calculate customers item(s), search/ scroll for the item in the list and simply select the line item. Once selected the item will be added to the cash item list display and the total cost immediately calculated. Selecting and item will default the quantity to cash for at 1. To change the quantity, just punch in the quantity from the number pad and tap the <strong>"Add"</strong> button. This will update the quantity and re-calculate the total amount to cash for.</p>
          <h6 class="q-my-sm">Adding a Discount to an Item</h6>
          <p>To add a discount, select the amount percentage from the number pad and also the <strong>%</strong> symbol <strong>BEFORE</strong> pressing the <strong>Add</strong> button. This will calculate a discount on the unit cost of the item</p>
          <h6 class="q-my-sm">Viewing Items to Cash</h6>
          <p>To review the items to cash tap the <strong><i aria-hidden="true" class="material-icons q-icon">shopping_basket</i></strong> icon at the top right of the interface. A list of the items would appear on the left hand side of the interface. You can remove an item by either clicking the corresponding "X" icon. You can also use the <strong>"Clear"</strong> button on the number pad which will remove the last item added to the list. Clicking the <strong>Reset</strong> would remove <strong>ALL</strong> items from the list.</p>
          <h6 class="q-my-sm">Viewing Past Transactions</h6>
          <p>When you recieve payment, entering the amount paid into the space provided to calculate the balance if any. Then click the <strong>Reset</strong> button to clear the list and save the transaction. If you <strong>DO NOT</strong> enter an amount paid the transaction would <strong>NOT</strong> be saved on reset. To view the saved transactions click on the <strong><i aria-hidden="true" class="material-icons q-icon">receipt</i></strong> icon at the top right of the application interface Transactions are saved for <strong>One (1) day</strong> before being cleared from history. You can download your transaction data by clicking the <strong><i aria-hidden="true" class="material-icons q-icon">cloud_download</i></strong> icon. This will export the data to a Comma Separated Values(CSV) file. You can maunally clear all saved transactions by clicking the <strong><i aria-hidden="true" class="material-icons q-icon">delete</i></strong> icon</p>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Help'
}
</script>
