import { useRef, useState } from "react";
import "./Dropdown.css";

function Dropdown({ options }: { options: string[] }) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLUListElement>(null);
  const [selected, setSelected] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  function setOpen(open: boolean) {
    setIsOpen(open);
    if (open) document.addEventListener("click", clickOutside);
    else document.removeEventListener("click", clickOutside);
    if (open) {
      contentRef.current!.style.height = `calc(${dropdownRef.current!.clientHeight}px + ${optionsRef.current!.clientHeight}px)`;
    } else {
      contentRef.current!.style.height = `${dropdownRef.current!.clientHeight}px`;
    }
  }

  function clickOutside(event: MouseEvent) {
    if (contentRef.current && !contentRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  }

  function clickCurrent() {
    setOpen(!isOpen);
  }

  function clickOption(index: number) {
    setSelected(index);
    setOpen(false);
  }

  return (
    <div className="dropdown reverse" ref={dropdownRef}>
      <div className="_content" ref={contentRef}>
        <p className="_current" onClick={clickCurrent}>{options[selected]}</p>
        <ul className="_options" ref={optionsRef}>
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => clickOption(index)}
              className={index === selected ? "_selected" : ""}
            >{option}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
