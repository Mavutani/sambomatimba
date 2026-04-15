import useLazyBackground from "../../hooks/useLazyBackground";
import useBackgroundAttachment from "../../hooks/useBackgroundAttachment";
import { withBasePath } from "../../utils/withBasePath";

const StatisticsBackground: React.FC = () => {
  const backgroundAttachment = useBackgroundAttachment();

  useLazyBackground([
    {
      id: "background-company-2",
      imageUrl: withBasePath("/images/hero-site.jpeg"),
    },
  ]);

  return (
    <div
      id="background-company-2"
      className="absolute inset-0 bg-center bg-cover"
      style={{ backgroundAttachment }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
    </div>
  );
};

export default StatisticsBackground;
