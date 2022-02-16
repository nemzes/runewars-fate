import { CardType, Shapes } from "../../pages/api/types";
import ShapeResults from "../shape-results";
import styles from "./index.module.css";

const CardResults = ({
  triangle,
  rectangle,
  hexagon,
  circle,
}: {
  triangle: Record<CardType, number>;
  rectangle: Record<CardType, number>;
  hexagon: Record<CardType, number>;
  circle: Record<CardType, number>;
}) => {
  return (
    <section className={styles.cardResults}>
      <h2 className="sr-only">Results</h2>
      <ShapeResults results={triangle} shape="triangle" />
      <ShapeResults results={rectangle} shape="rectangle" />
      <ShapeResults results={hexagon} shape="hexagon" />
      <ShapeResults results={circle} shape="circle" />
    </section>
  );
};

export default CardResults;
