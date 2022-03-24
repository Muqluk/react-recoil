import React from 'react';
import { BsXCircle } from 'react-icons/bs';

const ErrorPane = ({ heading = 'Something went wrong', subheading }) => (
  <div>
    <div>
      <BsXCircle style={{ fontSize: '3em' }} />
    </div>
    <div>
      <h2>{heading}</h2>
      <p>{subheading}</p>
    </div>
  </div>
);

export const PageNotFound = () => (<ErrorPane heading="Page Not Found" subheading="Please check the URL or select an option from the menu." />);
export const NotFound = () => <ErrorPane heading="Not Found" />;

export default ErrorPane;
