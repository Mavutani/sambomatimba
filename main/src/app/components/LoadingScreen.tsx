import Image from "next/image";

import type { LoadingScreenProps } from "../types/loadingScreen";
import { withBasePath } from "../utils/withBasePath";

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isVisible }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-white z-50 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <Image
        src={withBasePath("/images/logo.jpeg")}
        width={120}
        height={40}
        priority={true}
        alt="Logo Builder Company"
        className="animate-bounce"
      />
    </div>
  );
};

export default LoadingScreen;
