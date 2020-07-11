import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeButton = ({ price }) => {
  const priceForStripe = price;
  const publishableKey = "pk_test_nUa3iK1MVm9eVI9aQajzb5Ti00251MUeoi";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((res) => {
        console.log(res);
        alert("Payment Successful!");
      })
      .catch((err) => {
        console.log(err);
        alert("An error occurred");
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CROWN Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/Cuz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
