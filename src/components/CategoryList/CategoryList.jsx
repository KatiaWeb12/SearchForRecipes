import "./CategoryList.css";
import CardItem from "../CardItem/CardItem";
import NotFound from "../NotFound/NotFound";
export default function CategoryList({ entities, linkName }) {
  return (
    <div className="cardCont">
      {entities.length ? (
        entities.map((entity) => (
          <CardItem
            elementName={entity.name}
            elementDescription={entity.description}
            elementImageUrl={entity.imageUrl}
            elementLink={entity.link}
            linkName={linkName}
            elementId={entity.id}
            key={entity.id}
          />
        ))
      ) : (
        <NotFound />
      )}
    </div>
  );
}
