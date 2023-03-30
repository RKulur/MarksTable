import React, { useState } from "react";

export default function PropDrilling() {
  function F1() {
    const [user, setUser] = useState("Ramrahim");
    return (
      <>
        <h1>F1 hello {user}</h1>
        <F5 user={user} />
      </>
    );
  }
  function F2() {
    const [user, setUser] = useState("Manjolika");
    return (
      <>
        <h1>F2 hello {user}</h1>
        <F4 user={user} />
      </>
    );
  }
  function F3() {
    const [user, setUser] = useState("Sarpini");
    return (
      <>
        <h1>F3 hello {user}</h1>
        <F3 user={user} />
      </>
    );
  }
  function F4() {
    const [user, setUser] = useState("Nagini");
    return (
      <>
        <h1>F4 hello {user}</h1>
        <F2 user={user} />
      </>
    );
  }
  function F5() {
    const [user, setUser] = useState("Kalpini");
    return (
      <>
        <h1>F5 hello {user}</h1>
        <F1 user={user} />
      </>
    );
  }

  return (
    <div>
      <h1>PROP DRILLING</h1>
      <F1 />
    </div>
  );
}
