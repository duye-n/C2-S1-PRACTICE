export default function Place( {image, title,}) {
  return (
    <li key="the place id" className="place-item">
      <button>
        <img src="image" alt="title" />
        <h3>{title}</h3>
      </button>
    </li>
  );
}
