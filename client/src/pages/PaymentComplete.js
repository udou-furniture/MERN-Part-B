import React from 'react';
import { Link } from 'react-router-dom';
const style = {
  base: {
    display: "flex",
    flexDirection: "column",

  }
}
class PaymentComplete extends React.Component 
{
  render() {
    return (
    <div style={style}>
      Thanks for buying!
    </div>
    )

  }
}
export default PaymentComplete