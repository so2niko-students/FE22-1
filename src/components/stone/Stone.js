import "./Stone.css";

export default function Stone({ data: { classN, id, name, isSelected }, onSelect }) {
  const newClass = `${ classN } ${ isSelected ? 'selected' : '' }`;
  return <div className={newClass} id={id} title={name} onClick={() => onSelect(id)}></div>;
}
