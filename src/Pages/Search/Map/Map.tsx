import { SimpleMap } from "../../../components/Map/Map";

const Map = () => {
  return (
    <div className="page-container">
      <SimpleMap center={[57.147633, 65.57857]} zoom={18} />
    </div>
  );
};

export default Map;
