// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import { Counter } from "./components/Counter";
import { Upper } from "./components/Upper";
import { Lower } from "./components/Lower";
import { AddContact } from "./components/AddContact";
import { ContactCard } from "./components/ContactCard";

const initState = [
  {
    id: 1,
    first_name: "Albert",
    last_name: "Sebastian",
    phone: "+91-1234567890",
  },
  {
    id: 2,
    first_name: "Nrupul",
    last_name: "Dev",
    phone: "+91-0123456789",
  },
];

function App() {
  const [contactList, setContactList] = useState(initState);
  const handleClick = (name, phone) => {
    setContactList([
      ...contactList,
      {
        id: contactList[contactList.length - 1].id + 1,
        first_name: name,
        phone: phone,
      },
    ]);
  };
  console.log(contactList);
  const deleteById = (id) => {
    console.log(id);
    setContactList(contactList.filter((item) => item.id !== id));
  };
  return (
    <div className="App">
      <Counter />
      <Upper />
      <Lower />
      <div>
        <h1>Contact info</h1>
        <AddContact handleClick={handleClick} />
        <br />
        {contactList.map((item) => (
          <div key={item.id}>
            <ContactCard
              id={item.id}
              name={item.first_name}
              phone={item.phone}
              onDelete={deleteById}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
