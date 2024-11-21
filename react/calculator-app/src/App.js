
  // {/* <h2>Example below</h2>
  // <div class="wrapper">
  //   <div>
  //     <button>Add row</button>
  //   </div>

  //   <ul>

  //     <li>
  //       <select>
  //         <option selected>+</option>
  //         <option>-</option>
  //       </select>
  //       <input type="text" value="100"/>
  //       <button>Delete</button>
  //       <button>Disable</button>
  //     </li>

  //     <li>
  //       <select>
  //         <option selected>+</option>
  //         <option>-</option>
  //       </select>
  //       <input type="text" value="30"/>
  //       <button>Delete</button>
  //       <button>Disable</button>
  //     </li>

  //     <li>
  //       <select>
  //         <option>+</option>
  //         <option selected>-</option>
  //       </select>
  //       <input type="text" value="7"/>
  //       <button>Delete</button>
  //       <button>Disable</button>
  //     </li>

  //   </ul>

  //   <div>
  //     Result: 123
  //   </div>
  // </div> */ }
  
function AddButton() { 
    return (
      <div>
        <button> Add Row </button>
      </div>
    );
  }

function SelectOption() {
  return (
    <select>
      <option selected>+</option>
      <option>-</option>
    </select>
  );
}

function InputElement() {
  return (
      <input type="text" value="100"/>
  )
}

function ButtonFunc() {
  return (
    <>
        <button>Delete</button>
        <button>Disable</button>
    </>
  );
}

function LiElement() {
  return(
    <li>
      <SelectOption />
      <InputElement />
      <ButtonFunc />
    </li>
  )
}

// function Result() {
//   return(
//     <div>
//       Result: { result };
//     </div>
//   );
// }

export default function Calculator() {
  return (
    <div class="wrapper">
      <AddButton />
      <ul>
        <LiElement />
        <LiElement />
        <LiElement />
      </ul>
    </div>
  )
}