import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) =>{

    const priceForStripe = 100* price;
    const publishKey = "pk_test_51Gzf7FHVRe0LtJfpKZivGfNWn3jvT8QrLIt8gT0NT5DKt9kADmP5yMxzG0bXDRGhUzBRNocEZ8thvexXXuBnxKh100xJ1QEcFr";

    const onToken = token => {
        console.log(`Token : ${JSON.stringify(token)}`);
        alert(`Payment successfull`);
    }
    return (
        <StripeCheckout
            name="Clothing Store Ltd"
            label="Pay Now"
            billingAddress
            shippingAddress
            currency="USD"
            description={`Your total amount is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishKey}
        />
    );
}

export default StripeCheckoutButton;