import { AppContext } from '@/contextApi/AppProvider';
import { useContext } from 'react';

const SubjectDetails = () => {

    const context = useContext(AppContext);
    const storedPackage = localStorage.getItem("selectedPackage");
    let selectedPackage: any = null;
    if (storedPackage !== null) {
        selectedPackage = JSON.parse(storedPackage);
        // console.log(selectedPackage);
        // Use selectedPackage as needed
    } else {
        // Handle the case where the item doesn't exist in localStorage
        console.log("No package found in localStorage.");
    }
    

    if (!context) {

        return <div>Loading...</div>;
    }

    const { bookSubject } = context;


    console.log('Context:', context);
    console.log('Book Subject:', bookSubject);

    if (!bookSubject || bookSubject.length === 0) {

        return <div>No subject details available.</div>;
    }


    const firstSubject = bookSubject[0];

    console.log('First Subject:', firstSubject);


    if (!firstSubject) {
        return <div>No subject details available.</div>;
    }

    return (
        <div className="your-order mb-30">
            <h3>Subject Details</h3>
            <div className="your-order-table table-responsive">
                <table>
                    <thead>
                        <tr>
                            <th className="product-name">Board</th>
                            <th className="product-total">{firstSubject.board}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="product-name">Category</th>
                            <th className="product-total">{firstSubject.category}</th>
                        </tr>
                        <tr>
                            <th className="product-name">Class</th>
                            <th className="product-total">{firstSubject.categoryClass}</th>
                        </tr>
                        <tr>
                            <th className="product-name">Subject</th>
                            <th className="product-total">{firstSubject.title}</th>
                        </tr>
                        <tr className="order-total">
                            <th>Order Total</th>
                            <td>
                                <strong>
                                    <span className="amount">₹{selectedPackage.price}</span>
                                </strong>
                            </td>
                        </tr>
                        <tr className="order-total">
                            <th>Package</th>
                            <td>
                                
                                    <span className="amount">{selectedPackage.name}</span>
                                
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="payment-method">
                <div className="accordion" id="checkoutAccordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="paymentTwo">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#payment"
                                aria-expanded="false"
                                aria-controls="payment"
                            >
                                Payment Method
                            </button>
                        </h2>
                        <div
                            id="payment"
                            className="accordion-collapse collapse"
                            aria-labelledby="paymentTwo"
                            data-bs-parent="#checkoutAccordion"
                        >
                            <div className="accordion-body">
                                <p>You need to pay it with your prefable methods</p>
                                <div className="payment-option mb-10">
                                    <label htmlFor="pay_later_payment">
                                        <input type="radio" id="pay_later_payment" name="payment_method" /> Pay later
                                    </label>
                                </div>
                                <div className="payment-option mb-10">
                                    <label htmlFor="mollie_payment">
                                        <input type="radio" id="mollie_payment" name="payment_method" /> Mobile Payment
                                    </label>
                                </div>
                                <div className="payment-option mb-10">
                                    <label htmlFor="paypal_payment">
                                        <input type="radio" id="paypal_payment" name="payment_method" /> Pay with Paypal
                                    </label>
                                </div>
                                <div className="payment-option mb-10">
                                    <label htmlFor="stripe_payment">
                                        <input type="radio" id="stripe_payment" name="payment_method" /> Pay with Visa/Mastercard
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-button-payment mt-20">
                    <button type="submit" className="e-btn e-btn-border">
                        Place order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SubjectDetails;