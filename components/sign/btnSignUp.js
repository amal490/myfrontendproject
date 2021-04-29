import React from 'react'

import Link from "next/link";

const MyButton = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a className="titleC" href={href} onClick={onClick} ref={ref}>
     Create New Account 
    </a>
  );
});

function BtnSignUp() {
  return (
    <Link href="/SignUp" passHref>
      <MyButton />
    </Link>
  );
}

  
              
export default BtnSignUp;